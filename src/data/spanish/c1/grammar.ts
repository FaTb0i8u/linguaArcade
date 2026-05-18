/**
 * Spanish C1 Grammar Rules
 *
 * Advanced grammar: compound tenses, si clauses type 3,
 * nominalisation, advanced relative clauses, adverbial subjunctive.
 */

import type { GrammarRule } from '../../../types';

const lang = 'es' as const;
const level = 'C1' as const;

export const SPANISH_C1_GRAMMAR: GrammarRule[] = [
  // 1 ── Pluperfect (Past Perfect) ──────────────────────────────
  {
    id: 'es_c1_g001', language: lang, level,
    title: 'Pluperfect (Past Perfect)',
    explanation:
      'The pluperfect (pretérito pluscuamperfecto) indicates an action that was completed before another past action.\n\n' +
      'Formation: imperfect of "haber" (había, habías, había, habíamos, habíais, habían) + past participle.\n\n' +
      'Past participles: -ar → -ado (hablado), -er → -ido (comido), -ir → -ido (vivido).\n' +
      'Irregular participles: hacer → hecho, escribir → escrito, ver → visto, poner → puesto, decir → dicho, abrir → abierto, romper → roto, volver → vuelto.\n\n' +
      'The participle NEVER changes for gender or number in compound tenses.\n' +
      'Nothing can separate haber from the participle (pronouns go before haber).',
    examples: [
      { target: 'Cuando llegué al cine, la película ya había empezado.', english: 'When I arrived at the cinema, the film had already started.' },
      { target: 'Nunca habíamos visto un paisaje tan impresionante.', english: 'We had never seen such an impressive landscape.' },
      { target: 'Me dijo que ya había leído el informe completo.', english: 'She told me she had already read the full report.' },
    ],
  },
  // 2 ── Si Clauses Type 3 ──────────────────────────────────────
  {
    id: 'es_c1_g002', language: lang, level,
    title: 'Si Clauses — Type 3 (Impossible Past)',
    explanation:
      'Type 3 si clauses express conditions that are impossible because they refer to the past — something that did not happen.\n\n' +
      'Structure: Si + pluperfect subjunctive, conditional perfect\n' +
      '• Si hubiera/hubiese + participio, habría + participio\n\n' +
      'Example: "Si hubiera estudiado más, habría aprobado el examen." (If I had studied more, I would have passed the exam.)\n\n' +
      'The si clause ALWAYS uses the pluperfect subjunctive (hubiera/hubiese + participle).\n' +
      'The result clause uses the conditional perfect (habría + participle).\n' +
      'NEVER use the conditional perfect in the si clause itself.\n\n' +
      'Colloquially, some speakers use the pluperfect subjunctive in both clauses: "Si hubiera tenido tiempo, hubiera ido." This is accepted in speech but avoided in formal writing.',
    examples: [
      { target: 'Si hubiera sabido la verdad, habría actuado de otra manera.', english: 'If I had known the truth, I would have acted differently.' },
      { target: 'Si hubieras llegado antes, habrías conocido al ponente.', english: 'If you had arrived earlier, you would have met the speaker.' },
      { target: 'Si no hubiera llovido, habríamos ido a la playa.', english: 'If it hadn\'t rained, we would have gone to the beach.' },
    ],
  },
  // 3 ── Future Perfect ─────────────────────────────────────────
  {
    id: 'es_c1_g003', language: lang, level,
    title: 'Future Perfect',
    explanation:
      'The future perfect (futuro perfecto) expresses an action that will have been completed before a future point in time.\n\n' +
      'Formation: future of "haber" (habré, habrás, habrá, habremos, habréis, habrán) + past participle.\n\n' +
      'Uses:\n' +
      '• Action completed before a deadline: "Para junio habré terminado la tesis." (By June I will have finished my thesis.)\n' +
      '• Speculation about the past: "¿Habrá recibido ya mi mensaje?" (Could she have received my message already?)\n' +
      '• Probability about something recently completed: "Ya habrán llegado." (They must have arrived by now.)\n\n' +
      'The future stem of haber is irregular: habr- (not *haberer-).',
    examples: [
      { target: 'Para las ocho habré terminado el informe.', english: 'By eight o\'clock I will have finished the report.' },
      { target: 'Cuando vuelvas, ya habrán pintado toda la casa.', english: 'When you return, they will have already painted the whole house.' },
      { target: '¿Habrá entendido bien las instrucciones?', english: 'Could he have understood the instructions properly?' },
    ],
  },
  // 4 ── Conditional Perfect ────────────────────────────────────
  {
    id: 'es_c1_g004', language: lang, level,
    title: 'Conditional Perfect',
    explanation:
      'The conditional perfect (condicional perfecto) expresses what would have happened under different circumstances.\n\n' +
      'Formation: conditional of "haber" (habría, habrías, habría, habríamos, habríais, habrían) + past participle.\n\n' +
      'Uses:\n' +
      '• Result clause in Type 3 si clauses: "Si lo hubiera sabido, habría venido." (If I had known, I would have come.)\n' +
      '• Speculation about the past: "Habrían sido las diez cuando ocurrió." (It must have been about ten when it happened.)\n' +
      '• Unrealized past wishes: "Habría preferido quedarme." (I would have preferred to stay.)\n\n' +
      'The conditional stem of haber is the same irregular stem as the future: habr-.',
    examples: [
      { target: 'Habría ido contigo, pero no me avisaste a tiempo.', english: 'I would have gone with you, but you didn\'t let me know in time.' },
      { target: 'Sin tu ayuda, no habríamos conseguido terminar a tiempo.', english: 'Without your help, we wouldn\'t have managed to finish on time.' },
      { target: 'Ella habría preferido estudiar medicina en lugar de derecho.', english: 'She would have preferred to study medicine instead of law.' },
    ],
  },
  // 5 ── Nominalisation with "lo" ───────────────────────────────
  {
    id: 'es_c1_g005', language: lang, level,
    title: 'Nominalisation with "lo"',
    explanation:
      'The neuter article "lo" turns adjectives, adverbs, and clauses into abstract nouns.\n\n' +
      'Structures:\n' +
      '• lo + adjective: "lo importante" (the important thing), "lo bueno" (the good thing)\n' +
      '• lo + adjective + que: "No sabes lo difícil que es." (You don\'t know how difficult it is.)\n' +
      '• lo que: "Lo que necesitas es descansar." (What you need is to rest.)\n' +
      '• lo de: "Lo de ayer fue un malentendido." (The thing from yesterday was a misunderstanding.)\n\n' +
      '"Lo" is neuter and does not have plural form — it is different from the masculine article "el".\n' +
      'This construction is very common in formal and academic Spanish.',
    examples: [
      { target: 'Lo importante es que todos estemos de acuerdo.', english: 'The important thing is that we all agree.' },
      { target: 'No te imaginas lo complicado que fue el proceso de selección.', english: 'You can\'t imagine how complicated the selection process was.' },
      { target: 'Lo que me preocupa es la falta de transparencia.', english: 'What worries me is the lack of transparency.' },
    ],
  },
  // 6 ── Advanced Relative Clauses ──────────────────────────────
  {
    id: 'es_c1_g006', language: lang, level,
    title: 'Advanced Relative Clauses',
    explanation:
      'Beyond "que" and "donde", advanced relative pronouns add precision and formality:\n\n' +
      '• el cual / la cual / los cuales / las cuales — used after prepositions and in non-restrictive clauses:\n' +
      '  "La empresa, la cual fue fundada en 1990, es líder del sector."\n' +
      '• lo cual — refers to an entire clause (neuter):\n' +
      '  "Aprobó el examen, lo cual sorprendió a todos." (He passed the exam, which surprised everyone.)\n' +
      '• cuyo / cuya / cuyos / cuyas — possessive relative (= whose):\n' +
      '  "El autor cuya obra ganó el premio…" (The author whose work won the prize…)\n' +
      '  cuyo agrees with the NOUN it modifies, NOT with the antecedent.\n' +
      '• quien / quienes — after prepositions for people:\n' +
      '  "La persona con quien hablé…" (The person with whom I spoke…)\n\n' +
      '"Cuyo" is underused colloquially but essential in formal and academic writing.',
    examples: [
      { target: 'Presentó un informe, el cual fue aprobado por unanimidad.', english: 'He presented a report, which was approved unanimously.' },
      { target: 'La profesora cuyas investigaciones cité es experta en sociolingüística.', english: 'The professor whose research I cited is an expert in sociolinguistics.' },
      { target: 'No asistió a la reunión, lo cual generó malestar entre los socios.', english: 'He did not attend the meeting, which caused unease among the partners.' },
    ],
  },
  // 7 ── Subjunctive in Adverbial Clauses ───────────────────────
  {
    id: 'es_c1_g007', language: lang, level,
    title: 'Subjunctive in Adverbial Clauses',
    explanation:
      'Certain conjunctions ALWAYS require the subjunctive because they introduce actions that are uncertain, purposeful, or not yet realized:\n\n' +
      '• para que — so that (purpose): "Habla despacio para que te entiendan."\n' +
      '• antes de que — before: "Sal antes de que llueva."\n' +
      '• sin que — without: "Se fue sin que nadie lo notara."\n' +
      '• a menos que — unless: "No iré a menos que me inviten."\n' +
      '• con tal de que — provided that: "Te ayudo con tal de que me lo pidas con tiempo."\n' +
      '• a fin de que — in order that (formal): "Redactaron el documento a fin de que todos lo comprendieran."\n' +
      '• en caso de que — in case: "Lleva un paraguas en caso de que llueva."\n\n' +
      'These differ from conjunctions like "aunque" or "cuando", which take the subjunctive only when the action is hypothetical.',
    examples: [
      { target: 'Explicó el procedimiento para que los alumnos no cometieran errores.', english: 'He explained the procedure so that the students would not make mistakes.' },
      { target: 'Debemos actuar antes de que sea demasiado tarde.', english: 'We must act before it is too late.' },
      { target: 'No firmaré el contrato a menos que incluya una cláusula de rescisión.', english: 'I will not sign the contract unless it includes a termination clause.' },
    ],
  },
  // 8 ── Academic Discourse Markers ─────────────────────────────
  {
    id: 'es_c1_g008', language: lang, level,
    title: 'Academic Discourse Markers',
    explanation:
      'Academic and formal Spanish relies on discourse markers (marcadores discursivos) to structure arguments clearly and coherently.\n\n' +
      'Ordering: en primer lugar (firstly), en segundo lugar (secondly), por último (lastly)\n' +
      'Adding: además (moreover), asimismo (likewise), cabe añadir que (it should be added that)\n' +
      'Cause / consequence: por consiguiente (consequently), de ahí que + subjunctive (hence), dado que (given that), puesto que (since)\n' +
      'Contrast: no obstante (nevertheless), sin embargo (however), ahora bien (now then)\n' +
      'Emphasis: cabe destacar que (it is worth noting that), conviene subrayar que (it is worth emphasizing that)\n' +
      'Topic: en lo que respecta a (with regard to), en cuanto a (as for), respecto a (regarding)\n' +
      'Conclusion: en conclusión (in conclusion), en definitiva (ultimately), en resumidas cuentas (in short)\n\n' +
      'Mastering these markers is essential for essays, presentations, and formal correspondence.',
    examples: [
      { target: 'En primer lugar, conviene analizar las causas del problema; por consiguiente, se propondrán soluciones.', english: 'Firstly, it is advisable to analyze the causes of the problem; consequently, solutions will be proposed.' },
      { target: 'Cabe destacar que los resultados superaron las expectativas iniciales.', english: 'It is worth noting that the results exceeded the initial expectations.' },
      { target: 'En lo que respecta a la financiación, el proyecto cuenta con fondos europeos.', english: 'With regard to funding, the project has European funds.' },
    ],
  },
];
