/**
 * Spanish A1 Verb Conjugations
 *
 * Regular -ar, -er, -ir paradigms plus essential irregular verbs.
 * Each entry includes all six person conjugations for one tense.
 *
 * ConjugationPatterns teach the RULE (endings table) rather than
 * requiring students to memorize each verb individually.
 * Irregular verbs are flagged and taught separately as exceptions.
 *
 * At A1 we focus on present indicative only; additional tenses
 * are added at A2+ and loaded from their own level files.
 */

import type { ConjugationEntry, ConjugationPattern } from '../../../types';

const lang = 'es' as const;
const level = 'A1' as const;

/** Shared Spanish subject pronoun display labels. */
export const SPANISH_SUBJECT_LABELS: Record<string, string> = {
  yo: 'yo',
  tú: 'tú',
  él: 'él/ella/usted',
  nosotros: 'nosotros',
  vosotros: 'vosotros',
  ellos: 'ellos/ellas/ustedes',
};

/** All Spanish subject pronoun keys. */
export const SPANISH_SUBJECTS = Object.keys(SPANISH_SUBJECT_LABELS);

const rawConjugations: Omit<ConjugationEntry, 'subjectLabels'>[] = [
  // ── Regular -AR verbs ───────────────────────────────────────
  {
    id: 'es_a1_c001', language: lang, level, infinitive: 'hablar',
    translation: 'to speak', isRegular: true, tense: 'present',
    conjugations: {
      yo: 'hablo', tú: 'hablas', él: 'habla',
      nosotros: 'hablamos', vosotros: 'habláis', ellos: 'hablan',
    },
  },
  {
    id: 'es_a1_c002', language: lang, level, infinitive: 'estudiar',
    translation: 'to study', isRegular: true, tense: 'present',
    conjugations: {
      yo: 'estudio', tú: 'estudias', él: 'estudia',
      nosotros: 'estudiamos', vosotros: 'estudiáis', ellos: 'estudian',
    },
  },
  {
    id: 'es_a1_c003', language: lang, level, infinitive: 'trabajar',
    translation: 'to work', isRegular: true, tense: 'present',
    conjugations: {
      yo: 'trabajo', tú: 'trabajas', él: 'trabaja',
      nosotros: 'trabajamos', vosotros: 'trabajáis', ellos: 'trabajan',
    },
  },
  {
    id: 'es_a1_c004', language: lang, level, infinitive: 'comprar',
    translation: 'to buy', isRegular: true, tense: 'present',
    conjugations: {
      yo: 'compro', tú: 'compras', él: 'compra',
      nosotros: 'compramos', vosotros: 'compráis', ellos: 'compran',
    },
  },
  {
    id: 'es_a1_c005', language: lang, level, infinitive: 'cocinar',
    translation: 'to cook', isRegular: true, tense: 'present',
    conjugations: {
      yo: 'cocino', tú: 'cocinas', él: 'cocina',
      nosotros: 'cocinamos', vosotros: 'cocináis', ellos: 'cocinan',
    },
  },

  // ── Regular -ER verbs ───────────────────────────────────────
  {
    id: 'es_a1_c010', language: lang, level, infinitive: 'comer',
    translation: 'to eat', isRegular: true, tense: 'present',
    conjugations: {
      yo: 'como', tú: 'comes', él: 'come',
      nosotros: 'comemos', vosotros: 'coméis', ellos: 'comen',
    },
  },
  {
    id: 'es_a1_c011', language: lang, level, infinitive: 'beber',
    translation: 'to drink', isRegular: true, tense: 'present',
    conjugations: {
      yo: 'bebo', tú: 'bebes', él: 'bebe',
      nosotros: 'bebemos', vosotros: 'bebéis', ellos: 'beben',
    },
  },
  {
    id: 'es_a1_c012', language: lang, level, infinitive: 'leer',
    translation: 'to read', isRegular: true, tense: 'present',
    conjugations: {
      yo: 'leo', tú: 'lees', él: 'lee',
      nosotros: 'leemos', vosotros: 'leéis', ellos: 'leen',
    },
  },
  {
    id: 'es_a1_c013', language: lang, level, infinitive: 'aprender',
    translation: 'to learn', isRegular: true, tense: 'present',
    conjugations: {
      yo: 'aprendo', tú: 'aprendes', él: 'aprende',
      nosotros: 'aprendemos', vosotros: 'aprendéis', ellos: 'aprenden',
    },
  },

  // ── Regular -IR verbs ───────────────────────────────────────
  {
    id: 'es_a1_c020', language: lang, level, infinitive: 'vivir',
    translation: 'to live', isRegular: true, tense: 'present',
    conjugations: {
      yo: 'vivo', tú: 'vives', él: 'vive',
      nosotros: 'vivimos', vosotros: 'vivís', ellos: 'viven',
    },
  },
  {
    id: 'es_a1_c021', language: lang, level, infinitive: 'escribir',
    translation: 'to write', isRegular: true, tense: 'present',
    conjugations: {
      yo: 'escribo', tú: 'escribes', él: 'escribe',
      nosotros: 'escribimos', vosotros: 'escribís', ellos: 'escriben',
    },
  },

  // ── Irregular verbs (essential A1) ──────────────────────────
  {
    id: 'es_a1_c030', language: lang, level, infinitive: 'ser',
    translation: 'to be (permanent)', isRegular: false, tense: 'present',
    conjugations: {
      yo: 'soy', tú: 'eres', él: 'es',
      nosotros: 'somos', vosotros: 'sois', ellos: 'son',
    },
  },
  {
    id: 'es_a1_c031', language: lang, level, infinitive: 'estar',
    translation: 'to be (temporary)', isRegular: false, tense: 'present',
    conjugations: {
      yo: 'estoy', tú: 'estás', él: 'está',
      nosotros: 'estamos', vosotros: 'estáis', ellos: 'están',
    },
  },
  {
    id: 'es_a1_c032', language: lang, level, infinitive: 'tener',
    translation: 'to have', isRegular: false, tense: 'present',
    conjugations: {
      yo: 'tengo', tú: 'tienes', él: 'tiene',
      nosotros: 'tenemos', vosotros: 'tenéis', ellos: 'tienen',
    },
  },
  {
    id: 'es_a1_c033', language: lang, level, infinitive: 'ir',
    translation: 'to go', isRegular: false, tense: 'present',
    conjugations: {
      yo: 'voy', tú: 'vas', él: 'va',
      nosotros: 'vamos', vosotros: 'vais', ellos: 'van',
    },
  },
  {
    id: 'es_a1_c034', language: lang, level, infinitive: 'hacer',
    translation: 'to do / to make', isRegular: false, tense: 'present',
    conjugations: {
      yo: 'hago', tú: 'haces', él: 'hace',
      nosotros: 'hacemos', vosotros: 'hacéis', ellos: 'hacen',
    },
  },
  {
    id: 'es_a1_c035', language: lang, level, infinitive: 'poder',
    translation: 'to be able to / can', isRegular: false, tense: 'present',
    conjugations: {
      yo: 'puedo', tú: 'puedes', él: 'puede',
      nosotros: 'podemos', vosotros: 'podéis', ellos: 'pueden',
    },
  },
  {
    id: 'es_a1_c036', language: lang, level, infinitive: 'querer',
    translation: 'to want', isRegular: false, tense: 'present',
    conjugations: {
      yo: 'quiero', tú: 'quieres', él: 'quiere',
      nosotros: 'queremos', vosotros: 'queréis', ellos: 'quieren',
    },
  },
  {
    id: 'es_a1_c037', language: lang, level, infinitive: 'saber',
    translation: 'to know (facts)', isRegular: false, tense: 'present',
    conjugations: {
      yo: 'sé', tú: 'sabes', él: 'sabe',
      nosotros: 'sabemos', vosotros: 'sabéis', ellos: 'saben',
    },
  },
  {
    id: 'es_a1_c038', language: lang, level, infinitive: 'decir',
    translation: 'to say / to tell', isRegular: false, tense: 'present',
    conjugations: {
      yo: 'digo', tú: 'dices', él: 'dice',
      nosotros: 'decimos', vosotros: 'decís', ellos: 'dicen',
    },
  },
];

