/**
 * Chinese (Mandarin) A1 Sentence Patterns
 *
 * Pre-built sentences for the Sentence Builder game.
 * Chinese word order is SVO, similar to English.
 * Words are split at natural word boundaries.
 */

import type { SentencePattern } from '../../../types';

const lang = 'zh' as const;
const level = 'A1' as const;

export const CHINESE_A1_SENTENCES: SentencePattern[] = [
  // ── Basic statements (SVO) ────────────────────────────────────
  {
    id: 'zh_a1_s001', language: lang, level, category: 'basic_statements',
    words: ['我', '吃', '米饭'],
    translation: 'I eat rice.',
    hint: 'Subject + verb + object',
    distractors: ['喝', '看'],
  },
  {
    id: 'zh_a1_s002', language: lang, level, category: 'basic_statements',
    words: ['他', '喝', '茶'],
    translation: 'He drinks tea.',
    hint: 'Subject + verb + object',
    distractors: ['吃', '她'],
  },
  {
    id: 'zh_a1_s003', language: lang, level, category: 'basic_statements',
    words: ['她', '看', '书'],
    translation: 'She reads a book.',
    hint: 'Subject + verb + object',
    distractors: ['吃', '我们'],
  },
  {
    id: 'zh_a1_s004', language: lang, level, category: 'basic_statements',
    words: ['我们', '去', '学校'],
    translation: 'We go to school.',
    hint: 'Subject + verb + place',
    distractors: ['他们', '来'],
  },

  // ── Questions (using 吗) ──────────────────────────────────────
  {
    id: 'zh_a1_s005', language: lang, level, category: 'questions',
    words: ['你', '好', '吗'],
    translation: 'How are you?',
    hint: 'Add 吗 to make a yes/no question',
    distractors: ['他', '不'],
  },
  {
    id: 'zh_a1_s006', language: lang, level, category: 'questions',
    words: ['你', '是', '学生', '吗'],
    translation: 'Are you a student?',
    hint: 'Statement + 吗 = question',
    distractors: ['老师', '不'],
  },
  {
    id: 'zh_a1_s007', language: lang, level, category: 'questions',
    words: ['他', '去', '中国', '吗'],
    translation: 'Is he going to China?',
    hint: 'Statement + 吗 = question',
    distractors: ['她', '不', '了'],
  },

  // ── Negation (不 / 没) ────────────────────────────────────────
  {
    id: 'zh_a1_s008', language: lang, level, category: 'negation',
    words: ['我', '不', '喝', '咖啡'],
    translation: 'I don\'t drink coffee.',
    hint: '不 before the verb to negate',
    distractors: ['没', '茶'],
  },
  {
    id: 'zh_a1_s009', language: lang, level, category: 'negation',
    words: ['他', '没', '去', '学校'],
    translation: 'He didn\'t go to school.',
    hint: '没 negates completed actions',
    distractors: ['不', '来'],
  },
  {
    id: 'zh_a1_s010', language: lang, level, category: 'negation',
    words: ['她', '不', '是', '老师'],
    translation: 'She is not a teacher.',
    hint: '不 before 是 to negate identity',
    distractors: ['没', '学生'],
  },

  // ── Measure words (number + MW + noun) ────────────────────────
  {
    id: 'zh_a1_s011', language: lang, level, category: 'measure_words',
    words: ['一', '个', '苹果'],
    translation: 'One apple.',
    hint: 'Number + measure word 个 + noun',
    distractors: ['杯', '本'],
  },
  {
    id: 'zh_a1_s012', language: lang, level, category: 'measure_words',
    words: ['两', '杯', '茶'],
    translation: 'Two cups of tea.',
    hint: 'Number + measure word 杯 + noun',
    distractors: ['个', '本'],
  },
  {
    id: 'zh_a1_s013', language: lang, level, category: 'measure_words',
    words: ['三', '本', '书'],
    translation: 'Three books.',
    hint: 'Number + measure word 本 + noun',
    distractors: ['个', '杯'],
  },

  // ── Possessives (using 的) ────────────────────────────────────
  {
    id: 'zh_a1_s014', language: lang, level, category: 'possessives',
    words: ['这', '是', '我', '的', '书'],
    translation: 'This is my book.',
    hint: 'Pronoun + 的 = possessive',
    distractors: ['他', '那'],
  },
  {
    id: 'zh_a1_s015', language: lang, level, category: 'possessives',
    words: ['那', '是', '他', '的', '手机'],
    translation: 'That is his phone.',
    hint: 'Pronoun + 的 = possessive',
    distractors: ['我', '这'],
  },
  {
    id: 'zh_a1_s016', language: lang, level, category: 'possessives',
    words: ['妈妈', '的', '朋友'],
    translation: 'Mom\'s friend.',
    hint: 'Noun + 的 = possessive',
    distractors: ['是', '爸爸'],
  },

  // ── Time expressions ──────────────────────────────────────────
  {
    id: 'zh_a1_s017', language: lang, level, category: 'time_expressions',
    words: ['我', '今天', '很', '忙'],
    translation: 'I am very busy today.',
    hint: 'Time word placed after subject',
    distractors: ['明天', '不'],
  },
  {
    id: 'zh_a1_s018', language: lang, level, category: 'time_expressions',
    words: ['明天', '我', '去', '商店'],
    translation: 'Tomorrow I will go to the store.',
    hint: 'Time word can also come before the subject',
    distractors: ['今天', '学校'],
  },
];
