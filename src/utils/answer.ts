/**
 * Answer Normalisation Utilities
 *
 * Many vocabulary translations carry parenthetical annotations that provide
 * useful context (e.g. formality level, disambiguation) but should NOT be
 * required when the learner types their answer.
 *
 * Examples:
 *   "hello (formal)"       → accept "hello"
 *   "hi / bye (informal)"  → accept "hi", "bye", "hi / bye"
 *   "one (1)"              → accept "one", "1"
 *   "cold (illness)"       → accept "cold"
 *   "to wash (oneself)"    → accept "to wash"
 *   "I'm sorry (formal)"   → accept "I'm sorry"
 *   "goodbye (to someone leaving)" → accept "goodbye"
 */

/**
 * Build the set of strings that should be accepted as correct for a given
 * canonical translation.  The canonical form itself is always included.
 *
 * Rules applied (in order):
 * 1. The full original string is always accepted.
 * 2. If the string contains a trailing `(…)` annotation, the text before it
 *    (trimmed) is accepted.
 * 3. If the parenthetical content itself looks like a standalone value (e.g.
 *    a number like "1", "10", "100"), it is also accepted.
 * 4. If the base text (after stripping the parenthetical) contains " / ",
 *    each slash-separated alternative is accepted individually.
 */
export function getAcceptableAnswers(translation: string): string[] {
  const answers = new Set<string>();

  const trimmed = translation.trim();
  answers.add(norm(trimmed));

  // Match trailing parenthetical: "base text (annotation)"
  const parenMatch = trimmed.match(/^(.+?)\s*\(([^)]+)\)\s*$/);
  if (parenMatch) {
    const base = parenMatch[1].trim();
    const annotation = parenMatch[2].trim();

    // Accept the base without annotation
    answers.add(norm(base));

    // If the annotation is a standalone numeric-like value, accept it too
    // e.g. "one (1)" → accept "1"
    if (/^\d+$/.test(annotation)) {
      answers.add(annotation);
    }

    // Handle slash alternatives in the base: "hi / bye" → "hi", "bye"
    if (base.includes('/')) {
      for (const alt of base.split('/')) {
        const piece = alt.trim();
        if (piece) answers.add(norm(piece));
      }
    }
  }

  // Also handle slash alternatives even without parentheticals
  // e.g. "hi / bye" → "hi", "bye"
  if (trimmed.includes('/') && !parenMatch) {
    for (const alt of trimmed.split('/')) {
      const piece = alt.trim();
      if (piece) answers.add(norm(piece));
    }
  }

  return [...answers];
}

/**
 * Check whether the user's typed answer should be considered correct,
 * given the canonical translation from the vocabulary data.
 *
 * This is intentionally lenient for **type_answer** steps:
 * - Case insensitive
 * - Strips leading/trailing whitespace
 * - Accepts the base word without parenthetical annotations
 * - Accepts any slash-separated alternative
 */
export function isAnswerAcceptable(userAnswer: string, correctTranslation: string): boolean {
  const normalised = norm(userAnswer);
  if (!normalised) return false;

  const acceptable = getAcceptableAnswers(correctTranslation);
  return acceptable.includes(normalised);
}

/** Lowercase + trim helper */
function norm(s: string): string {
  return s.toLowerCase().trim();
}
