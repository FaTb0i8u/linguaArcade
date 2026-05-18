/**
 * Spanish A1 Vocabulary
 *
 * Organised by thematic category, matching CEFR A1 expectations.
 * Each word includes part of speech, gender (if applicable),
 * an example sentence, and its translation.
 *
 * To add more words, simply append to the relevant category array
 * or add a new category to SPANISH_A1_VOCAB.
 */

import type { VocabWord } from '../../../types';

const lang = 'es' as const;
const level = 'A1' as const;

// ── Greetings & Common Phrases ──────────────────────────────────

const greetings: VocabWord[] = [
  {
    id: 'es_a1_v001', language: lang, level, category: 'greetings',
    word: 'hola', translation: 'hello', partOfSpeech: 'interjection',
    pronunciation: 'OH-lah',
    exampleSentence: '¡Hola, ¿cómo estás?', exampleTranslation: 'Hello, how are you?',
  },
  {
    id: 'es_a1_v002', language: lang, level, category: 'greetings',
    word: 'adiós', translation: 'goodbye', partOfSpeech: 'interjection',
    pronunciation: 'ah-dee-OHS',
    exampleSentence: '¡Adiós, nos vemos mañana!', exampleTranslation: 'Goodbye, see you tomorrow!',
  },
  {
    id: 'es_a1_v003', language: lang, level, category: 'greetings',
    word: 'buenos días', translation: 'good morning', partOfSpeech: 'interjection',
    pronunciation: 'BWEH-nohs DEE-ahs',
    exampleSentence: 'Buenos días, señor García.', exampleTranslation: 'Good morning, Mr. García.',
  },
  {
    id: 'es_a1_v004', language: lang, level, category: 'greetings',
    word: 'buenas noches', translation: 'good night', partOfSpeech: 'interjection',
    pronunciation: 'BWEH-nahs NOH-chehs',
    exampleSentence: 'Buenas noches, dulces sueños.', exampleTranslation: 'Good night, sweet dreams.',
  },
  {
    id: 'es_a1_v005', language: lang, level, category: 'greetings',
    word: 'por favor', translation: 'please', partOfSpeech: 'adverb',
    pronunciation: 'pohr fah-VOHR',
    exampleSentence: 'Un café, por favor.', exampleTranslation: 'A coffee, please.',
  },
  {
    id: 'es_a1_v006', language: lang, level, category: 'greetings',
    word: 'gracias', translation: 'thank you', partOfSpeech: 'interjection',
    pronunciation: 'GRAH-see-ahs',
    exampleSentence: '¡Muchas gracias por tu ayuda!', exampleTranslation: 'Thank you very much for your help!',
  },
  {
    id: 'es_a1_v007', language: lang, level, category: 'greetings',
    word: 'de nada', translation: "you're welcome", partOfSpeech: 'interjection',
    pronunciation: 'deh NAH-dah',
    exampleSentence: '—Gracias. —De nada.', exampleTranslation: '—Thank you. —You\'re welcome.',
  },
  {
    id: 'es_a1_v008', language: lang, level, category: 'greetings',
    word: 'lo siento', translation: "I'm sorry", partOfSpeech: 'interjection',
    pronunciation: 'loh see-EHN-toh',
    exampleSentence: 'Lo siento, no entiendo.', exampleTranslation: "I'm sorry, I don't understand.",
  },
  {
    id: 'es_a1_v009', language: lang, level, category: 'greetings',
    word: 'buenas tardes', translation: 'good afternoon', partOfSpeech: 'interjection',
    pronunciation: 'BWEH-nahs TAHR-dehs',
    exampleSentence: 'Buenas tardes, ¿cómo está usted?', exampleTranslation: 'Good afternoon, how are you?',
  },
];

// ── Numbers ─────────────────────────────────────────────────────

