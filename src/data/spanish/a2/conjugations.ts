/**
 * Spanish A2 Verb Conjugations
 *
 * At A2 we introduce the preterite tense (past) alongside new regular
 * and irregular verbs. Students learn both present and past tenses.
 */

import type { ConjugationEntry, ConjugationPattern } from '../../../types';

const lang = 'es' as const;
const level = 'A2' as const;

const LABELS: Record<string, string> = {
  yo: 'yo',
  tú: 'tú',
  él: 'él/ella/usted',
  nosotros: 'nosotros',
  vosotros: 'vosotros',
  ellos: 'ellos/ellas/ustedes',
};

const rawConjugations: Omit<ConjugationEntry, 'subjectLabels'>[] = [
  // ── Present tense (mixed in to challenge tense recognition) ──
  {
    id: 'es_a2_c020', language: lang, level, infinitive: 'viajar',
    translation: 'to travel', isRegular: true, tense: 'present',
    conjugations: {
      yo: 'viajo', tú: 'viajas', él: 'viaja',
      nosotros: 'viajamos', vosotros: 'viajáis', ellos: 'viajan',
    },
  },
  {
    id: 'es_a2_c021', language: lang, level, infinitive: 'correr',
    translation: 'to run', isRegular: true, tense: 'present',
    conjugations: {
      yo: 'corro', tú: 'corres', él: 'corre',
      nosotros: 'corremos', vosotros: 'corréis', ellos: 'corren',
    },
  },
  {
    id: 'es_a2_c022', language: lang, level, infinitive: 'abrir',
    translation: 'to open', isRegular: true, tense: 'present',
    conjugations: {
      yo: 'abro', tú: 'abres', él: 'abre',
      nosotros: 'abrimos', vosotros: 'abrís', ellos: 'abren',
    },
  },
  {
    id: 'es_a2_c023', language: lang, level, infinitive: 'conocer',
    translation: 'to know (someone/place)', isRegular: false, tense: 'present',
    conjugations: {
      yo: 'conozco', tú: 'conoces', él: 'conoce',
      nosotros: 'conocemos', vosotros: 'conocéis', ellos: 'conocen',
    },
  },
  {
    id: 'es_a2_c024', language: lang, level, infinitive: 'pedir',
    translation: 'to ask for / to order', isRegular: false, tense: 'present',
    conjugations: {
      yo: 'pido', tú: 'pides', él: 'pide',
      nosotros: 'pedimos', vosotros: 'pedís', ellos: 'piden',
    },
  },
  {
    id: 'es_a2_c025', language: lang, level, infinitive: 'dormir',
    translation: 'to sleep', isRegular: false, tense: 'present',
    conjugations: {
      yo: 'duermo', tú: 'duermes', él: 'duerme',
      nosotros: 'dormimos', vosotros: 'dormís', ellos: 'duermen',
    },
  },
  {
    id: 'es_a2_c026', language: lang, level, infinitive: 'pensar',
    translation: 'to think', isRegular: false, tense: 'present',
    conjugations: {
      yo: 'pienso', tú: 'piensas', él: 'piensa',
      nosotros: 'pensamos', vosotros: 'pensáis', ellos: 'piensan',
    },
  },
  {
    id: 'es_a2_c027', language: lang, level, infinitive: 'jugar',
    translation: 'to play (a game)', isRegular: false, tense: 'present',
    conjugations: {
      yo: 'juego', tú: 'juegas', él: 'juega',
      nosotros: 'jugamos', vosotros: 'jugáis', ellos: 'juegan',
    },
  },

  // ── Preterite -AR verbs ─────────────────────────────────────
  {
    id: 'es_a2_c001', language: lang, level, infinitive: 'hablar',
    translation: 'to speak', isRegular: true, tense: 'preterite',
    conjugations: {
      yo: 'hablé', tú: 'hablaste', él: 'habló',
      nosotros: 'hablamos', vosotros: 'hablasteis', ellos: 'hablaron',
    },
  },
  {
    id: 'es_a2_c002', language: lang, level, infinitive: 'comprar',
    translation: 'to buy', isRegular: true, tense: 'preterite',
    conjugations: {
      yo: 'compré', tú: 'compraste', él: 'compró',
      nosotros: 'compramos', vosotros: 'comprasteis', ellos: 'compraron',
    },
  },
  {
    id: 'es_a2_c003', language: lang, level, infinitive: 'viajar',
    translation: 'to travel', isRegular: true, tense: 'preterite',
    conjugations: {
      yo: 'viajé', tú: 'viajaste', él: 'viajó',
      nosotros: 'viajamos', vosotros: 'viajasteis', ellos: 'viajaron',
    },
  },
  // ── Preterite -ER verbs ─────────────────────────────────────
  {
    id: 'es_a2_c004', language: lang, level, infinitive: 'comer',
    translation: 'to eat', isRegular: true, tense: 'preterite',
    conjugations: {
      yo: 'comí', tú: 'comiste', él: 'comió',
      nosotros: 'comimos', vosotros: 'comisteis', ellos: 'comieron',
    },
  },
  {
    id: 'es_a2_c005', language: lang, level, infinitive: 'beber',
    translation: 'to drink', isRegular: true, tense: 'preterite',
    conjugations: {
      yo: 'bebí', tú: 'bebiste', él: 'bebió',
      nosotros: 'bebimos', vosotros: 'bebisteis', ellos: 'bebieron',
    },
  },
  // ── Preterite -IR verbs ─────────────────────────────────────
  {
    id: 'es_a2_c006', language: lang, level, infinitive: 'vivir',
    translation: 'to live', isRegular: true, tense: 'preterite',
    conjugations: {
      yo: 'viví', tú: 'viviste', él: 'vivió',
      nosotros: 'vivimos', vosotros: 'vivisteis', ellos: 'vivieron',
    },
  },
  {
    id: 'es_a2_c007', language: lang, level, infinitive: 'escribir',
    translation: 'to write', isRegular: true, tense: 'preterite',
    conjugations: {
      yo: 'escribí', tú: 'escribiste', él: 'escribió',
      nosotros: 'escribimos', vosotros: 'escribisteis', ellos: 'escribieron',
    },
  },
  // ── Irregular preterite verbs ───────────────────────────────
  {
    id: 'es_a2_c008', language: lang, level, infinitive: 'ir',
    translation: 'to go', isRegular: false, tense: 'preterite',
    conjugations: {
      yo: 'fui', tú: 'fuiste', él: 'fue',
      nosotros: 'fuimos', vosotros: 'fuisteis', ellos: 'fueron',
    },
  },
  {
    id: 'es_a2_c009', language: lang, level, infinitive: 'ser',
    translation: 'to be (permanent)', isRegular: false, tense: 'preterite',
    conjugations: {
      yo: 'fui', tú: 'fuiste', él: 'fue',
      nosotros: 'fuimos', vosotros: 'fuisteis', ellos: 'fueron',
    },
  },
  {
    id: 'es_a2_c010', language: lang, level, infinitive: 'hacer',
    translation: 'to do / to make', isRegular: false, tense: 'preterite',
    conjugations: {
      yo: 'hice', tú: 'hiciste', él: 'hizo',
      nosotros: 'hicimos', vosotros: 'hicisteis', ellos: 'hicieron',
    },
  },
  {
    id: 'es_a2_c011', language: lang, level, infinitive: 'tener',
    translation: 'to have', isRegular: false, tense: 'preterite',
    conjugations: {
      yo: 'tuve', tú: 'tuviste', él: 'tuvo',
      nosotros: 'tuvimos', vosotros: 'tuvisteis', ellos: 'tuvieron',
    },
  },
  {
    id: 'es_a2_c012', language: lang, level, infinitive: 'poder',
    translation: 'to be able / can', isRegular: false, tense: 'preterite',
    conjugations: {
      yo: 'pude', tú: 'pudiste', él: 'pudo',
      nosotros: 'pudimos', vosotros: 'pudisteis', ellos: 'pudieron',
    },
  },
];

