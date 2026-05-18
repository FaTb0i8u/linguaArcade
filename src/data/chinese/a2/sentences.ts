/**
 * Chinese (Mandarin) A2 Sentence Patterns
 *
 * Pre-built sentences for the Sentence Builder game.
 * Covers A2 grammar points: completed actions (了), experience (过),
 * progressive (在), comparisons (比), modal verbs, and 把 construction.
 */

import type { SentencePattern } from '../../../types';

const lang = 'zh' as const;
const level = 'A2' as const;

export const CHINESE_A2_SENTENCES: SentencePattern[] = [
  // ── Completed action (了) ─────────────────────────────────────
  {
    id: 'zh_a2_s001', language: lang, level, category: 'completed_action',
    words: ['我', '吃', '了', '饭'],
    translation: 'I ate. / I\'ve eaten.',
    hint: 'Verb + 了 = completed action',
    distractors: ['过', '在'],
  },
  {
    id: 'zh_a2_s002', language: lang, level, category: 'completed_action',
    words: ['她', '买', '了', '两', '本', '书'],
    translation: 'She bought two books.',
    hint: 'Verb + 了 + number + measure word + noun',
    distractors: ['过', '个'],
  },
  {
    id: 'zh_a2_s003', language: lang, level, category: 'completed_action',
    words: ['天', '冷', '了'],
    translation: 'It\'s gotten cold.',
    hint: 'Sentence-final 了 = change of state',
    distractors: ['很', '不'],
  },

  // ── Experience (过) ───────────────────────────────────────────
  {
    id: 'zh_a2_s004', language: lang, level, category: 'experience',
    words: ['我', '去', '过', '中国'],
    translation: 'I have been to China.',
    hint: 'Verb + 过 = life experience',
    distractors: ['了', '在'],
  },
  {
    id: 'zh_a2_s005', language: lang, level, category: 'experience',
    words: ['你', '吃', '过', '北京烤鸭', '吗'],
    translation: 'Have you ever eaten Peking duck?',
    hint: 'Verb + 过 + 吗 = asking about experience',
    distractors: ['了', '没'],
  },

  // ── Progressive (在) ──────────────────────────────────────────
  {
    id: 'zh_a2_s006', language: lang, level, category: 'progressive',
    words: ['他', '在', '看', '电视'],
    translation: 'He is watching TV.',
    hint: '在 + verb = currently doing',
    distractors: ['了', '过'],
  },
  {
    id: 'zh_a2_s007', language: lang, level, category: 'progressive',
    words: ['她', '正在', '做饭', '呢'],
    translation: 'She is cooking right now.',
    hint: '正在 + verb + 呢 = emphatic progressive',
    distractors: ['了', '在'],
  },

  // ── Comparison (比) ───────────────────────────────────────────
  {
    id: 'zh_a2_s008', language: lang, level, category: 'comparison',
    words: ['他', '比', '我', '高'],
    translation: 'He is taller than me.',
    hint: 'A + 比 + B + adjective',
    distractors: ['很', '没有'],
  },
  {
    id: 'zh_a2_s009', language: lang, level, category: 'comparison',
    words: ['今天', '比', '昨天', '冷'],
    translation: 'Today is colder than yesterday.',
    hint: 'A + 比 + B + adjective',
    distractors: ['很', '热'],
  },
  {
    id: 'zh_a2_s010', language: lang, level, category: 'comparison',
    words: ['我', '没有', '他', '高'],
    translation: 'I\'m not as tall as him.',
    hint: 'A + 没有 + B + adjective = negative comparison',
    distractors: ['比', '不'],
  },

  // ── Modal verbs (能/会/可以) ──────────────────────────────────
  {
    id: 'zh_a2_s011', language: lang, level, category: 'modal_verbs',
    words: ['她', '会', '说', '三', '种', '语言'],
    translation: 'She can speak three languages.',
    hint: '会 = learned skill',
    distractors: ['能', '可以'],
  },
  {
    id: 'zh_a2_s012', language: lang, level, category: 'modal_verbs',
    words: ['我', '可以', '进来', '吗'],
    translation: 'May I come in?',
    hint: '可以 = permission',
    distractors: ['能', '会'],
  },

  // ── 把 construction ──────────────────────────────────────────
  {
    id: 'zh_a2_s013', language: lang, level, category: 'ba_construction',
    words: ['请', '把', '门', '关上'],
    translation: 'Please close the door.',
    hint: '把 + object + verb + result',
    distractors: ['了', '在'],
  },
  {
    id: 'zh_a2_s014', language: lang, level, category: 'ba_construction',
    words: ['他', '把', '作业', '做完', '了'],
    translation: 'He finished his homework.',
    hint: '把 + object + verb + complement + 了',
    distractors: ['在', '过'],
  },
];
