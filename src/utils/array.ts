/**
 * Shared array utility functions.
 *
 * Centralises shuffle, pickRandom, and generateDistractors
 * so they aren't duplicated across game screens and the lesson engine.
 */

/** Fisher-Yates shuffle (immutable — returns a new array). */
export function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Pick `n` random items from an array. */
export function pickRandom<T>(arr: readonly T[], n: number): T[] {
  return shuffle(arr).slice(0, Math.min(n, arr.length));
}

/** Generate wrong options for a multiple-choice question. */
export function generateDistractors(
  correct: string,
  pool: readonly string[],
  count = 3,
): string[] {
  const others = pool.filter((w) => w.toLowerCase() !== correct.toLowerCase());
  return shuffle(others).slice(0, count);
}
