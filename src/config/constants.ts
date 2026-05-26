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
// ── Coin rewards ────────────────────────────────────────────────────────────
export const COINS = {
  LESSON_COMPLETE: 10,
  LESSON_PERFECT_BONUS: 15,     // bonus on top of LESSON_COMPLETE for 100%
  // Arcade: tiered by accuracy %
  GAME_TIER_PERFECT: 25,        // 100% accuracy
  GAME_TIER_GREAT: 18,          // ≥80%
  GAME_TIER_GOOD: 12,           // ≥60%
  GAME_TIER_OK: 6,              // ≥40%
  GAME_TIER_POOR: 2,            // <40%
  STREAK_BONUS_PER_DAY: 5,     // bonus coins per streak day (capped at 7)
} as const;

/** Calculate coin reward for a game based on accuracy (0–1) */
export function getGameCoinReward(accuracy: number): number {
  if (accuracy >= 1) return COINS.GAME_TIER_PERFECT;
  if (accuracy >= 0.8) return COINS.GAME_TIER_GREAT;
  if (accuracy >= 0.6) return COINS.GAME_TIER_GOOD;
  if (accuracy >= 0.4) return COINS.GAME_TIER_OK;
  return COINS.GAME_TIER_POOR;
}

// ── Pet system ──────────────────────────────────────────────────────────────
export const PET = {
  MAX_HUNGER: 100,
  HUNGER_DECAY_PER_HOUR: 2,   // loses 2 hunger points per hour
  HUNGER_STATES: [
    { threshold: 80, label: 'Full', emoji: '😊' },
    { threshold: 60, label: 'Content', emoji: '🙂' },
    { threshold: 40, label: 'Hungry', emoji: '😟' },
    { threshold: 20, label: 'Very Hungry', emoji: '😢' },
    { threshold: 0,  label: 'Starving', emoji: '😭' },
  ],
} as const;

/** Available pet types (emoji placeholders, will be replaced with art later) */
export const PET_TYPES = [
  { id: 'cat', name: 'Luna', emoji: '🐱', description: 'A curious little cat' },
  { id: 'dog', name: 'Buddy', emoji: '🐶', description: 'A loyal companion' },
  { id: 'rabbit', name: 'Mochi', emoji: '🐰', description: 'A fluffy friend' },
  { id: 'fox', name: 'Kitsune', emoji: '🦊', description: 'A clever fox' },
  { id: 'panda', name: 'Bao', emoji: '🐼', description: 'A gentle giant' },
] as const;

/** Food items that can be purchased to feed the pet */
export const FOOD_ITEMS = [
  { id: 'kibble', name: 'Kibble', emoji: '🍪', hungerRestore: 10, cost: 10, description: 'A basic snack' },
  { id: 'fish', name: 'Grilled Fish', emoji: '🍽️', hungerRestore: 25, cost: 20, description: 'A tasty meal' },
  { id: 'cake', name: 'Cake', emoji: '🍰', hungerRestore: 40, cost: 35, description: 'A delicious treat' },
  { id: 'feast', name: 'Royal Feast', emoji: '🍖', hungerRestore: 70, cost: 60, description: 'A magnificent banquet' },
  { id: 'golden_apple', name: 'Golden Apple', emoji: '🍎', hungerRestore: 100, cost: 100, description: 'Fully restores hunger' },
] as const;
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
  PET_DATA: '@lingua_pet_data',
} as const;
