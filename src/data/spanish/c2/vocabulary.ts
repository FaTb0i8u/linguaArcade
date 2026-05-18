/**
 * Spanish C2 Vocabulary — Mastery-level words for diplomacy, linguistics,
 * psychology, formal register, idioms, and nuanced verbs.
 */
import type { VocabWord } from '../../../types';
const lang = 'es' as const;
const level = 'C2' as const;

// ── Diplomacy ───────────────────────────────────────────────────

const diplomacy: VocabWord[] = [
  {
    id: 'es_c2_v001', language: lang, level, category: 'diplomacy',
    word: 'la cumbre', translation: 'summit', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La cumbre entre ambos mandatarios concluyó con la firma de un acuerdo histórico.', exampleTranslation: 'The summit between the two leaders concluded with the signing of a historic agreement.',
  },
  {
    id: 'es_c2_v002', language: lang, level, category: 'diplomacy',
    word: 'el tratado', translation: 'treaty', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El tratado de libre comercio entró en vigor tras la ratificación de todos los signatarios.', exampleTranslation: 'The free trade treaty came into force after ratification by all signatories.',
  },
  {
    id: 'es_c2_v003', language: lang, level, category: 'diplomacy',
    word: 'la soberanía', translation: 'sovereignty', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La soberanía nacional no puede supeditarse a intereses de terceros Estados.', exampleTranslation: 'National sovereignty cannot be subordinated to the interests of third-party states.',
  },
  {
    id: 'es_c2_v004', language: lang, level, category: 'diplomacy',
    word: 'las sanciones', translation: 'sanctions', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Las sanciones económicas impuestas por el Consejo de Seguridad afectaron gravemente a la economía del país.', exampleTranslation: 'The economic sanctions imposed by the Security Council severely affected the country\'s economy.',
  },
  {
    id: 'es_c2_v005', language: lang, level, category: 'diplomacy',
    word: 'la negociación', translation: 'negotiation', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La negociación multilateral se prolongó durante semanas sin que las partes alcanzaran un consenso.', exampleTranslation: 'The multilateral negotiation dragged on for weeks without the parties reaching a consensus.',
  },
  {
    id: 'es_c2_v006', language: lang, level, category: 'diplomacy',
    word: 'el embajador', translation: 'ambassador', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El embajador presentó sus cartas credenciales ante el jefe de Estado.', exampleTranslation: 'The ambassador presented his credentials to the head of state.',
  },
  {
    id: 'es_c2_v007', language: lang, level, category: 'diplomacy',
    word: 'el consenso', translation: 'consensus', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Solo mediante el consenso de todas las delegaciones se podrá avanzar en la resolución del conflicto.', exampleTranslation: 'Only through the consensus of all delegations will progress be made in resolving the conflict.',
  },
];

// ── Linguistics ─────────────────────────────────────────────────

