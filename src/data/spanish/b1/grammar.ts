/**
 * Spanish B1 Grammar Rules
 *
 * Intermediate grammar: imperfect vs preterite, future tense,
 * present perfect, por vs para, commands, and intro to subjunctive.
 */

import type { GrammarRule } from '../../../types';

const lang = 'es' as const;
const level = 'B1' as const;

export const SPANISH_B1_GRAMMAR: GrammarRule[] = [
  {
    id: 'es_b1_g001', language: lang, level,
    title: 'Imperfect Tense',
    explanation:
      'The imperfect (pretérito imperfecto) describes habitual, repeated, or ongoing actions in the past.\n\n' +
      'Use it for:\n' +
      '• Habitual actions: "Siempre comía a las dos." (I always used to eat at two.)\n' +
      '• Descriptions in the past: "La casa era grande." (The house was big.)\n' +
      '• Background/setting: "Llovía cuando salí." (It was raining when I left.)\n' +
      '• Age/time in the past: "Tenía diez años." (I was ten years old.)\n\n' +
      'Time markers: siempre (always), todos los días (every day), de niño (as a child), normalmente (normally).',
    examples: [
      { target: 'De niño, jugaba en el parque todos los días.', english: 'As a child, I used to play in the park every day.' },
      { target: 'Mi abuela cocinaba muy bien.', english: 'My grandmother used to cook very well.' },
      { target: 'Cuando vivíamos en Madrid, íbamos al museo los domingos.', english: 'When we lived in Madrid, we used to go to the museum on Sundays.' },
    ],
  },
  {
    id: 'es_b1_g002', language: lang, level,
    title: 'Imperfect vs Preterite',
    explanation:
      'Choosing between the imperfect and preterite is one of the biggest challenges in Spanish.\n\n' +
      '• Preterite: completed, one-time actions with a clear start/end.\n' +
      '  "Ayer comí paella." (Yesterday I ate paella.) — single event, done.\n\n' +
      '• Imperfect: ongoing, habitual, or descriptive past.\n' +
      '  "Cuando era niño, comía paella los domingos." (When I was a child, I used to eat paella on Sundays.) — habitual.\n\n' +
      'They often appear TOGETHER: the imperfect sets the scene, and the preterite interrupts:\n' +
      '  "Dormía cuando sonó el teléfono." (I was sleeping when the phone rang.)',
    examples: [
      { target: 'Llovía cuando salí de casa.', english: 'It was raining when I left the house.' },
      { target: 'Estudiaba cuando llamó mi amigo.', english: 'I was studying when my friend called.' },
      { target: 'Todos los veranos íbamos a la playa, pero el año pasado fuimos a la montaña.', english: 'Every summer we used to go to the beach, but last year we went to the mountains.' },
    ],
  },
  {
    id: 'es_b1_g003', language: lang, level,
    title: 'Future Tense',
    explanation:
      'The simple future (futuro simple) is formed by adding endings to the full infinitive:\n' +
      '-é, -ás, -á, -emos, -éis, -án.\n\n' +
      'Uses:\n' +
      '• Plans and predictions: "Mañana lloverá." (Tomorrow it will rain.)\n' +
      '• Promises: "Te llamaré esta noche." (I will call you tonight.)\n' +
      '• Probability in the present: "¿Dónde estará María?" (Where could María be?)\n\n' +
      'Some common verbs have irregular stems: tener → tendr-, poder → podr-, hacer → har-, salir → saldr-, venir → vendr-, decir → dir-, querer → querr-, saber → sabr-.',
    examples: [
      { target: 'El año que viene viajaré a Japón.', english: 'Next year I will travel to Japan.' },
      { target: 'Mañana tendremos una reunión importante.', english: 'Tomorrow we will have an important meeting.' },
      { target: '¿Qué harás este fin de semana?', english: 'What will you do this weekend?' },
    ],
  },
  {
    id: 'es_b1_g004', language: lang, level,
    title: 'Present Perfect',
    explanation:
      'The present perfect (pretérito perfecto) is formed with haber in the present + past participle:\n' +
      'he, has, ha, hemos, habéis, han + participle (-ado for -ar verbs, -ido for -er/-ir verbs).\n\n' +
      'Uses:\n' +
      '• Recent actions: "Hoy he comido en un restaurante nuevo." (Today I have eaten at a new restaurant.)\n' +
      '• Life experiences: "He viajado a muchos países." (I have traveled to many countries.)\n' +
      '• Actions with current relevance: "He perdido mis llaves." (I have lost my keys.)\n\n' +
      'Common irregular participles: hecho (hacer), escrito (escribir), dicho (decir), visto (ver), puesto (poner), abierto (abrir), roto (romper), vuelto (volver).',
    examples: [
      { target: 'He visitado tres museos esta semana.', english: 'I have visited three museums this week.' },
      { target: '¿Has hecho los deberes?', english: 'Have you done the homework?' },
      { target: 'Todavía no hemos comido.', english: 'We have not eaten yet.' },
    ],
  },
  {
    id: 'es_b1_g005', language: lang, level,
    title: 'Por vs Para',
    explanation:
      '"Por" and "para" both translate to "for" in English, but they have different uses.\n\n' +
      'POR — cause, exchange, duration, movement through:\n' +
      '• Cause/reason: "Lo hice por ti." (I did it because of you.)\n' +
      '• Duration: "Estudié por tres horas." (I studied for three hours.)\n' +
      '• Exchange: "Pagué diez euros por el libro." (I paid ten euros for the book.)\n' +
      '• Movement through: "Caminamos por el parque." (We walked through the park.)\n\n' +
      'PARA — purpose, destination, deadline, recipient:\n' +
      '• Purpose: "Estudio para aprender." (I study in order to learn.)\n' +
      '• Recipient: "Este regalo es para ti." (This gift is for you.)\n' +
      '• Deadline: "Lo necesito para el lunes." (I need it by Monday.)\n' +
      '• Destination: "Salgo para Madrid." (I leave for Madrid.)',
    examples: [
      { target: 'Gracias por tu ayuda.', english: 'Thank you for your help.' },
      { target: 'Este café es para mi madre.', english: 'This coffee is for my mother.' },
      { target: 'Caminamos por la ciudad durante dos horas.', english: 'We walked through the city for two hours.' },
    ],
  },
  {
    id: 'es_b1_g006', language: lang, level,
    title: 'Imperative Mood (Commands)',
    explanation:
      'The imperative is used to give orders, instructions, or advice.\n\n' +
      'Tú (informal) affirmative — usually same as the él/ella present tense form:\n' +
      '• hablar → ¡Habla! (Speak!)\n' +
      '• comer → ¡Come! (Eat!)\n' +
      '• escribir → ¡Escribe! (Write!)\n\n' +
      'Irregulars for tú: decir → di, hacer → haz, ir → ve, poner → pon, salir → sal, ser → sé, tener → ten, venir → ven.\n\n' +
      'Usted (formal) — uses the present subjunctive form:\n' +
      '• hablar → ¡Hable! (Speak!)\n' +
      '• comer → ¡Coma! (Eat!)\n' +
      '• escribir → ¡Escriba! (Write!)\n\n' +
      'Negative commands (tú): no + present subjunctive: ¡No hables! ¡No comas!',
    examples: [
      { target: '¡Abre la ventana, por favor!', english: 'Open the window, please!' },
      { target: '¡No toques eso!', english: 'Don\'t touch that!' },
      { target: 'Señor, cierre la puerta, por favor.', english: 'Sir, close the door, please.' },
    ],
  },
  {
    id: 'es_b1_g007', language: lang, level,
    title: 'Introduction to Subjunctive',
    explanation:
      'The subjunctive mood expresses wishes, desires, doubt, and emotions. At B1, focus on these trigger phrases:\n\n' +
      '• Quiero que… (I want that…)\n' +
      '• Espero que… (I hope that…)\n' +
      '• Es importante que… (It is important that…)\n' +
      '• Es necesario que… (It is necessary that…)\n\n' +
      'Present subjunctive formation:\n' +
      '• -AR verbs: take the yo present form, drop -o, add -e, -es, -e, -emos, -éis, -en.\n' +
      '• -ER/-IR verbs: take the yo present form, drop -o, add -a, -as, -a, -amos, -áis, -an.\n\n' +
      'The subjunctive is used when the subject of the main clause differs from the subordinate clause.',
    examples: [
      { target: 'Quiero que vengas a la fiesta.', english: 'I want you to come to the party.' },
      { target: 'Espero que tengas un buen día.', english: 'I hope you have a good day.' },
      { target: 'Es importante que estudies para el examen.', english: 'It is important that you study for the exam.' },
    ],
  },
  {
    id: 'es_b1_g008', language: lang, level,
    title: 'Relative Clauses',
    explanation:
      'Relative clauses connect ideas and add information about a noun.\n\n' +
      '• que — the most common relative pronoun (that, which, who):\n' +
      '  "El libro que compré es interesante." (The book that I bought is interesting.)\n\n' +
      '• donde — for places (where):\n' +
      '  "La ciudad donde nací es pequeña." (The city where I was born is small.)\n\n' +
      '• quien/quienes — for people, after prepositions (who/whom):\n' +
      '  "La profesora con quien hablé es muy amable." (The teacher with whom I spoke is very kind.)\n\n' +
      '• lo que — for abstract ideas (what, the thing that):\n' +
      '  "No entiendo lo que dices." (I don\'t understand what you are saying.)',
    examples: [
      { target: 'La película que vimos anoche fue excelente.', english: 'The movie that we watched last night was excellent.' },
      { target: 'El restaurante donde cenamos está en el centro.', english: 'The restaurant where we had dinner is in the center.' },
      { target: 'La persona con quien trabajo es muy profesional.', english: 'The person I work with is very professional.' },
    ],
  },
];