const numbers: VocabWord[] = [
  {
    id: 'es_a1_v010', language: lang, level, category: 'numbers',
    word: 'uno', translation: 'one', partOfSpeech: 'numeral',
    exampleSentence: 'Tengo uno.', exampleTranslation: 'I have one.',
  },
  {
    id: 'es_a1_v011', language: lang, level, category: 'numbers',
    word: 'dos', translation: 'two', partOfSpeech: 'numeral',
    exampleSentence: 'Dos cafés, por favor.', exampleTranslation: 'Two coffees, please.',
  },
  {
    id: 'es_a1_v012', language: lang, level, category: 'numbers',
    word: 'tres', translation: 'three', partOfSpeech: 'numeral',
    exampleSentence: 'Hay tres gatos.', exampleTranslation: 'There are three cats.',
  },
  {
    id: 'es_a1_v013', language: lang, level, category: 'numbers',
    word: 'cuatro', translation: 'four', partOfSpeech: 'numeral',
    exampleSentence: 'Son las cuatro.', exampleTranslation: "It's four o'clock.",
  },
  {
    id: 'es_a1_v014', language: lang, level, category: 'numbers',
    word: 'cinco', translation: 'five', partOfSpeech: 'numeral',
    exampleSentence: 'Cinco minutos más.', exampleTranslation: 'Five more minutes.',
  },
  {
    id: 'es_a1_v015', language: lang, level, category: 'numbers',
    word: 'diez', translation: 'ten', partOfSpeech: 'numeral',
    exampleSentence: 'Diez personas vinieron.', exampleTranslation: 'Ten people came.',
  },
  {
    id: 'es_a1_v016', language: lang, level, category: 'numbers',
    word: 'veinte', translation: 'twenty', partOfSpeech: 'numeral',
    exampleSentence: 'Tengo veinte años.', exampleTranslation: "I'm twenty years old.",
  },
  {
    id: 'es_a1_v017', language: lang, level, category: 'numbers',
    word: 'cien', translation: 'one hundred', partOfSpeech: 'numeral',
    exampleSentence: 'Cuesta cien dólares.', exampleTranslation: 'It costs one hundred dollars.',
  },
];

// ── Family ──────────────────────────────────────────────────────

const family: VocabWord[] = [
  {
    id: 'es_a1_v020', language: lang, level, category: 'family',
    word: 'madre', translation: 'mother', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Mi madre cocina muy bien.', exampleTranslation: 'My mother cooks very well.',
  },
  {
    id: 'es_a1_v021', language: lang, level, category: 'family',
    word: 'padre', translation: 'father', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Mi padre trabaja en una oficina.', exampleTranslation: 'My father works in an office.',
  },
  {
    id: 'es_a1_v022', language: lang, level, category: 'family',
    word: 'hermano', translation: 'brother', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Mi hermano es alto.', exampleTranslation: 'My brother is tall.',
  },
  {
    id: 'es_a1_v023', language: lang, level, category: 'family',
    word: 'hermana', translation: 'sister', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Mi hermana tiene quince años.', exampleTranslation: 'My sister is fifteen years old.',
  },
  {
    id: 'es_a1_v024', language: lang, level, category: 'family',
    word: 'hijo', translation: 'son', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Es mi hijo mayor.', exampleTranslation: 'He is my eldest son.',
  },
  {
    id: 'es_a1_v025', language: lang, level, category: 'family',
    word: 'hija', translation: 'daughter', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Mi hija estudia español.', exampleTranslation: 'My daughter studies Spanish.',
  },
  {
    id: 'es_a1_v026', language: lang, level, category: 'family',
    word: 'amigo', translation: 'friend', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Él es mi mejor amigo.', exampleTranslation: 'He is my best friend.',
  },
];

// ── Food & Drink ────────────────────────────────────────────────