const linguistics: VocabWord[] = [
  {
    id: 'es_c2_v008', language: lang, level, category: 'linguistics',
    word: 'la morfología', translation: 'morphology', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La morfología del español presenta una rica flexión verbal que distingue persona, número y tiempo.', exampleTranslation: 'Spanish morphology presents a rich verbal inflection that distinguishes person, number, and tense.',
  },
  {
    id: 'es_c2_v009', language: lang, level, category: 'linguistics',
    word: 'la sintaxis', translation: 'syntax', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La sintaxis del español permite una flexibilidad en el orden de los constituyentes que el inglés no admite.', exampleTranslation: 'Spanish syntax allows a flexibility in constituent order that English does not permit.',
  },
  {
    id: 'es_c2_v010', language: lang, level, category: 'linguistics',
    word: 'la semántica', translation: 'semantics', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'El análisis de la semántica léxica revela matices que los diccionarios bilingües rara vez captan.', exampleTranslation: 'The analysis of lexical semantics reveals nuances that bilingual dictionaries rarely capture.',
  },
  {
    id: 'es_c2_v011', language: lang, level, category: 'linguistics',
    word: 'la pragmática', translation: 'pragmatics', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La pragmática estudia cómo el contexto influye en la interpretación del significado comunicativo.', exampleTranslation: 'Pragmatics studies how context influences the interpretation of communicative meaning.',
  },
  {
    id: 'es_c2_v012', language: lang, level, category: 'linguistics',
    word: 'el dialecto', translation: 'dialect', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El dialecto andaluz se caracteriza, entre otros rasgos, por la aspiración de la /s/ implosiva.', exampleTranslation: 'The Andalusian dialect is characterized, among other features, by the aspiration of the implosive /s/.',
  },
  {
    id: 'es_c2_v013', language: lang, level, category: 'linguistics',
    word: 'el fonema', translation: 'phoneme', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'La distinción entre los fonemas /b/ y /v/ se ha neutralizado en la mayoría de las variedades del español.', exampleTranslation: 'The distinction between the phonemes /b/ and /v/ has been neutralized in most varieties of Spanish.',
  },
  {
    id: 'es_c2_v014', language: lang, level, category: 'linguistics',
    word: 'la etimología', translation: 'etymology', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La etimología de "ojalá" remonta al árabe hispánico "law šá lláh", que significa "si Dios quiere".', exampleTranslation: 'The etymology of "ojalá" traces back to Hispano-Arabic "law šá lláh", meaning "God willing".',
  },
  {
    id: 'es_c2_v015', language: lang, level, category: 'linguistics',
    word: 'el bilingüismo', translation: 'bilingualism', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El bilingüismo temprano favorece el desarrollo de funciones ejecutivas en la infancia.', exampleTranslation: 'Early bilingualism promotes the development of executive functions in childhood.',
  },
];

// ── Psychology ───────────────────────────────────────────────────

const psychology: VocabWord[] = [
  {
    id: 'es_c2_v016', language: lang, level, category: 'psychology',
    word: 'el subconsciente', translation: 'subconscious', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El subconsciente alberga recuerdos reprimidos que pueden aflorar de manera inesperada.', exampleTranslation: 'The subconscious harbors repressed memories that can surface unexpectedly.',
  },
  {
    id: 'es_c2_v017', language: lang, level, category: 'psychology',
    word: 'el trauma', translation: 'trauma', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El trauma infantil no resuelto puede condicionar las relaciones interpersonales en la vida adulta.', exampleTranslation: 'Unresolved childhood trauma can shape interpersonal relationships in adult life.',
  },
  {
    id: 'es_c2_v018', language: lang, level, category: 'psychology',
    word: 'la resiliencia', translation: 'resilience', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La resiliencia no implica la ausencia de sufrimiento, sino la capacidad de sobreponerse a la adversidad.', exampleTranslation: 'Resilience does not imply the absence of suffering, but the ability to overcome adversity.',
  },
  {
    id: 'es_c2_v019', language: lang, level, category: 'psychology',
    word: 'la empatía', translation: 'empathy', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La empatía cognitiva permite comprender la perspectiva ajena sin necesariamente compartir la emoción.', exampleTranslation: 'Cognitive empathy allows one to understand another\'s perspective without necessarily sharing the emotion.',
  },
  {
    id: 'es_c2_v020', language: lang, level, category: 'psychology',
    word: 'la cognición', translation: 'cognition', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Los avances en neurociencia han transformado nuestra comprensión de la cognición humana.', exampleTranslation: 'Advances in neuroscience have transformed our understanding of human cognition.',
  },
  {
    id: 'es_c2_v021', language: lang, level, category: 'psychology',
    word: 'la ansiedad', translation: 'anxiety', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La ansiedad anticipatoria puede resultar más paralizante que el propio evento temido.', exampleTranslation: 'Anticipatory anxiety can be more paralyzing than the feared event itself.',
  },
  {
    id: 'es_c2_v022', language: lang, level, category: 'psychology',
    word: 'la introspección', translation: 'introspection', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La introspección sistemática constituye una herramienta fundamental en el proceso terapéutico.', exampleTranslation: 'Systematic introspection constitutes a fundamental tool in the therapeutic process.',
  },
];

// ── Formal Register ─────────────────────────────────────────────

