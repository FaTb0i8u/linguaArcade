/**
 * Spanish B2 Vocabulary
 *
 * Upper-intermediate vocabulary covering politics, science, business,
 * advanced health, arts, advanced emotions, and social issues.
 * Aligned with CEFR B2: can interact with fluency on complex topics.
 */

import type { VocabWord } from '../../../types';

const lang = 'es' as const;
const level = 'B2' as const;

// ── Politics ────────────────────────────────────────────────────

const politics: VocabWord[] = [
  {
    id: 'es_b2_v001', language: lang, level, category: 'politics',
    word: 'la elección', translation: 'election', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Las elecciones generales se celebrarán en noviembre.', exampleTranslation: 'The general elections will be held in November.',
  },
  {
    id: 'es_b2_v002', language: lang, level, category: 'politics',
    word: 'el gobierno', translation: 'government', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El gobierno aprobó una nueva ley de educación.', exampleTranslation: 'The government approved a new education law.',
  },
  {
    id: 'es_b2_v003', language: lang, level, category: 'politics',
    word: 'la ley', translation: 'law', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La ley protege los derechos de los ciudadanos.', exampleTranslation: 'The law protects the rights of citizens.',
  },
  {
    id: 'es_b2_v004', language: lang, level, category: 'politics',
    word: 'la democracia', translation: 'democracy', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La democracia se basa en la participación ciudadana.', exampleTranslation: 'Democracy is based on citizen participation.',
  },
  {
    id: 'es_b2_v005', language: lang, level, category: 'politics',
    word: 'el partido político', translation: 'political party', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Ese partido político ganó la mayoría de los escaños.', exampleTranslation: 'That political party won the majority of seats.',
  },
  {
    id: 'es_b2_v006', language: lang, level, category: 'politics',
    word: 'el ciudadano', translation: 'citizen', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Todos los ciudadanos tienen derecho a votar.', exampleTranslation: 'All citizens have the right to vote.',
  },
  {
    id: 'es_b2_v007', language: lang, level, category: 'politics',
    word: 'votar', translation: 'to vote', partOfSpeech: 'verb',
    exampleSentence: 'Es importante votar en cada elección.', exampleTranslation: 'It is important to vote in every election.',
  },
  {
    id: 'es_b2_v008', language: lang, level, category: 'politics',
    word: 'el debate', translation: 'debate', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El debate entre los candidatos fue muy intenso.', exampleTranslation: 'The debate between the candidates was very intense.',
  },
];

// ── Science ─────────────────────────────────────────────────────

const science: VocabWord[] = [
  {
    id: 'es_b2_v009', language: lang, level, category: 'science',
    word: 'la investigación', translation: 'research', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La investigación científica avanza cada día.', exampleTranslation: 'Scientific research advances every day.',
  },
  {
    id: 'es_b2_v010', language: lang, level, category: 'science',
    word: 'el experimento', translation: 'experiment', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El experimento confirmó la hipótesis del equipo.', exampleTranslation: 'The experiment confirmed the team\'s hypothesis.',
  },
  {
    id: 'es_b2_v011', language: lang, level, category: 'science',
    word: 'la teoría', translation: 'theory', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La teoría de la relatividad cambió la física moderna.', exampleTranslation: 'The theory of relativity changed modern physics.',
  },
  {
    id: 'es_b2_v012', language: lang, level, category: 'science',
    word: 'el descubrimiento', translation: 'discovery', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El descubrimiento de la penicilina salvó millones de vidas.', exampleTranslation: 'The discovery of penicillin saved millions of lives.',
  },
  {
    id: 'es_b2_v013', language: lang, level, category: 'science',
    word: 'la hipótesis', translation: 'hypothesis', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Los científicos formularon una nueva hipótesis.', exampleTranslation: 'The scientists formulated a new hypothesis.',
  },
  {
    id: 'es_b2_v014', language: lang, level, category: 'science',
    word: 'el laboratorio', translation: 'laboratory', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Trabajan en el laboratorio de biología molecular.', exampleTranslation: 'They work in the molecular biology laboratory.',
  },
  {
    id: 'es_b2_v015', language: lang, level, category: 'science',
    word: 'comprobar', translation: 'to verify / to prove', partOfSpeech: 'verb',
    exampleSentence: 'Necesitamos comprobar los resultados del estudio.', exampleTranslation: 'We need to verify the results of the study.',
  },
  {
    id: 'es_b2_v016', language: lang, level, category: 'science',
    word: 'el dato', translation: 'data point / piece of data', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Los datos confirman que la vacuna es eficaz.', exampleTranslation: 'The data confirm that the vaccine is effective.',
  },
];

