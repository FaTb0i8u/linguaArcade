/**
 * Spanish A2 Vocabulary
 *
 * Builds on A1 with more nuanced vocabulary across expanded categories.
 * Aligned with CEFR A2: can understand sentences and frequently used
 * expressions related to areas of most immediate relevance.
 */

import type { VocabWord } from '../../../types';

const lang = 'es' as const;
const level = 'A2' as const;

// ── Travel & Transport ──────────────────────────────────────────

const travel: VocabWord[] = [
  {
    id: 'es_a2_v001', language: lang, level, category: 'travel',
    word: 'el aeropuerto', translation: 'airport', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Vamos al aeropuerto en taxi.', exampleTranslation: 'We go to the airport by taxi.',
  },
  {
    id: 'es_a2_v002', language: lang, level, category: 'travel',
    word: 'el boleto', translation: 'ticket', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Necesito un boleto de ida y vuelta.', exampleTranslation: 'I need a round-trip ticket.',
  },
  {
    id: 'es_a2_v003', language: lang, level, category: 'travel',
    word: 'el tren', translation: 'train', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El tren llega a las ocho.', exampleTranslation: 'The train arrives at eight.',
  },
  {
    id: 'es_a2_v004', language: lang, level, category: 'travel',
    word: 'la maleta', translation: 'suitcase', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Mi maleta es muy pesada.', exampleTranslation: 'My suitcase is very heavy.',
  },
  {
    id: 'es_a2_v005', language: lang, level, category: 'travel',
    word: 'el pasaporte', translation: 'passport', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: '¿Dónde está tu pasaporte?', exampleTranslation: 'Where is your passport?',
  },
  {
    id: 'es_a2_v006', language: lang, level, category: 'travel',
    word: 'el hotel', translation: 'hotel', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El hotel tiene una piscina.', exampleTranslation: 'The hotel has a pool.',
  },
  {
    id: 'es_a2_v007', language: lang, level, category: 'travel',
    word: 'la estación', translation: 'station', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La estación está cerca.', exampleTranslation: 'The station is nearby.',
  },
  {
    id: 'es_a2_v008', language: lang, level, category: 'travel',
    word: 'el mapa', translation: 'map', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Necesitamos un mapa de la ciudad.', exampleTranslation: 'We need a map of the city.',
  },
];

// ── Shopping ────────────────────────────────────────────────────

const shopping: VocabWord[] = [
  {
    id: 'es_a2_v010', language: lang, level, category: 'shopping',
    word: 'la tienda', translation: 'store', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La tienda cierra a las nueve.', exampleTranslation: 'The store closes at nine.',
  },
  {
    id: 'es_a2_v011', language: lang, level, category: 'shopping',
    word: 'el precio', translation: 'price', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: '¿Cuál es el precio?', exampleTranslation: 'What is the price?',
  },
  {
    id: 'es_a2_v012', language: lang, level, category: 'shopping',
    word: 'barato', translation: 'cheap', partOfSpeech: 'adjective',
    exampleSentence: 'Este vestido es muy barato.', exampleTranslation: 'This dress is very cheap.',
  },
  {
    id: 'es_a2_v013', language: lang, level, category: 'shopping',
    word: 'caro', translation: 'expensive', partOfSpeech: 'adjective',
    exampleSentence: 'Los zapatos son caros.', exampleTranslation: 'The shoes are expensive.',
  },
  {
    id: 'es_a2_v014', language: lang, level, category: 'shopping',
    word: 'pagar', translation: 'to pay', partOfSpeech: 'verb',
    exampleSentence: '¿Puedo pagar con tarjeta?', exampleTranslation: 'Can I pay by card?',
  },
  {
    id: 'es_a2_v015', language: lang, level, category: 'shopping',
    word: 'comprar', translation: 'to buy', partOfSpeech: 'verb',
    exampleSentence: 'Quiero comprar un regalo.', exampleTranslation: 'I want to buy a gift.',
  },
  {
    id: 'es_a2_v016', language: lang, level, category: 'shopping',
    word: 'la talla', translation: 'size (clothing)', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: '¿Tiene esta camisa en otra talla?', exampleTranslation: 'Do you have this shirt in another size?',
  },
];

