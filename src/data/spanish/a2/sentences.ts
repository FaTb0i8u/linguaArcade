/**
 * Spanish A2 Sentence Patterns
 *
 * More complex sentences using past tense, reflexive verbs,
 * near future, and comparisons — matching A2 grammar topics.
 */

import type { SentencePattern } from '../../../types';

const lang = 'es' as const;
const level = 'A2' as const;

export const SPANISH_A2_SENTENCES: SentencePattern[] = [
  // ── Past tense sentences ──────────────────────────────────────
  {
    id: 'es_a2_s001', language: lang, level, category: 'past_actions',
    words: ['Ayer', 'comí', 'pizza', 'con', 'mis', 'amigos'],
    translation: 'Yesterday I ate pizza with my friends.',
    hint: 'Time marker + preterite verb + object + preposition + possessive + noun',
    distractors: ['como', 'hoy'],
  },
  {
    id: 'es_a2_s002', language: lang, level, category: 'past_actions',
    words: ['Ella', 'compró', 'un', 'vestido', 'nuevo'],
    translation: 'She bought a new dress.',
    hint: 'Subject + preterite + article + noun + adjective',
    distractors: ['compra', 'viejo'],
  },
  {
    id: 'es_a2_s003', language: lang, level, category: 'past_actions',
    words: ['El', 'año', 'pasado', 'viajamos', 'a', 'México'],
    translation: 'Last year we traveled to Mexico.',
    hint: 'Time expression + preterite verb + preposition + place',
    distractors: ['viajé', 'en'],
  },
  {
    id: 'es_a2_s004', language: lang, level, category: 'past_actions',
    words: ['¿Qué', 'hiciste', 'el', 'fin', 'de', 'semana?'],
    translation: 'What did you do over the weekend?',
    hint: 'Question word + preterite (irregular) + time expression',
    distractors: ['hice', 'hizo'],
  },
  // ── Near future ───────────────────────────────────────────────
  {
    id: 'es_a2_s005', language: lang, level, category: 'future_plans',
    words: ['Voy', 'a', 'estudiar', 'esta', 'noche'],
    translation: 'I am going to study tonight.',
    hint: 'ir (conjugated) + a + infinitive + time expression',
    distractors: ['vamos', 'mañana'],
  },
  {
    id: 'es_a2_s006', language: lang, level, category: 'future_plans',
    words: ['Vamos', 'a', 'ir', 'al', 'cine'],
    translation: 'We are going to go to the movies.',
    hint: 'ir (nosotros) + a + infinitive + contraction + noun',
    distractors: ['voy', 'del'],
  },
  {
    id: 'es_a2_s007', language: lang, level, category: 'future_plans',
    words: ['Ella', 'va', 'a', 'viajar', 'a', 'España'],
    translation: 'She is going to travel to Spain.',
    hint: 'Subject + ir + a + infinitive + preposition + place',
    distractors: ['voy', 'en'],
  },
  // ── Reflexive verbs ───────────────────────────────────────────
  {
    id: 'es_a2_s008', language: lang, level, category: 'daily_routines',
    words: ['Me', 'despierto', 'a', 'las', 'siete'],
    translation: 'I wake up at seven.',
    hint: 'Reflexive pronoun + verb + time expression',
    distractors: ['se', 'te'],
  },
  {
    id: 'es_a2_s009', language: lang, level, category: 'daily_routines',
    words: ['Ella', 'se', 'ducha', 'por', 'la', 'mañana'],
    translation: 'She takes a shower in the morning.',
    hint: 'Subject + reflexive pronoun + verb + time expression',
    distractors: ['me', 'noche'],
  },
  {
    id: 'es_a2_s010', language: lang, level, category: 'daily_routines',
    words: ['Nos', 'acostamos', 'a', 'las', 'once'],
    translation: 'We go to bed at eleven.',
    hint: 'Reflexive pronoun + verb + time expression',
    distractors: ['se', 'me'],
  },
  // ── Comparisons ───────────────────────────────────────────────
  {
    id: 'es_a2_s011', language: lang, level, category: 'comparisons',
    words: ['Madrid', 'es', 'más', 'grande', 'que', 'Barcelona'],
    translation: 'Madrid is bigger than Barcelona.',
    hint: 'Noun + ser + más + adjective + que + noun',
    distractors: ['menos', 'como'],
  },
  {
    id: 'es_a2_s012', language: lang, level, category: 'comparisons',
    words: ['Este', 'hotel', 'es', 'mejor', 'que', 'ese'],
    translation: 'This hotel is better than that one.',
    hint: 'Demonstrative + noun + ser + irregular comparison + que + demonstrative',
    distractors: ['peor', 'más'],
  },
  // ── Weather ───────────────────────────────────────────────────
  {
    id: 'es_a2_s013', language: lang, level, category: 'weather',
    words: ['Hoy', 'hace', 'mucho', 'calor'],
    translation: 'Today it is very hot.',
    hint: 'Time + hacer + intensifier + weather noun',
    distractors: ['frío', 'hay'],
  },
  {
    id: 'es_a2_s014', language: lang, level, category: 'weather',
    words: ['Va', 'a', 'llover', 'esta', 'tarde'],
    translation: 'It is going to rain this afternoon.',
    hint: 'ir + a + infinitive (weather) + time expression',
    distractors: ['nevar', 'mañana'],
  },
];
