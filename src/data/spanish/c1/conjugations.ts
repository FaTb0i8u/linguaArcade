/**
 * Spanish C1 Verb Conjugations
 *
 * At C1 we master the imperfect subjunctive and introduce
 * compound tenses: future perfect, conditional perfect, and pluperfect.
 */

import type { ConjugationEntry, ConjugationPattern } from '../../../types';

const lang = 'es' as const;
const level = 'C1' as const;

const LABELS: Record<string, string> = {
  yo: 'yo',
  tú: 'tú',
  él: 'él/ella/usted',
  nosotros: 'nosotros',
  vosotros: 'vosotros',
  ellos: 'ellos/ellas/ustedes',
};

const rawConjugations: Omit<ConjugationEntry, 'subjectLabels'>[] = [
  // ── Pluperfect (había + participle) ───────────────────────────
  {
    id: 'es_c1_c001', language: lang, level, infinitive: 'hablar',
    translation: 'to speak', isRegular: true, tense: 'pluperfect',
    conjugations: {
      yo: 'había hablado', tú: 'habías hablado', él: 'había hablado',
      nosotros: 'habíamos hablado', vosotros: 'habíais hablado', ellos: 'habían hablado',
    },
  },
  {
    id: 'es_c1_c002', language: lang, level, infinitive: 'comer',
    translation: 'to eat', isRegular: true, tense: 'pluperfect',
    conjugations: {
      yo: 'había comido', tú: 'habías comido', él: 'había comido',
      nosotros: 'habíamos comido', vosotros: 'habíais comido', ellos: 'habían comido',
    },
  },
  {
    id: 'es_c1_c003', language: lang, level, infinitive: 'escribir',
    translation: 'to write', isRegular: false, tense: 'pluperfect',
    conjugations: {
      yo: 'había escrito', tú: 'habías escrito', él: 'había escrito',
      nosotros: 'habíamos escrito', vosotros: 'habíais escrito', ellos: 'habían escrito',
    },
  },
  {
    id: 'es_c1_c004', language: lang, level, infinitive: 'hacer',
    translation: 'to do / to make', isRegular: false, tense: 'pluperfect',
    conjugations: {
      yo: 'había hecho', tú: 'habías hecho', él: 'había hecho',
      nosotros: 'habíamos hecho', vosotros: 'habíais hecho', ellos: 'habían hecho',
    },
  },
  // ── Future Perfect (habré + participle) ───────────────────────
  {
    id: 'es_c1_c005', language: lang, level, infinitive: 'hablar',
    translation: 'to speak', isRegular: true, tense: 'future_perfect',
    conjugations: {
      yo: 'habré hablado', tú: 'habrás hablado', él: 'habrá hablado',
      nosotros: 'habremos hablado', vosotros: 'habréis hablado', ellos: 'habrán hablado',
    },
  },
  {
    id: 'es_c1_c006', language: lang, level, infinitive: 'comer',
    translation: 'to eat', isRegular: true, tense: 'future_perfect',
    conjugations: {
      yo: 'habré comido', tú: 'habrás comido', él: 'habrá comido',
      nosotros: 'habremos comido', vosotros: 'habréis comido', ellos: 'habrán comido',
    },
  },
  {
    id: 'es_c1_c007', language: lang, level, infinitive: 'vivir',
    translation: 'to live', isRegular: true, tense: 'future_perfect',
    conjugations: {
      yo: 'habré vivido', tú: 'habrás vivido', él: 'habrá vivido',
      nosotros: 'habremos vivido', vosotros: 'habréis vivido', ellos: 'habrán vivido',
    },
  },
  {
    id: 'es_c1_c008', language: lang, level, infinitive: 'poner',
    translation: 'to put', isRegular: false, tense: 'future_perfect',
    conjugations: {
      yo: 'habré puesto', tú: 'habrás puesto', él: 'habrá puesto',
      nosotros: 'habremos puesto', vosotros: 'habréis puesto', ellos: 'habrán puesto',
    },
  },
  // ── Conditional Perfect (habría + participle) ─────────────────
  {
    id: 'es_c1_c009', language: lang, level, infinitive: 'hablar',
    translation: 'to speak', isRegular: true, tense: 'conditional_perfect',
    conjugations: {
      yo: 'habría hablado', tú: 'habrías hablado', él: 'habría hablado',
      nosotros: 'habríamos hablado', vosotros: 'habríais hablado', ellos: 'habrían hablado',
    },
  },
  {
    id: 'es_c1_c010', language: lang, level, infinitive: 'tener',
    translation: 'to have', isRegular: true, tense: 'conditional_perfect',
    conjugations: {
      yo: 'habría tenido', tú: 'habrías tenido', él: 'habría tenido',
      nosotros: 'habríamos tenido', vosotros: 'habríais tenido', ellos: 'habrían tenido',
    },
  },
  {
    id: 'es_c1_c011', language: lang, level, infinitive: 'decir',
    translation: 'to say / to tell', isRegular: false, tense: 'conditional_perfect',
    conjugations: {
      yo: 'habría dicho', tú: 'habrías dicho', él: 'habría dicho',
      nosotros: 'habríamos dicho', vosotros: 'habríais dicho', ellos: 'habrían dicho',
    },
  },
  // ── Pluperfect Subjunctive (hubiera + participle) ─────────────
  {
    id: 'es_c1_c012', language: lang, level, infinitive: 'hablar',
    translation: 'to speak', isRegular: true, tense: 'pluperfect_subjunctive',
    conjugations: {
      yo: 'hubiera hablado', tú: 'hubieras hablado', él: 'hubiera hablado',
      nosotros: 'hubiéramos hablado', vosotros: 'hubierais hablado', ellos: 'hubieran hablado',
    },
  },
  {
    id: 'es_c1_c013', language: lang, level, infinitive: 'comer',
    translation: 'to eat', isRegular: true, tense: 'pluperfect_subjunctive',
    conjugations: {
      yo: 'hubiera comido', tú: 'hubieras comido', él: 'hubiera comido',
      nosotros: 'hubiéramos comido', vosotros: 'hubierais comido', ellos: 'hubieran comido',
    },
  },
  {
    id: 'es_c1_c014', language: lang, level, infinitive: 'ir',
    translation: 'to go', isRegular: false, tense: 'pluperfect_subjunctive',
    conjugations: {
      yo: 'hubiera ido', tú: 'hubieras ido', él: 'hubiera ido',
      nosotros: 'hubiéramos ido', vosotros: 'hubierais ido', ellos: 'hubieran ido',
    },
  },
];

