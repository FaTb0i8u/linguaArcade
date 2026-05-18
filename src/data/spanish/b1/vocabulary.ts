/**
 * Spanish B1 Vocabulary
 *
 * Intermediate-level vocabulary covering education, technology,
 * environment, media, professions, opinions, housing, and culture.
 * Aligned with CEFR B1: can understand main points on familiar matters.
 */

import type { VocabWord } from '../../../types';

const lang = 'es' as const;
const level = 'B1' as const;

// ── Education ───────────────────────────────────────────────────

const education: VocabWord[] = [
  {
    id: 'es_b1_v001', language: lang, level, category: 'education',
    word: 'la universidad', translation: 'university', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Estudio derecho en la universidad.', exampleTranslation: 'I study law at the university.',
  },
  {
    id: 'es_b1_v002', language: lang, level, category: 'education',
    word: 'la asignatura', translation: 'subject (academic)', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Mi asignatura favorita es historia.', exampleTranslation: 'My favorite subject is history.',
  },
  {
    id: 'es_b1_v003', language: lang, level, category: 'education',
    word: 'el examen', translation: 'exam', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Tengo un examen de matemáticas mañana.', exampleTranslation: 'I have a math exam tomorrow.',
  },
  {
    id: 'es_b1_v004', language: lang, level, category: 'education',
    word: 'aprobar', translation: 'to pass (an exam)', partOfSpeech: 'verb',
    exampleSentence: 'Espero aprobar todos los exámenes.', exampleTranslation: 'I hope to pass all the exams.',
  },
  {
    id: 'es_b1_v005', language: lang, level, category: 'education',
    word: 'suspender', translation: 'to fail (an exam)', partOfSpeech: 'verb',
    exampleSentence: 'No quiero suspender esta asignatura.', exampleTranslation: 'I don\'t want to fail this subject.',
  },
  {
    id: 'es_b1_v006', language: lang, level, category: 'education',
    word: 'la beca', translation: 'scholarship', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Ella recibió una beca para estudiar en el extranjero.', exampleTranslation: 'She received a scholarship to study abroad.',
  },
  {
    id: 'es_b1_v007', language: lang, level, category: 'education',
    word: 'investigar', translation: 'to research', partOfSpeech: 'verb',
    exampleSentence: 'Los estudiantes deben investigar el tema.', exampleTranslation: 'The students must research the topic.',
  },
  {
    id: 'es_b1_v008', language: lang, level, category: 'education',
    word: 'el conocimiento', translation: 'knowledge', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El conocimiento es poder.', exampleTranslation: 'Knowledge is power.',
  },
];

// ── Technology ──────────────────────────────────────────────────

const technology: VocabWord[] = [
  {
    id: 'es_b1_v009', language: lang, level, category: 'technology',
    word: 'el ordenador', translation: 'computer', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Necesito un ordenador nuevo para trabajar.', exampleTranslation: 'I need a new computer to work.',
  },
  {
    id: 'es_b1_v010', language: lang, level, category: 'technology',
    word: 'la contraseña', translation: 'password', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'He olvidado mi contraseña.', exampleTranslation: 'I have forgotten my password.',
  },
  {
    id: 'es_b1_v011', language: lang, level, category: 'technology',
    word: 'la red', translation: 'network', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'No hay conexión a la red.', exampleTranslation: 'There is no network connection.',
  },
  {
    id: 'es_b1_v012', language: lang, level, category: 'technology',
    word: 'descargar', translation: 'to download', partOfSpeech: 'verb',
    exampleSentence: 'Voy a descargar la aplicación.', exampleTranslation: 'I am going to download the app.',
  },
  {
    id: 'es_b1_v013', language: lang, level, category: 'technology',
    word: 'la pantalla', translation: 'screen', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La pantalla de mi teléfono está rota.', exampleTranslation: 'My phone screen is broken.',
  },
  {
    id: 'es_b1_v014', language: lang, level, category: 'technology',
    word: 'el correo electrónico', translation: 'email', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Te envié un correo electrónico ayer.', exampleTranslation: 'I sent you an email yesterday.',
  },
  {
    id: 'es_b1_v015', language: lang, level, category: 'technology',
    word: 'la página web', translation: 'web page', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Visita nuestra página web para más información.', exampleTranslation: 'Visit our web page for more information.',
  },
];

