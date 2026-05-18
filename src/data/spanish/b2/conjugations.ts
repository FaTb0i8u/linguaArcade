/**
 * Spanish B2 Verb Conjugations
 *
 * At B2 we introduce the conditional tense and present subjunctive.
 */

import type { ConjugationEntry, ConjugationPattern } from '../../../types';

const lang = 'es' as const;
const level = 'B2' as const;

const LABELS: Record<string, string> = {
  yo: 'yo',
  tú: 'tú',
  él: 'él/ella/usted',
  nosotros: 'nosotros',
  vosotros: 'vosotros',
  ellos: 'ellos/ellas/ustedes',
};

const rawConjugations: Omit<ConjugationEntry, 'subjectLabels'>[] = [
  // ── Conditional — regular ─────────────────────────────────────
  {
    id: 'es_b2_c001', language: lang, level, infinitive: 'hablar',
    translation: 'to speak', isRegular: true, tense: 'conditional',
    conjugations: {
      yo: 'hablaría', tú: 'hablarías', él: 'hablaría',
      nosotros: 'hablaríamos', vosotros: 'hablaríais', ellos: 'hablarían',
    },
  },
  {
    id: 'es_b2_c002', language: lang, level, infinitive: 'comer',
    translation: 'to eat', isRegular: true, tense: 'conditional',
    conjugations: {
      yo: 'comería', tú: 'comerías', él: 'comería',
      nosotros: 'comeríamos', vosotros: 'comeríais', ellos: 'comerían',
    },
  },
  {
    id: 'es_b2_c003', language: lang, level, infinitive: 'vivir',
    translation: 'to live', isRegular: true, tense: 'conditional',
    conjugations: {
      yo: 'viviría', tú: 'vivirías', él: 'viviría',
      nosotros: 'viviríamos', vosotros: 'viviríais', ellos: 'vivirían',
    },
  },
  // ── Conditional — irregular stems ─────────────────────────────
  {
    id: 'es_b2_c004', language: lang, level, infinitive: 'tener',
    translation: 'to have', isRegular: false, tense: 'conditional',
    conjugations: {
      yo: 'tendría', tú: 'tendrías', él: 'tendría',
      nosotros: 'tendríamos', vosotros: 'tendríais', ellos: 'tendrían',
    },
  },
  {
    id: 'es_b2_c005', language: lang, level, infinitive: 'poder',
    translation: 'to be able / can', isRegular: false, tense: 'conditional',
    conjugations: {
      yo: 'podría', tú: 'podrías', él: 'podría',
      nosotros: 'podríamos', vosotros: 'podríais', ellos: 'podrían',
    },
  },
  {
    id: 'es_b2_c006', language: lang, level, infinitive: 'hacer',
    translation: 'to do / to make', isRegular: false, tense: 'conditional',
    conjugations: {
      yo: 'haría', tú: 'harías', él: 'haría',
      nosotros: 'haríamos', vosotros: 'haríais', ellos: 'harían',
    },
  },
  // ── Present Subjunctive — regular ─────────────────────────────
  {
    id: 'es_b2_c007', language: lang, level, infinitive: 'hablar',
    translation: 'to speak', isRegular: true, tense: 'present_subjunctive',
    conjugations: {
      yo: 'hable', tú: 'hables', él: 'hable',
      nosotros: 'hablemos', vosotros: 'habléis', ellos: 'hablen',
    },
  },
  {
    id: 'es_b2_c008', language: lang, level, infinitive: 'comer',
    translation: 'to eat', isRegular: true, tense: 'present_subjunctive',
    conjugations: {
      yo: 'coma', tú: 'comas', él: 'coma',
      nosotros: 'comamos', vosotros: 'comáis', ellos: 'coman',
    },
  },
  {
    id: 'es_b2_c009', language: lang, level, infinitive: 'vivir',
    translation: 'to live', isRegular: true, tense: 'present_subjunctive',
    conjugations: {
      yo: 'viva', tú: 'vivas', él: 'viva',
      nosotros: 'vivamos', vosotros: 'viváis', ellos: 'vivan',
    },
  },
  // ── Present Subjunctive — irregular ───────────────────────────
  {
    id: 'es_b2_c010', language: lang, level, infinitive: 'ser',
    translation: 'to be (permanent)', isRegular: false, tense: 'present_subjunctive',
    conjugations: {
      yo: 'sea', tú: 'seas', él: 'sea',
      nosotros: 'seamos', vosotros: 'seáis', ellos: 'sean',
    },
  },
  {
    id: 'es_b2_c011', language: lang, level, infinitive: 'ir',
    translation: 'to go', isRegular: false, tense: 'present_subjunctive',
    conjugations: {
      yo: 'vaya', tú: 'vayas', él: 'vaya',
      nosotros: 'vayamos', vosotros: 'vayáis', ellos: 'vayan',
    },
  },
  // ── Imperfect Subjunctive — introduction ──────────────────────
  {
    id: 'es_b2_c012', language: lang, level, infinitive: 'hablar',
    translation: 'to speak', isRegular: true, tense: 'imperfect_subjunctive',
    conjugations: {
      yo: 'hablara', tú: 'hablaras', él: 'hablara',
      nosotros: 'habláramos', vosotros: 'hablarais', ellos: 'hablaran',
    },
  },
  {
    id: 'es_b2_c013', language: lang, level, infinitive: 'comer',
    translation: 'to eat', isRegular: true, tense: 'imperfect_subjunctive',
    conjugations: {
      yo: 'comiera', tú: 'comieras', él: 'comiera',
      nosotros: 'comiéramos', vosotros: 'comierais', ellos: 'comieran',
    },
  },
  {
    id: 'es_b2_c014', language: lang, level, infinitive: 'tener',
    translation: 'to have', isRegular: false, tense: 'imperfect_subjunctive',
    conjugations: {
      yo: 'tuviera', tú: 'tuvieras', él: 'tuviera',
      nosotros: 'tuviéramos', vosotros: 'tuvierais', ellos: 'tuvieran',
    },
  },
];