// ── Business ────────────────────────────────────────────────────

const business: VocabWord[] = [
  {
    id: 'es_b2_v017', language: lang, level, category: 'business',
    word: 'la empresa', translation: 'company', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La empresa tiene más de quinientos empleados.', exampleTranslation: 'The company has more than five hundred employees.',
  },
  {
    id: 'es_b2_v018', language: lang, level, category: 'business',
    word: 'el empleado', translation: 'employee', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Los empleados recibieron un aumento de sueldo.', exampleTranslation: 'The employees received a salary raise.',
  },
  {
    id: 'es_b2_v019', language: lang, level, category: 'business',
    word: 'el sueldo', translation: 'salary', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El sueldo mínimo ha subido este año.', exampleTranslation: 'The minimum salary has gone up this year.',
  },
  {
    id: 'es_b2_v020', language: lang, level, category: 'business',
    word: 'la reunión', translation: 'meeting', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Tenemos una reunión con el cliente a las diez.', exampleTranslation: 'We have a meeting with the client at ten.',
  },
  {
    id: 'es_b2_v021', language: lang, level, category: 'business',
    word: 'el contrato', translation: 'contract', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Firmé el contrato de trabajo la semana pasada.', exampleTranslation: 'I signed the employment contract last week.',
  },
  {
    id: 'es_b2_v022', language: lang, level, category: 'business',
    word: 'el presupuesto', translation: 'budget', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El presupuesto para el proyecto ha sido aprobado.', exampleTranslation: 'The budget for the project has been approved.',
  },
  {
    id: 'es_b2_v023', language: lang, level, category: 'business',
    word: 'invertir', translation: 'to invest', partOfSpeech: 'verb',
    exampleSentence: 'Decidieron invertir en energías renovables.', exampleTranslation: 'They decided to invest in renewable energy.',
  },
  {
    id: 'es_b2_v024', language: lang, level, category: 'business',
    word: 'la competencia', translation: 'competition', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La competencia en el mercado es cada vez mayor.', exampleTranslation: 'The competition in the market is increasing.',
  },
];

// ── Health (Advanced) ───────────────────────────────────────────

