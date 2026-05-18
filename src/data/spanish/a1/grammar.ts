/**
 * Spanish A1 Grammar Rules
 *
 * Reference explanations displayed as tooltips / help screens.
 * Not used in game logic directly, but available for the
 * "Learn" / intro steps in each lesson.
 */

import type { GrammarRule } from '../../../types';

const lang = 'es' as const;
const level = 'A1' as const;

export const SPANISH_A1_GRAMMAR: GrammarRule[] = [
  {
    id: 'es_a1_g001', language: lang, level,
    title: 'Subject Pronouns',
    explanation:
      'Spanish has six subject pronouns: yo (I), tú (you informal), él/ella/usted (he/she/you formal), nosotros/as (we), vosotros/as (you all, Spain), ellos/ellas/ustedes (they/you all). Unlike English, subject pronouns are often OMITTED because the verb ending already indicates the person.',
    examples: [
      { target: 'Yo hablo español.', english: 'I speak Spanish.' },
      { target: 'Hablo español.', english: 'I speak Spanish. (pronoun dropped)' },
    ],
  },
  {
    id: 'es_a1_g002', language: lang, level,
    title: 'Ser vs. Estar (to be)',
    explanation:
      'Spanish has TWO verbs for "to be".\n\n• SER is for permanent/inherent traits: identity, nationality, professions, physical descriptions, time, origin.\n• ESTAR is for temporary states: location, emotions, conditions.\n\nA classic mnemonic: "How you feel and where you are, that is when you use ESTAR."',
    examples: [
      { target: 'Soy profesor.', english: 'I am a teacher. (permanent role → ser)' },
      { target: 'Estoy cansado.', english: 'I am tired. (temporary state → estar)' },
      { target: 'Madrid es grande.', english: 'Madrid is big. (inherent trait → ser)' },
      { target: 'El café está caliente.', english: 'The coffee is hot. (current condition → estar)' },
    ],
  },
  {
    id: 'es_a1_g003', language: lang, level,
    title: 'Gender of Nouns',
    explanation:
      'All Spanish nouns are either masculine or feminine.\n\n• Most nouns ending in -o are masculine: el libro (the book)\n• Most nouns ending in -a are feminine: la mesa (the table)\n• Exceptions exist: el día (the day), la mano (the hand)\n\nArticles must match: el (masc. the), la (fem. the), un (masc. a), una (fem. a).',
    examples: [
      { target: 'el gato / la gata', english: 'the male cat / the female cat' },
      { target: 'un libro', english: 'a book (masculine)' },
      { target: 'una casa', english: 'a house (feminine)' },
    ],
  },
  {
    id: 'es_a1_g004', language: lang, level,
    title: 'Present Tense — Regular Verbs',
    explanation:
      'Regular verbs follow predictable patterns based on their ending:\n\n-AR verbs (hablar): -o, -as, -a, -amos, -áis, -an\n-ER verbs (comer):  -o, -es, -e, -emos, -éis, -en\n-IR verbs (vivir):  -o, -es, -e, -imos, -ís, -en\n\nDrop the infinitive ending and add the appropriate suffix.',
    examples: [
      { target: 'Yo hablo, tú hablas, él habla', english: 'I speak, you speak, he speaks' },
      { target: 'Yo como, tú comes, él come', english: 'I eat, you eat, he eats' },
      { target: 'Yo vivo, tú vives, él vive', english: 'I live, you live, he lives' },
    ],
  },
  {
    id: 'es_a1_g005', language: lang, level,
    title: 'Adjective Agreement',
    explanation:
      'Adjectives must agree with their noun in gender AND number.\n\n• Masculine singular: alto (tall)\n• Feminine singular: alta\n• Masculine plural: altos\n• Feminine plural: altas\n\nAdjectives usually come AFTER the noun (unlike English).',
    examples: [
      { target: 'El chico alto', english: 'The tall boy' },
      { target: 'La chica alta', english: 'The tall girl' },
      { target: 'Los libros nuevos', english: 'The new books' },
    ],
  },
  {
    id: 'es_a1_g006', language: lang, level,
    title: 'Forming Questions',
    explanation:
      'In Spanish, questions are marked with ¿...? (inverted question mark at the start).\n\nYou can form a question by:\n1. Inverting subject and verb: ¿Hablas tú español?\n2. Just adding question marks (intonation): ¿Tú hablas español?\n3. Using question words: ¿Qué?, ¿Dónde?, ¿Cuándo?, ¿Cómo?, ¿Por qué?, ¿Cuánto/a/os/as?',
    examples: [
      { target: '¿Cómo te llamas?', english: 'What is your name?' },
      { target: '¿Dónde vives?', english: 'Where do you live?' },
      { target: '¿Cuántos años tienes?', english: 'How old are you?' },
    ],
  },
  {
    id: 'es_a1_g007', language: lang, level,
    title: 'Negation',
    explanation:
      'To make a sentence negative, simply place "no" before the verb.\n\nUnlike English, Spanish uses double negatives naturally:\n"No tengo nada" = I don\'t have nothing (= I have nothing).',
    examples: [
      { target: 'No hablo francés.', english: "I don't speak French." },
      { target: 'No tengo dinero.', english: "I don't have money." },
      { target: 'No quiero nada.', english: "I don't want anything." },
    ],
  },
];
