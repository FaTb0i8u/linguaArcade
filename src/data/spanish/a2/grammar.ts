/**
 * Spanish A2 Grammar Rules
 *
 * Builds on A1 grammar with past tense, reflexive verbs,
 * direct/indirect object pronouns, and comparisons.
 */

import type { GrammarRule } from '../../../types';

const lang = 'es' as const;
const level = 'A2' as const;

export const SPANISH_A2_GRAMMAR: GrammarRule[] = [
  {
    id: 'es_a2_g001', language: lang, level,
    title: 'Preterite Tense (Past)',
    explanation:
      'The preterite (pretérito indefinido) describes completed actions in the past.\n\n' +
      'Use it when the action happened at a specific time and is finished:\n' +
      '• "Ayer comí pizza." (Yesterday I ate pizza.)\n' +
      '• "El año pasado viajé a España." (Last year I traveled to Spain.)\n\n' +
      'Time markers: ayer (yesterday), la semana pasada (last week), el año pasado (last year).',
    examples: [
      { target: 'Ayer hablé con mi madre.', english: 'Yesterday I spoke with my mother.' },
      { target: 'Comimos en un restaurante nuevo.', english: 'We ate at a new restaurant.' },
      { target: 'Ella compró un vestido bonito.', english: 'She bought a pretty dress.' },
    ],
  },
  {
    id: 'es_a2_g002', language: lang, level,
    title: 'Reflexive Verbs',
    explanation:
      'Reflexive verbs describe actions done to oneself. They use reflexive pronouns:\n' +
      'me (myself), te (yourself), se (himself/herself), nos (ourselves), os (yourselves), se (themselves).\n\n' +
      'The pronoun goes BEFORE the conjugated verb:\n' +
      '• "Me levanto a las siete." (I get up at seven.)\n' +
      '• In infinitive form, the pronoun attaches to the end: levantarse.',
    examples: [
      { target: 'Me despierto a las seis.', english: 'I wake up at six.' },
      { target: 'Ella se ducha por la mañana.', english: 'She takes a shower in the morning.' },
      { target: 'Nos acostamos a las once.', english: 'We go to bed at eleven.' },
    ],
  },
  {
    id: 'es_a2_g003', language: lang, level,
    title: 'Ir + a + Infinitive (Near Future)',
    explanation:
      'To talk about future plans, use: ir (conjugated) + a + infinitive.\n' +
      'This is like English "going to + verb".\n\n' +
      '• Voy a estudiar. (I am going to study.)\n' +
      '• Vamos a viajar. (We are going to travel.)',
    examples: [
      { target: 'Voy a comer.', english: 'I am going to eat.' },
      { target: 'Ella va a estudiar medicina.', english: 'She is going to study medicine.' },
      { target: 'Vamos a ir al cine.', english: 'We are going to go to the movies.' },
    ],
  },
  {
    id: 'es_a2_g004', language: lang, level,
    title: 'Comparisons (más/menos...que)',
    explanation:
      'To compare things in Spanish:\n' +
      '• más + adjective + que = more … than\n' +
      '• menos + adjective + que = less … than\n' +
      '• tan + adjective + como = as … as\n\n' +
      'Irregular comparisons: mejor (better), peor (worse), mayor (older), menor (younger).',
    examples: [
      { target: 'Madrid es más grande que Barcelona.', english: 'Madrid is bigger than Barcelona.' },
      { target: 'Este libro es menos interesante que ese.', english: 'This book is less interesting than that one.' },
      { target: 'Ella es tan inteligente como su hermana.', english: 'She is as smart as her sister.' },
    ],
  },
  {
    id: 'es_a2_g005', language: lang, level,
    title: 'Direct Object Pronouns',
    explanation:
      'Direct object pronouns replace the thing receiving the action:\n' +
      'me (me), te (you), lo/la (him/her/it), nos (us), os (you all), los/las (them).\n\n' +
      'They go BEFORE the conjugated verb:\n' +
      '• "¿El libro? Lo tengo aquí." (The book? I have it here.)',
    examples: [
      { target: '¿La tarea? La hice ayer.', english: 'The homework? I did it yesterday.' },
      { target: 'Te llamo mañana.', english: 'I will call you tomorrow.' },
      { target: 'Los veo en la tienda.', english: 'I see them at the store.' },
    ],
  },
  {
    id: 'es_a2_g006', language: lang, level,
    title: 'Weather Expressions',
    explanation:
      'Spanish uses "hacer" (to do/make) for many weather expressions:\n' +
      '• Hace calor. (It is hot.) — literally "It makes heat."\n' +
      '• Hace frío. (It is cold.)\n' +
      '• Hace sol. (It is sunny.)\n' +
      '• Hace viento. (It is windy.)\n\n' +
      'For rain/snow, use "llover" and "nevar": Llueve. (It rains.) Nieva. (It snows.)',
    examples: [
      { target: 'Hoy hace mucho calor.', english: 'Today it is very hot.' },
      { target: 'En invierno hace frío.', english: 'In winter it is cold.' },
      { target: 'Está lloviendo ahora.', english: 'It is raining now.' },
    ],
  },
];
