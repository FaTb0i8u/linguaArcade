/**
 * Spanish C2 Sentence Patterns for the Sentence Builder game.
 *
 * Mastery-level sentences: complex subordination, literary tenses,
 * idiomatic expressions, formal register, and rhetorical devices.
 */

import type { SentencePattern } from '../../../types';

const lang = 'es' as const;
const level = 'C2' as const;

export const SPANISH_C2_SENTENCES: SentencePattern[] = [
  // ── Idiomatic Subjunctive ────────────────────────────────────
  {
    id: 'es_c2_s001', language: lang, level, category: 'idiomatic_subjunctive',
    words: ['Cueste', 'lo', 'que', 'cueste', ',', 'lograremos', 'nuestro', 'objetivo'],
    translation: 'Whatever it takes, we will achieve our objective.',
    hint: 'Idiomatic: cueste lo que cueste = whatever it costs / whatever it takes.',
  },
  {
    id: 'es_c2_s002', language: lang, level, category: 'idiomatic_subjunctive',
    words: ['Digan', 'lo', 'que', 'digan', ',', 'la', 'evidencia', 'es', 'irrefutable'],
    translation: 'No matter what they say, the evidence is irrefutable.',
    hint: 'Digan lo que digan = no matter what they say.',
  },
  {
    id: 'es_c2_s003', language: lang, level, category: 'idiomatic_subjunctive',
    words: ['Que', 'yo', 'sepa', ',', 'nadie', 'ha', 'presentado', 'una', 'objeción', 'formal'],
    translation: 'As far as I know, nobody has filed a formal objection.',
    hint: 'Que yo sepa = as far as I know (subjunctive).',
  },
  // ── Complex Subordination ────────────────────────────────────
  {
    id: 'es_c2_s004', language: lang, level, category: 'complex_subordination',
    words: ['Dado', 'que', 'el', 'plazo', 'había', 'expirado', ',', 'solicitaron', 'que', 'se', 'prorrogara'],
    translation: 'Given that the deadline had expired, they requested that it be extended.',
    hint: 'dado que (given that) + indicative; que se prorrogara = subjunctive in nominal clause.',
  },
  {
    id: 'es_c2_s005', language: lang, level, category: 'complex_subordination',
    words: ['Si', 'bien', 'los', 'datos', 'eran', 'prometedores', ',', 'los', 'resultados', 'no', 'fueron', 'replicables'],
    translation: 'Although the data were promising, the results were not replicable.',
    hint: 'Si bien = although / even though (concessive connector).',
  },
  {
    id: 'es_c2_s006', language: lang, level, category: 'complex_subordination',
    words: ['Pese', 'a', 'que', 'se', 'tomaron', 'medidas', ',', 'los', 'daños', 'fueron', 'considerables'],
    translation: 'Despite the fact that measures were taken, the damage was considerable.',
    hint: 'Pese a que + indicative = despite the fact that.',
  },
  // ── Formal Register ──────────────────────────────────────────
  {
    id: 'es_c2_s007', language: lang, level, category: 'formal_register',
    words: ['Cabe', 'señalar', 'que', 'los', 'resultados', 'no', 'son', 'concluyentes'],
    translation: 'It should be noted that the results are not conclusive.',
    hint: 'Cabe + infinitive = it is fitting to / one should (impersonal formal).',
  },
  {
    id: 'es_c2_s008', language: lang, level, category: 'formal_register',
    words: ['Se', 'procedió', 'a', 'la', 'evacuación', 'de', 'los', 'ocupantes', 'del', 'edificio'],
    translation: 'The evacuation of the building occupants was carried out.',
    hint: 'Impersonal se + nominalised verb = very formal register.',
  },
  {
    id: 'es_c2_s009', language: lang, level, category: 'formal_register',
    words: ['Quisiera', 'solicitar', 'una', 'prórroga', 'para', 'la', 'entrega', 'del', 'informe'],
    translation: 'I would like to request an extension for the submission of the report.',
    hint: 'Quisiera (imperfect subjunctive of querer) = very polite "I would like".',
  },
  // ── Rhetorical / Literary ────────────────────────────────────
  {
    id: 'es_c2_s010', language: lang, level, category: 'literary',
    words: ['En', '1808', ',', 'Napoleón', 'invade', 'España', 'y', 'destituye', 'a', 'la', 'familia', 'real'],
    translation: 'In 1808, Napoleon invades Spain and deposes the royal family.',
    hint: 'Historical present: present tense used to narrate past events vividly.',
  },
  {
    id: 'es_c2_s011', language: lang, level, category: 'literary',
    words: ['No', 'es', 'imposible', 'que', 'lleguemos', 'a', 'un', 'acuerdo', 'satisfactorio'],
    translation: 'It is not impossible that we reach a satisfactory agreement.',
    hint: 'Litotes: expressing something positive through double negation.',
  },
  {
    id: 'es_c2_s012', language: lang, level, category: 'literary',
    words: ['Terminadas', 'las', 'deliberaciones', ',', 'el', 'presidente', 'anunció', 'la', 'resolución'],
    translation: 'Once deliberations were concluded, the chair announced the resolution.',
    hint: 'Absolute participial clause: participle + noun, comma, main clause.',
  },
  // ── Nuanced Tense Selection ──────────────────────────────────
  {
    id: 'es_c2_s013', language: lang, level, category: 'tense_nuance',
    words: ['No', 'creo', 'que', 'el', 'acusado', 'haya', 'actuado', 'con', 'premeditación'],
    translation: 'I do not believe the defendant acted with premeditation.',
    hint: 'Negated "creer" triggers the subjunctive: no creo que + subjunctive.',
  },
  {
    id: 'es_c2_s014', language: lang, level, category: 'tense_nuance',
    words: ['Por', 'mucho', 'que', 'insistas', ',', 'no', 'cambiaré', 'de', 'opinión'],
    translation: 'No matter how much you insist, I will not change my mind.',
    hint: 'Por mucho que + subjunctive = no matter how much.',
  },
  {
    id: 'es_c2_s015', language: lang, level, category: 'tense_nuance',
    words: ['Donde', 'fueres', ',', 'haz', 'lo', 'que', 'vieres'],
    translation: 'When in Rome, do as the Romans do.',
    hint: 'Future subjunctive (archaic): fueres, vieres. Proverb.',
  },
];