// ── Environment ─────────────────────────────────────────────────

const environment: VocabWord[] = [
  {
    id: 'es_b1_v016', language: lang, level, category: 'environment',
    word: 'el medio ambiente', translation: 'environment', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Debemos proteger el medio ambiente.', exampleTranslation: 'We must protect the environment.',
  },
  {
    id: 'es_b1_v017', language: lang, level, category: 'environment',
    word: 'la contaminación', translation: 'pollution', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La contaminación del aire es un problema grave.', exampleTranslation: 'Air pollution is a serious problem.',
  },
  {
    id: 'es_b1_v018', language: lang, level, category: 'environment',
    word: 'reciclar', translation: 'to recycle', partOfSpeech: 'verb',
    exampleSentence: 'Es importante reciclar el plástico.', exampleTranslation: 'It is important to recycle plastic.',
  },
  {
    id: 'es_b1_v019', language: lang, level, category: 'environment',
    word: 'el bosque', translation: 'forest', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Los bosques son esenciales para el planeta.', exampleTranslation: 'Forests are essential for the planet.',
  },
  {
    id: 'es_b1_v020', language: lang, level, category: 'environment',
    word: 'el cambio climático', translation: 'climate change', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El cambio climático afecta a todo el mundo.', exampleTranslation: 'Climate change affects the whole world.',
  },
  {
    id: 'es_b1_v021', language: lang, level, category: 'environment',
    word: 'la energía', translation: 'energy', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La energía solar es renovable.', exampleTranslation: 'Solar energy is renewable.',
  },
  {
    id: 'es_b1_v022', language: lang, level, category: 'environment',
    word: 'ahorrar', translation: 'to save (resources)', partOfSpeech: 'verb',
    exampleSentence: 'Debemos ahorrar agua.', exampleTranslation: 'We must save water.',
  },
  {
    id: 'es_b1_v023', language: lang, level, category: 'environment',
    word: 'la naturaleza', translation: 'nature', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Me encanta pasar tiempo en la naturaleza.', exampleTranslation: 'I love spending time in nature.',
  },
];

// ── Media ───────────────────────────────────────────────────────

const media: VocabWord[] = [
  {
    id: 'es_b1_v024', language: lang, level, category: 'media',
    word: 'las noticias', translation: 'news', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Veo las noticias todas las mañanas.', exampleTranslation: 'I watch the news every morning.',
  },
  {
    id: 'es_b1_v025', language: lang, level, category: 'media',
    word: 'el periódico', translation: 'newspaper', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Mi abuelo lee el periódico todos los días.', exampleTranslation: 'My grandfather reads the newspaper every day.',
  },
  {
    id: 'es_b1_v026', language: lang, level, category: 'media',
    word: 'la revista', translation: 'magazine', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Compré una revista de viajes.', exampleTranslation: 'I bought a travel magazine.',
  },
  {
    id: 'es_b1_v027', language: lang, level, category: 'media',
    word: 'el artículo', translation: 'article', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Leí un artículo interesante sobre tecnología.', exampleTranslation: 'I read an interesting article about technology.',
  },
  {
    id: 'es_b1_v028', language: lang, level, category: 'media',
    word: 'las redes sociales', translation: 'social media', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Paso demasiado tiempo en las redes sociales.', exampleTranslation: 'I spend too much time on social media.',
  },
  {
    id: 'es_b1_v029', language: lang, level, category: 'media',
    word: 'publicar', translation: 'to publish', partOfSpeech: 'verb',
    exampleSentence: 'Quiero publicar un artículo en el blog.', exampleTranslation: 'I want to publish an article on the blog.',
  },
  {
    id: 'es_b1_v030', language: lang, level, category: 'media',
    word: 'el anuncio', translation: 'advertisement', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Hay demasiados anuncios en la televisión.', exampleTranslation: 'There are too many advertisements on television.',
  },
];

// ── Professions ─────────────────────────────────────────────────

