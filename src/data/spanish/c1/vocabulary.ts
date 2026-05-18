/**
 * Spanish C1 Vocabulary
 *
 * Advanced vocabulary covering academia, law, economics, philosophy,
 * literature, and nuanced emotions.
 * Aligned with CEFR C1: can use language flexibly for academic/professional purposes.
 */

import type { VocabWord } from '../../../types';

const lang = 'es' as const;
const level = 'C1' as const;

// ── Academia ────────────────────────────────────────────────────

const academia: VocabWord[] = [
  {
    id: 'es_c1_v001', language: lang, level, category: 'academia',
    word: 'la tesis', translation: 'thesis', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Defendió su tesis doctoral ante un tribunal de cinco catedráticos.', exampleTranslation: 'She defended her doctoral thesis before a panel of five professors.',
  },
  {
    id: 'es_c1_v002', language: lang, level, category: 'academia',
    word: 'la investigación', translation: 'research', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La investigación sobre inteligencia artificial ha experimentado un crecimiento exponencial.', exampleTranslation: 'Research on artificial intelligence has experienced exponential growth.',
  },
  {
    id: 'es_c1_v003', language: lang, level, category: 'academia',
    word: 'el congreso', translation: 'conference / congress', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Presentará los resultados preliminares en el congreso internacional de lingüística.', exampleTranslation: 'She will present the preliminary results at the international linguistics conference.',
  },
  {
    id: 'es_c1_v004', language: lang, level, category: 'academia',
    word: 'la revisión por pares', translation: 'peer review', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'El artículo fue rechazado tras la revisión por pares debido a fallos metodológicos.', exampleTranslation: 'The article was rejected after peer review due to methodological flaws.',
  },
  {
    id: 'es_c1_v005', language: lang, level, category: 'academia',
    word: 'la hipótesis', translation: 'hypothesis', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Los datos empíricos no respaldan la hipótesis inicial del estudio.', exampleTranslation: 'The empirical data do not support the initial hypothesis of the study.',
  },
  {
    id: 'es_c1_v006', language: lang, level, category: 'academia',
    word: 'el marco teórico', translation: 'theoretical framework', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El marco teórico se fundamenta en la sociolingüística aplicada.', exampleTranslation: 'The theoretical framework is grounded in applied sociolinguistics.',
  },
  {
    id: 'es_c1_v007', language: lang, level, category: 'academia',
    word: 'la beca', translation: 'scholarship / grant', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Obtuvo una beca de investigación para realizar una estancia en el extranjero.', exampleTranslation: 'She obtained a research grant to do a stay abroad.',
  },
  {
    id: 'es_c1_v008', language: lang, level, category: 'academia',
    word: 'publicar', translation: 'to publish', partOfSpeech: 'verb',
    exampleSentence: 'El equipo logró publicar sus hallazgos en una revista de alto impacto.', exampleTranslation: 'The team managed to publish their findings in a high-impact journal.',
  },
];

// ── Law ─────────────────────────────────────────────────────────

