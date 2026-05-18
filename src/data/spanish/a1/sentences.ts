/**
 * Spanish A1 Sentence Patterns
 *
 * Pre-built sentences for the Sentence Builder game.
 * Each entry has the correct word order, a translation,
 * optional distractors (extra words to add difficulty),
 * and a grammar hint.
 */

import type { SentencePattern } from '../../../types';

const lang = 'es' as const;
const level = 'A1' as const;

export const SPANISH_A1_SENTENCES: SentencePattern[] = [
  // ── Basic statements ──────────────────────────────────────────
  {
    id: 'es_a1_s001', language: lang, level, category: 'basic_statements',
    words: ['Yo', 'soy', 'estudiante'],
    translation: 'I am a student.',
    hint: 'Subject + ser + noun',
  },
  {
    id: 'es_a1_s002', language: lang, level, category: 'basic_statements',
    words: ['Ella', 'tiene', 'un', 'gato'],
    translation: 'She has a cat.',
    hint: 'Subject + tener + article + noun',
    distractors: ['una', 'es'],
  },
  {
    id: 'es_a1_s003', language: lang, level, category: 'basic_statements',
    words: ['Nosotros', 'vivimos', 'en', 'la', 'ciudad'],
    translation: 'We live in the city.',
    hint: 'Subject + vivir + preposition + article + noun',
    distractors: ['el', 'un'],
  },
  {
    id: 'es_a1_s004', language: lang, level, category: 'basic_statements',
    words: ['El', 'libro', 'es', 'nuevo'],
    translation: 'The book is new.',
    hint: 'Article + noun + ser + adjective',
    distractors: ['está', 'viejo'],
  },
  {
    id: 'es_a1_s005', language: lang, level, category: 'basic_statements',
    words: ['Mi', 'madre', 'cocina', 'muy', 'bien'],
    translation: 'My mother cooks very well.',
    hint: 'Possessive + noun + verb + adverb + adverb',
    distractors: ['mal', 'tu'],
  },

  // ── Questions ─────────────────────────────────────────────────
  {
    id: 'es_a1_s010', language: lang, level, category: 'questions',
    words: ['¿Cómo', 'te', 'llamas?'],
    translation: 'What is your name?',
    hint: 'Question word + reflexive pronoun + verb',
    distractors: ['se', 'Dónde'],
  },
  {
    id: 'es_a1_s011', language: lang, level, category: 'questions',
    words: ['¿Dónde', 'está', 'el', 'baño?'],
    translation: 'Where is the bathroom?',
    hint: 'Question word + estar + article + noun',
    distractors: ['es', 'la'],
  },
  {
    id: 'es_a1_s012', language: lang, level, category: 'questions',
    words: ['¿Cuántos', 'años', 'tienes?'],
    translation: 'How old are you?',
    hint: 'Question word + noun + tener (tú)',
    distractors: ['tiene', 'Cuántas'],
  },
  {
    id: 'es_a1_s013', language: lang, level, category: 'questions',
    words: ['¿Qué', 'hora', 'es?'],
    translation: 'What time is it?',
    hint: 'Question word + noun + ser',
    distractors: ['está', 'son'],
  },
  {
    id: 'es_a1_s014', language: lang, level, category: 'questions',
    words: ['¿Hablas', 'español?'],
    translation: 'Do you speak Spanish?',
    hint: 'Verb (tú) + language. In Spanish, questions begin with ¿',
    distractors: ['inglés', 'Habla'],
  },

  // ── Descriptions ──────────────────────────────────────────────
  {
    id: 'es_a1_s020', language: lang, level, category: 'descriptions',
    words: ['La', 'casa', 'es', 'grande', 'y', 'bonita'],
    translation: 'The house is big and pretty.',
    hint: 'Article + noun + ser + adjective + conjunction + adjective',
    distractors: ['está', 'un'],
  },
  {
    id: 'es_a1_s021', language: lang, level, category: 'descriptions',
    words: ['El', 'perro', 'es', 'pequeño'],
    translation: 'The dog is small.',
    hint: 'Article + noun + ser + adjective',
    distractors: ['gato', 'grande'],
  },
  {
    id: 'es_a1_s022', language: lang, level, category: 'descriptions',
    words: ['La', 'comida', 'está', 'deliciosa'],
    translation: 'The food is delicious.',
    hint: 'Use estar for temporary states / conditions',
    distractors: ['es', 'rica'],
  },

  // ── Daily activities ──────────────────────────────────────────
  {
    id: 'es_a1_s030', language: lang, level, category: 'daily_activities',
    words: ['Yo', 'como', 'en', 'el', 'restaurante'],
    translation: 'I eat at the restaurant.',
    hint: 'Subject + comer + preposition + article + place',
    distractors: ['la', 'bebo'],
  },
  {
    id: 'es_a1_s031', language: lang, level, category: 'daily_activities',
    words: ['Ellos', 'estudian', 'español', 'todos', 'los', 'días'],
    translation: 'They study Spanish every day.',
    hint: 'Subject + verb + object + time expression',
    distractors: ['las', 'noches'],
  },
  {
    id: 'es_a1_s032', language: lang, level, category: 'daily_activities',
    words: ['Voy', 'a', 'la', 'escuela'],
    translation: 'I go to school.',
    hint: 'Ir (yo) + preposition + article + place. Subject pronoun can be omitted.',
    distractors: ['el', 'en'],
  },
  {
    id: 'es_a1_s033', language: lang, level, category: 'daily_activities',
    words: ['Mi', 'hermano', 'trabaja', 'mucho'],
    translation: 'My brother works a lot.',
    hint: 'Possessive + noun + verb + adverb',
    distractors: ['poco', 'tu'],
  },

  // ── Wants and needs ───────────────────────────────────────────
  {
    id: 'es_a1_s040', language: lang, level, category: 'wants_needs',
    words: ['Quiero', 'un', 'vaso', 'de', 'agua'],
    translation: 'I want a glass of water.',
    hint: 'querer (yo) + article + noun + preposition + noun',
    distractors: ['una', 'leche'],
  },
  {
    id: 'es_a1_s041', language: lang, level, category: 'wants_needs',
    words: ['Necesito', 'aprender', 'más', 'palabras'],
    translation: 'I need to learn more words.',
    hint: 'necesitar (yo) + infinitive + adverb + noun',
    distractors: ['menos', 'saber'],
  },
];

/** Get sentences by category. */
export function getSentencesByCategory(category: string): SentencePattern[] {
  return SPANISH_A1_SENTENCES.filter((s) => s.category === category);
}

/** All available sentence categories. */
export function getSentenceCategories(): string[] {
  return [...new Set(SPANISH_A1_SENTENCES.map((s) => s.category))];
}