const food: VocabWord[] = [
  {
    id: 'es_a1_v030', language: lang, level, category: 'food',
    word: 'agua', translation: 'water', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Quiero un vaso de agua.', exampleTranslation: 'I want a glass of water.',
  },
  {
    id: 'es_a1_v031', language: lang, level, category: 'food',
    word: 'pan', translation: 'bread', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El pan está fresco.', exampleTranslation: 'The bread is fresh.',
  },
  {
    id: 'es_a1_v032', language: lang, level, category: 'food',
    word: 'leche', translation: 'milk', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Bebo leche todos los días.', exampleTranslation: 'I drink milk every day.',
  },
  {
    id: 'es_a1_v033', language: lang, level, category: 'food',
    word: 'manzana', translation: 'apple', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La manzana es roja.', exampleTranslation: 'The apple is red.',
  },
  {
    id: 'es_a1_v034', language: lang, level, category: 'food',
    word: 'café', translation: 'coffee', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: '¿Quieres un café?', exampleTranslation: 'Do you want a coffee?',
  },
  {
    id: 'es_a1_v035', language: lang, level, category: 'food',
    word: 'comida', translation: 'food', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La comida está deliciosa.', exampleTranslation: 'The food is delicious.',
  },
  {
    id: 'es_a1_v036', language: lang, level, category: 'food',
    word: 'pollo', translation: 'chicken', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El pollo está muy rico.', exampleTranslation: 'The chicken is very tasty.',
  },
  {
    id: 'es_a1_v037', language: lang, level, category: 'food',
    word: 'arroz', translation: 'rice', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Me gusta el arroz con frijoles.', exampleTranslation: 'I like rice and beans.',
  },
];

// ── Common Verbs ────────────────────────────────────────────────

const verbs: VocabWord[] = [
  {
    id: 'es_a1_v040', language: lang, level, category: 'verbs',
    word: 'ser', translation: 'to be (permanent)', partOfSpeech: 'verb',
    exampleSentence: 'Yo soy estudiante.', exampleTranslation: 'I am a student.',
  },
  {
    id: 'es_a1_v041', language: lang, level, category: 'verbs',
    word: 'estar', translation: 'to be (temporary)', partOfSpeech: 'verb',
    exampleSentence: 'Estoy cansado.', exampleTranslation: 'I am tired.',
  },
  {
    id: 'es_a1_v042', language: lang, level, category: 'verbs',
    word: 'tener', translation: 'to have', partOfSpeech: 'verb',
    exampleSentence: 'Tengo un perro.', exampleTranslation: 'I have a dog.',
  },
  {
    id: 'es_a1_v043', language: lang, level, category: 'verbs',
    word: 'hablar', translation: 'to speak', partOfSpeech: 'verb',
    exampleSentence: '¿Hablas español?', exampleTranslation: 'Do you speak Spanish?',
  },
  {
    id: 'es_a1_v044', language: lang, level, category: 'verbs',
    word: 'comer', translation: 'to eat', partOfSpeech: 'verb',
    exampleSentence: 'Vamos a comer.', exampleTranslation: "Let's eat.",
  },
  {
    id: 'es_a1_v045', language: lang, level, category: 'verbs',
    word: 'vivir', translation: 'to live', partOfSpeech: 'verb',
    exampleSentence: 'Vivo en la ciudad.', exampleTranslation: 'I live in the city.',
  },
  {
    id: 'es_a1_v046', language: lang, level, category: 'verbs',
    word: 'querer', translation: 'to want', partOfSpeech: 'verb',
    exampleSentence: 'Quiero aprender español.', exampleTranslation: 'I want to learn Spanish.',
  },
  {
    id: 'es_a1_v047', language: lang, level, category: 'verbs',
    word: 'ir', translation: 'to go', partOfSpeech: 'verb',
    exampleSentence: 'Voy al supermercado.', exampleTranslation: 'I go to the supermarket.',
  },
  {
    id: 'es_a1_v048', language: lang, level, category: 'verbs',
    word: 'hacer', translation: 'to do / to make', partOfSpeech: 'verb',
    exampleSentence: '¿Qué haces?', exampleTranslation: 'What are you doing?',
  },
  {
    id: 'es_a1_v049', language: lang, level, category: 'verbs',
    word: 'poder', translation: 'to be able to', partOfSpeech: 'verb',
    exampleSentence: '¿Puedo ayudarte?', exampleTranslation: 'Can I help you?',
  },
];