const law: VocabWord[] = [
  {
    id: 'es_c1_v009', language: lang, level, category: 'law',
    word: 'la justicia', translation: 'justice', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La justicia debe ser imparcial e independiente del poder político.', exampleTranslation: 'Justice must be impartial and independent of political power.',
  },
  {
    id: 'es_c1_v010', language: lang, level, category: 'law',
    word: 'el tribunal', translation: 'court', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El tribunal dictó sentencia tras meses de deliberaciones.', exampleTranslation: 'The court handed down its verdict after months of deliberation.',
  },
  {
    id: 'es_c1_v011', language: lang, level, category: 'law',
    word: 'el juicio', translation: 'trial', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El juicio se prolongó durante varias semanas por la complejidad del caso.', exampleTranslation: 'The trial lasted several weeks due to the complexity of the case.',
  },
  {
    id: 'es_c1_v012', language: lang, level, category: 'law',
    word: 'el veredicto', translation: 'verdict', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El jurado emitió un veredicto de culpabilidad por unanimidad.', exampleTranslation: 'The jury delivered a unanimous guilty verdict.',
  },
  {
    id: 'es_c1_v013', language: lang, level, category: 'law',
    word: 'la apelación', translation: 'appeal', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La defensa presentó una apelación ante el Tribunal Supremo.', exampleTranslation: 'The defense filed an appeal before the Supreme Court.',
  },
  {
    id: 'es_c1_v014', language: lang, level, category: 'law',
    word: 'el demandante', translation: 'plaintiff', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El demandante alegó que la empresa había incumplido el contrato.', exampleTranslation: 'The plaintiff alleged that the company had breached the contract.',
  },
  {
    id: 'es_c1_v015', language: lang, level, category: 'law',
    word: 'absolver', translation: 'to acquit', partOfSpeech: 'verb',
    exampleSentence: 'El juez decidió absolver al acusado por falta de pruebas.', exampleTranslation: 'The judge decided to acquit the defendant due to lack of evidence.',
  },
  {
    id: 'es_c1_v016', language: lang, level, category: 'law',
    word: 'el delito', translation: 'crime / offense', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El fraude fiscal es un delito penado con penas de hasta cinco años de prisión.', exampleTranslation: 'Tax fraud is a crime punishable by up to five years in prison.',
  },
];

// ── Economics ───────────────────────────────────────────────────

const economics: VocabWord[] = [
  {
    id: 'es_c1_v017', language: lang, level, category: 'economics',
    word: 'la inflación', translation: 'inflation', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La inflación interanual alcanzó el seis por ciento durante el tercer trimestre.', exampleTranslation: 'Year-on-year inflation reached six percent during the third quarter.',
  },
  {
    id: 'es_c1_v018', language: lang, level, category: 'economics',
    word: 'el producto interior bruto', translation: 'gross domestic product (GDP)', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El producto interior bruto se contrajo un dos por ciento respecto al año anterior.', exampleTranslation: 'Gross domestic product contracted by two percent compared to the previous year.',
  },
  {
    id: 'es_c1_v019', language: lang, level, category: 'economics',
    word: 'el comercio', translation: 'trade', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El comercio exterior se vio afectado por las nuevas barreras arancelarias.', exampleTranslation: 'Foreign trade was affected by new tariff barriers.',
  },
  {
    id: 'es_c1_v020', language: lang, level, category: 'economics',
    word: 'la recesión', translation: 'recession', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Los analistas advierten que la economía podría entrar en recesión en el próximo semestre.', exampleTranslation: 'Analysts warn that the economy could enter a recession in the next half-year.',
  },
  {
    id: 'es_c1_v021', language: lang, level, category: 'economics',
    word: 'la deuda pública', translation: 'public debt', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La deuda pública supera ya el cien por cien del producto interior bruto.', exampleTranslation: 'Public debt already exceeds one hundred percent of GDP.',
  },
  {
    id: 'es_c1_v022', language: lang, level, category: 'economics',
    word: 'el déficit', translation: 'deficit', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El gobierno prometió reducir el déficit fiscal mediante recortes presupuestarios.', exampleTranslation: 'The government promised to reduce the fiscal deficit through budget cuts.',
  },
  {
    id: 'es_c1_v023', language: lang, level, category: 'economics',
    word: 'la tasa de desempleo', translation: 'unemployment rate', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La tasa de desempleo entre los jóvenes duplica la media nacional.', exampleTranslation: 'The unemployment rate among young people is double the national average.',
  },
  {
    id: 'es_c1_v024', language: lang, level, category: 'economics',
    word: 'invertir', translation: 'to invest', partOfSpeech: 'verb',
    exampleSentence: 'Muchas empresas han decidido invertir en energías renovables.', exampleTranslation: 'Many companies have decided to invest in renewable energy.',
  },
];

// ── Philosophy ──────────────────────────────────────────────────

