import { checkRateLimit } from '../rateLimit';

describe('Rate Limiting', () => {
  const testIP = '127.0.0.1';

  it('devrait autoriser la première requête', () => {
    const result = checkRateLimit(testIP);

    expect(result.success).toBe(true);
    expect(result.remaining).toBe(4); // 5 max - 1 utilisée = 4 restantes
  });

  it('devrait décrémenter le nombre de requêtes restantes', () => {
    const ip = '192.168.1.1';

    const result1 = checkRateLimit(ip);
    expect(result1.remaining).toBe(4);

    const result2 = checkRateLimit(ip);
    expect(result2.remaining).toBe(3);

    const result3 = checkRateLimit(ip);
    expect(result3.remaining).toBe(2);
  });

  it('devrait bloquer après 5 requêtes', () => {
    const ip = '192.168.1.2';

    // Faire 5 requêtes
    for (let i = 0; i < 5; i++) {
      const result = checkRateLimit(ip);
      expect(result.success).toBe(true);
    }

    // La 6ème devrait être bloquée
    const blockedResult = checkRateLimit(ip);
    expect(blockedResult.success).toBe(false);
    expect(blockedResult.remaining).toBe(0);
  });

  it('devrait fournir un timestamp de reset', () => {
    const ip = '192.168.1.3';
    const before = Date.now();

    const result = checkRateLimit(ip);

    const after = Date.now();

    // Le reset devrait être dans environ 15 minutes (900 000 ms)
    const expectedReset = before + (15 * 60 * 1000);

    expect(result.reset).toBeGreaterThanOrEqual(expectedReset - 1000);
    expect(result.reset).toBeLessThanOrEqual(expectedReset + after - before + 1000);
  });

  it('devrait avoir une limite de 5 requêtes', () => {
    const ip = '192.168.1.4';
    const result = checkRateLimit(ip);

    expect(result.limit).toBe(5);
  });
});