const health_advanced: VocabWord[] = [
  {
    id: 'es_b2_v025', language: lang, level, category: 'health_advanced',
    word: 'la cirugía', translation: 'surgery', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La cirugía duró más de cuatro horas.', exampleTranslation: 'The surgery lasted more than four hours.',
  },
  {
    id: 'es_b2_v026', language: lang, level, category: 'health_advanced',
    word: 'el síntoma', translation: 'symptom', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'La fiebre es un síntoma común de la gripe.', exampleTranslation: 'Fever is a common symptom of the flu.',
  },
  {
    id: 'es_b2_v027', language: lang, level, category: 'health_advanced',
    word: 'el diagnóstico', translation: 'diagnosis', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El médico dio un diagnóstico favorable.', exampleTranslation: 'The doctor gave a favorable diagnosis.',
  },
  {
    id: 'es_b2_v028', language: lang, level, category: 'health_advanced',
    word: 'el tratamiento', translation: 'treatment', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El tratamiento con antibióticos dura diez días.', exampleTranslation: 'The antibiotic treatment lasts ten days.',
  },
  {
    id: 'es_b2_v029', language: lang, level, category: 'health_advanced',
    word: 'la receta', translation: 'prescription', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Necesitas una receta médica para comprar ese medicamento.', exampleTranslation: 'You need a medical prescription to buy that medication.',
  },
  {
    id: 'es_b2_v030', language: lang, level, category: 'health_advanced',
    word: 'la terapia', translation: 'therapy', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La terapia física le ayudó a recuperarse rápidamente.', exampleTranslation: 'Physical therapy helped him recover quickly.',
  },
  {
    id: 'es_b2_v031', language: lang, level, category: 'health_advanced',
    word: 'el especialista', translation: 'specialist', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El especialista le recomendó hacerse más pruebas.', exampleTranslation: 'The specialist recommended he get more tests.',
  },
  {
    id: 'es_b2_v032', language: lang, level, category: 'health_advanced',
    word: 'crónico', translation: 'chronic', partOfSpeech: 'adjective',
    exampleSentence: 'Sufre de dolor crónico en la espalda.', exampleTranslation: 'He suffers from chronic back pain.',
  },
];

// ── Arts ────────────────────────────────────────────────────────

const arts: VocabWord[] = [
  {
    id: 'es_b2_v033', language: lang, level, category: 'arts',
    word: 'la pintura', translation: 'painting', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La pintura de Velázquez se exhibe en el Museo del Prado.', exampleTranslation: 'Velázquez\'s painting is exhibited at the Prado Museum.',
  },
  {
    id: 'es_b2_v034', language: lang, level, category: 'arts',
    word: 'la escultura', translation: 'sculpture', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Esa escultura de mármol es del siglo XVIII.', exampleTranslation: 'That marble sculpture is from the 18th century.',
  },
  {
    id: 'es_b2_v035', language: lang, level, category: 'arts',
    word: 'la literatura', translation: 'literature', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La literatura latinoamericana es conocida en todo el mundo.', exampleTranslation: 'Latin American literature is known worldwide.',
  },
  {
    id: 'es_b2_v036', language: lang, level, category: 'arts',
    word: 'la novela', translation: 'novel', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Estoy leyendo una novela de Gabriel García Márquez.', exampleTranslation: 'I am reading a novel by Gabriel García Márquez.',
  },
  {
    id: 'es_b2_v037', language: lang, level, category: 'arts',
    word: 'el guion', translation: 'screenplay / script', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El guion de la película fue escrito por un director español.', exampleTranslation: 'The screenplay of the film was written by a Spanish director.',
  },
  {
    id: 'es_b2_v038', language: lang, level, category: 'arts',
    word: 'la obra de teatro', translation: 'play (theatre)', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Fuimos a ver una obra de teatro el sábado pasado.', exampleTranslation: 'We went to see a play last Saturday.',
  },
  {
    id: 'es_b2_v039', language: lang, level, category: 'arts',
    word: 'el ensayo', translation: 'essay / rehearsal', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Escribió un ensayo sobre el arte contemporáneo.', exampleTranslation: 'He wrote an essay on contemporary art.',
  },
  {
    id: 'es_b2_v040', language: lang, level, category: 'arts',
    word: 'la exposición', translation: 'exhibition', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La exposición de fotografía estará abierta hasta junio.', exampleTranslation: 'The photography exhibition will be open until June.',
  },
];

// ── Emotions (Advanced) ─────────────────────────────────────────

