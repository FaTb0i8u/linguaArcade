/**
 * AuthContext — provides user state throughout the component tree.
 *
 * Handles initialisation (checking for an existing local session),
 * sign-in, sign-up, sign-out, and guest mode.
 */

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { AuthService } from '../services/auth';
import { StorageService } from '../services/storage';
import { STORAGE_KEYS } from '../config/constants';
import type { UserProfile, SupportedLanguage, CEFRLevel } from '../types';

interface AuthState {
  user: UserProfile | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, displayName: string) => Promise<void>;
  signOut: () => Promise<void>;
  continueAsGuest: (name?: string) => Promise<void>;
  updateLanguage: (lang: SupportedLanguage) => Promise<void>;
  updateLevel: (level: CEFRLevel) => Promise<void>;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    (async () => {
      try {
        const existing = await AuthService.getCurrentUser();
        if (existing) setUser(existing);
      } catch (err) {
        console.error('[AuthProvider] Failed to restore session', err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const profile = await AuthService.signIn(email, password);
      setUser(profile);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signUp = useCallback(async (email: string, password: string, displayName: string) => {
    setIsLoading(true);
    try {
      const profile = await AuthService.signUp(email, password, displayName);
      setUser(profile);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    await AuthService.signOut();
    setUser(null);
  }, []);

  const continueAsGuest = useCallback(async (name?: string) => {
    setIsLoading(true);
    try {
      const profile = await AuthService.createGuestProfile(name);
      setUser(profile);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateLanguage = useCallback(async (lang: SupportedLanguage) => {
    if (!user) return;
    const updated = { ...user, currentLanguage: lang };
    setUser(updated);
    await StorageService.set(STORAGE_KEYS.USER_PROFILE, updated);
  }, [user]);

  const updateLevel = useCallback(async (level: CEFRLevel) => {
    if (!user) return;
    const updated = { ...user, currentLevel: level };
    setUser(updated);
    await StorageService.set(STORAGE_KEYS.USER_PROFILE, updated);
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        signIn,
        signUp,
        signOut,
        continueAsGuest,
        updateLanguage,
        updateLevel,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within <AuthProvider>');
  return ctx;
}
