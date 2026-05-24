/**
 * Progress tracking service.
 *
 * Manages XP, streaks, stats, and persistent progress data.
 * Works purely with local storage; a future version can sync
 * to Supabase by adding a thin wrapper here.
 */

import { StorageService } from './storage';
import { SRSEngine } from './srs';
import {
  STORAGE_KEYS,
  XP,
  DEFAULT_LANGUAGE,
  DEFAULT_LEVEL,
  LEVEL_THRESHOLDS,
} from '../config/constants';
import { getAvailableLevels } from '../data/registry';
import type {
  UserProgress,
  GameSessionResult,
  GameModeType,
  SupportedLanguage,
  CEFRLevel,
  AnsweredItem,
} from '../types';

const blankProgress = (
  userId: string,
  lang: SupportedLanguage = DEFAULT_LANGUAGE,
  level: CEFRLevel = DEFAULT_LEVEL,
): UserProgress => ({
  userId,
  language: lang,
  level,
  xp: 0,
  coins: 0,
  streak: 0,
  lastActiveDate: new Date().toISOString(),
  lessonsCompleted: 0,
  wordsLearned: 0,
  gamesPlayed: 0,
  totalCorrect: 0,
  totalAttempts: 0,
  srsCards: [],
  unlockedGameModes: ['vocab_blitz', 'conjugation_fighter', 'sentence_builder'],
});

export const ProgressService = {
  async load(userId: string): Promise<UserProgress> {
    const saved = await StorageService.get<UserProgress>(STORAGE_KEYS.USER_PROGRESS);
    return saved ?? blankProgress(userId);
  },

  async save(progress: UserProgress): Promise<void> {
    await StorageService.set(STORAGE_KEYS.USER_PROGRESS, progress);
  },

  /** Apply the results of a finished game session. */
  async recordGameSession(
    userId: string,
    result: GameSessionResult,
  ): Promise<UserProgress> {
    const progress = await this.load(userId);

    progress.gamesPlayed += 1;
    progress.totalCorrect += result.correctAnswers;
    progress.totalAttempts += result.totalQuestions;
    progress.xp += result.xpEarned;

    // Streak logic: if last active was yesterday, increment; if today,
    // keep; otherwise reset to 1.
    const today = new Date().toDateString();
    const lastActive = new Date(progress.lastActiveDate).toDateString();
    const isFirstEverSession = progress.gamesPlayed === 1 && progress.streak === 0;

    if (isFirstEverSession) {
      // First game ever — start the streak
      progress.streak = 1;
    } else if (lastActive === today) {
      // same day — streak unchanged
    } else {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (lastActive === yesterday.toDateString()) {
        progress.streak += 1;
      } else {
        progress.streak = 1;
      }
    }
    progress.lastActiveDate = new Date().toISOString();

    await this.save(progress);

    // Feed results into the SRS engine for spaced repetition scheduling
    await this.updateSRS(result.answeredItems);

    return progress;
  },

  /** Update SRS cards based on answered items from a game or lesson session. */
  async updateSRS(items: AnsweredItem[]): Promise<void> {
    if (items.length === 0) return;

    // Ensure cards exist for all answered content
    const contentIds = items.map((item) => item.contentId);
    const contentType = items[0].contentType;
    let cards = await SRSEngine.ensureCards(contentIds, contentType);

    // Process each answer through the SRS algorithm
    for (const item of items) {
      const quality = SRSEngine.qualityFromGameResponse(
        item.wasCorrect,
        item.responseTime,
      );
      const cardIdx = cards.findIndex((c) => c.contentId === item.contentId);
      if (cardIdx >= 0) {
        cards[cardIdx] = SRSEngine.review(cards[cardIdx], quality);
      }
    }

    await SRSEngine.saveCards(cards);
  },

  /** Award XP for completing a lesson and feed answered items to SRS. */
  async recordLessonComplete(
    userId: string,
    correctAnswers: number,
    totalQuestions: number,
    items: AnsweredItem[] = [],
  ): Promise<UserProgress> {
    const progress = await this.load(userId);
    progress.lessonsCompleted += 1;
    progress.totalCorrect += correctAnswers;
    progress.totalAttempts += totalQuestions;
    progress.xp += XP.LESSON_COMPLETE + correctAnswers * XP.CORRECT_ANSWER;
    progress.lastActiveDate = new Date().toISOString();
    await this.save(progress);

    // Feed lesson results into SRS for spaced repetition scheduling
    if (items.length > 0) {
      await this.updateSRS(items);
    }

    return progress;
  },

  /** Mark new words as learned (incremental). */
  async addWordsLearned(userId: string, count: number): Promise<void> {
    const progress = await this.load(userId);
    progress.wordsLearned += count;
    await this.save(progress);
  },

  /** Calculate accuracy percentage. */
  getAccuracy(progress: UserProgress): number {
    if (progress.totalAttempts === 0) return 0;
    return Math.round((progress.totalCorrect / progress.totalAttempts) * 100);
  },

  /** Unlock a game mode if not already unlocked. */
  async unlockGameMode(userId: string, mode: GameModeType): Promise<void> {
    const progress = await this.load(userId);
    if (!progress.unlockedGameModes.includes(mode)) {
      progress.unlockedGameModes.push(mode);
      await this.save(progress);
    }
  },

  /**
   * Check if the user's wordsLearned qualifies them for a higher CEFR level.
   * Only promotes if there is actual content for that level.
   * Returns the new level if promoted, or null if no change.
   */
  checkLevelUp(progress: UserProgress): CEFRLevel | null {
    const levels: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const currentIdx = levels.indexOf(progress.level);
    if (currentIdx >= levels.length - 1) return null; // already max

    const nextLevel = levels[currentIdx + 1];
    if (progress.wordsLearned >= LEVEL_THRESHOLDS[nextLevel]) {
      // Only promote if we actually have content for the next level
      try {
        const availableLevels = getAvailableLevels(progress.language);
        if (!availableLevels.includes(nextLevel)) return null;
      } catch {
        return null; // language not registered, don't promote
      }
      return nextLevel;
    }
    return null;
  },

  /** Promote to a new level and persist. */
  async promoteLevel(userId: string, newLevel: CEFRLevel): Promise<UserProgress> {
    const progress = await this.load(userId);
    progress.level = newLevel;
    await this.save(progress);
    return progress;
  },
};