const emotions_advanced: VocabWord[] = [
  {
    id: 'es_b2_v041', language: lang, level, category: 'emotions_advanced',
    word: 'la ansiedad', translation: 'anxiety', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La ansiedad antes de un examen es muy común.', exampleTranslation: 'Anxiety before an exam is very common.',
  },
  {
    id: 'es_b2_v042', language: lang, level, category: 'emotions_advanced',
    word: 'la frustración', translation: 'frustration', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Sentía frustración por no poder comunicarse bien.', exampleTranslation: 'He felt frustration at not being able to communicate well.',
  },
  {
    id: 'es_b2_v043', language: lang, level, category: 'emotions_advanced',
    word: 'la nostalgia', translation: 'nostalgia', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Siente nostalgia por su país de origen.', exampleTranslation: 'She feels nostalgia for her home country.',
  },
  {
    id: 'es_b2_v044', language: lang, level, category: 'emotions_advanced',
    word: 'la admiración', translation: 'admiration', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Siento una gran admiración por su trabajo.', exampleTranslation: 'I feel great admiration for her work.',
  },
  {
    id: 'es_b2_v045', language: lang, level, category: 'emotions_advanced',
    word: 'el orgullo', translation: 'pride', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Sus padres sienten mucho orgullo por sus logros.', exampleTranslation: 'His parents feel great pride in his achievements.',
  },
  {
    id: 'es_b2_v046', language: lang, level, category: 'emotions_advanced',
    word: 'la decepción', translation: 'disappointment', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La decepción fue enorme cuando perdieron el partido.', exampleTranslation: 'The disappointment was enormous when they lost the match.',
  },
  {
    id: 'es_b2_v047', language: lang, level, category: 'emotions_advanced',
    word: 'la gratitud', translation: 'gratitude', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Expresó su gratitud a todos los que le ayudaron.', exampleTranslation: 'She expressed her gratitude to everyone who helped her.',
  },
];

// ── Social Issues ───────────────────────────────────────────────

const social_issues: VocabWord[] = [
  {
    id: 'es_b2_v048', language: lang, level, category: 'social_issues',
    word: 'la pobreza', translation: 'poverty', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La pobreza afecta a millones de personas en el mundo.', exampleTranslation: 'Poverty affects millions of people around the world.',
  },
  {
    id: 'es_b2_v049', language: lang, level, category: 'social_issues',
    word: 'la desigualdad', translation: 'inequality', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La desigualdad económica sigue creciendo.', exampleTranslation: 'Economic inequality continues to grow.',
  },
  {
    id: 'es_b2_v050', language: lang, level, category: 'social_issues',
    word: 'la inmigración', translation: 'immigration', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La inmigración es un tema central en el debate político.', exampleTranslation: 'Immigration is a central topic in political debate.',
  },
  {
    id: 'es_b2_v051', language: lang, level, category: 'social_issues',
    word: 'los derechos', translation: 'rights', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Todos debemos defender los derechos humanos.', exampleTranslation: 'We all must defend human rights.',
  },
  {
    id: 'es_b2_v052', language: lang, level, category: 'social_issues',
    word: 'la discriminación', translation: 'discrimination', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La discriminación por género es inaceptable.', exampleTranslation: 'Gender discrimination is unacceptable.',
  },
  {
    id: 'es_b2_v053', language: lang, level, category: 'social_issues',
    word: 'el voluntariado', translation: 'volunteering', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El voluntariado es una forma de contribuir a la sociedad.', exampleTranslation: 'Volunteering is a way to contribute to society.',
  },
  {
    id: 'es_b2_v054', language: lang, level, category: 'social_issues',
    word: 'la solidaridad', translation: 'solidarity', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La solidaridad entre vecinos fue clave durante la crisis.', exampleTranslation: 'Solidarity among neighbors was key during the crisis.',
  },
  {
    id: 'es_b2_v055', language: lang, level, category: 'social_issues',
    word: 'la justicia social', translation: 'social justice', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Luchan por la justicia social y la igualdad de oportunidades.', exampleTranslation: 'They fight for social justice and equal opportunities.',
  },
];

// ── Export ───────────────────────────────────────────────────────

export const SPANISH_B2_VOCAB: VocabWord[] = [
  ...politics,
  ...science,
  ...business,
  ...health_advanced,
  ...arts,
  ...emotions_advanced,
  ...social_issues,
];
