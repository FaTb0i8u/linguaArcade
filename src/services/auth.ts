/**
 * Auth service.
 *
 * Supports two modes:
 *   1. Supabase mode — real email/password auth persisted in the cloud.
 *   2. Local / guest mode — stores a generated profile in AsyncStorage
 *      so the user can play offline without configuring a backend.
 */

import { supabase, isSupabaseConfigured } from '../config/supabase';
import { StorageService } from './storage';
import { STORAGE_KEYS, DEFAULT_LANGUAGE, DEFAULT_LEVEL } from '../config/constants';
import type { UserProfile } from '../types';
import { v4 as uuid } from 'uuid';

export const AuthService = {
  // ── Supabase auth ─────────────────────────────────────────────

  async signUp(email: string, password: string, displayName: string): Promise<UserProfile | null> {
    if (!isSupabaseConfigured) {
      return this.createGuestProfile(displayName, email);
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { display_name: displayName } },
    });

    if (error || !data.user) {
      console.error('[Auth] Sign-up failed', error?.message);
      throw new Error(error?.message ?? 'Sign-up failed');
    }

    const profile: UserProfile = {
      id: data.user.id,
      email,
      displayName,
      createdAt: new Date().toISOString(),
      currentLanguage: DEFAULT_LANGUAGE,
      currentLevel: DEFAULT_LEVEL,
    };

    await StorageService.set(STORAGE_KEYS.USER_PROFILE, profile);
    return profile;
  },

  async signIn(email: string, password: string): Promise<UserProfile | null> {
    if (!isSupabaseConfigured) {
      // In guest mode just load whatever local profile exists
      return StorageService.get<UserProfile>(STORAGE_KEYS.USER_PROFILE);
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error || !data.user) {
      console.error('[Auth] Sign-in failed', error?.message);
      throw new Error(error?.message ?? 'Sign-in failed');
    }

    const profile: UserProfile = {
      id: data.user.id,
      email,
      displayName: data.user.user_metadata?.display_name ?? email.split('@')[0],
      createdAt: data.user.created_at,
      currentLanguage: DEFAULT_LANGUAGE,
      currentLevel: DEFAULT_LEVEL,
    };

    await StorageService.set(STORAGE_KEYS.USER_PROFILE, profile);
    return profile;
  },

  async signOut(): Promise<void> {
    if (isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
    await StorageService.clear();
  },

  async getCurrentUser(): Promise<UserProfile | null> {
    return StorageService.get<UserProfile>(STORAGE_KEYS.USER_PROFILE);
  },

  // ── Guest / offline helpers ───────────────────────────────────

  async createGuestProfile(
    displayName: string = 'Learner',
    email: string = 'guest@linguaarcade.local',
  ): Promise<UserProfile> {
    const profile: UserProfile = {
      id: uuid(),
      email,
      displayName,
      createdAt: new Date().toISOString(),
      currentLanguage: DEFAULT_LANGUAGE,
      currentLevel: DEFAULT_LEVEL,
    };
    await StorageService.set(STORAGE_KEYS.USER_PROFILE, profile);
    return profile;
  },
};