// ── Health & Body ───────────────────────────────────────────────

const health: VocabWord[] = [
  {
    id: 'es_a2_v020', language: lang, level, category: 'health',
    word: 'el médico', translation: 'doctor', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Necesito ver al médico.', exampleTranslation: 'I need to see the doctor.',
  },
  {
    id: 'es_a2_v021', language: lang, level, category: 'health',
    word: 'la cabeza', translation: 'head', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Me duele la cabeza.', exampleTranslation: 'My head hurts.',
  },
  {
    id: 'es_a2_v022', language: lang, level, category: 'health',
    word: 'el estómago', translation: 'stomach', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Me duele el estómago.', exampleTranslation: 'My stomach hurts.',
  },
  {
    id: 'es_a2_v023', language: lang, level, category: 'health',
    word: 'la medicina', translation: 'medicine', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Tomo la medicina por la mañana.', exampleTranslation: 'I take the medicine in the morning.',
  },
  {
    id: 'es_a2_v024', language: lang, level, category: 'health',
    word: 'enfermo', translation: 'sick', partOfSpeech: 'adjective',
    exampleSentence: 'Estoy enfermo hoy.', exampleTranslation: 'I am sick today.',
  },
  {
    id: 'es_a2_v025', language: lang, level, category: 'health',
    word: 'la fiebre', translation: 'fever', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Tiene mucha fiebre.', exampleTranslation: 'He/She has a high fever.',
  },
  {
    id: 'es_a2_v026', language: lang, level, category: 'health',
    word: 'descansar', translation: 'to rest', partOfSpeech: 'verb',
    exampleSentence: 'Necesitas descansar más.', exampleTranslation: 'You need to rest more.',
  },
];

// ── Work & Professions ──────────────────────────────────────────

const work: VocabWord[] = [
  {
    id: 'es_a2_v030', language: lang, level, category: 'work',
    word: 'el trabajo', translation: 'work / job', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Me gusta mi trabajo.', exampleTranslation: 'I like my job.',
  },
  {
    id: 'es_a2_v031', language: lang, level, category: 'work',
    word: 'la oficina', translation: 'office', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La oficina está en el centro.', exampleTranslation: 'The office is in the center.',
  },
  {
    id: 'es_a2_v032', language: lang, level, category: 'work',
    word: 'el jefe', translation: 'boss', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Mi jefe es muy amable.', exampleTranslation: 'My boss is very kind.',
  },
  {
    id: 'es_a2_v033', language: lang, level, category: 'work',
    word: 'el profesor', translation: 'teacher', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El profesor explica la lección.', exampleTranslation: 'The teacher explains the lesson.',
  },
  {
    id: 'es_a2_v034', language: lang, level, category: 'work',
    word: 'el abogado', translation: 'lawyer', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Mi hermano es abogado.', exampleTranslation: 'My brother is a lawyer.',
  },
  {
    id: 'es_a2_v035', language: lang, level, category: 'work',
    word: 'la reunión', translation: 'meeting', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Tengo una reunión a las tres.', exampleTranslation: 'I have a meeting at three.',
  },
  {
    id: 'es_a2_v036', language: lang, level, category: 'work',
    word: 'el horario', translation: 'schedule', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: '¿Cuál es tu horario de trabajo?', exampleTranslation: 'What is your work schedule?',
  },
];

// ── Weather & Nature ────────────────────────────────────────────