const formalRegister: VocabWord[] = [
  {
    id: 'es_c2_v023', language: lang, level, category: 'formal_register',
    word: 'por la presente', translation: 'hereby', partOfSpeech: 'adverb',
    exampleSentence: 'Por la presente se notifica al interesado la resolución adoptada por este organismo.', exampleTranslation: 'The interested party is hereby notified of the resolution adopted by this body.',
  },
  {
    id: 'es_c2_v024', language: lang, level, category: 'formal_register',
    word: 'en virtud de', translation: 'by virtue of', partOfSpeech: 'preposition',
    exampleSentence: 'En virtud de lo dispuesto en el artículo 14, se procederá a la apertura del expediente.', exampleTranslation: 'By virtue of the provisions of Article 14, proceedings to open the case file shall be initiated.',
  },
  {
    id: 'es_c2_v025', language: lang, level, category: 'formal_register',
    word: 'no obstante lo anterior', translation: 'notwithstanding the foregoing', partOfSpeech: 'conjunction',
    exampleSentence: 'No obstante lo anterior, el tribunal consideró que las pruebas resultaban insuficientes.', exampleTranslation: 'Notwithstanding the foregoing, the court considered the evidence to be insufficient.',
  },
  {
    id: 'es_c2_v026', language: lang, level, category: 'formal_register',
    word: 'conforme a', translation: 'pursuant to', partOfSpeech: 'preposition',
    exampleSentence: 'Conforme a la legislación vigente, las partes deberán comparecer ante el juez instructor.', exampleTranslation: 'Pursuant to current legislation, the parties shall appear before the examining judge.',
  },
  {
    id: 'es_c2_v027', language: lang, level, category: 'formal_register',
    word: 'en su defecto', translation: 'failing that', partOfSpeech: 'adverb',
    exampleSentence: 'El representante legal deberá acudir a la audiencia; en su defecto, se designará un abogado de oficio.', exampleTranslation: 'The legal representative must attend the hearing; failing that, a court-appointed lawyer shall be designated.',
  },
  {
    id: 'es_c2_v028', language: lang, level, category: 'formal_register',
    word: 'dicho lo cual', translation: 'that said', partOfSpeech: 'conjunction',
    exampleSentence: 'Dicho lo cual, conviene matizar que los resultados no son extrapolables a otros contextos.', exampleTranslation: 'That said, it should be noted that the results are not transferable to other contexts.',
  },
  {
    id: 'es_c2_v029', language: lang, level, category: 'formal_register',
    word: 'habida cuenta de', translation: 'in view of', partOfSpeech: 'preposition',
    exampleSentence: 'Habida cuenta de la gravedad de los hechos, se ha decidido elevar el caso a instancias superiores.', exampleTranslation: 'In view of the gravity of the facts, it has been decided to refer the case to higher authorities.',
  },
];

// ── Idioms ──────────────────────────────────────────────────────

const idioms: VocabWord[] = [
  {
    id: 'es_c2_v030', language: lang, level, category: 'idioms',
    word: 'no tener pelos en la lengua', translation: 'to speak frankly', partOfSpeech: 'verb',
    exampleSentence: 'La ministra no tiene pelos en la lengua y denunció la corrupción sin rodeos.', exampleTranslation: 'The minister speaks frankly and denounced the corruption without beating around the bush.',
  },
  {
    id: 'es_c2_v031', language: lang, level, category: 'idioms',
    word: 'estar en las nubes', translation: 'to daydream', partOfSpeech: 'verb',
    exampleSentence: 'El alumno estaba en las nubes durante toda la clase y no se enteró de nada.', exampleTranslation: 'The student was daydreaming the entire class and didn\'t catch any of it.',
  },
  {
    id: 'es_c2_v032', language: lang, level, category: 'idioms',
    word: 'dar en el clavo', translation: 'to hit the nail on the head', partOfSpeech: 'verb',
    exampleSentence: 'Con su análisis de la crisis financiera, el economista dio en el clavo.', exampleTranslation: 'With his analysis of the financial crisis, the economist hit the nail on the head.',
  },
  {
    id: 'es_c2_v033', language: lang, level, category: 'idioms',
    word: 'meter la pata', translation: 'to put one\'s foot in it', partOfSpeech: 'verb',
    exampleSentence: 'Metí la pata al revelar la sorpresa delante de la cumpleañera.', exampleTranslation: 'I put my foot in it by revealing the surprise in front of the birthday girl.',
  },
  {
    id: 'es_c2_v034', language: lang, level, category: 'idioms',
    word: 'ponerse las pilas', translation: 'to get one\'s act together', partOfSpeech: 'verb',
    exampleSentence: 'Si no te pones las pilas pronto, no vas a aprobar el examen de certificación.', exampleTranslation: 'If you don\'t get your act together soon, you won\'t pass the certification exam.',
  },
  {
    id: 'es_c2_v035', language: lang, level, category: 'idioms',
    word: 'echar una mano', translation: 'to lend a hand', partOfSpeech: 'verb',
    exampleSentence: '¿Podrías echarme una mano con la traducción de este documento jurídico?', exampleTranslation: 'Could you lend me a hand with the translation of this legal document?',
  },
  {
    id: 'es_c2_v036', language: lang, level, category: 'idioms',
    word: 'costar un ojo de la cara', translation: 'to cost an arm and a leg', partOfSpeech: 'verb',
    exampleSentence: 'La reforma del edificio nos costó un ojo de la cara, pero el resultado valió la pena.', exampleTranslation: 'The renovation of the building cost us an arm and a leg, but the result was worth it.',
  },
];