// ── Common Adjectives ───────────────────────────────────────────

const adjectives: VocabWord[] = [
  {
    id: 'es_a1_v050', language: lang, level, category: 'adjectives',
    word: 'grande', translation: 'big', partOfSpeech: 'adjective',
    exampleSentence: 'La casa es grande.', exampleTranslation: 'The house is big.',
  },
  {
    id: 'es_a1_v051', language: lang, level, category: 'adjectives',
    word: 'pequeño', translation: 'small', partOfSpeech: 'adjective',
    exampleSentence: 'El gato es pequeño.', exampleTranslation: 'The cat is small.',
  },
  {
    id: 'es_a1_v052', language: lang, level, category: 'adjectives',
    word: 'bueno', translation: 'good', partOfSpeech: 'adjective',
    exampleSentence: 'Es un buen libro.', exampleTranslation: 'It is a good book.',
  },
  {
    id: 'es_a1_v053', language: lang, level, category: 'adjectives',
    word: 'malo', translation: 'bad', partOfSpeech: 'adjective',
    exampleSentence: 'El tiempo está malo.', exampleTranslation: 'The weather is bad.',
  },
  {
    id: 'es_a1_v054', language: lang, level, category: 'adjectives',
    word: 'bonito', translation: 'pretty / beautiful', partOfSpeech: 'adjective',
    exampleSentence: '¡Qué vestido tan bonito!', exampleTranslation: 'What a pretty dress!',
  },
  {
    id: 'es_a1_v055', language: lang, level, category: 'adjectives',
    word: 'nuevo', translation: 'new', partOfSpeech: 'adjective',
    exampleSentence: 'Tengo un coche nuevo.', exampleTranslation: 'I have a new car.',
  },
  {
    id: 'es_a1_v056', language: lang, level, category: 'adjectives',
    word: 'viejo', translation: 'old', partOfSpeech: 'adjective',
    exampleSentence: 'El edificio es muy viejo.', exampleTranslation: 'The building is very old.',
  },
];

// ── Places & Travel ─────────────────────────────────────────────

const places: VocabWord[] = [
  {
    id: 'es_a1_v060', language: lang, level, category: 'places',
    word: 'casa', translation: 'house / home', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Estoy en casa.', exampleTranslation: "I'm at home.",
  },
  {
    id: 'es_a1_v061', language: lang, level, category: 'places',
    word: 'escuela', translation: 'school', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Voy a la escuela.', exampleTranslation: 'I go to school.',
  },
  {
    id: 'es_a1_v062', language: lang, level, category: 'places',
    word: 'tienda', translation: 'store', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La tienda está cerrada.', exampleTranslation: 'The store is closed.',
  },
  {
    id: 'es_a1_v063', language: lang, level, category: 'places',
    word: 'restaurante', translation: 'restaurant', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Vamos al restaurante.', exampleTranslation: "Let's go to the restaurant.",
  },
  {
    id: 'es_a1_v064', language: lang, level, category: 'places',
    word: 'ciudad', translation: 'city', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La ciudad es muy grande.', exampleTranslation: 'The city is very big.',
  },
  {
    id: 'es_a1_v065', language: lang, level, category: 'places',
    word: 'país', translation: 'country', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'España es un país bonito.', exampleTranslation: 'Spain is a beautiful country.',
  },
];

// ── Time & Days ─────────────────────────────────────────────────

