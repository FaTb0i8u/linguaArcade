/**
 * Spanish B1 Verb Conjugations
 *
 * At B1 we introduce the imperfect and future tenses, plus
 * the present perfect with common past participles.
 */

import type { ConjugationEntry, ConjugationPattern } from '../../../types';

const lang = 'es' as const;
const level = 'B1' as const;

const LABELS: Record<string, string> = {
  yo: 'yo',
  tú: 'tú',
  él: 'él/ella/usted',
  nosotros: 'nosotros',
  vosotros: 'vosotros',
  ellos: 'ellos/ellas/ustedes',
};

const rawConjugations: Omit<ConjugationEntry, 'subjectLabels'>[] = [
  // ── Imperfect -AR verbs ───────────────────────────────────────
  {
    id: 'es_b1_c001', language: lang, level, infinitive: 'hablar',
    translation: 'to speak', isRegular: true, tense: 'imperfect',
    conjugations: {
      yo: 'hablaba', tú: 'hablabas', él: 'hablaba',
      nosotros: 'hablábamos', vosotros: 'hablabais', ellos: 'hablaban',
    },
  },
  {
    id: 'es_b1_c002', language: lang, level, infinitive: 'jugar',
    translation: 'to play', isRegular: true, tense: 'imperfect',
    conjugations: {
      yo: 'jugaba', tú: 'jugabas', él: 'jugaba',
      nosotros: 'jugábamos', vosotros: 'jugabais', ellos: 'jugaban',
    },
  },
  // ── Imperfect -ER/-IR verbs ───────────────────────────────────
  {
    id: 'es_b1_c003', language: lang, level, infinitive: 'comer',
    translation: 'to eat', isRegular: true, tense: 'imperfect',
    conjugations: {
      yo: 'comía', tú: 'comías', él: 'comía',
      nosotros: 'comíamos', vosotros: 'comíais', ellos: 'comían',
    },
  },
  {
    id: 'es_b1_c004', language: lang, level, infinitive: 'vivir',
    translation: 'to live', isRegular: true, tense: 'imperfect',
    conjugations: {
      yo: 'vivía', tú: 'vivías', él: 'vivía',
      nosotros: 'vivíamos', vosotros: 'vivíais', ellos: 'vivían',
    },
  },
  // ── Imperfect irregular verbs ─────────────────────────────────
  {
    id: 'es_b1_c005', language: lang, level, infinitive: 'ser',
    translation: 'to be (permanent)', isRegular: false, tense: 'imperfect',
    conjugations: {
      yo: 'era', tú: 'eras', él: 'era',
      nosotros: 'éramos', vosotros: 'erais', ellos: 'eran',
    },
  },
  {
    id: 'es_b1_c006', language: lang, level, infinitive: 'ir',
    translation: 'to go', isRegular: false, tense: 'imperfect',
    conjugations: {
      yo: 'iba', tú: 'ibas', él: 'iba',
      nosotros: 'íbamos', vosotros: 'ibais', ellos: 'iban',
    },
  },
  {
    id: 'es_b1_c007', language: lang, level, infinitive: 'ver',
    translation: 'to see', isRegular: false, tense: 'imperfect',
    conjugations: {
      yo: 'veía', tú: 'veías', él: 'veía',
      nosotros: 'veíamos', vosotros: 'veíais', ellos: 'veían',
    },
  },
  // ── Future tense — regular ────────────────────────────────────
  {
    id: 'es_b1_c008', language: lang, level, infinitive: 'hablar',
    translation: 'to speak', isRegular: true, tense: 'future',
    conjugations: {
      yo: 'hablaré', tú: 'hablarás', él: 'hablará',
      nosotros: 'hablaremos', vosotros: 'hablaréis', ellos: 'hablarán',
    },
  },
  {
    id: 'es_b1_c009', language: lang, level, infinitive: 'comer',
    translation: 'to eat', isRegular: true, tense: 'future',
    conjugations: {
      yo: 'comeré', tú: 'comerás', él: 'comerá',
      nosotros: 'comeremos', vosotros: 'comeréis', ellos: 'comerán',
    },
  },
  {
    id: 'es_b1_c010', language: lang, level, infinitive: 'vivir',
    translation: 'to live', isRegular: true, tense: 'future',
    conjugations: {
      yo: 'viviré', tú: 'vivirás', él: 'vivirá',
      nosotros: 'viviremos', vosotros: 'viviréis', ellos: 'vivirán',
    },
  },
  // ── Future tense — irregular stems ────────────────────────────
  {
    id: 'es_b1_c011', language: lang, level, infinitive: 'tener',
    translation: 'to have', isRegular: false, tense: 'future',
    conjugations: {
      yo: 'tendré', tú: 'tendrás', él: 'tendrá',
      nosotros: 'tendremos', vosotros: 'tendréis', ellos: 'tendrán',
    },
  },
  {
    id: 'es_b1_c012', language: lang, level, infinitive: 'poder',
    translation: 'to be able / can', isRegular: false, tense: 'future',
    conjugations: {
      yo: 'podré', tú: 'podrás', él: 'podrá',
      nosotros: 'podremos', vosotros: 'podréis', ellos: 'podrán',
    },
  },
  {
    id: 'es_b1_c013', language: lang, level, infinitive: 'hacer',
    translation: 'to do / to make', isRegular: false, tense: 'future',
    conjugations: {
      yo: 'haré', tú: 'harás', él: 'hará',
      nosotros: 'haremos', vosotros: 'haréis', ellos: 'harán',
    },
  },
  // ── Present perfect (pretérito perfecto) ──────────────────────
  {
    id: 'es_b1_c014', language: lang, level, infinitive: 'hablar',
    translation: 'to speak', isRegular: true, tense: 'present',
    conjugations: {
      yo: 'he hablado', tú: 'has hablado', él: 'ha hablado',
      nosotros: 'hemos hablado', vosotros: 'habéis hablado', ellos: 'han hablado',
    },
  },
  {
    id: 'es_b1_c015', language: lang, level, infinitive: 'comer',
    translation: 'to eat', isRegular: true, tense: 'present',
    conjugations: {
      yo: 'he comido', tú: 'has comido', él: 'ha comido',
      nosotros: 'hemos comido', vosotros: 'habéis comido', ellos: 'han comido',
    },
  },
  {
    id: 'es_b1_c016', language: lang, level, infinitive: 'escribir',
    translation: 'to write', isRegular: false, tense: 'present',
    conjugations: {
      yo: 'he escrito', tú: 'has escrito', él: 'ha escrito',
      nosotros: 'hemos escrito', vosotros: 'habéis escrito', ellos: 'han escrito',
    },
  },
  {
    id: 'es_b1_c017', language: lang, level, infinitive: 'hacer',
    translation: 'to do / to make', isRegular: false, tense: 'present',
    conjugations: {
      yo: 'he hecho', tú: 'has hecho', él: 'ha hecho',
      nosotros: 'hemos hecho', vosotros: 'habéis hecho', ellos: 'han hecho',
    },
  },
];

