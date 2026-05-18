/**
 * App-wide constants.
 *
 * Centralises magic numbers and feature flags so they're easy to tune.
 */

import type { GameModeConfig, CEFRLevel } from '../types';

// ── SRS defaults (SM-2 algorithm) ───────────────────────────────
export const SRS_DEFAULTS = {
  INITIAL_EASE_FACTOR: 2.5,
  MINIMUM_EASE_FACTOR: 1.3,
  INITIAL_INTERVAL: 1,       // days
  GRADUATING_INTERVAL: 6,    // days after first successful review
} as const;

// ── XP rewards ──────────────────────────────────────────────────
export const XP = {
  CORRECT_ANSWER: 10,
  STREAK_BONUS: 5,            // per consecutive correct
  LESSON_COMPLETE: 50,
  GAME_WIN: 100,
  GAME_PARTICIPATION: 25,
  PERFECT_ROUND: 75,
} as const;

// ── Level thresholds (words learned to advance) ─────────────────
// Tuned to match realistic A1 content sizes (~50-100 words per level)
export const LEVEL_THRESHOLDS: Record<CEFRLevel, number> = {
  A1: 0,
  A2: 50,
  B1: 150,
  B2: 400,
  C1: 1000,
  C2: 2500,
};

// ── Game mode definitions ───────────────────────────────────────
export const GAME_MODES: GameModeConfig[] = [
  {
    type: 'vocab_blitz',
    name: 'Vocab Blitz',
    description: 'Words fall from the sky — type the translation before they hit the ground!',
    icon: '⚡',
    unlockLevel: 'A1',
    minWordsRequired: 10,
    contentTypes: ['vocab'],
  },
  {
    type: 'conjugation_fighter',
    name: 'Conjugation Fighter',
    description: 'Battle an opponent by conjugating verbs correctly to land attacks!',
    icon: '🥊',
    unlockLevel: 'A1',
    minWordsRequired: 5,
    contentTypes: ['conjugation'],
  },
  {
    type: 'sentence_builder',
    name: 'Sentence Builder',
    description: 'Drag words into the correct order to build sentences.',
    icon: '🧩',
    unlockLevel: 'A1',
    minWordsRequired: 20,
    contentTypes: ['sentence'],
  },
];

// ── Timing (ms) ─────────────────────────────────────────────────
export const GAME_TIMERS = {
  VOCAB_BLITZ_FALL_SPEED: 5000,     // time for word to fall from top to bottom
  VOCAB_BLITZ_ROUND_TIME: 60_000,   // 60 s per round
  FIGHTER_ANSWER_TIME: 10_000,       // 10 s to answer in fighter mode
  FIGHTER_ROUNDS: 10,
  SENTENCE_BUILDER_TIME: 30_000,     // 30 s per sentence
} as const;

// ── Content ─────────────────────────────────────────────────────
export const DEFAULT_LANGUAGE = 'es' as const;
export const DEFAULT_LEVEL = 'A1' as const;

// ── Storage keys ────────────────────────────────────────────────
export const STORAGE_KEYS = {
  USER_PROFILE: '@lingua_user_profile',
  USER_PROGRESS: '@lingua_user_progress',
  SRS_CARDS: '@lingua_srs_cards',
  AUTH_TOKEN: '@lingua_auth_token',
  SETTINGS: '@lingua_settings',
} as const;
