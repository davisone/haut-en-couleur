// Rate limiting simple en mémoire
// Pour une solution production robuste, utilisez Redis ou Upstash

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// Map pour stocker les tentatives par IP
const rateLimitMap = new Map<string, RateLimitEntry>();

// Configuration du rate limiting
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes en millisecondes
const MAX_REQUESTS = 5; // Maximum 5 requêtes par fenêtre

/**
 * Vérifie si une IP a dépassé la limite de requêtes
 * @param identifier - Identifiant unique (généralement l'IP)
 * @returns Object avec success (boolean) et informations sur la limite
 */
export function checkRateLimit(identifier: string): {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
} {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  // Si pas d'entrée ou si la fenêtre de temps est expirée
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });

    return {
      success: true,
      limit: MAX_REQUESTS,
      remaining: MAX_REQUESTS - 1,
      reset: now + RATE_LIMIT_WINDOW,
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
  entry.count += 1;
  rateLimitMap.set(identifier, entry);

  return {
    success: true,
    limit: MAX_REQUESTS,
    remaining: MAX_REQUESTS - entry.count,
    reset: entry.resetTime,
  };
}

/**
 * Nettoie les entrées expirées de la map (à appeler périodiquement)
 */
export function cleanupExpiredEntries(): void {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap.entries()) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}

// Nettoyer les entrées expirées toutes les 10 minutes
setInterval(cleanupExpiredEntries, 10 * 60 * 1000);