const time: VocabWord[] = [
  {
    id: 'es_a1_v070', language: lang, level, category: 'time',
    word: 'hoy', translation: 'today', partOfSpeech: 'adverb',
    exampleSentence: 'Hoy es lunes.', exampleTranslation: 'Today is Monday.',
  },
  {
    id: 'es_a1_v071', language: lang, level, category: 'time',
    word: 'mañana', translation: 'tomorrow', partOfSpeech: 'adverb',
    exampleSentence: 'Mañana voy al parque.', exampleTranslation: "Tomorrow I'm going to the park.",
  },
  {
    id: 'es_a1_v072', language: lang, level, category: 'time',
    word: 'ayer', translation: 'yesterday', partOfSpeech: 'adverb',
    exampleSentence: 'Ayer llovió mucho.', exampleTranslation: 'Yesterday it rained a lot.',
  },
  {
    id: 'es_a1_v073', language: lang, level, category: 'time',
    word: 'semana', translation: 'week', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La próxima semana tengo examen.', exampleTranslation: 'Next week I have an exam.',
  },
  {
    id: 'es_a1_v074', language: lang, level, category: 'time',
    word: 'hora', translation: 'hour', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: '¿Qué hora es?', exampleTranslation: 'What time is it?',
  },
  {
    id: 'es_a1_v075', language: lang, level, category: 'time',
    word: 'año', translation: 'year', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Tengo veinticinco años.', exampleTranslation: "I'm twenty-five years old.",
  },
];

// ── Question Words ──────────────────────────────────────────────

const questions: VocabWord[] = [
  {
    id: 'es_a1_v080', language: lang, level, category: 'questions',
    word: 'qué', translation: 'what', partOfSpeech: 'pronoun',
    pronunciation: 'keh',
    exampleSentence: '¿Qué quieres comer?', exampleTranslation: 'What do you want to eat?',
  },
  {
    id: 'es_a1_v081', language: lang, level, category: 'questions',
    word: 'dónde', translation: 'where', partOfSpeech: 'adverb',
    pronunciation: 'DOHN-deh',
    exampleSentence: '¿Dónde vives?', exampleTranslation: 'Where do you live?',
  },
  {
    id: 'es_a1_v082', language: lang, level, category: 'questions',
    word: 'cuándo', translation: 'when', partOfSpeech: 'adverb',
    pronunciation: 'KWAHN-doh',
    exampleSentence: '¿Cuándo es tu cumpleaños?', exampleTranslation: 'When is your birthday?',
  },
  {
    id: 'es_a1_v083', language: lang, level, category: 'questions',
    word: 'cómo', translation: 'how', partOfSpeech: 'adverb',
    pronunciation: 'KOH-moh',
    exampleSentence: '¿Cómo te llamas?', exampleTranslation: 'What is your name?',
  },
  {
    id: 'es_a1_v084', language: lang, level, category: 'questions',
    word: 'por qué', translation: 'why', partOfSpeech: 'adverb',
    pronunciation: 'pohr KEH',
    exampleSentence: '¿Por qué estudias español?', exampleTranslation: 'Why do you study Spanish?',
  },
  {
    id: 'es_a1_v085', language: lang, level, category: 'questions',
    word: 'quién', translation: 'who', partOfSpeech: 'pronoun',
    pronunciation: 'kee-EHN',
    exampleSentence: '¿Quién es ella?', exampleTranslation: 'Who is she?',
  },
  {
    id: 'es_a1_v086', language: lang, level, category: 'questions',
    word: 'cuánto', translation: 'how much / how many', partOfSpeech: 'adverb',
    pronunciation: 'KWAHN-toh',
    exampleSentence: '¿Cuánto cuesta?', exampleTranslation: 'How much does it cost?',
  },
];

// ── Colors ──────────────────────────────────────────────────────

