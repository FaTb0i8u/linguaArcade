/**
 * ProgressContext — provides user progress throughout the app.
 *
 * Loads progress from storage on mount and exposes helpers
 * to record game results, lessons, and XP.
 */

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { ProgressService } from '../services/progress';
import { StorageService } from '../services/storage';
import { STORAGE_KEYS } from '../config/constants';
import { useAuth } from './AuthContext';
import type { UserProgress, GameSessionResult, GameModeType, UserProfile, AnsweredItem } from '../types';

interface ProgressState {
  progress: UserProgress | null;
  isLoading: boolean;
  refresh: () => Promise<void>;
  recordGame: (result: GameSessionResult) => Promise<void>;
  recordLesson: (correct: number, total: number, items?: AnsweredItem[]) => Promise<void>;
  addWords: (count: number) => Promise<void>;
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
      setProgress(p);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => { load(); }, [load]);

  const recordGame = useCallback(async (result: GameSessionResult) => {
    if (!user) return;
    const updated = await ProgressService.recordGameSession(user.id, result);
    setProgress(updated);
    // Check for level-up
    const newLevel = ProgressService.checkLevelUp(updated);
    if (newLevel) {
      const promoted = await ProgressService.promoteLevel(user.id, newLevel);
      setProgress(promoted);
      // Also update the persisted user profile
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

  const accuracy = progress ? ProgressService.getAccuracy(progress) : 0;

  return (
    <ProgressContext.Provider value={{ progress, isLoading, refresh: load, recordGame, recordLesson, addWords, accuracy }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressState {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within <ProgressProvider>');
  return ctx;
}