const professions: VocabWord[] = [
  {
    id: 'es_b1_v031', language: lang, level, category: 'professions',
    word: 'el/la abogado/a', translation: 'lawyer', partOfSpeech: 'noun',
    exampleSentence: 'Mi hermana es abogada.', exampleTranslation: 'My sister is a lawyer.',
  },
  {
    id: 'es_b1_v032', language: lang, level, category: 'professions',
    word: 'el/la ingeniero/a', translation: 'engineer', partOfSpeech: 'noun',
    exampleSentence: 'Quiero ser ingeniero.', exampleTranslation: 'I want to be an engineer.',
  },
  {
    id: 'es_b1_v033', language: lang, level, category: 'professions',
    word: 'el/la periodista', translation: 'journalist', partOfSpeech: 'noun',
    exampleSentence: 'La periodista entrevistó al presidente.', exampleTranslation: 'The journalist interviewed the president.',
  },
  {
    id: 'es_b1_v034', language: lang, level, category: 'professions',
    word: 'el/la científico/a', translation: 'scientist', partOfSpeech: 'noun',
    exampleSentence: 'Los científicos descubrieron una nueva especie.', exampleTranslation: 'The scientists discovered a new species.',
  },
  {
    id: 'es_b1_v035', language: lang, level, category: 'professions',
    word: 'el/la empresario/a', translation: 'entrepreneur', partOfSpeech: 'noun',
    exampleSentence: 'Ella es una empresaria muy exitosa.', exampleTranslation: 'She is a very successful entrepreneur.',
  },
  {
    id: 'es_b1_v036', language: lang, level, category: 'professions',
    word: 'el/la arquitecto/a', translation: 'architect', partOfSpeech: 'noun',
    exampleSentence: 'El arquitecto diseñó un edificio moderno.', exampleTranslation: 'The architect designed a modern building.',
  },
  {
    id: 'es_b1_v037', language: lang, level, category: 'professions',
    word: 'el/la enfermero/a', translation: 'nurse', partOfSpeech: 'noun',
    exampleSentence: 'El enfermero trabaja en el hospital.', exampleTranslation: 'The nurse works at the hospital.',
  },
  {
    id: 'es_b1_v038', language: lang, level, category: 'professions',
    word: 'el/la contable', translation: 'accountant', partOfSpeech: 'noun',
    exampleSentence: 'Necesitamos un contable para la empresa.', exampleTranslation: 'We need an accountant for the company.',
  },
];

// ── Opinions ────────────────────────────────────────────────────

const opinions: VocabWord[] = [
  {
    id: 'es_b1_v039', language: lang, level, category: 'opinions',
    word: 'opinar', translation: 'to think (give an opinion)', partOfSpeech: 'verb',
    exampleSentence: '¿Qué opinas sobre este tema?', exampleTranslation: 'What do you think about this topic?',
  },
  {
    id: 'es_b1_v040', language: lang, level, category: 'opinions',
    word: 'creer', translation: 'to believe', partOfSpeech: 'verb',
    exampleSentence: 'Creo que tienes razón.', exampleTranslation: 'I believe you are right.',
  },
  {
    id: 'es_b1_v041', language: lang, level, category: 'opinions',
    word: 'estar de acuerdo', translation: 'to agree', partOfSpeech: 'verb',
    exampleSentence: 'Estoy de acuerdo contigo.', exampleTranslation: 'I agree with you.',
  },
  {
    id: 'es_b1_v042', language: lang, level, category: 'opinions',
    word: 'en mi opinión', translation: 'in my opinion', partOfSpeech: 'adverb',
    exampleSentence: 'En mi opinión, deberíamos esperar.', exampleTranslation: 'In my opinion, we should wait.',
  },
  {
    id: 'es_b1_v043', language: lang, level, category: 'opinions',
    word: 'discutir', translation: 'to discuss', partOfSpeech: 'verb',
    exampleSentence: 'Vamos a discutir el problema.', exampleTranslation: 'Let\'s discuss the problem.',
  },
  {
    id: 'es_b1_v044', language: lang, level, category: 'opinions',
    word: 'proponer', translation: 'to propose', partOfSpeech: 'verb',
    exampleSentence: 'Propongo que cambiemos el plan.', exampleTranslation: 'I propose that we change the plan.',
  },
  {
    id: 'es_b1_v045', language: lang, level, category: 'opinions',
    word: 'sin embargo', translation: 'however', partOfSpeech: 'conjunction',
    exampleSentence: 'Es difícil; sin embargo, no es imposible.', exampleTranslation: 'It is difficult; however, it is not impossible.',
  },
];

