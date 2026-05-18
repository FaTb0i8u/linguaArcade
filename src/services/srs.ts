/**
 * Spaced Repetition System — SM-2 implementation.
 *
 * The SM-2 algorithm (SuperMemo 2) schedules reviews at increasing
 * intervals based on how well the user recalls an item.  It's the
 * gold-standard algorithm used by Anki and many other SRS tools.
 *
 * Recall quality scale (0-5):
 *   0 — Total blackout, no recall
 *   1 — Incorrect, but the correct answer seemed familiar
 *   2 — Incorrect, but easy to recall once shown
 *   3 — Correct with serious difficulty
 *   4 — Correct with some hesitation
 *   5 — Perfect, instant recall
 *
 * A score of ≥ 3 counts as "successful" recall.
 */

import { StorageService } from './storage';
import { STORAGE_KEYS, SRS_DEFAULTS } from '../config/constants';
import type { SRSCard, RecallQuality, ContentType } from '../types';

export const SRSEngine = {
  // ── Core algorithm ────────────────────────────────────────────

  /**
   * Process a review and return the updated card.
   * Does NOT persist — call `saveCards()` after batching updates.
   */
  review(card: SRSCard, quality: RecallQuality): SRSCard {
    const now = new Date();
    let { easeFactor, interval, repetitions } = card;

    if (quality >= 3) {
      // Successful recall
      if (repetitions === 0) {
        interval = SRS_DEFAULTS.INITIAL_INTERVAL;
      } else if (repetitions === 1) {
        interval = SRS_DEFAULTS.GRADUATING_INTERVAL;
      } else {
        interval = Math.round(interval * easeFactor);
      }
      repetitions += 1;
    } else {
      // Failed recall → reset
      repetitions = 0;
      interval = SRS_DEFAULTS.INITIAL_INTERVAL;
    }

    // Update ease factor (never below minimum)
    easeFactor = Math.max(
      SRS_DEFAULTS.MINIMUM_EASE_FACTOR,
      easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)),
    );

    const nextReview = new Date(now);
    nextReview.setDate(nextReview.getDate() + interval);

    return {
      ...card,
      easeFactor,
      interval,
      repetitions,
      lastReviewDate: now.toISOString(),
      nextReviewDate: nextReview.toISOString(),
    };
  },

  // ── Card management ───────────────────────────────────────────

  /** Create a brand-new card for a content item. */
  createCard(contentId: string, contentType: ContentType): SRSCard {
    const now = new Date();
    return {
      contentId,
      contentType,
      easeFactor: SRS_DEFAULTS.INITIAL_EASE_FACTOR,
      interval: SRS_DEFAULTS.INITIAL_INTERVAL,
      repetitions: 0,
      nextReviewDate: now.toISOString(), // due immediately
    };
  },

  /** Get cards that are due for review right now. */
  getDueCards(cards: SRSCard[]): SRSCard[] {
    const now = new Date().toISOString();
    return cards.filter((c) => c.nextReviewDate <= now);
  },

  /** Sort cards so the most overdue come first. */
  sortByPriority(cards: SRSCard[]): SRSCard[] {
    return [...cards].sort(
      (a, b) => new Date(a.nextReviewDate).getTime() - new Date(b.nextReviewDate).getTime(),
    );
  },

  /**
   * Map a game response to a recall quality score.
   *   - Correct + fast  → 5
   *   - Correct + slow  → 4
   *   - Correct + very slow / with hint → 3
   *   - Incorrect → 1
   *   - Skipped / blank → 0
   */
  qualityFromGameResponse(
    wasCorrect: boolean,
    responseTimeMs: number,
    usedHint: boolean = false,
  ): RecallQuality {
    if (!wasCorrect) return responseTimeMs > 0 ? 1 : 0;
    if (usedHint) return 3;
    if (responseTimeMs < 3000) return 5;
    if (responseTimeMs < 6000) return 4;
    return 3;
  },

  // ── Persistence ───────────────────────────────────────────────

  async loadCards(): Promise<SRSCard[]> {
    return (await StorageService.get<SRSCard[]>(STORAGE_KEYS.SRS_CARDS)) ?? [];
  },

  async saveCards(cards: SRSCard[]): Promise<void> {
    await StorageService.set(STORAGE_KEYS.SRS_CARDS, cards);
  },

  /** Ensure a card exists for every content ID; skip duplicates. */
  async ensureCards(
    contentIds: string[],
    contentType: ContentType,
  ): Promise<SRSCard[]> {
    const existing = await this.loadCards();
    const existingIds = new Set(existing.map((c) => c.contentId));
    const newCards = contentIds
      .filter((id) => !existingIds.has(id))
      .map((id) => this.createCard(id, contentType));
    const merged = [...existing, ...newCards];
    await this.saveCards(merged);
    return merged;
  },
};