const philosophy: VocabWord[] = [
  {
    id: 'es_c1_v025', language: lang, level, category: 'philosophy',
    word: 'el existencialismo', translation: 'existentialism', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El existencialismo plantea que la existencia precede a la esencia.', exampleTranslation: 'Existentialism posits that existence precedes essence.',
  },
  {
    id: 'es_c1_v026', language: lang, level, category: 'philosophy',
    word: 'la ética', translation: 'ethics', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La ética profesional exige que el investigador declare cualquier conflicto de intereses.', exampleTranslation: 'Professional ethics require the researcher to declare any conflicts of interest.',
  },
  {
    id: 'es_c1_v027', language: lang, level, category: 'philosophy',
    word: 'la conciencia', translation: 'consciousness / conscience', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'El problema de la conciencia sigue siendo uno de los grandes enigmas de la filosofía de la mente.', exampleTranslation: 'The problem of consciousness remains one of the great enigmas of the philosophy of mind.',
  },
  {
    id: 'es_c1_v028', language: lang, level, category: 'philosophy',
    word: 'la razón', translation: 'reason', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Kant sostenía que la razón pura es la base de todo conocimiento a priori.', exampleTranslation: 'Kant maintained that pure reason is the foundation of all a priori knowledge.',
  },
  {
    id: 'es_c1_v029', language: lang, level, category: 'philosophy',
    word: 'la dialéctica', translation: 'dialectics', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La dialéctica hegeliana se estructura en tesis, antítesis y síntesis.', exampleTranslation: 'Hegelian dialectics is structured around thesis, antithesis, and synthesis.',
  },
  {
    id: 'es_c1_v030', language: lang, level, category: 'philosophy',
    word: 'el empirismo', translation: 'empiricism', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El empirismo defiende que todo conocimiento proviene de la experiencia sensorial.', exampleTranslation: 'Empiricism holds that all knowledge comes from sensory experience.',
  },
  {
    id: 'es_c1_v031', language: lang, level, category: 'philosophy',
    word: 'la ontología', translation: 'ontology', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La ontología estudia la naturaleza del ser y las categorías fundamentales de la realidad.', exampleTranslation: 'Ontology studies the nature of being and the fundamental categories of reality.',
  },
  {
    id: 'es_c1_v032', language: lang, level, category: 'philosophy',
    word: 'trascender', translation: 'to transcend', partOfSpeech: 'verb',
    exampleSentence: 'Su obra logró trascender las fronteras de la filosofía y penetrar en la cultura popular.', exampleTranslation: 'His work managed to transcend the boundaries of philosophy and penetrate popular culture.',
  },
];

// ── Literature ──────────────────────────────────────────────────

const literature: VocabWord[] = [
  {
    id: 'es_c1_v033', language: lang, level, category: 'literature',
    word: 'la metáfora', translation: 'metaphor', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La metáfora de la vida como un viaje es recurrente en la literatura universal.', exampleTranslation: 'The metaphor of life as a journey is recurrent in world literature.',
  },
  {
    id: 'es_c1_v034', language: lang, level, category: 'literature',
    word: 'la narrativa', translation: 'narrative', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La narrativa latinoamericana del siglo XX transformó la literatura contemporánea.', exampleTranslation: 'Twentieth-century Latin American narrative transformed contemporary literature.',
  },
  {
    id: 'es_c1_v035', language: lang, level, category: 'literature',
    word: 'el protagonista', translation: 'protagonist', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El protagonista de la novela se debate entre el deber moral y la ambición personal.', exampleTranslation: 'The protagonist of the novel is torn between moral duty and personal ambition.',
  },
  {
    id: 'es_c1_v036', language: lang, level, category: 'literature',
    word: 'el verso', translation: 'verse', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'García Lorca dominaba tanto el verso libre como las formas métricas tradicionales.', exampleTranslation: 'García Lorca mastered both free verse and traditional metrical forms.',
  },
  {
    id: 'es_c1_v037', language: lang, level, category: 'literature',
    word: 'la alegoría', translation: 'allegory', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La obra puede leerse como una alegoría de la lucha entre el bien y el mal.', exampleTranslation: 'The work can be read as an allegory of the struggle between good and evil.',
  },
  {
    id: 'es_c1_v038', language: lang, level, category: 'literature',
    word: 'el desenlace', translation: 'dénouement / ending', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El desenlace de la trama resultó tan inesperado que desconcertó a la crítica.', exampleTranslation: 'The dénouement of the plot was so unexpected that it baffled critics.',
  },
  {
    id: 'es_c1_v039', language: lang, level, category: 'literature',
    word: 'la prosa', translation: 'prose', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La prosa de Borges se caracteriza por su precisión y su erudición.', exampleTranslation: 'Borges\'s prose is characterized by its precision and erudition.',
  },
  {
    id: 'es_c1_v040', language: lang, level, category: 'literature',
    word: 'el ensayo', translation: 'essay', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Octavio Paz escribió ensayos fundamentales sobre la identidad mexicana.', exampleTranslation: 'Octavio Paz wrote fundamental essays on Mexican identity.',
  },
];