/** Spanish A1 conjugations with subjectLabels injected. */
export const SPANISH_A1_CONJUGATIONS: ConjugationEntry[] = rawConjugations.map(
  (entry) => ({ ...entry, subjectLabels: SPANISH_SUBJECT_LABELS }),
);

/** Helper to look up a specific verb by infinitive. */
export function getConjugation(infinitive: string, tense = 'present'): ConjugationEntry | undefined {
  return SPANISH_A1_CONJUGATIONS.find(
    (c) => c.infinitive === infinitive && c.tense === tense,
  );
}

/** Get a random subject pronoun key from a conjugation entry (language-agnostic). */
export function randomSubject(entry?: ConjugationEntry): string {
  const subjects = entry
    ? Object.keys(entry.conjugations)
    : SPANISH_SUBJECTS;
  return subjects[Math.floor(Math.random() * subjects.length)];
}

// ── Conjugation Patterns (rules-based teaching) ───────────────

export const SPANISH_A1_CONJUGATION_PATTERNS: ConjugationPattern[] = [
  {
    id: 'es_a1_p001', language: lang, level,
    name: 'Present Tense: -AR Verbs',
    verbEnding: '-ar',
    tense: 'present',
    description:
      'Most Spanish verbs end in -ar, and they\'re the easiest to conjugate! ' +
      'The majority of -AR verbs are regular, meaning they all follow the exact same pattern. ' +
      'Once you learn these endings, you can conjugate hundreds of verbs.',
    rule: 'Take the infinitive (e.g. "hablar"), drop the "-ar" ending to get the stem ("habl-"), then add these endings:',
    endings: {
      yo: '-o',
      tú: '-as',
      él: '-a',
      nosotros: '-amos',
      vosotros: '-áis',
      ellos: '-an',
    },
    subjectLabels: SPANISH_SUBJECT_LABELS,
    exampleVerbs: ['hablar', 'estudiar', 'trabajar', 'comprar', 'cocinar'],
    tips: [
      'The "yo" form always ends in -o for regular present tense verbs (all three groups!).',
      'Notice that -AR has the most unique endings — -as, -a, -amos, -áis, -an. ' +
        'The other groups (-ER, -IR) share some endings with each other.',
      'The vosotros form (-áis) is mainly used in Spain. In Latin America, "ustedes" is used instead.',
    ],
  },
  {
    id: 'es_a1_p002', language: lang, level,
    name: 'Present Tense: -ER Verbs',
    verbEnding: '-er',
    tense: 'present',
    description:
      'The second verb group ends in -er. These verbs follow their own pattern of endings, ' +
      'but notice they share many similarities with -IR verbs. ' +
      'The "yo" form still ends in -o, just like -AR verbs!',
    rule: 'Take the infinitive (e.g. "comer"), drop the "-er" ending to get the stem ("com-"), then add these endings:',
    endings: {
      yo: '-o',
      tú: '-es',
      él: '-e',
      nosotros: '-emos',
      vosotros: '-éis',
      ellos: '-en',
    },
    subjectLabels: SPANISH_SUBJECT_LABELS,
    exampleVerbs: ['comer', 'beber', 'leer', 'aprender'],
    tips: [
      'Compare with -AR: where -AR has -as/-a/-an, -ER has -es/-e/-en. See the pattern? Change the "a" to an "e"!',
      '-ER and -IR verbs share the tú, él, and ellos endings (-es, -e, -en). ' +
        'They only differ in the nosotros and vosotros forms.',
    ],
  },
  {
    id: 'es_a1_p003', language: lang, level,
    name: 'Present Tense: -IR Verbs',
    verbEnding: '-ir',
    tense: 'present',
    description:
      'The third verb group ends in -ir. These endings are almost identical to -ER verbs, ' +
      'with just two differences in the nosotros (-imos vs -emos) and vosotros (-ís vs -éis) forms.',
    rule: 'Take the infinitive (e.g. "vivir"), drop the "-ir" ending to get the stem ("viv-"), then add these endings:',
    endings: {
      yo: '-o',
      tú: '-es',
      él: '-e',
      nosotros: '-imos',
      vosotros: '-ís',
      ellos: '-en',
    },
    subjectLabels: SPANISH_SUBJECT_LABELS,
    exampleVerbs: ['vivir', 'escribir'],
    tips: [
      'Key difference from -ER: nosotros is -imos (not -emos); vosotros is -ís (not -éis).',
      'Tip: All three groups (-AR, -ER, -IR) use -o for yo and -n for ellos. ' +
        'Those are the easiest forms to remember!',
    ],
  },
];

/** Get regular conjugation entries (ones that follow the patterns). */
export function getRegularConjugations(): ConjugationEntry[] {
  return SPANISH_A1_CONJUGATIONS.filter((c) => c.isRegular);
}

/** Get irregular conjugation entries (exceptions that must be memorized). */
export function getIrregularConjugations(): ConjugationEntry[] {
  return SPANISH_A1_CONJUGATIONS.filter((c) => !c.isRegular);
}