const weather: VocabWord[] = [
  {
    id: 'es_a2_v040', language: lang, level, category: 'weather',
    word: 'llover', translation: 'to rain', partOfSpeech: 'verb',
    exampleSentence: 'Va a llover esta tarde.', exampleTranslation: 'It is going to rain this afternoon.',
  },
  {
    id: 'es_a2_v041', language: lang, level, category: 'weather',
    word: 'nevar', translation: 'to snow', partOfSpeech: 'verb',
    exampleSentence: 'En invierno nieva mucho aquí.', exampleTranslation: 'In winter it snows a lot here.',
  },
  {
    id: 'es_a2_v042', language: lang, level, category: 'weather',
    word: 'el sol', translation: 'sun', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Hoy hace mucho sol.', exampleTranslation: 'Today it is very sunny.',
  },
  {
    id: 'es_a2_v043', language: lang, level, category: 'weather',
    word: 'la nube', translation: 'cloud', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Hay muchas nubes en el cielo.', exampleTranslation: 'There are many clouds in the sky.',
  },
  {
    id: 'es_a2_v044', language: lang, level, category: 'weather',
    word: 'el viento', translation: 'wind', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Hace mucho viento hoy.', exampleTranslation: 'It is very windy today.',
  },
  {
    id: 'es_a2_v045', language: lang, level, category: 'weather',
    word: 'caliente', translation: 'hot', partOfSpeech: 'adjective',
    exampleSentence: 'El café está muy caliente.', exampleTranslation: 'The coffee is very hot.',
  },
  {
    id: 'es_a2_v046', language: lang, level, category: 'weather',
    word: 'frío', translation: 'cold', partOfSpeech: 'adjective',
    exampleSentence: 'El agua está fría.', exampleTranslation: 'The water is cold.',
  },
];

// ── Emotions & Feelings ─────────────────────────────────────────

const emotions: VocabWord[] = [
  {
    id: 'es_a2_v050', language: lang, level, category: 'emotions',
    word: 'feliz', translation: 'happy', partOfSpeech: 'adjective',
    exampleSentence: 'Estoy muy feliz hoy.', exampleTranslation: 'I am very happy today.',
  },
  {
    id: 'es_a2_v051', language: lang, level, category: 'emotions',
    word: 'triste', translation: 'sad', partOfSpeech: 'adjective',
    exampleSentence: 'Ella está triste por la noticia.', exampleTranslation: 'She is sad about the news.',
  },
  {
    id: 'es_a2_v052', language: lang, level, category: 'emotions',
    word: 'cansado', translation: 'tired', partOfSpeech: 'adjective',
    exampleSentence: 'Estoy cansado después del trabajo.', exampleTranslation: 'I am tired after work.',
  },
  {
    id: 'es_a2_v053', language: lang, level, category: 'emotions',
    word: 'preocupado', translation: 'worried', partOfSpeech: 'adjective',
    exampleSentence: 'Estoy preocupado por el examen.', exampleTranslation: 'I am worried about the exam.',
  },
  {
    id: 'es_a2_v054', language: lang, level, category: 'emotions',
    word: 'enojado', translation: 'angry', partOfSpeech: 'adjective',
    exampleSentence: 'No estoy enojado contigo.', exampleTranslation: 'I am not angry with you.',
  },
  {
    id: 'es_a2_v055', language: lang, level, category: 'emotions',
    word: 'sorprendido', translation: 'surprised', partOfSpeech: 'adjective',
    exampleSentence: 'Estoy sorprendido por la fiesta.', exampleTranslation: 'I am surprised by the party.',
  },
  {
    id: 'es_a2_v056', language: lang, level, category: 'emotions',
    word: 'nervioso', translation: 'nervous', partOfSpeech: 'adjective',
    exampleSentence: 'Estoy nervioso por la presentación.', exampleTranslation: 'I am nervous about the presentation.',
  },
];

// ── Daily Routines ──────────────────────────────────────────────

