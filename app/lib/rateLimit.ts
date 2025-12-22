// Rate limiting avec Vercel KV (compatible serverless)
// Fonctionne sur Vercel avec Vercel KV configuré

import { kv } from '@vercel/kv';

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// Configuration du rate limiting
const RATE_LIMIT_WINDOW = 15 * 60; // 15 minutes en secondes (pour Redis TTL)
const MAX_REQUESTS = 5; // Maximum 5 requêtes par fenêtre

/**
 * Vérifie si une IP a dépassé la limite de requêtes
 * @param identifier - Identifiant unique (généralement l'IP)
 * @returns Object avec success (boolean) et informations sur la limite
 */
export async function checkRateLimit(identifier: string): Promise<{
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}> {
  const now = Date.now();
  const key = `ratelimit:${identifier}`;

  try {
    // Récupérer l'entrée existante depuis Vercel KV
    const entry = await kv.get<RateLimitEntry>(key);

    // Si pas d'entrée ou si la fenêtre de temps est expirée
    if (!entry || now > entry.resetTime) {
      const resetTime = now + RATE_LIMIT_WINDOW * 1000;

      const newEntry: RateLimitEntry = {
        count: 1,
        resetTime,
      };

      // Stocker avec expiration automatique (TTL en secondes)
      await kv.set(key, newEntry, { ex: RATE_LIMIT_WINDOW });

      return {
        success: true,
        limit: MAX_REQUESTS,
        remaining: MAX_REQUESTS - 1,
        reset: resetTime,
      };
    }

    // Si la limite est dépassée
    if (entry.count >= MAX_REQUESTS) {
      return {
        success: false,
        limit: MAX_REQUESTS,
        remaining: 0,
        reset: entry.resetTime,
      };
    }

    // Incrémenter le compteur
    const updatedEntry: RateLimitEntry = {
      count: entry.count + 1,
      resetTime: entry.resetTime,
    };

    // Calculer le TTL restant
    const ttl = Math.ceil((entry.resetTime - now) / 1000);
    await kv.set(key, updatedEntry, { ex: ttl > 0 ? ttl : RATE_LIMIT_WINDOW });

    return {
      success: true,
      limit: MAX_REQUESTS,
      remaining: MAX_REQUESTS - updatedEntry.count,
      reset: entry.resetTime,
    };
  } catch (error) {
    console.error('Erreur rate limiting (Vercel KV):', error);

    // En cas d'erreur (ex: KV non configuré en dev local), on autorise la requête
    // mais on log l'erreur pour investigation
    return {
      success: true,
      limit: MAX_REQUESTS,
      remaining: MAX_REQUESTS - 1,
      reset: now + RATE_LIMIT_WINDOW * 1000,
    };
  }
}