export const SPANISH_B2_CONJUGATIONS: ConjugationEntry[] = rawConjugations.map((c) => ({
  ...c,
  subjectLabels: LABELS,
}));

// ── Conjugation Patterns ────────────────────────────────────────

export const SPANISH_B2_CONJUGATION_PATTERNS: ConjugationPattern[] = [
  {
    id: 'es_b2_cond',
    language: lang,
    level,
    name: 'Conditional Tense (Regular)',
    verbEnding: '-ar/-er/-ir',
    tense: 'conditional',
    description:
      'The conditional (condicional simple) is formed by adding endings to the FULL infinitive — the same stem as the future tense. It expresses hypothetical situations, polite requests, and advice.',
    rule: 'Keep the full infinitive, then add these conditional endings (same as imperfect -ER/-IR endings).',
    endings: {
      yo: '-ía', tú: '-ías', él: '-ía',
      nosotros: '-íamos', vosotros: '-íais', ellos: '-ían',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['hablar', 'comer', 'vivir'],
    tips: [
      'The "yo" and "él/ella/usted" forms are identical — context tells you who.',
      'Irregular conditional stems are the same as irregular future stems: tener → tendr-, poder → podr-, hacer → har-, salir → saldr-, venir → vendr-, decir → dir-, querer → querr-, saber → sabr-.',
      'Use it for polite requests: "¿Podrías ayudarme?" (Could you help me?)',
    ],
  },
  {
    id: 'es_b2_subj_ar',
    language: lang,
    level,
    name: 'Present Subjunctive -AR Verbs',
    verbEnding: '-ar',
    tense: 'present_subjunctive',
    description:
      'The present subjunctive for -AR verbs "flips" the vowel: instead of -a endings (indicative), you use -e endings. It is used after expressions of emotion, doubt, desire, and impersonal judgments.',
    rule: 'Take the yo form of the present indicative, drop the -o, then add these -e endings.',
    endings: {
      yo: '-e', tú: '-es', él: '-e',
      nosotros: '-emos', vosotros: '-éis', ellos: '-en',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['hablar'],
    tips: [
      'The subjunctive is triggered by WEIRDO: Wishes, Emotions, Impersonal expressions, Recommendations, Doubt/Denial, Ojalá.',
      'Example: "Espero que hables con ella." (I hope you talk to her.)',
    ],
  },
  {
    id: 'es_b2_subj_er_ir',
    language: lang,
    level,
    name: 'Present Subjunctive -ER/-IR Verbs',
    verbEnding: '-er/-ir',
    tense: 'present_subjunctive',
    description:
      'The present subjunctive for -ER and -IR verbs "flips" the vowel: instead of -e/-i endings (indicative), you use -a endings.',
    rule: 'Take the yo form of the present indicative, drop the -o, then add these -a endings.',
    endings: {
      yo: '-a', tú: '-as', él: '-a',
      nosotros: '-amos', vosotros: '-áis', ellos: '-an',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['comer', 'vivir'],
    tips: [
      'Remember the vowel flip: -AR → e endings, -ER/-IR → a endings.',
      'Example: "Dudo que coma antes de las dos." (I doubt he eats before two.)',
    ],
  },
  {
    id: 'es_b2_imp_subj',
    language: lang,
    level,
    name: 'Imperfect Subjunctive',
    verbEnding: '-ar/-er/-ir',
    tense: 'imperfect_subjunctive',
    description:
      'The imperfect subjunctive is formed from the ellos/ellas form of the preterite. Drop -ron and add the imperfect subjunctive endings. It is used in si clauses (Type 2), past subjunctive contexts, and polite expressions.',
    rule: 'Take the ellos preterite form, drop -ron, then add these endings. -AR verbs use -ara endings; -ER/-IR verbs use -iera endings.',
    endings: {
      yo: '-ra', tú: '-ras', él: '-ra',
      nosotros: '-ramos', vosotros: '-rais', ellos: '-ran',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['hablar', 'comer', 'tener'],
    tips: [
      'There is an alternative set of endings: -se, -ses, -se, -semos, -seis, -sen. Both are correct, but -ra forms are more common in everyday speech.',
      'The nosotros form always carries a written accent: habláramos, comiéramos, tuviéramos.',
      'Used in Type 2 si clauses: "Si tuviera dinero, viajaría." (If I had money, I would travel.)',
    ],
  },
];
