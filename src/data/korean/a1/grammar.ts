/**
 * Korean A1 Grammar Rules
 *
 * Reference explanations for Korean grammar concepts at TOPIK I level.
 * Korean grammar differs fundamentally from European languages:
 * - SOV word order, particles mark grammar roles, verb always last.
 */

import type { GrammarRule } from '../../../types';

const lang = 'ko' as const;
const level = 'A1' as const;

export const KOREAN_A1_GRAMMAR: GrammarRule[] = [
  {
    id: 'ko_a1_g001', language: lang, level,
    title: 'Basic Sentence Structure (SOV)',
    explanation:
      'Korean sentences follow Subject-Object-Verb order, unlike English (SVO).\n\n' +
      '• English: I eat rice.\n' +
      '• Korean: 나는 밥을 먹어요. (I + rice + eat)\n\n' +
      'The verb ALWAYS comes at the end. This is the most important rule in Korean grammar.',
    examples: [
      { target: '나는 밥을 먹어요.', english: 'I eat rice. (I-topic rice-object eat)' },
      { target: '친구가 학교에 가요.', english: 'My friend goes to school. (friend-subject school-to goes)' },
    ],
  },
  {
    id: 'ko_a1_g002', language: lang, level,
    title: 'Subject & Topic Particles (이/가, 은/는)',
    explanation:
      'Korean uses particles after nouns to show their grammar role.\n\n' +
      '• 은/는 (eun/neun) = TOPIC marker — "As for X..." (sets the topic)\n' +
      '  - 은 after consonant, 는 after vowel\n' +
      '• 이/가 (i/ga) = SUBJECT marker — marks what does the action\n' +
      '  - 이 after consonant, 가 after vowel\n\n' +
      'Tip: 은/는 is for known/contrasted info; 이/가 introduces new info.',
    examples: [
      { target: '저는 학생이에요.', english: 'I (as for me) am a student.' },
      { target: '고양이가 있어요.', english: 'There is a cat. (new info)' },
      { target: '날씨는 좋아요.', english: 'The weather (topic) is nice.' },
    ],
  },
  {
    id: 'ko_a1_g003', language: lang, level,
    title: 'Object Particle (을/를)',
    explanation:
      'The object particle marks what receives the action of the verb.\n\n' +
      '• 을 (eul) after a consonant: 밥을 (rice-object)\n' +
      '• 를 (reul) after a vowel: 커피를 (coffee-object)\n\n' +
      'Easy rule: if the noun ends in a consonant → 을, vowel → 를.',
    examples: [
      { target: '커피를 마셔요.', english: 'I drink coffee. (coffee-object drink)' },
      { target: '책을 읽어요.', english: 'I read a book. (book-object read)' },
    ],
  },
  {
    id: 'ko_a1_g004', language: lang, level,
    title: 'Location Particles (에, 에서)',
    explanation:
      'Korean uses particles to show location and direction.\n\n' +
      '• 에 (e) = "to" (direction) or "at" (static location with 있다/없다)\n' +
      '• 에서 (eseo) = "at/in" (where an action takes place)\n\n' +
      'Key difference: 에 is for existence/destination, 에서 is for where you DO something.',
    examples: [
      { target: '학교에 가요.', english: 'I go to school. (direction → 에)' },
      { target: '집에 있어요.', english: 'I am at home. (existence → 에)' },
      { target: '식당에서 먹어요.', english: 'I eat at the restaurant. (action location → 에서)' },
    ],
  },
  {
    id: 'ko_a1_g005', language: lang, level,
    title: 'Politeness Levels (존댓말)',
    explanation:
      'Korean has multiple speech levels depending on formality:\n\n' +
      '1. Formal polite (-ㅂ니다/습니다): Used with strangers, in business, on the news.\n' +
      '   Example: 감사합니다 (Thank you)\n\n' +
      '2. Informal polite (-아/어요): Used in most daily conversations.\n' +
      '   Example: 감사해요 / 고마워요 (Thank you)\n\n' +
      '3. Casual / intimate (-아/어): Used with close friends, children.\n' +
      '   Example: 고마워 (Thanks)\n\n' +
      'At A1, focus on the INFORMAL POLITE (-아/어요) level — it works in almost any situation.',
    examples: [
      { target: '먹습니다', english: 'I eat. (formal polite)' },
      { target: '먹어요', english: 'I eat. (informal polite — use this!)' },
      { target: '먹어', english: 'I eat. (casual)' },
    ],
  },
  {
    id: 'ko_a1_g006', language: lang, level,
    title: 'Negation (안, -지 않다)',
    explanation:
      'Two ways to make a sentence negative:\n\n' +
      '1. Put 안 (an) before the verb: 안 가요 = "I don\'t go"\n' +
      '2. Add -지 않다 to the verb stem: 가지 않아요 = "I don\'t go"\n\n' +
      'Both mean the same thing. 안 + verb is more casual and common in speech.',
    examples: [
      { target: '안 먹어요.', english: "I don't eat." },
      { target: '먹지 않아요.', english: "I don't eat. (same meaning, more formal)" },
      { target: '안 좋아요.', english: "It's not good." },
    ],
  },
  {
    id: 'ko_a1_g007', language: lang, level,
    title: 'Verb Stems & Endings',
    explanation:
      'All Korean verbs/adjectives in dictionary form end in 다.\n' +
      'Remove 다 to get the STEM. Then add endings.\n\n' +
      '• 먹다 → stem: 먹 → 먹 + 어요 = 먹어요 (I eat)\n' +
      '• 가다 → stem: 가 → 가 + 아요 = 가요 (I go)\n\n' +
      'Which ending to use depends on the last vowel of the stem:\n' +
      '• ㅏ or ㅗ → add 아요\n' +
      '• Other vowels → add 어요\n' +
      '• 하다 verbs → 해요',
    examples: [
      { target: '가다 → 가 + 아요 = 가요', english: 'to go → (stem ends in ㅏ) → 가요' },
      { target: '먹다 → 먹 + 어요 = 먹어요', english: 'to eat → (stem ends in ㅓ) → 먹어요' },
      { target: '공부하다 → 공부해요', english: 'to study → (하다 verb) → 공부해요' },
    ],
  },
];