export const SPANISH_B1_CONJUGATIONS: ConjugationEntry[] = rawConjugations.map((c) => ({
  ...c,
  subjectLabels: LABELS,
}));

// ── Conjugation Patterns ────────────────────────────────────────

export const SPANISH_B1_CONJUGATION_PATTERNS: ConjugationPattern[] = [
  {
    id: 'es_b1_imp_ar',
    language: lang,
    level,
    name: 'Imperfect Tense -AR Verbs',
    verbEnding: '-ar',
    tense: 'imperfect',
    description:
      'The imperfect (pretérito imperfecto) describes habitual or ongoing actions in the past — things you used to do or were doing.',
    rule: 'Drop the -ar ending, then add these imperfect endings.',
    endings: {
      yo: '-aba', tú: '-abas', él: '-aba',
      nosotros: '-ábamos', vosotros: '-abais', ellos: '-aban',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['hablar', 'jugar'],
    tips: [
      'The "yo" and "él/ella/usted" forms are identical in the imperfect — context tells you who.',
      'Use the imperfect for habitual past: "Siempre hablaba con mi abuela" (I always used to talk with my grandmother).',
    ],
  },
  {
    id: 'es_b1_imp_er_ir',
    language: lang,
    level,
    name: 'Imperfect Tense -ER/-IR Verbs',
    verbEnding: '-er/-ir',
    tense: 'imperfect',
    description:
      '-ER and -IR verbs share the same imperfect endings, just like in the preterite.',
    rule: 'Drop the -er or -ir ending, then add these imperfect endings.',
    endings: {
      yo: '-ía', tú: '-ías', él: '-ía',
      nosotros: '-íamos', vosotros: '-íais', ellos: '-ían',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['comer', 'vivir'],
    tips: [
      'All -ER/-IR imperfect forms carry an accent on the í.',
      'Use the imperfect for descriptions: "La casa era grande y tenía un jardín" (The house was big and had a garden).',
    ],
  },
  {
    id: 'es_b1_fut',
    language: lang,
    level,
    name: 'Future Tense (Regular)',
    verbEnding: '-ar/-er/-ir',
    tense: 'future',
    description:
      'The simple future (futuro simple) is formed by adding endings to the FULL infinitive — no need to remove anything!',
    rule: 'Keep the full infinitive, then add these future endings.',
    endings: {
      yo: '-é', tú: '-ás', él: '-á',
      nosotros: '-emos', vosotros: '-éis', ellos: '-án',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['hablar', 'comer', 'vivir'],
    tips: [
      'All future endings (except nosotros) carry a written accent.',
      'The future can also express probability: "¿Dónde estará Juan?" (Where might Juan be?).',
      'Some verbs have irregular stems but use the same endings: tener → tendr-, poder → podr-, hacer → har-.',
    ],
  },
  {
    id: 'es_b1_perf',
    language: lang,
    level,
    name: 'Present Perfect (Pretérito Perfecto)',
    verbEnding: '-ar/-er/-ir',
    tense: 'present',
    description:
      'The present perfect uses the auxiliary verb "haber" conjugated in the present + the past participle. It expresses actions that have happened (often recently or with relevance to now).',
    rule: 'Conjugate "haber" in the present, then add the past participle: -ar → -ado, -er/-ir → -ido.',
    endings: {
      yo: 'he + -ado/-ido', tú: 'has + -ado/-ido', él: 'ha + -ado/-ido',
      nosotros: 'hemos + -ado/-ido', vosotros: 'habéis + -ado/-ido', ellos: 'han + -ado/-ido',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['hablar', 'comer', 'escribir', 'hacer'],
    tips: [
      'Common irregular participles: escrito (escribir), hecho (hacer), dicho (decir), visto (ver), puesto (poner), roto (romper), abierto (abrir), vuelto (volver).',
      'Nothing goes between "haber" and the participle: "No he comido" (I have not eaten).',
      'In Spain, the present perfect is used more for recent past than in Latin America.',
    ],
  },
];