const routines: VocabWord[] = [
  {
    id: 'es_a2_v060', language: lang, level, category: 'routines',
    word: 'despertarse', translation: 'to wake up', partOfSpeech: 'verb',
    exampleSentence: 'Me despierto a las siete.', exampleTranslation: 'I wake up at seven.',
  },
  {
    id: 'es_a2_v061', language: lang, level, category: 'routines',
    word: 'ducharse', translation: 'to take a shower', partOfSpeech: 'verb',
    exampleSentence: 'Me ducho por la mañana.', exampleTranslation: 'I take a shower in the morning.',
  },
  {
    id: 'es_a2_v062', language: lang, level, category: 'routines',
    word: 'desayunar', translation: 'to have breakfast', partOfSpeech: 'verb',
    exampleSentence: 'Desayuno a las ocho.', exampleTranslation: 'I have breakfast at eight.',
  },
  {
    id: 'es_a2_v063', language: lang, level, category: 'routines',
    word: 'almorzar', translation: 'to have lunch', partOfSpeech: 'verb',
    exampleSentence: 'Almorzamos en la oficina.', exampleTranslation: 'We have lunch at the office.',
  },
  {
    id: 'es_a2_v064', language: lang, level, category: 'routines',
    word: 'cenar', translation: 'to have dinner', partOfSpeech: 'verb',
    exampleSentence: 'Cenamos a las nueve.', exampleTranslation: 'We have dinner at nine.',
  },
  {
    id: 'es_a2_v065', language: lang, level, category: 'routines',
    word: 'acostarse', translation: 'to go to bed', partOfSpeech: 'verb',
    exampleSentence: 'Me acuesto a las once.', exampleTranslation: 'I go to bed at eleven.',
  },
  {
    id: 'es_a2_v066', language: lang, level, category: 'routines',
    word: 'vestirse', translation: 'to get dressed', partOfSpeech: 'verb',
    exampleSentence: 'Me visto rápidamente.', exampleTranslation: 'I get dressed quickly.',
  },
];

// ── Hobbies & Leisure ───────────────────────────────────────────

const hobbies: VocabWord[] = [
  {
    id: 'es_a2_v070', language: lang, level, category: 'hobbies',
    word: 'leer', translation: 'to read', partOfSpeech: 'verb',
    exampleSentence: 'Me gusta leer libros.', exampleTranslation: 'I like to read books.',
  },
  {
    id: 'es_a2_v071', language: lang, level, category: 'hobbies',
    word: 'cocinar', translation: 'to cook', partOfSpeech: 'verb',
    exampleSentence: 'Cocino todos los días.', exampleTranslation: 'I cook every day.',
  },
  {
    id: 'es_a2_v072', language: lang, level, category: 'hobbies',
    word: 'nadar', translation: 'to swim', partOfSpeech: 'verb',
    exampleSentence: 'Nado en la piscina.', exampleTranslation: 'I swim in the pool.',
  },
  {
    id: 'es_a2_v073', language: lang, level, category: 'hobbies',
    word: 'bailar', translation: 'to dance', partOfSpeech: 'verb',
    exampleSentence: 'Me encanta bailar salsa.', exampleTranslation: 'I love to dance salsa.',
  },
  {
    id: 'es_a2_v074', language: lang, level, category: 'hobbies',
    word: 'viajar', translation: 'to travel', partOfSpeech: 'verb',
    exampleSentence: 'Viajamos a México cada año.', exampleTranslation: 'We travel to Mexico every year.',
  },
  {
    id: 'es_a2_v075', language: lang, level, category: 'hobbies',
    word: 'la película', translation: 'movie', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Vamos a ver una película.', exampleTranslation: 'We are going to see a movie.',
  },
  {
    id: 'es_a2_v076', language: lang, level, category: 'hobbies',
    word: 'el deporte', translation: 'sport', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: '¿Qué deporte practicas?', exampleTranslation: 'What sport do you practice?',
  },
];

// ── Export ───────────────────────────────────────────────────────

export const SPANISH_A2_VOCAB: VocabWord[] = [
  ...travel,
  ...shopping,
  ...health,
  ...work,
  ...weather,
  ...emotions,
  ...routines,
  ...hobbies,
];
