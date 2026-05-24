/**
 * ProgressContext — provides user progress throughout the app.
 *
 * Loads progress from storage on mount and exposes helpers
 * to record game results, lessons, XP, and coins.
 */

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { ProgressService } from '../services/progress';
import { StorageService } from '../services/storage';
import { STORAGE_KEYS, COINS } from '../config/constants';
import { useAuth } from './AuthContext';
import type { UserProgress, GameSessionResult, GameModeType, UserProfile, AnsweredItem } from '../types';

interface ProgressState {
  progress: UserProgress | null;
  isLoading: boolean;
  refresh: () => Promise<void>;
  recordGame: (result: GameSessionResult) => Promise<void>;
  recordLesson: (correct: number, total: number, items?: AnsweredItem[]) => Promise<void>;
  addWords: (count: number) => Promise<void>;
  addCoins: (amount: number) => Promise<void>;
  spendCoins: (amount: number) => Promise<boolean>;
  accuracy: number;
}

const ProgressContext = createContext<ProgressState | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const load = useCallback(async () => {
    if (!user) { setProgress(null); setIsLoading(false); return; }
    setIsLoading(true);
    try {
      const p = await ProgressService.load(user.id);
      // Backfill coins if missing (migration for existing users)
      if (p && p.coins === undefined) {
        (p as any).coins = 0;
        await ProgressService.save(p);
      }
      setProgress(p);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => { load(); }, [load]);

  const recordGame = useCallback(async (result: GameSessionResult) => {
    if (!user) return;
    const updated = await ProgressService.recordGameSession(user.id, result);
    // Award coins for game
    const accuracy = result.totalQuestions > 0
      ? result.correctAnswers / result.totalQuestions
      : 0;
    const won = accuracy >= 0.7; // 70%+ is a "win"
    const coinReward = won
      ? (accuracy === 1 ? COINS.GAME_WIN + COINS.PERFECT_ROUND : COINS.GAME_WIN)
      : COINS.GAME_PARTICIPATION;
    updated.coins = (updated.coins ?? 0) + coinReward;
    await ProgressService.save(updated);
    setProgress(updated);
    // Check for level-up
    const newLevel = ProgressService.checkLevelUp(updated);
    if (newLevel) {
      const promoted = await ProgressService.promoteLevel(user.id, newLevel);
      setProgress(promoted);
      const profile = await StorageService.get<UserProfile>(STORAGE_KEYS.USER_PROFILE);
      if (profile) {
        profile.currentLevel = newLevel;
        await StorageService.set(STORAGE_KEYS.USER_PROFILE, profile);
      }
    }
  }, [user]);

  const recordLesson = useCallback(async (correct: number, total: number, items?: AnsweredItem[]) => {
    if (!user) return;
    const updated = await ProgressService.recordLessonComplete(user.id, correct, total, items ?? []);
    // Award coins for lesson
    const coinReward = correct === total
      ? COINS.LESSON_COMPLETE + COINS.PERFECT_ROUND
      : COINS.LESSON_COMPLETE;
    updated.coins = (updated.coins ?? 0) + coinReward;
    await ProgressService.save(updated);
    setProgress(updated);
  }, [user]);

  const addWords = useCallback(async (count: number) => {
    if (!user) return;
    await ProgressService.addWordsLearned(user.id, count);
    await load();
    // Check for level-up after adding words
    const currentProgress = await ProgressService.load(user.id);
    const newLevel = ProgressService.checkLevelUp(currentProgress);
    if (newLevel) {
      const promoted = await ProgressService.promoteLevel(user.id, newLevel);
      setProgress(promoted);
      const profile = await StorageService.get<UserProfile>(STORAGE_KEYS.USER_PROFILE);
      if (profile) {
        profile.currentLevel = newLevel;
        await StorageService.set(STORAGE_KEYS.USER_PROFILE, profile);
      }
    }
  }, [user, load]);

  /** Add coins (e.g., streak bonus, achievements) */
  const addCoins = useCallback(async (amount: number) => {
    if (!user || !progress) return;
    const updated = { ...progress, coins: (progress.coins ?? 0) + amount };
    await ProgressService.save(updated);
    setProgress(updated);
  }, [user, progress]);

  /** Spend coins — returns true if successful, false if insufficient */
  const spendCoins = useCallback(async (amount: number): Promise<boolean> => {
    if (!user || !progress) return false;
    const current = progress.coins ?? 0;
    if (current < amount) return false;
    const updated = { ...progress, coins: current - amount };
    await ProgressService.save(updated);
    setProgress(updated);
    return true;
  }, [user, progress]);

  const accuracy = progress ? ProgressService.getAccuracy(progress) : 0;

  return (
    <ProgressContext.Provider value={{ progress, isLoading, refresh: load, recordGame, recordLesson, addWords, addCoins, spendCoins, accuracy }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressState {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within <ProgressProvider>');
  return ctx;
}
