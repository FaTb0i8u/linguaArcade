/**
 * Spanish B2 Grammar Rules
 *
 * Upper-intermediate grammar: conditional, subjunctive, si clauses,
 * passive voice, reported speech, advanced connectors.
 */

import type { GrammarRule } from '../../../types';

const lang = 'es' as const;
const level = 'B2' as const;

export const SPANISH_B2_GRAMMAR: GrammarRule[] = [
  {
    id: 'es_b2_g001', language: lang, level,
    title: 'Conditional Tense',
    explanation:
      'The conditional (condicional simple) is formed by adding -ía, -ías, -ía, -íamos, -íais, -ían to the full infinitive.\n\n' +
      'Uses:\n' +
      '• Hypothetical situations: "Yo compraría esa casa." (I would buy that house.)\n' +
      '• Polite requests: "¿Podrías cerrar la puerta?" (Could you close the door?)\n' +
      '• Advice: "Yo que tú, estudiaría más." (If I were you, I would study more.)\n' +
      '• Future in the past: "Dijo que vendría." (He said he would come.)\n\n' +
      'Irregular stems are the same as the future tense: tener → tendr-, poder → podr-, hacer → har-, salir → saldr-, decir → dir-.',
    examples: [
      { target: 'Me gustaría viajar por Sudamérica.', english: 'I would like to travel through South America.' },
      { target: '¿Podrías repetir la pregunta, por favor?', english: 'Could you repeat the question, please?' },
      { target: 'En tu lugar, yo hablaría con el jefe.', english: 'In your place, I would talk to the boss.' },
    ],
  },
  {
    id: 'es_b2_g002', language: lang, level,
    title: 'Present Subjunctive',
    explanation:
      'The present subjunctive is used in subordinate clauses triggered by expressions of:\n' +
      '• Wishes/desire: querer que, desear que, esperar que\n' +
      '• Emotion: alegrarse de que, temer que, sentir que\n' +
      '• Doubt/denial: dudar que, no creer que, negar que\n' +
      '• Impersonal expressions: es posible que, es necesario que, es importante que\n' +
      '• Recommendations/commands: recomendar que, pedir que, sugerir que\n\n' +
      'Formation: Take the yo form of the present indicative, drop -o, and add "opposite vowel" endings:\n' +
      '-AR verbs → -e, -es, -e, -emos, -éis, -en\n' +
      '-ER/-IR verbs → -a, -as, -a, -amos, -áis, -an\n\n' +
      'Key irregular verbs: ser → sea, ir → vaya, haber → haya, saber → sepa, dar → dé, estar → esté.',
    examples: [
      { target: 'Espero que tengas un buen viaje.', english: 'I hope you have a good trip.' },
      { target: 'Es necesario que estudies para el examen.', english: 'It is necessary that you study for the exam.' },
      { target: 'No creo que sea tan difícil.', english: 'I don\'t think it is that difficult.' },
    ],
  },
  {
    id: 'es_b2_g003', language: lang, level,
    title: 'Si Clauses — Type 1 (Real Conditions)',
    explanation:
      'Type 1 si clauses express real or likely conditions.\n\n' +
      'Structure: Si + present indicative, future / present / imperative\n\n' +
      '• Si + present + future: "Si estudias, aprobarás." (If you study, you will pass.)\n' +
      '• Si + present + present: "Si llueve, me quedo en casa." (If it rains, I stay home.)\n' +
      '• Si + present + imperative: "Si tienes hambre, come algo." (If you are hungry, eat something.)\n\n' +
      'NEVER use the present subjunctive after "si" in Type 1 clauses — this is a common error.',
    examples: [
      { target: 'Si estudias mucho, aprobarás el examen.', english: 'If you study a lot, you will pass the exam.' },
      { target: 'Si hace buen tiempo, iremos a la playa.', english: 'If the weather is nice, we will go to the beach.' },
      { target: 'Si necesitas ayuda, llámame.', english: 'If you need help, call me.' },
    ],
  },
  {
    id: 'es_b2_g004', language: lang, level,
    title: 'Si Clauses — Type 2 (Hypothetical)',
    explanation:
      'Type 2 si clauses express unreal or hypothetical conditions in the present or future.\n\n' +
      'Structure: Si + imperfect subjunctive, conditional\n\n' +
      '• "Si tuviera más tiempo, leería más libros." (If I had more time, I would read more books.)\n' +
      '• "Si fuera rico, viajaría por el mundo." (If I were rich, I would travel the world.)\n\n' +
      'The si clause uses the imperfect subjunctive (-ra or -se form), and the result clause uses the conditional.\n' +
      'NEVER use the conditional in the si clause itself.',
    examples: [
      { target: 'Si tuviera dinero, compraría una casa en la playa.', english: 'If I had money, I would buy a house on the beach.' },
      { target: 'Si pudiera elegir, viviría en Barcelona.', english: 'If I could choose, I would live in Barcelona.' },
      { target: 'Si hablaras español perfectamente, conseguirías ese trabajo.', english: 'If you spoke Spanish perfectly, you would get that job.' },
    ],
  },
  {
    id: 'es_b2_g005', language: lang, level,
    title: 'Passive Voice',
    explanation:
      'The passive voice (voz pasiva) is formed with ser + past participle (+ por + agent).\n\n' +
      'Structure: Subject + ser (conjugated) + past participle (agrees in gender/number) + por + agent\n\n' +
      '• "El libro fue escrito por Cervantes." (The book was written by Cervantes.)\n' +
      '• "La ley será aprobada por el parlamento." (The law will be approved by parliament.)\n\n' +
      'The past participle must agree with the subject in gender and number:\n' +
      'masculine singular: -ado/-ido, feminine singular: -ada/-ida, etc.\n\n' +
      'In everyday Spanish, the passive with "se" (pasiva refleja) is more common: "Se venden pisos." (Apartments are sold.)',
    examples: [
      { target: 'La novela fue escrita por García Márquez.', english: 'The novel was written by García Márquez.' },
      { target: 'Las cartas fueron enviadas ayer por la mañana.', english: 'The letters were sent yesterday morning.' },
      { target: 'El proyecto será presentado por el equipo directivo.', english: 'The project will be presented by the management team.' },
    ],
  },
  {
    id: 'es_b2_g006', language: lang, level,
    title: 'Reported Speech (Estilo Indirecto)',
    explanation:
      'Reported speech transforms direct quotes into indirect reports.\n\n' +
      'Key changes when the reporting verb is in the past:\n' +
      '• Present → Imperfect: "Tengo hambre" → Dijo que tenía hambre.\n' +
      '• Preterite → Pluperfect: "Comí" → Dijo que había comido.\n' +
      '• Future → Conditional: "Vendré" → Dijo que vendría.\n' +
      '• Imperative → Imperfect subjunctive: "Ven" → Me pidió que viniera.\n\n' +
      'Reporting verbs: decir que, afirmar que, preguntar si/qué/dónde, explicar que, contar que, pedir que.',
    examples: [
      { target: 'Dijo que no tenía tiempo para la reunión.', english: 'He said he didn\'t have time for the meeting.' },
      { target: 'Me preguntó si quería ir al cine.', english: 'She asked me if I wanted to go to the cinema.' },
      { target: 'El profesor nos pidió que leyéramos el capítulo tres.', english: 'The teacher asked us to read chapter three.' },
    ],
  },
  {
    id: 'es_b2_g007', language: lang, level,
    title: 'Subjunctive with Emotion and Doubt',
    explanation:
      'The subjunctive is required in subordinate clauses after expressions of emotion and doubt.\n\n' +
      'Emotion triggers:\n' +
      '• Me alegra que… (I\'m glad that…)\n' +
      '• Me sorprende que… (It surprises me that…)\n' +
      '• Es una lástima que… (It\'s a shame that…)\n' +
      '• Tengo miedo de que… (I\'m afraid that…)\n\n' +
      'Doubt triggers:\n' +
      '• Dudo que… (I doubt that…)\n' +
      '• No creo que… (I don\'t believe that…)\n' +
      '• Es posible que… (It\'s possible that…)\n' +
      '• No es seguro que… (It\'s not certain that…)\n\n' +
      'Note: "Creo que" (I believe) and "Es seguro que" (It\'s certain) use the INDICATIVE because they express certainty.',
    examples: [
      { target: 'Me alegra que hayas aprobado el examen.', english: 'I\'m glad you passed the exam.' },
      { target: 'Dudo que lleguen a tiempo.', english: 'I doubt they will arrive on time.' },
      { target: 'Es posible que llueva esta tarde.', english: 'It\'s possible that it will rain this afternoon.' },
    ],
  },
  {
    id: 'es_b2_g008', language: lang, level,
    title: 'Advanced Connectors',
    explanation:
      'At B2 level, you need connectors to structure complex arguments and link ideas.\n\n' +
      'Contrast:\n' +
      '• Sin embargo (However): "Es caro; sin embargo, vale la pena."\n' +
      '• No obstante (Nevertheless): "Llovía mucho; no obstante, salimos."\n' +
      '• A pesar de (que) (Despite / In spite of): "A pesar de la lluvia, fuimos al parque."\n' +
      '• Aunque + subjunctive (Even though — hypothetical): "Aunque sea difícil, lo intentaré."\n\n' +
      'Addition:\n' +
      '• Además (Furthermore / Besides): "Además, es muy económico."\n' +
      '• Asimismo (Likewise): "Asimismo, se mejoró la infraestructura."\n\n' +
      'Consequence:\n' +
      '• Por lo tanto (Therefore): "No estudió; por lo tanto, suspendió."\n' +
      '• En consecuencia (As a consequence): "En consecuencia, decidimos cambiar el plan."',
    examples: [
      { target: 'El proyecto es ambicioso; sin embargo, creo que es viable.', english: 'The project is ambitious; however, I believe it is viable.' },
      { target: 'A pesar de las dificultades, lograron terminar a tiempo.', english: 'Despite the difficulties, they managed to finish on time.' },
      { target: 'No había suficiente presupuesto; por lo tanto, se canceló el evento.', english: 'There was not enough budget; therefore, the event was cancelled.' },
    ],
  },
];