export const SPANISH_A2_CONJUGATIONS: ConjugationEntry[] = rawConjugations.map((c) => ({
  ...c,
  subjectLabels: LABELS,
}));

// ── Conjugation Patterns ────────────────────────────────────────

export const SPANISH_A2_CONJUGATION_PATTERNS: ConjugationPattern[] = [
  {
    id: 'es_a2_pret_ar',
    language: lang,
    level,
    name: 'Preterite Tense -AR Verbs',
    verbEnding: '-ar',
    tense: 'preterite',
    description:
      'The preterite (pretérito indefinido) is used for completed actions in the past — things that happened at a specific time and are done.',
    rule: 'Drop the -ar ending, then add these preterite endings.',
    endings: {
      yo: '-é', tú: '-aste', él: '-ó',
      nosotros: '-amos', vosotros: '-asteis', ellos: '-aron',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['hablar', 'comprar', 'viajar'],
    tips: [
      'Notice that the "nosotros" form is the same in present and preterite for -ar verbs!',
      'The preterite is for completed, one-time actions: "Hablé con María ayer" (I spoke with María yesterday).',
    ],
  },
  {
    id: 'es_a2_pret_er_ir',
    language: lang,
    level,
    name: 'Preterite Tense -ER/-IR Verbs',
    verbEnding: '-er/-ir',
    tense: 'preterite',
    description:
      '-ER and -IR verbs share the same preterite endings. Once you know one set, you know both!',
    rule: 'Drop the -er or -ir ending, then add these preterite endings.',
    endings: {
      yo: '-í', tú: '-iste', él: '-ió',
      nosotros: '-imos', vosotros: '-isteis', ellos: '-ieron',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['comer', 'beber', 'vivir', 'escribir'],
    tips: [
      '-ER and -IR share identical preterite endings — less to memorize!',
      'Use the preterite for past events: "Comí paella en Valencia" (I ate paella in Valencia).',
    ],
  },
];
