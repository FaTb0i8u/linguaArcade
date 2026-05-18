/**
 * Language Content Pack & Registry
 *
 * Defines the standard interface every language must implement,
 * and provides a central registry for looking up content by
 * language code + CEFR level.
 *
 * To add a new language:
 *   1. Create src/data/<lang>/ with vocab, conjugations, sentences, grammar
 *   2. Export a LanguageContentPack from src/data/<lang>/index.ts
 *   3. Register it here with registerLanguage()
 *
 * The lesson engine, game screens, and SRS system all consume
 * content through this registry — they never import language-
 * specific modules directly.
 */

import type {
  SupportedLanguage,
  CEFRLevel,
  VocabWord,
  ConjugationEntry,
  ConjugationPattern,
  SentencePattern,
  GrammarRule,
  LanguageMeta,
} from '../types';

// ──────────────────────────────────────────────
// Content Pack Interface
// ──────────────────────────────────────────────

/** Everything a language needs to provide for a single CEFR level. */
export interface LevelContent {
  vocab: VocabWord[];
  conjugations: ConjugationEntry[];
  conjugationPatterns: ConjugationPattern[];
  sentences: SentencePattern[];
  grammar: GrammarRule[];
}

/** A complete language content pack with metadata + content per level. */
export interface LanguageContentPack {
  meta: LanguageMeta;
  levels: Partial<Record<CEFRLevel, LevelContent>>;
  /** Language-specific learning tips shown on the home screen. */
  tips: string[];
}

// ──────────────────────────────────────────────
// Registry
// ──────────────────────────────────────────────

const registry = new Map<SupportedLanguage, LanguageContentPack>();

/** Register a language content pack. */
export function registerLanguage(pack: LanguageContentPack): void {
  registry.set(pack.meta.code, pack);
}

/** Get a registered language pack (throws if not found). */
export function getLanguagePack(lang: SupportedLanguage): LanguageContentPack {
  const pack = registry.get(lang);
  if (!pack) {
    throw new Error(`Language "${lang}" is not registered. Did you forget to call registerLanguage()?`);
  }
  return pack;
}

/** Get content for a specific language + level. Falls back to closest available level. */
export function getLevelContent(lang: SupportedLanguage, level: CEFRLevel): LevelContent {
  const pack = getLanguagePack(lang);
  const content = pack.levels[level];
  if (content) return content;

  // Fallback: try lower levels in descending order
  const allLevels: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const idx = allLevels.indexOf(level);
  for (let i = idx - 1; i >= 0; i--) {
    const fallback = pack.levels[allLevels[i]];
    if (fallback) return fallback;
  }
  throw new Error(`No content for ${lang} at any level up to ${level}.`);
}

/** Get metadata for a language. */
export function getLanguageMeta(lang: SupportedLanguage): LanguageMeta {
  return getLanguagePack(lang).meta;
}

/** List all registered language codes. */
export function getAvailableLanguages(): SupportedLanguage[] {
  return Array.from(registry.keys());
}

/** List available CEFR levels for a given language. */
export function getAvailableLevels(lang: SupportedLanguage): CEFRLevel[] {
  const pack = getLanguagePack(lang);
  return Object.keys(pack.levels) as CEFRLevel[];
}

/** Get a random tip for a language. */
export function getRandomTip(lang: SupportedLanguage): string {
  const pack = getLanguagePack(lang);
  if (pack.tips.length === 0) return 'Practice makes perfect!';
  return pack.tips[Math.floor(Math.random() * pack.tips.length)];
}

/** Get a localized greeting for the home screen. */
export function getGreeting(lang: SupportedLanguage): string {
  const greetings: Record<string, string> = {
    es: '¡Hola',
    ko: '안녕하세요',
    fr: 'Bonjour',
    de: 'Hallo',
    ja: 'こんにちは',
    zh: '你好',
    pt: 'Olá',
    it: 'Ciao',
    en: 'Hello',
  };
  return greetings[lang] ?? 'Hello';
}