const colors: VocabWord[] = [
  {
    id: 'es_a1_v090', language: lang, level, category: 'colors',
    word: 'rojo', translation: 'red', partOfSpeech: 'adjective',
    exampleSentence: 'El coche es rojo.', exampleTranslation: 'The car is red.',
  },
  {
    id: 'es_a1_v091', language: lang, level, category: 'colors',
    word: 'azul', translation: 'blue', partOfSpeech: 'adjective',
    exampleSentence: 'El cielo es azul.', exampleTranslation: 'The sky is blue.',
  },
  {
    id: 'es_a1_v092', language: lang, level, category: 'colors',
    word: 'verde', translation: 'green', partOfSpeech: 'adjective',
    exampleSentence: 'La hierba es verde.', exampleTranslation: 'The grass is green.',
  },
  {
    id: 'es_a1_v093', language: lang, level, category: 'colors',
    word: 'amarillo', translation: 'yellow', partOfSpeech: 'adjective',
    exampleSentence: 'El sol es amarillo.', exampleTranslation: 'The sun is yellow.',
  },
  {
    id: 'es_a1_v094', language: lang, level, category: 'colors',
    word: 'blanco', translation: 'white', partOfSpeech: 'adjective',
    exampleSentence: 'La nieve es blanca.', exampleTranslation: 'The snow is white.',
  },
  {
    id: 'es_a1_v095', language: lang, level, category: 'colors',
    word: 'negro', translation: 'black', partOfSpeech: 'adjective',
    exampleSentence: 'El gato es negro.', exampleTranslation: 'The cat is black.',
  },
  {
    id: 'es_a1_v096', language: lang, level, category: 'colors',
    word: 'naranja', translation: 'orange', partOfSpeech: 'adjective',
    exampleSentence: 'La naranja es naranja.', exampleTranslation: 'The orange is orange.',
  },
  {
    id: 'es_a1_v097', language: lang, level, category: 'colors',
    word: 'rosa', translation: 'pink', partOfSpeech: 'adjective',
    exampleSentence: 'Me gusta el color rosa.', exampleTranslation: 'I like the color pink.',
  },
];

// ── Body Parts ──────────────────────────────────────────────────

const body: VocabWord[] = [
  {
    id: 'es_a1_v100', language: lang, level, category: 'body',
    word: 'cabeza', translation: 'head', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Me duele la cabeza.', exampleTranslation: 'My head hurts.',
  },
  {
    id: 'es_a1_v101', language: lang, level, category: 'body',
    word: 'mano', translation: 'hand', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Levanta la mano.', exampleTranslation: 'Raise your hand.',
  },
  {
    id: 'es_a1_v102', language: lang, level, category: 'body',
    word: 'ojo', translation: 'eye', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Tiene los ojos azules.', exampleTranslation: 'He has blue eyes.',
  },
  {
    id: 'es_a1_v103', language: lang, level, category: 'body',
    word: 'boca', translation: 'mouth', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Abre la boca.', exampleTranslation: 'Open your mouth.',
  },
  {
    id: 'es_a1_v104', language: lang, level, category: 'body',
    word: 'brazo', translation: 'arm', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Me duele el brazo.', exampleTranslation: 'My arm hurts.',
  },
  {
    id: 'es_a1_v105', language: lang, level, category: 'body',
    word: 'pierna', translation: 'leg', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Tengo las piernas cansadas.', exampleTranslation: 'My legs are tired.',
  },
  {
    id: 'es_a1_v106', language: lang, level, category: 'body',
    word: 'pie', translation: 'foot', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Me duele el pie.', exampleTranslation: 'My foot hurts.',
  },
  {
    id: 'es_a1_v107', language: lang, level, category: 'body',
    word: 'nariz', translation: 'nose', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Tiene la nariz grande.', exampleTranslation: 'He has a big nose.',
  },
];

// ── Weather ─────────────────────────────────────────────────────