// ── Advanced Emotions ───────────────────────────────────────────

const advanced_emotions: VocabWord[] = [
  {
    id: 'es_c1_v041', language: lang, level, category: 'advanced_emotions',
    word: 'el resentimiento', translation: 'resentment', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El resentimiento acumulado durante años terminó por destruir su amistad.', exampleTranslation: 'The resentment built up over years ended up destroying their friendship.',
  },
  {
    id: 'es_c1_v042', language: lang, level, category: 'advanced_emotions',
    word: 'el desconcierto', translation: 'bewilderment', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'La noticia provocó un profundo desconcierto entre los miembros del comité.', exampleTranslation: 'The news caused deep bewilderment among the committee members.',
  },
  {
    id: 'es_c1_v043', language: lang, level, category: 'advanced_emotions',
    word: 'la euforia', translation: 'euphoria', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La euforia colectiva se apoderó de la ciudad tras la victoria del equipo.', exampleTranslation: 'Collective euphoria swept over the city after the team\'s victory.',
  },
  {
    id: 'es_c1_v044', language: lang, level, category: 'advanced_emotions',
    word: 'la melancolía', translation: 'melancholy', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Sus poemas están impregnados de una melancolía que evoca la pérdida del hogar.', exampleTranslation: 'His poems are steeped in a melancholy that evokes the loss of home.',
  },
  {
    id: 'es_c1_v045', language: lang, level, category: 'advanced_emotions',
    word: 'la añoranza', translation: 'longing / nostalgia', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Sentía una añoranza profunda por los veranos de su infancia.', exampleTranslation: 'She felt a deep longing for the summers of her childhood.',
  },
  {
    id: 'es_c1_v046', language: lang, level, category: 'advanced_emotions',
    word: 'la angustia', translation: 'anguish / anxiety', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La angustia existencial es un tema central en la obra de Kierkegaard.', exampleTranslation: 'Existential anguish is a central theme in Kierkegaard\'s work.',
  },
  {
    id: 'es_c1_v047', language: lang, level, category: 'advanced_emotions',
    word: 'la gratitud', translation: 'gratitude', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Expresó su gratitud hacia quienes habían apoyado su candidatura incondicional­mente.', exampleTranslation: 'He expressed his gratitude toward those who had unconditionally supported his candidacy.',
  },
  {
    id: 'es_c1_v048', language: lang, level, category: 'advanced_emotions',
    word: 'la indignación', translation: 'indignation', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La indignación ciudadana desembocó en protestas masivas en todo el país.', exampleTranslation: 'Public indignation led to massive protests across the country.',
  },
  {
    id: 'es_c1_v049', language: lang, level, category: 'advanced_emotions',
    word: 'la plenitud', translation: 'fulfillment / wholeness', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Alcanzó una sensación de plenitud al culminar el proyecto de su vida.', exampleTranslation: 'She achieved a sense of fulfillment upon completing her life\'s project.',
  },
  {
    id: 'es_c1_v050', language: lang, level, category: 'advanced_emotions',
    word: 'la amargura', translation: 'bitterness', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La amargura de la derrota no le impidió volver a intentarlo años después.', exampleTranslation: 'The bitterness of defeat did not prevent him from trying again years later.',
  },
];

// ── Export ───────────────────────────────────────────────────────

export const SPANISH_C1_VOCAB: VocabWord[] = [
  ...academia,
  ...law,
  ...economics,
  ...philosophy,
  ...literature,
  ...advanced_emotions,
];
