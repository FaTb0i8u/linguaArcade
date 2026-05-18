/**
 * Spanish B1 Sentence Patterns
 *
 * Intermediate sentences using imperfect, future, present perfect,
 * por vs para, commands, and relative clauses.
 */

import type { SentencePattern } from '../../../types';

const lang = 'es' as const;
const level = 'B1' as const;

export const SPANISH_B1_SENTENCES: SentencePattern[] = [
  // ── Imperfect descriptions ────────────────────────────────────
  {
    id: 'es_b1_s001', language: lang, level, category: 'imperfect_descriptions',
    words: ['Cuando', 'era', 'niño', 'jugaba', 'en', 'el', 'parque'],
    translation: 'When I was a child, I used to play in the park.',
    hint: 'cuando + imperfect (ser) + noun + imperfect (jugar) + preposition + article + noun',
    distractors: ['fui', 'jugué', 'será'],
  },
  {
    id: 'es_b1_s002', language: lang, level, category: 'imperfect_descriptions',
    words: ['Mi', 'abuela', 'siempre', 'cocinaba', 'los', 'domingos'],
    translation: 'My grandmother always used to cook on Sundays.',
    hint: 'possessive + noun + adverb + imperfect verb + article + day',
    distractors: ['cocinó', 'nunca', 'cocinará'],
  },
  {
    id: 'es_b1_s003', language: lang, level, category: 'imperfect_descriptions',
    words: ['Llovía', 'cuando', 'salí', 'de', 'casa'],
    translation: 'It was raining when I left the house.',
    hint: 'imperfect (background) + cuando + preterite (interrupting action) + de + noun',
    distractors: ['llovió', 'salía', 'llueve'],
  },
  {
    id: 'es_b1_s004', language: lang, level, category: 'imperfect_descriptions',
    words: ['Antes', 'vivíamos', 'en', 'una', 'casa', 'más', 'grande'],
    translation: 'Before, we used to live in a bigger house.',
    hint: 'adverb + imperfect verb + preposition + article + noun + comparison',
    distractors: ['vivimos', 'viviremos', 'menos'],
  },
  // ── Future plans ──────────────────────────────────────────────
  {
    id: 'es_b1_s005', language: lang, level, category: 'future_plans',
    words: ['El', 'año', 'que', 'viene', 'viajaré', 'a', 'Japón'],
    translation: 'Next year I will travel to Japan.',
    hint: 'time expression + future verb + preposition + place',
    distractors: ['viajé', 'viajaba', 'en'],
  },
  {
    id: 'es_b1_s006', language: lang, level, category: 'future_plans',
    words: ['Mañana', 'tendremos', 'una', 'reunión', 'importante'],
    translation: 'Tomorrow we will have an important meeting.',
    hint: 'time marker + future verb (irregular stem) + article + noun + adjective',
    distractors: ['tenemos', 'teníamos', 'pequeña'],
  },
  {
    id: 'es_b1_s007', language: lang, level, category: 'future_plans',
    words: ['¿Qué', 'harás', 'este', 'fin', 'de', 'semana?'],
    translation: 'What will you do this weekend?',
    hint: 'question word + future verb (irregular) + demonstrative + time expression',
    distractors: ['hiciste', 'hacías', 'haces'],
  },
  // ── Present perfect ───────────────────────────────────────────
  {
    id: 'es_b1_s008', language: lang, level, category: 'present_perfect',
    words: ['He', 'viajado', 'a', 'muchos', 'países'],
    translation: 'I have traveled to many countries.',
    hint: 'auxiliary (haber) + past participle + preposition + adjective + noun',
    distractors: ['viajé', 'has', 'viajaba'],
  },
  {
    id: 'es_b1_s009', language: lang, level, category: 'present_perfect',
    words: ['¿Has', 'visto', 'la', 'nueva', 'película?'],
    translation: 'Have you seen the new movie?',
    hint: 'auxiliary (haber) + irregular participle + article + adjective + noun',
    distractors: ['viste', 'he', 'vieja'],
  },
  {
    id: 'es_b1_s010', language: lang, level, category: 'present_perfect',
    words: ['Todavía', 'no', 'hemos', 'terminado', 'el', 'proyecto'],
    translation: 'We have not finished the project yet.',
    hint: 'adverb + negation + auxiliary + participle + article + noun',
    distractors: ['terminamos', 'han', 'ya'],
  },
  // ── Commands ──────────────────────────────────────────────────
  {
    id: 'es_b1_s011', language: lang, level, category: 'commands',
    words: ['Abre', 'la', 'ventana', 'por', 'favor'],
    translation: 'Open the window, please.',
    hint: 'imperative (tú) + article + noun + courtesy phrase',
    distractors: ['abres', 'abra', 'para'],
  },
  {
    id: 'es_b1_s012', language: lang, level, category: 'commands',
    words: ['No', 'hables', 'tan', 'alto', 'aquí'],
    translation: 'Don\'t speak so loud here.',
    hint: 'negation + negative imperative (subjunctive) + adverb + adjective + adverb',
    distractors: ['hablas', 'habla', 'bajo'],
  },
  {
    id: 'es_b1_s013', language: lang, level, category: 'commands',
    words: ['Dime', 'la', 'verdad', 'ahora', 'mismo'],
    translation: 'Tell me the truth right now.',
    hint: 'imperative (decir + me) + article + noun + adverbial phrase',
    distractors: ['dices', 'dijo', 'mentira'],
  },
  // ── Relative clauses ──────────────────────────────────────────
  {
    id: 'es_b1_s014', language: lang, level, category: 'relative_clauses',
    words: ['El', 'libro', 'que', 'compré', 'es', 'muy', 'interesante'],
    translation: 'The book that I bought is very interesting.',
    hint: 'article + noun + relative pronoun + preterite + ser + adverb + adjective',
    distractors: ['donde', 'quien', 'aburrido'],
  },
  {
    id: 'es_b1_s015', language: lang, level, category: 'relative_clauses',
    words: ['La', 'ciudad', 'donde', 'nací', 'es', 'pequeña'],
    translation: 'The city where I was born is small.',
    hint: 'article + noun + donde + preterite + ser + adjective',
    distractors: ['que', 'quien', 'grande'],
  },
  {
    id: 'es_b1_s016', language: lang, level, category: 'relative_clauses',
    words: ['No', 'entiendo', 'lo', 'que', 'dices'],
    translation: 'I don\'t understand what you are saying.',
    hint: 'negation + verb + lo que (abstract relative) + verb',
    distractors: ['donde', 'quien', 'entiendes'],
  },
];