const weather: VocabWord[] = [
  {
    id: 'es_a1_v110', language: lang, level, category: 'weather',
    word: 'sol', translation: 'sun', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Hace sol hoy.', exampleTranslation: 'It is sunny today.',
  },
  {
    id: 'es_a1_v111', language: lang, level, category: 'weather',
    word: 'lluvia', translation: 'rain', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'No me gusta la lluvia.', exampleTranslation: "I don't like the rain.",
  },
  {
    id: 'es_a1_v112', language: lang, level, category: 'weather',
    word: 'frío', translation: 'cold', partOfSpeech: 'adjective',
    exampleSentence: 'Hace mucho frío.', exampleTranslation: 'It is very cold.',
  },
  {
    id: 'es_a1_v113', language: lang, level, category: 'weather',
    word: 'calor', translation: 'heat / hot', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Tengo mucho calor.', exampleTranslation: 'I am very hot.',
  },
  {
    id: 'es_a1_v114', language: lang, level, category: 'weather',
    word: 'nieve', translation: 'snow', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La nieve es blanca.', exampleTranslation: 'The snow is white.',
  },
  {
    id: 'es_a1_v115', language: lang, level, category: 'weather',
    word: 'viento', translation: 'wind', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Hay mucho viento hoy.', exampleTranslation: 'It is very windy today.',
  },
  {
    id: 'es_a1_v116', language: lang, level, category: 'weather',
    word: 'nube', translation: 'cloud', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'El cielo tiene muchas nubes.', exampleTranslation: 'The sky has many clouds.',
  },
];

// ── Clothing ────────────────────────────────────────────────────

const clothing: VocabWord[] = [
  {
    id: 'es_a1_v120', language: lang, level, category: 'clothing',
    word: 'camisa', translation: 'shirt', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'La camisa es azul.', exampleTranslation: 'The shirt is blue.',
  },
  {
    id: 'es_a1_v121', language: lang, level, category: 'clothing',
    word: 'pantalón', translation: 'pants / trousers', partOfSpeech: 'noun', gender: 'masculine',
    pronunciation: 'pahn-tah-LOHN',
    exampleSentence: 'Necesito un pantalón nuevo.', exampleTranslation: 'I need new pants.',
  },
  {
    id: 'es_a1_v122', language: lang, level, category: 'clothing',
    word: 'zapato', translation: 'shoe', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Mis zapatos son negros.', exampleTranslation: 'My shoes are black.',
  },
  {
    id: 'es_a1_v123', language: lang, level, category: 'clothing',
    word: 'vestido', translation: 'dress', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'Lleva un vestido rojo.', exampleTranslation: 'She is wearing a red dress.',
  },
  {
    id: 'es_a1_v124', language: lang, level, category: 'clothing',
    word: 'sombrero', translation: 'hat', partOfSpeech: 'noun', gender: 'masculine',
    exampleSentence: 'El sombrero es grande.', exampleTranslation: 'The hat is big.',
  },
  {
    id: 'es_a1_v125', language: lang, level, category: 'clothing',
    word: 'chaqueta', translation: 'jacket', partOfSpeech: 'noun', gender: 'feminine',
    exampleSentence: 'Ponte la chaqueta, hace frío.', exampleTranslation: 'Put on your jacket, it is cold.',
  },
];

// ── Export everything ───────────────────────────────────────────

/** All Spanish A1 vocabulary, flat list. */
export const SPANISH_A1_VOCAB: VocabWord[] = [
  ...greetings,
  ...numbers,
  ...family,
  ...food,
  ...verbs,
  ...adjectives,
  ...places,
  ...time,
  ...questions,
  ...colors,
  ...body,
  ...weather,
  ...clothing,
];

/** Get vocab filtered by category. */
export function getVocabByCategory(category: string): VocabWord[] {
  return SPANISH_A1_VOCAB.filter((w) => w.category === category);
}

/** All available categories. */
export function getVocabCategories(): string[] {
  return [...new Set(SPANISH_A1_VOCAB.map((w) => w.category))];
}