// ── Nuanced Verbs ───────────────────────────────────────────────

const nuancedVerbs: VocabWord[] = [
  {
    id: 'es_c2_v037', language: lang, level, category: 'nuanced_verbs',
    word: 'atañer', translation: 'to concern / to pertain', partOfSpeech: 'verb',
    exampleSentence: 'En lo que atañe a la política exterior, el gobierno adoptó una postura más conciliadora.', exampleTranslation: 'As far as foreign policy is concerned, the government adopted a more conciliatory stance.',
  },
  {
    id: 'es_c2_v038', language: lang, level, category: 'nuanced_verbs',
    word: 'incumbir', translation: 'to be incumbent upon', partOfSpeech: 'verb',
    exampleSentence: 'No me incumbe juzgar las decisiones personales de los demás.', exampleTranslation: 'It is not incumbent upon me to judge other people\'s personal decisions.',
  },
  {
    id: 'es_c2_v039', language: lang, level, category: 'nuanced_verbs',
    word: 'suscitar', translation: 'to provoke / to elicit', partOfSpeech: 'verb',
    exampleSentence: 'La propuesta suscitó un intenso debate entre los miembros del consejo directivo.', exampleTranslation: 'The proposal elicited an intense debate among the members of the board of directors.',
  },
  {
    id: 'es_c2_v040', language: lang, level, category: 'nuanced_verbs',
    word: 'versar', translation: 'to deal with', partOfSpeech: 'verb',
    exampleSentence: 'La conferencia versó sobre las implicaciones éticas de la inteligencia artificial generativa.', exampleTranslation: 'The lecture dealt with the ethical implications of generative artificial intelligence.',
  },
  {
    id: 'es_c2_v041', language: lang, level, category: 'nuanced_verbs',
    word: 'conllevar', translation: 'to entail', partOfSpeech: 'verb',
    exampleSentence: 'El cargo de director conlleva responsabilidades que van más allá de la mera gestión administrativa.', exampleTranslation: 'The position of director entails responsibilities that go beyond mere administrative management.',
  },
  {
    id: 'es_c2_v042', language: lang, level, category: 'nuanced_verbs',
    word: 'acarrear', translation: 'to bring about', partOfSpeech: 'verb',
    exampleSentence: 'La negligencia del responsable acarreó consecuencias jurídicas de considerable envergadura.', exampleTranslation: 'The negligence of the person in charge brought about legal consequences of considerable magnitude.',
  },
  {
    id: 'es_c2_v043', language: lang, level, category: 'nuanced_verbs',
    word: 'subyacer', translation: 'to underlie', partOfSpeech: 'verb',
    exampleSentence: 'Bajo la aparente normalidad subyace un profundo descontento social.', exampleTranslation: 'Beneath the apparent normality lies a deep social discontent.',
  },
];

// ── Combined Export ─────────────────────────────────────────────

export const SPANISH_C2_VOCAB: VocabWord[] = [
  ...diplomacy,
  ...linguistics,
  ...psychology,
  ...formalRegister,
  ...idioms,
  ...nuancedVerbs,
];
