/**
 * Spanish B2 Sentence Patterns
 *
 * Upper-intermediate sentences using conditional, subjunctive,
 * si clauses, passive voice, and advanced connectors.
 */

import type { SentencePattern } from '../../../types';

const lang = 'es' as const;
const level = 'B2' as const;

export const SPANISH_B2_SENTENCES: SentencePattern[] = [
  // ── Conditional ───────────────────────────────────────────────
  {
    id: 'es_b2_s001', language: lang, level, category: 'conditional',
    words: ['Me', 'gustaría', 'viajar', 'por', 'Sudamérica'],
    translation: 'I would like to travel through South America.',
    hint: 'indirect object pronoun + conditional (gustar) + infinitive + preposition + place',
    distractors: ['gusta', 'viajé', 'en'],
  },
  {
    id: 'es_b2_s002', language: lang, level, category: 'conditional',
    words: ['¿Podrías', 'ayudarme', 'con', 'este', 'problema?'],
    translation: 'Could you help me with this problem?',
    hint: 'conditional (poder) + infinitive with pronoun + preposition + demonstrative + noun',
    distractors: ['puedes', 'ayudar', 'ese'],
  },
  {
    id: 'es_b2_s003', language: lang, level, category: 'conditional',
    words: ['En', 'tu', 'lugar', 'yo', 'hablaría', 'con', 'el', 'jefe'],
    translation: 'In your place, I would talk to the boss.',
    hint: 'preposition + possessive + noun + subject + conditional + preposition + article + noun',
    distractors: ['hablé', 'hablaré', 'mi'],
  },
  // ── Subjunctive ───────────────────────────────────────────────
  {
    id: 'es_b2_s004', language: lang, level, category: 'subjunctive',
    words: ['Espero', 'que', 'tengas', 'un', 'buen', 'viaje'],
    translation: 'I hope you have a good trip.',
    hint: 'present (esperar) + que + present subjunctive + article + adjective + noun',
    distractors: ['tienes', 'tuvieras', 'mal'],
  },
  {
    id: 'es_b2_s005', language: lang, level, category: 'subjunctive',
    words: ['No', 'creo', 'que', 'sea', 'tan', 'difícil'],
    translation: 'I don\'t think it is that difficult.',
    hint: 'negation + present (creer) + que + present subjunctive (ser) + adverb + adjective',
    distractors: ['es', 'fuera', 'fácil'],
  },
  {
    id: 'es_b2_s006', language: lang, level, category: 'subjunctive',
    words: ['Es', 'necesario', 'que', 'todos', 'participen', 'en', 'la', 'reunión'],
    translation: 'It is necessary that everyone participates in the meeting.',
    hint: 'impersonal expression + que + present subjunctive + preposition + article + noun',
    distractors: ['participan', 'participaron', 'ninguno'],
  },
  // ── Si Clauses ────────────────────────────────────────────────
  {
    id: 'es_b2_s007', language: lang, level, category: 'si_clauses',
    words: ['Si', 'estudias', 'mucho', 'aprobarás', 'el', 'examen'],
    translation: 'If you study a lot, you will pass the exam.',
    hint: 'si + present indicative + adverb + future + article + noun',
    distractors: ['estudiaras', 'aprobarías', 'un'],
  },
  {
    id: 'es_b2_s008', language: lang, level, category: 'si_clauses',
    words: ['Si', 'tuviera', 'dinero', 'compraría', 'una', 'casa'],
    translation: 'If I had money, I would buy a house.',
    hint: 'si + imperfect subjunctive + noun + conditional + article + noun',
    distractors: ['tengo', 'compro', 'el'],
  },
  {
    id: 'es_b2_s009', language: lang, level, category: 'si_clauses',
    words: ['Si', 'pudiera', 'elegir', 'viviría', 'en', 'Barcelona'],
    translation: 'If I could choose, I would live in Barcelona.',
    hint: 'si + imperfect subjunctive (poder) + infinitive + conditional (vivir) + preposition + place',
    distractors: ['puedo', 'vivo', 'a'],
  },
  // ── Passive Voice ─────────────────────────────────────────────
  {
    id: 'es_b2_s010', language: lang, level, category: 'passive_voice',
    words: ['La', 'novela', 'fue', 'escrita', 'por', 'García', 'Márquez'],
    translation: 'The novel was written by García Márquez.',
    hint: 'article + noun + ser (preterite) + past participle (f.) + por + agent',
    distractors: ['escribió', 'escrito', 'de'],
  },
  {
    id: 'es_b2_s011', language: lang, level, category: 'passive_voice',
    words: ['Las', 'cartas', 'fueron', 'enviadas', 'ayer'],
    translation: 'The letters were sent yesterday.',
    hint: 'article + noun (f. pl.) + ser (preterite pl.) + past participle (f. pl.) + time',
    distractors: ['enviaron', 'enviados', 'mañana'],
  },
  {
    id: 'es_b2_s012', language: lang, level, category: 'passive_voice',
    words: ['El', 'proyecto', 'será', 'presentado', 'por', 'el', 'equipo'],
    translation: 'The project will be presented by the team.',
    hint: 'article + noun + ser (future) + past participle + por + article + noun',
    distractors: ['presentó', 'presentada', 'de'],
  },
  // ── Advanced Connectors ───────────────────────────────────────
  {
    id: 'es_b2_s013', language: lang, level, category: 'advanced_connectors',
    words: ['Es', 'caro;', 'sin', 'embargo,', 'vale', 'la', 'pena'],
    translation: 'It is expensive; however, it is worth it.',
    hint: 'statement + sin embargo (however) + contrasting idea',
    distractors: ['pero', 'además', 'barato'],
  },
  {
    id: 'es_b2_s014', language: lang, level, category: 'advanced_connectors',
    words: ['A', 'pesar', 'de', 'las', 'dificultades', 'lograron', 'terminar'],
    translation: 'Despite the difficulties, they managed to finish.',
    hint: 'a pesar de + article + noun + preterite (lograr) + infinitive',
    distractors: ['sin', 'embargo', 'lograban'],
  },
  {
    id: 'es_b2_s015', language: lang, level, category: 'advanced_connectors',
    words: ['No', 'estudió;', 'por', 'lo', 'tanto,', 'suspendió', 'el', 'examen'],
    translation: 'He didn\'t study; therefore, he failed the exam.',
    hint: 'negative statement + por lo tanto (therefore) + consequence',
    distractors: ['sin', 'embargo', 'aprobó'],
  },
  {
    id: 'es_b2_s016', language: lang, level, category: 'advanced_connectors',
    words: ['Además', 'de', 'hablar', 'español', 'domina', 'el', 'francés'],
    translation: 'Besides speaking Spanish, she is fluent in French.',
    hint: 'además de + infinitive + noun + present (dominar) + article + noun',
    distractors: ['sin', 'embargo', 'dominaba'],
  },
];
