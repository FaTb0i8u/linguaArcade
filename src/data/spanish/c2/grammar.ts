/**
 * Spanish C2 Grammar Rules
 *
 * Mastery-level grammar: rare subjunctive uses, literary tenses,
 * register variation, advanced clause subordination, stylistic devices.
 */

import type { GrammarRule } from '../../../types';

const lang = 'es' as const;
const level = 'C2' as const;

export const SPANISH_C2_GRAMMAR: GrammarRule[] = [
  // 1 ── Future Subjunctive ─────────────────────────────────────
  {
    id: 'es_c2_g001', language: lang, level,
    title: 'Future Subjunctive (Archaic / Legal)',
    explanation:
      'The future subjunctive (futuro de subjuntivo) is virtually extinct in everyday speech but survives in legal texts, proverbs, and set phrases.\n\n' +
      'Formation: 3rd-person plural preterite stem + -re, -res, -re, -remos, -reis, -ren.\n' +
      '• hablar → hablaron → habla- → hablare, hablares, hablare, habláremos, hablareis, hablaren\n' +
      '• tener → tuvieron → tuvie- → tuviere, tuvieres, tuviere, tuviéremos, tuviereis, tuvieren\n\n' +
      'Where you will encounter it:\n' +
      '• Legal codes: "El que incurriere en dicho delito…" (Whoever commits said offence…)\n' +
      '• Proverbs: "Donde fueres, haz lo que vieres." (When in Rome, do as the Romans do.)\n' +
      '• Formulae: "Sea lo que fuere." (Be that as it may.)\n\n' +
      'In modern language, the present subjunctive or indicative replaces almost all future subjunctive uses.',
    examples: [
      { target: 'Donde fueres, haz lo que vieres.', english: 'When in Rome, do as the Romans do.' },
      { target: 'Sea lo que fuere, debemos seguir adelante.', english: 'Be that as it may, we must move forward.' },
      { target: 'Si alguien contraviniere esta disposición, será sancionado conforme a la ley.', english: 'If anyone contravenes this provision, they shall be sanctioned in accordance with the law.' },
    ],
  },
  // 2 ── Register & Sociolinguistic Variation ───────────────────
  {
    id: 'es_c2_g002', language: lang, level,
    title: 'Register & Sociolinguistic Variation',
    explanation:
      'Mastery of Spanish requires navigating registers — the same idea expressed differently depending on context.\n\n' +
      'Formal / academic:\n' +
      '• "Se procedió a la evacuación de los ocupantes." (The evacuation of the occupants was carried out.)\n' +
      '• Impersonal "se", nominalised verbs, passive voice, Latinate vocabulary.\n\n' +
      'Standard / neutral:\n' +
      '• "Evacuaron a la gente del edificio." (They evacuated the people from the building.)\n\n' +
      'Colloquial / informal:\n' +
      '• "Sacaron a todo el mundo del edificio pitando." (They got everyone out of the building in a rush.)\n' +
      '• Diminutives (momentito), intensifiers (súper), truncated forms (pa\' = para), filler words (o sea, bueno, pues).\n\n' +
      'Key markers of high register: subjunctive mood, compound tenses, discourse markers, relative pronouns (cuyo, el cual), impersonal constructions.\n' +
      'Key markers of low register: imperative, simple tenses, ellipsis, slang, discourse particles (mira, oye).\n\n' +
      'Regional variation also matters: voseo (Argentina), ustedes for vosotros (Latin America, Canary Islands), leísmo/laísmo.',
    examples: [
      { target: 'Formal: Cabe señalar que los resultados no son concluyentes.', english: 'Formal: It should be noted that the results are not conclusive.' },
      { target: 'Neutral: Hay que mencionar que los resultados no son definitivos.', english: 'Neutral: It must be mentioned that the results are not definitive.' },
      { target: 'Informal: Mira, los resultados no dicen nada claro.', english: 'Informal: Look, the results don\'t say anything clear.' },
    ],
  },
  // 3 ── Advanced Clause Subordination ──────────────────────────
  {
    id: 'es_c2_g003', language: lang, level,
    title: 'Advanced Clause Subordination',
    explanation:
      'C2 proficiency demands fluid use of deeply nested subordination — multiple dependent clauses in a single sentence.\n\n' +
      'Key subordinate clause types:\n' +
      '• Nominal (sustantivas): act as subject or object — "Me alegra que hayas venido."\n' +
      '• Adjectival (adjetivas): modify a noun — "El libro que me prestaste, cuyo autor es colombiano, me encantó."\n' +
      '• Adverbial: time, cause, condition, purpose, concession, manner — "Aunque hubiera llovido, habríamos salido."\n\n' +
      'Embedding strategies:\n' +
      '• Multiple embeddings: "Dijo que creía que era posible que lo termináramos antes de que anocheciera."\n' +
      '• Correlative constructions: "Cuanto más estudies, tanto más fácil te resultará."\n' +
      '• Absolute participial clauses: "Terminada la reunión, todos se marcharon." (The meeting being over…)\n' +
      '• Reduced relative clauses: "Los documentos presentados por el abogado…" (= que fueron presentados)\n\n' +
      'Maintain clarity by keeping related elements close and using discourse markers to signal transitions.',
    examples: [
      { target: 'Dado que el plazo establecido por la comisión había expirado, solicitaron que se prorrogara antes de que se dictara sentencia.', english: 'Given that the deadline set by the committee had expired, they requested that it be extended before the ruling was issued.' },
      { target: 'Cuanto más se esforzaba por convencerlos, tanto más se alejaban de su postura.', english: 'The more he tried to convince them, the more they moved away from his position.' },
      { target: 'Terminadas las deliberaciones, el presidente anunció que la resolución había sido aprobada por unanimidad.', english: 'Once deliberations were concluded, the chair announced that the resolution had been approved unanimously.' },
    ],
  },
  // 4 ── Impersonal & Passive Constructions ─────────────────────
  {
    id: 'es_c2_g004', language: lang, level,
    title: 'Impersonal & Passive Constructions (Advanced)',
    explanation:
      'Spanish has a richer inventory of impersonal constructions than English.\n\n' +
      '1. Pasiva refleja (se + 3rd person verb):\n' +
      '   "Se aprobaron las medidas." (The measures were approved.) — subject agrees with verb.\n\n' +
      '2. Impersonal "se" (se + 3rd person singular):\n' +
      '   "Se vive bien aquí." (One lives well here.) — no grammatical subject.\n' +
      '   "Se atendió a los heridos." (The wounded were attended to.) — "a los heridos" is an object, not subject.\n\n' +
      '3. Estar + past participle (resultative passive):\n' +
      '   "La puerta está cerrada." (The door is closed.) — result of an action.\n\n' +
      '4. Ser + past participle (process passive):\n' +
      '   "La ley fue aprobada por el Congreso." (The law was passed by Congress.)\n\n' +
      '5. Impersonal "uno" / "una":\n' +
      '   "Uno nunca sabe qué esperar." (One never knows what to expect.)\n\n' +
      'The pasiva refleja is far more common in Spanish than the ser-passive, which is limited to formal and journalistic registers.',
    examples: [
      { target: 'Se han implementado nuevas políticas de seguridad.', english: 'New security policies have been implemented.' },
      { target: 'La novela fue galardonada con el Premio Cervantes.', english: 'The novel was awarded the Cervantes Prize.' },
      { target: 'Uno se pregunta si realmente vale la pena.', english: 'One wonders if it is really worth it.' },
    ],
  },
  // 5 ── Idiomatic Subjunctive Expressions ──────────────────────
  {
    id: 'es_c2_g005', language: lang, level,
    title: 'Idiomatic Subjunctive Expressions',
    explanation:
      'At C2 level, a number of fixed expressions requiring the subjunctive must be mastered:\n\n' +
      '• Venga lo que venga — Come what may\n' +
      '• Sea como sea — Be that as it may / Regardless\n' +
      '• Digan lo que digan — No matter what they say\n' +
      '• Cueste lo que cueste — Whatever it takes / No matter the cost\n' +
      '• Pase lo que pase — Whatever happens / Come what may\n' +
      '• No es que + subjunctive — It\'s not that…: "No es que no quiera, es que no puedo."\n' +
      '• Que yo sepa — As far as I know\n' +
      '• Por mucho que + subjunctive — No matter how much: "Por mucho que insistas, no cambiaré de opinión."\n' +
      '• Así + subjunctive — Even if (literary): "Así me lo jure, no le creo."\n\n' +
      'These expressions give writing and speech a native-like fluency that distinguishes C2 from lower levels.',
    examples: [
      { target: 'Cueste lo que cueste, conseguiremos los fondos necesarios.', english: 'Whatever it takes, we will secure the necessary funding.' },
      { target: 'Que yo sepa, no se ha tomado ninguna decisión al respecto.', english: 'As far as I know, no decision has been made on the matter.' },
      { target: 'Por mucho que intentaran negociar, las condiciones no variaron.', english: 'No matter how much they tried to negotiate, the conditions did not change.' },
    ],
  },
  // 6 ── Stylistic Devices & Rhetorical Figures ─────────────────
  {
    id: 'es_c2_g006', language: lang, level,
    title: 'Stylistic Devices & Rhetorical Figures',
    explanation:
      'C2 comprehension and production require recognising and deploying rhetorical figures:\n\n' +
      '• Anáfora (anaphora) — repeating a word at the start of successive clauses:\n' +
      '  "Tenemos que luchar. Tenemos que resistir. Tenemos que vencer."\n' +
      '• Hipérbaton (hyperbaton) — altering normal word order for emphasis (common in literature):\n' +
      '  "Del salón en el ángulo oscuro…" (Bécquer) instead of "En el ángulo oscuro del salón…"\n' +
      '• Litotes (lítotes) — understatement via double negation:\n' +
      '  "No es una mala idea." (= It\'s a good idea.)\n' +
      '• Perífrasis (periphrasis) — expressing something indirectly:\n' +
      '  "El astro rey" instead of "el sol" (the sun)\n' +
      '• Elipsis (ellipsis) — omitting elements recoverable from context:\n' +
      '  "Yo estudio filosofía y tú, [estudias] derecho."\n\n' +
      'These devices appear constantly in literature, journalism, political speeches, and formal argumentation.',
    examples: [
      { target: 'Verde que te quiero verde. Verde viento. Verdes ramas.', english: 'Green, how I love you green. Green wind. Green branches. (Lorca)' },
      { target: 'No es imposible que lleguemos a un acuerdo.', english: 'It is not impossible that we reach an agreement. (litotes for: we may well agree)' },
      { target: 'El autor del Quijote supo capturar como nadie el alma de España.', english: 'The author of Don Quixote knew how to capture the soul of Spain like no one else. (periphrasis for Cervantes)' },
    ],
  },
  // 7 ── Discourse Coherence & Cohesion ─────────────────────────
  {
    id: 'es_c2_g007', language: lang, level,
    title: 'Discourse Coherence & Cohesion',
    explanation:
      'At mastery level, texts must flow logically. Key cohesion mechanisms:\n\n' +
      'Reference chains:\n' +
      '• Use pronouns (él, lo, dicho/a, este/a) to avoid repetition.\n' +
      '• Lexical substitution: "El presidente… el mandatario… el jefe de Estado…"\n\n' +
      'Thematic progression:\n' +
      '• Tema constante: each sentence adds new information about the same topic.\n' +
      '• Tema lineal: the rheme (new info) of one sentence becomes the theme (topic) of the next.\n' +
      '• Tema derivado: a hypertheme introduces subtopics developed in a sequence.\n\n' +
      'Logical connectors (at C2 level):\n' +
      '• Concession: si bien (although), aun cuando (even when), pese a que (despite the fact that)\n' +
      '• Reformulation: es decir (that is), esto es (this is), dicho de otro modo (in other words)\n' +
      '• Exemplification: a saber (namely), verbigracia (for example, formal), tal es el caso de (such is the case of)\n' +
      '• Restriction: ahora bien (now then), con todo (even so), no obstante lo anterior (notwithstanding the above)',
    examples: [
      { target: 'Si bien los datos iniciales eran prometedores, el estudio posterior reveló inconsistencias; esto es, los resultados no eran replicables.', english: 'Although the initial data were promising, the subsequent study revealed inconsistencies; that is, the results were not replicable.' },
      { target: 'Pese a que se tomaron medidas preventivas, los daños fueron considerables.', english: 'Despite the fact that preventive measures were taken, the damage was considerable.' },
      { target: 'La propuesta fue aceptada por la mayoría; ahora bien, quedan pendientes ciertos aspectos técnicos.', english: 'The proposal was accepted by the majority; however, certain technical aspects remain pending.' },
    ],
  },
  // 8 ── Nuance in Tense Selection ──────────────────────────────
  {
    id: 'es_c2_g008', language: lang, level,
    title: 'Nuance in Tense Selection',
    explanation:
      'C2 mastery involves choosing between competing tenses for subtle meaning shifts:\n\n' +
      'Preterite vs Imperfect vs Present Perfect:\n' +
      '• "Llegó a las tres." — He arrived at three. (completed, specific)\n' +
      '• "Llegaba siempre a las tres." — He always arrived at three. (habitual, background)\n' +
      '• "Ha llegado hace un rato." — He has arrived a while ago. (relevance to present)\n\n' +
      'Conditional vs Imperfect Subjunctive:\n' +
      '• "Querría pedirle un favor." — I would like to ask you a favour. (polite, standard)\n' +
      '• "Quisiera pedirle un favor." — I would like… (even more deferential, literary)\n\n' +
      'Indicative vs Subjunctive after creer/pensar:\n' +
      '• "Creo que tiene razón." — I think he is right. (assertion)\n' +
      '• "No creo que tenga razón." — I don\'t think he is right. (doubt → subjunctive)\n' +
      '• "¿Crees que tenga razón?" — Do you think he might be right? (doubt/uncertainty → subjunctive)\n' +
      '• "¿Crees que tiene razón?" — Do you think he is right? (neutral question → indicative)\n\n' +
      'Historical present: using the present tense to narrate past events dramatically — "Colón llega a América en 1492."',
    examples: [
      { target: 'Quisiera solicitar una prórroga para la entrega del informe.', english: 'I would like to request an extension for the report submission. (deferential)' },
      { target: 'No creo que el acusado haya actuado con premeditación.', english: 'I do not believe the defendant acted with premeditation. (subjunctive after negated creer)' },
      { target: 'En 1808, Napoleón invade España y destituye a la familia real.', english: 'In 1808, Napoleon invades Spain and deposes the royal family. (historical present)' },
    ],
  },
];