export const SPANISH_C1_CONJUGATIONS: ConjugationEntry[] = rawConjugations.map((c) => ({
  ...c,
  subjectLabels: LABELS,
}));

// ── Conjugation Patterns ────────────────────────────────────────

export const SPANISH_C1_CONJUGATION_PATTERNS: ConjugationPattern[] = [
  {
    id: 'es_c1_plup',
    language: lang,
    level,
    name: 'Pluperfect (Past Perfect)',
    verbEnding: '-ar/-er/-ir',
    tense: 'pluperfect',
    description:
      'The pluperfect (pretérito pluscuamperfecto) is formed with the imperfect of "haber" + past participle. It describes an action completed before another past action: "Cuando llegué, ya habían comido." (When I arrived, they had already eaten.)',
    rule: 'Use the imperfect forms of "haber" (había, habías, había, habíamos, habíais, habían) + past participle (-ado for -ar verbs, -ido for -er/-ir verbs). Irregular participles: hecho, escrito, puesto, dicho, visto, abierto, roto, vuelto.',
    endings: {
      yo: 'había + -ado/-ido', tú: 'habías + -ado/-ido', él: 'había + -ado/-ido',
      nosotros: 'habíamos + -ado/-ido', vosotros: 'habíais + -ado/-ido', ellos: 'habían + -ado/-ido',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['hablar', 'comer', 'escribir', 'hacer'],
    tips: [
      'The past participle never changes form in compound tenses — it always ends in -o: "Ella había hablado", NOT "había hablada".',
      'Nothing can come between "haber" and the participle: "Ya lo había visto" (pronoun goes before haber).',
      'Common irregular participles to memorize: hacer → hecho, escribir → escrito, poner → puesto, decir → dicho, ver → visto, abrir → abierto, romper → roto, volver → vuelto.',
    ],
  },
  {
    id: 'es_c1_fut_perf',
    language: lang,
    level,
    name: 'Future Perfect',
    verbEnding: '-ar/-er/-ir',
    tense: 'future_perfect',
    description:
      'The future perfect (futuro perfecto) is formed with the future of "haber" + past participle. It expresses an action that will be completed before a future point or speculates about the past: "Para las diez, ya habré terminado." (By ten, I will have finished.)',
    rule: 'Use the future forms of "haber" (habré, habrás, habrá, habremos, habréis, habrán) + past participle (-ado/-ido or irregular).',
    endings: {
      yo: 'habré + -ado/-ido', tú: 'habrás + -ado/-ido', él: 'habrá + -ado/-ido',
      nosotros: 'habremos + -ado/-ido', vosotros: 'habréis + -ado/-ido', ellos: 'habrán + -ado/-ido',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['hablar', 'comer', 'vivir', 'poner'],
    tips: [
      'Used for speculation about the past: "¿Habrán llegado ya?" (Could they have arrived already?)',
      'Often paired with time markers like "para + time", "antes de que", "cuando".',
      'The future of "haber" has an irregular stem: habr- (NOT "haber-é").',
    ],
  },
  {
    id: 'es_c1_cond_perf',
    language: lang,
    level,
    name: 'Conditional Perfect',
    verbEnding: '-ar/-er/-ir',
    tense: 'conditional_perfect',
    description:
      'The conditional perfect (condicional perfecto) is formed with the conditional of "haber" + past participle. It expresses what would have happened: "Habría ido, pero estaba enfermo." (I would have gone, but I was sick.) Essential for Type 3 si clauses.',
    rule: 'Use the conditional forms of "haber" (habría, habrías, habría, habríamos, habríais, habrían) + past participle (-ado/-ido or irregular).',
    endings: {
      yo: 'habría + -ado/-ido', tú: 'habrías + -ado/-ido', él: 'habría + -ado/-ido',
      nosotros: 'habríamos + -ado/-ido', vosotros: 'habríais + -ado/-ido', ellos: 'habrían + -ado/-ido',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['hablar', 'tener', 'decir'],
    tips: [
      'In Type 3 si clauses: "Si hubiera estudiado, habría aprobado." (If I had studied, I would have passed.)',
      'Also used for speculation about past events: "Habrían sido las tres cuando llamó." (It must have been about three when he called.)',
      'The conditional of "haber" uses the same irregular stem as the future: habr- + conditional endings.',
    ],
  },
  {
    id: 'es_c1_plup_subj',
    language: lang,
    level,
    name: 'Pluperfect Subjunctive',
    verbEnding: '-ar/-er/-ir',
    tense: 'pluperfect_subjunctive',
    description:
      'The pluperfect subjunctive (pretérito pluscuamperfecto de subjuntivo) is formed with the imperfect subjunctive of "haber" + past participle. It is essential for Type 3 si clauses and past hypothetical wishes: "Ojalá hubiera sabido." (I wish I had known.)',
    rule: 'Use the imperfect subjunctive forms of "haber" (hubiera, hubieras, hubiera, hubiéramos, hubierais, hubieran) + past participle (-ado/-ido or irregular). The alternative -se forms (hubiese, hubieses…) are equally valid.',
    endings: {
      yo: 'hubiera + -ado/-ido', tú: 'hubieras + -ado/-ido', él: 'hubiera + -ado/-ido',
      nosotros: 'hubiéramos + -ado/-ido', vosotros: 'hubierais + -ado/-ido', ellos: 'hubieran + -ado/-ido',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['hablar', 'comer', 'ir'],
    tips: [
      'Goes in the si clause of Type 3 conditionals: "Si hubiera tenido tiempo, habría ido." (If I had had time, I would have gone.)',
      'Used after "ojalá" for past regret: "Ojalá hubieras venido." (I wish you had come.)',
      'The -se alternative is common in formal writing: "Si hubiese sabido…" = "Si hubiera sabido…"',
    ],
  },
];
