/**
 * Spanish C2 Verb Conjugations — Rare irregular forms and nuanced verbs.
 */
import type { ConjugationEntry, ConjugationPattern } from '../../../types';
const lang = 'es' as const;
const level = 'C2' as const;

const LABELS: Record<string, string> = {
  yo: 'yo',
  tú: 'tú',
  él: 'él/ella/usted',
  nosotros: 'nosotros',
  vosotros: 'vosotros',
  ellos: 'ellos/ellas/ustedes',
};

const rawConjugations: Omit<ConjugationEntry, 'subjectLabels'>[] = [
  // ── Irregular Present Subjunctive ─────────────────────────────
  {
    id: 'es_c2_c001', language: lang, level, infinitive: 'caber',
    translation: 'to fit', isRegular: false, tense: 'present_subjunctive',
    conjugations: {
      yo: 'quepa', tú: 'quepas', él: 'quepa',
      nosotros: 'quepamos', vosotros: 'quepáis', ellos: 'quepan',
    },
  },
  {
    id: 'es_c2_c002', language: lang, level, infinitive: 'satisfacer',
    translation: 'to satisfy', isRegular: false, tense: 'present_subjunctive',
    conjugations: {
      yo: 'satisfaga', tú: 'satisfagas', él: 'satisfaga',
      nosotros: 'satisfagamos', vosotros: 'satisfagáis', ellos: 'satisfagan',
    },
  },
  {
    id: 'es_c2_c003', language: lang, level, infinitive: 'yacer',
    translation: 'to lie (be recumbent)', isRegular: false, tense: 'present_subjunctive',
    conjugations: {
      yo: 'yazca', tú: 'yazcas', él: 'yazca',
      nosotros: 'yazcamos', vosotros: 'yazcáis', ellos: 'yazcan',
    },
  },
  {
    id: 'es_c2_c004', language: lang, level, infinitive: 'erguir',
    translation: 'to raise / to erect', isRegular: false, tense: 'present_subjunctive',
    conjugations: {
      yo: 'yerga', tú: 'yergas', él: 'yerga',
      nosotros: 'yergamos', vosotros: 'yergáis', ellos: 'yergan',
    },
  },
  // ── J-Stem Imperfect Subjunctive ──────────────────────────────
  {
    id: 'es_c2_c005', language: lang, level, infinitive: 'conducir',
    translation: 'to drive / to lead', isRegular: false, tense: 'imperfect_subjunctive',
    conjugations: {
      yo: 'condujera', tú: 'condujeras', él: 'condujera',
      nosotros: 'condujéramos', vosotros: 'condujerais', ellos: 'condujeran',
    },
  },
  {
    id: 'es_c2_c006', language: lang, level, infinitive: 'traer',
    translation: 'to bring', isRegular: false, tense: 'imperfect_subjunctive',
    conjugations: {
      yo: 'trajera', tú: 'trajeras', él: 'trajera',
      nosotros: 'trajéramos', vosotros: 'trajerais', ellos: 'trajeran',
    },
  },
  {
    id: 'es_c2_c007', language: lang, level, infinitive: 'producir',
    translation: 'to produce', isRegular: false, tense: 'imperfect_subjunctive',
    conjugations: {
      yo: 'produjera', tú: 'produjeras', él: 'produjera',
      nosotros: 'produjéramos', vosotros: 'produjerais', ellos: 'produjeran',
    },
  },
  // ── Irregular Conditional ─────────────────────────────────────
  {
    id: 'es_c2_c008', language: lang, level, infinitive: 'caber',
    translation: 'to fit', isRegular: false, tense: 'conditional',
    conjugations: {
      yo: 'cabría', tú: 'cabrías', él: 'cabría',
      nosotros: 'cabríamos', vosotros: 'cabríais', ellos: 'cabrían',
    },
  },
  {
    id: 'es_c2_c009', language: lang, level, infinitive: 'valer',
    translation: 'to be worth', isRegular: false, tense: 'conditional',
    conjugations: {
      yo: 'valdría', tú: 'valdrías', él: 'valdría',
      nosotros: 'valdríamos', vosotros: 'valdríais', ellos: 'valdrían',
    },
  },
  {
    id: 'es_c2_c010', language: lang, level, infinitive: 'satisfacer',
    translation: 'to satisfy', isRegular: false, tense: 'conditional',
    conjugations: {
      yo: 'satisfaría', tú: 'satisfarías', él: 'satisfaría',
      nosotros: 'satisfaríamos', vosotros: 'satisfaríais', ellos: 'satisfarían',
    },
  },
];

export const SPANISH_C2_CONJUGATIONS: ConjugationEntry[] = rawConjugations.map((c) => ({
  ...c,
  subjectLabels: LABELS,
}));

// ── Conjugation Patterns ────────────────────────────────────────

export const SPANISH_C2_CONJUGATION_PATTERNS: ConjugationPattern[] = [
  {
    id: 'es_c2_irreg_pres_subj',
    language: lang,
    level,
    name: 'Irregular Present Subjunctive Stems',
    verbEnding: 'irregular',
    tense: 'present_subjunctive',
    description:
      'Several Spanish verbs have highly irregular stems in the present subjunctive that cannot be predicted from their infinitive form. These verbs derive their subjunctive stem from the first-person singular present indicative (yo form), but with unique consonant changes: caber → quep-, satisfacer → satisfag-, yacer → yazc-, erguir → yerg-. Mastery of these forms is essential at C2 level.',
    rule: 'Take the irregular yo-form stem and add present subjunctive endings: -a, -as, -a, -amos, -áis, -an. These stems must be memorized individually.',
    endings: {
      yo: '-a', tú: '-as', él: '-a',
      nosotros: '-amos', vosotros: '-áis', ellos: '-an',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['caber', 'satisfacer', 'yacer', 'erguir'],
    tips: [
      'Caber: yo quepo → subjunctive quepa (the "quep-" stem is unique to this verb).',
      'Satisfacer follows the pattern of hacer but retains its prefix: satisfag- mirrors hag-.',
      'Yacer has three accepted subjunctive forms: yazca, yazga, yaga — all are correct, but yazca is the most common in modern usage.',
      'Erguir alternates between yerg- and irg- stems; "yerga" is preferred in standard Spanish.',
    ],
  },
  {
    id: 'es_c2_j_stem_imp_subj',
    language: lang,
    level,
    name: 'J-Stem Imperfect Subjunctive',
    verbEnding: '-ucir/-aer',
    tense: 'imperfect_subjunctive',
    description:
      'Verbs ending in -ucir (conducir, producir, traducir) and -aer (traer, atraer) form their preterite with a j-stem (conduj-, produj-, traj-). The imperfect subjunctive is derived from this preterite stem, producing forms like condujera, trajera, produjera. Note that these forms do NOT take the expected -iera ending with an initial "i" — the "j" replaces it.',
    rule: 'Take the j-stem from the preterite (third person plural minus -eron: condujeron → conduj-) and add: -era, -eras, -era, -éramos, -erais, -eran. Note: -jera, not -jiera.',
    endings: {
      yo: '-era', tú: '-eras', él: '-era',
      nosotros: '-éramos', vosotros: '-erais', ellos: '-eran',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['conducir', 'traer', 'producir'],
    tips: [
      'The j-stem preterite forms never carry an accent on the third person: "condujeron" (not *condujéron).',
      'All -ucir verbs follow this pattern: traducir → tradujera, reducir → redujera, deducir → dedujera.',
      'Compounds of traer follow the same pattern: atraer → atrajera, distraer → distrajera, sustraer → sustrajera.',
    ],
  },
];