// ── Housing ─────────────────────────────────────────────────────

const housing: VocabWord[] = [
  {
    id: 'es_b1_v046', language: lang, level, category: 'housing',
    word: 'el piso', translation: 'apartment', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Alquilamos un piso en el centro.', exampleTranslation: 'We rent an apartment in the center.',
  },
  {
    id: 'es_b1_v047', language: lang, level, category: 'housing',
    word: 'el alquiler', translation: 'rent', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El alquiler ha subido mucho este año.', exampleTranslation: 'The rent has gone up a lot this year.',
  },
  {
    id: 'es_b1_v048', language: lang, level, category: 'housing',
    word: 'mudarse', translation: 'to move (house)', partOfSpeech: 'verb',
    exampleSentence: 'Nos mudamos el mes que viene.', exampleTranslation: 'We are moving next month.',
  },
  {
    id: 'es_b1_v049', language: lang, level, category: 'housing',
    word: 'el mueble', translation: 'piece of furniture', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Compramos muebles nuevos para el salón.', exampleTranslation: 'We bought new furniture for the living room.',
  },
  {
    id: 'es_b1_v050', language: lang, level, category: 'housing',
    word: 'el vecino', translation: 'neighbor', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Nuestros vecinos son muy amables.', exampleTranslation: 'Our neighbors are very kind.',
  },
  {
    id: 'es_b1_v051', language: lang, level, category: 'housing',
    word: 'la hipoteca', translation: 'mortgage', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Están pagando la hipoteca del piso.', exampleTranslation: 'They are paying the mortgage on the apartment.',
  },
  {
    id: 'es_b1_v052', language: lang, level, category: 'housing',
    word: 'el ascensor', translation: 'elevator', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El ascensor no funciona hoy.', exampleTranslation: 'The elevator is not working today.',
  },
  {
    id: 'es_b1_v053', language: lang, level, category: 'housing',
    word: 'compartir', translation: 'to share', partOfSpeech: 'verb',
    exampleSentence: 'Comparto piso con dos compañeros.', exampleTranslation: 'I share an apartment with two roommates.',
  },
];

// ── Culture ─────────────────────────────────────────────────────

const culture: VocabWord[] = [
  {
    id: 'es_b1_v054', language: lang, level, category: 'culture',
    word: 'el museo', translation: 'museum', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Visitamos el museo de arte contemporáneo.', exampleTranslation: 'We visited the contemporary art museum.',
  },
  {
    id: 'es_b1_v055', language: lang, level, category: 'culture',
    word: 'el concierto', translation: 'concert', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El concierto empieza a las nueve.', exampleTranslation: 'The concert starts at nine.',
  },
  {
    id: 'es_b1_v056', language: lang, level, category: 'culture',
    word: 'la obra de teatro', translation: 'play (theater)', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Fuimos a ver una obra de teatro el sábado.', exampleTranslation: 'We went to see a play on Saturday.',
  },
  {
    id: 'es_b1_v057', language: lang, level, category: 'culture',
    word: 'la exposición', translation: 'exhibition', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Hay una exposición de fotografía en el museo.', exampleTranslation: 'There is a photography exhibition at the museum.',
  },
  {
    id: 'es_b1_v058', language: lang, level, category: 'culture',
    word: 'el patrimonio', translation: 'heritage', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Esta ciudad es patrimonio de la humanidad.', exampleTranslation: 'This city is a world heritage site.',
  },
  {
    id: 'es_b1_v059', language: lang, level, category: 'culture',
    word: 'la escultura', translation: 'sculpture', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La escultura es del siglo dieciocho.', exampleTranslation: 'The sculpture is from the eighteenth century.',
  },
  {
    id: 'es_b1_v060', language: lang, level, category: 'culture',
    word: 'el/la artista', translation: 'artist', partOfSpeech: 'noun',
    exampleSentence: 'Es un artista muy famoso en España.', exampleTranslation: 'He is a very famous artist in Spain.',
  },
];

// ── Export ───────────────────────────────────────────────────────

export const SPANISH_B1_VOCAB: VocabWord[] = [
  ...education,
  ...technology,
  ...environment,
  ...media,
  ...professions,
  ...opinions,
  ...housing,
  ...culture,
];
