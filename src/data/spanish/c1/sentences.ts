/**
 * Spanish C1 Sentence Patterns
 *
 * Advanced sentences using compound tenses, si clauses type 3,
 * nominalisation, adverbial subjunctive, and academic register.
 */

import type { SentencePattern } from '../../../types';

const lang = 'es' as const;
const level = 'C1' as const;

export const SPANISH_C1_SENTENCES: SentencePattern[] = [
  // ── Pluperfect (3) ────────────────────────────────────────────
  {
    id: 'es_c1_s001', language: lang, level, category: 'pluperfect',
    words: ['Cuando', 'llegué', 'al', 'cine', 'la', 'película', 'ya', 'había', 'empezado'],
    translation: 'When I arrived at the cinema, the film had already started.',
    hint: 'cuando + preterite + pluperfect (había + participle) to show an earlier past action',
    distractors: ['empezó', 'habrá', 'empezará'],
  },
  {
    id: 'es_c1_s002', language: lang, level, category: 'pluperfect',
    words: ['Nunca', 'habíamos', 'visto', 'un', 'paisaje', 'tan', 'impresionante'],
    translation: 'We had never seen such an impressive landscape.',
    hint: 'nunca + pluperfect (habíamos + irregular participle "visto") + adverb of degree',
    distractors: ['hemos', 'ver', 'mucho'],
  },
  {
    id: 'es_c1_s003', language: lang, level, category: 'pluperfect',
    words: ['Me', 'dijo', 'que', 'ya', 'había', 'leído', 'el', 'informe'],
    translation: 'She told me she had already read the report.',
    hint: 'reported speech: preterite (dijo) + que + pluperfect for the earlier action',
    distractors: ['ha', 'leyó', 'leer'],
  },
  // ── Si Clauses Type 3 (3) ─────────────────────────────────────
  {
    id: 'es_c1_s004', language: lang, level, category: 'si_clauses_type3',
    words: ['Si', 'hubiera', 'estudiado', 'más', 'habría', 'aprobado', 'el', 'examen'],
    translation: 'If I had studied more, I would have passed the exam.',
    hint: 'si + pluperfect subjunctive (hubiera + participle) + conditional perfect (habría + participle)',
    distractors: ['estudié', 'aprobaré', 'habré'],
  },
  {
    id: 'es_c1_s005', language: lang, level, category: 'si_clauses_type3',
    words: ['Si', 'hubieras', 'llegado', 'antes', 'habrías', 'conocido', 'al', 'ponente'],
    translation: 'If you had arrived earlier, you would have met the speaker.',
    hint: 'si + pluperfect subjunctive (hubieras) + conditional perfect (habrías) — impossible past',
    distractors: ['llegas', 'conocerás', 'habías'],
  },
  {
    id: 'es_c1_s006', language: lang, level, category: 'si_clauses_type3',
    words: ['Si', 'no', 'hubiera', 'llovido', 'habríamos', 'ido', 'a', 'la', 'playa'],
    translation: 'If it hadn\'t rained, we would have gone to the beach.',
    hint: 'si + no + pluperfect subjunctive + conditional perfect — counterfactual past',
    distractors: ['llueve', 'iremos', 'habremos'],
  },
  // ── Future Perfect (2) ────────────────────────────────────────
  {
    id: 'es_c1_s007', language: lang, level, category: 'future_perfect',
    words: ['Para', 'las', 'ocho', 'habré', 'terminado', 'el', 'informe'],
    translation: 'By eight o\'clock I will have finished the report.',
    hint: 'para + time + future perfect (habré + participle) to express completion before a deadline',
    distractors: ['terminaré', 'había', 'termino'],
  },
  {
    id: 'es_c1_s008', language: lang, level, category: 'future_perfect',
    words: ['Cuando', 'vuelvas', 'ya', 'habrán', 'pintado', 'toda', 'la', 'casa'],
    translation: 'When you return, they will have already painted the whole house.',
    hint: 'cuando + present subjunctive + future perfect (habrán + participle)',
    distractors: ['vuelves', 'pintaron', 'habían'],
  },
  // ── Nominalisation (3) ────────────────────────────────────────
  {
    id: 'es_c1_s009', language: lang, level, category: 'nominalisation',
    words: ['Lo', 'importante', 'es', 'que', 'todos', 'estemos', 'de', 'acuerdo'],
    translation: 'The important thing is that we all agree.',
    hint: 'lo + adjective (nominalisation) + es que + present subjunctive',
    distractors: ['El', 'estamos', 'importantes'],
  },
  {
    id: 'es_c1_s010', language: lang, level, category: 'nominalisation',
    words: ['Lo', 'que', 'me', 'preocupa', 'es', 'la', 'falta', 'de', 'transparencia'],
    translation: 'What worries me is the lack of transparency.',
    hint: 'lo que + verb (nominalised clause as subject) + ser + noun phrase',
    distractors: ['El', 'preocupo', 'faltas'],
  },
  {
    id: 'es_c1_s011', language: lang, level, category: 'nominalisation',
    words: ['No', 'te', 'imaginas', 'lo', 'complicado', 'que', 'fue'],
    translation: 'You can\'t imagine how complicated it was.',
    hint: 'lo + adjective + que — intensifying nominalisation meaning "how (adj) it was"',
    distractors: ['el', 'complicada', 'era'],
  },
  // ── Adverbial Subjunctive (4) ─────────────────────────────────
  {
    id: 'es_c1_s012', language: lang, level, category: 'adverbial_subjunctive',
    words: ['Habla', 'despacio', 'para', 'que', 'te', 'entiendan'],
    translation: 'Speak slowly so that they understand you.',
    hint: 'imperative + para que + present subjunctive — purpose clause always requires subjunctive',
    distractors: ['entienden', 'entenderán', 'porque'],
  },
  {
    id: 'es_c1_s013', language: lang, level, category: 'adverbial_subjunctive',
    words: ['Debemos', 'actuar', 'antes', 'de', 'que', 'sea', 'demasiado', 'tarde'],
    translation: 'We must act before it is too late.',
    hint: 'antes de que + present subjunctive — "before" always triggers subjunctive',
    distractors: ['es', 'será', 'después'],
  },
  {
    id: 'es_c1_s014', language: lang, level, category: 'adverbial_subjunctive',
    words: ['Se', 'fue', 'sin', 'que', 'nadie', 'lo', 'notara'],
    translation: 'He left without anyone noticing.',
    hint: 'sin que + imperfect subjunctive — "without" always triggers subjunctive',
    distractors: ['notó', 'nota', 'notará'],
  },
  {
    id: 'es_c1_s015', language: lang, level, category: 'adverbial_subjunctive',
    words: ['No', 'firmaré', 'el', 'contrato', 'a', 'menos', 'que', 'incluya', 'una', 'cláusula'],
    translation: 'I will not sign the contract unless it includes a clause.',
    hint: 'a menos que + present subjunctive — "unless" always triggers subjunctive',
    distractors: ['incluye', 'incluirá', 'sin'],
  },
];
