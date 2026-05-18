/**
 * Chinese (Mandarin) B1 Sentence Patterns
 *
 * Pre-built sentences for the Sentence Builder game.
 * Covers B1 grammar points: result complements, direction complements,
 * degree complements, passive (被), although…but (虽然…但是),
 * if…then (如果…就), and more and more (越来越).
 */

import type { SentencePattern } from '../../../types';

const lang = 'zh' as const;
const level = 'B1' as const;

export const CHINESE_B1_SENTENCES: SentencePattern[] = [
  // ── Result complement ─────────────────────────────────────────
  {
    id: 'zh_b1_s001', language: lang, level, category: 'result_complement',
    words: ['我', '听', '懂', '了', '老师', '说', '的', '话'],
    translation: 'I understood what the teacher said.',
    hint: 'Verb + result complement 懂 = understood through listening',
    distractors: ['完', '到'],
  },
  {
    id: 'zh_b1_s002', language: lang, level, category: 'result_complement',
    words: ['她', '看', '完', '了', '那', '本', '书'],
    translation: 'She finished reading that book.',
    hint: 'Verb + 完 = finish doing',
    distractors: ['好', '到'],
  },
  {
    id: 'zh_b1_s003', language: lang, level, category: 'result_complement',
    words: ['我', '没', '找', '到', '我', '的', '钥匙'],
    translation: 'I didn\'t find my key.',
    hint: '没 + Verb + 到 = didn\'t achieve',
    distractors: ['完', '了'],
  },

  // ── Direction complement ──────────────────────────────────────
  {
    id: 'zh_b1_s004', language: lang, level, category: 'direction_complement',
    words: ['他', '走', '进', '来', '了'],
    translation: 'He walked in.',
    hint: 'Verb + 进来 = come in toward the speaker',
    distractors: ['出', '去'],
  },
  {
    id: 'zh_b1_s005', language: lang, level, category: 'direction_complement',
    words: ['孩子们', '跑', '出', '去', '玩', '了'],
    translation: 'The children ran out to play.',
    hint: 'Verb + 出去 = go out away from speaker',
    distractors: ['进', '来'],
  },

  // ── Degree complement ─────────────────────────────────────────
  {
    id: 'zh_b1_s006', language: lang, level, category: 'degree_complement',
    words: ['她', '唱', '得', '很', '好听'],
    translation: 'She sings very nicely.',
    hint: 'Verb + 得 + Adj = degree complement',
    distractors: ['了', '极了'],
  },
  {
    id: 'zh_b1_s007', language: lang, level, category: 'degree_complement',
    words: ['他', '跑', '得', '比', '我', '快'],
    translation: 'He runs faster than me.',
    hint: 'Verb + 得 + 比 comparison',
    distractors: ['很', '不'],
  },
  {
    id: 'zh_b1_s008', language: lang, level, category: 'degree_complement',
    words: ['今天', '热', '极', '了'],
    translation: 'It\'s extremely hot today.',
    hint: 'Adj + 极了 = extremely',
    distractors: ['得', '很'],
  },

  // ── Passive (被) ──────────────────────────────────────────────
  {
    id: 'zh_b1_s009', language: lang, level, category: 'passive',
    words: ['我', '的', '手机', '被', '偷', '了'],
    translation: 'My phone was stolen.',
    hint: 'Subject + 被 + Verb + complement = passive',
    distractors: ['把', '给'],
  },
  {
    id: 'zh_b1_s010', language: lang, level, category: 'passive',
    words: ['蛋糕', '被', '孩子们', '吃', '完', '了'],
    translation: 'The cake was eaten up by the children.',
    hint: 'Subject + 被 + Agent + Verb + result',
    distractors: ['把', '给'],
  },

  // ── Although…but (虽然…但是) ──────────────────────────────────
  {
    id: 'zh_b1_s011', language: lang, level, category: 'although_but',
    words: ['虽然', '他', '很', '忙', '但是', '他', '还是', '来', '了'],
    translation: 'Although he was very busy, he still came.',
    hint: '虽然…但是… = although…but…',
    distractors: ['因为', '所以'],
  },
  {
    id: 'zh_b1_s012', language: lang, level, category: 'although_but',
    words: ['虽然', '很', '贵', '但是', '质量', '很', '好'],
    translation: 'Although it\'s expensive, the quality is good.',
    hint: '虽然 + Clause A，但是 + Clause B',
    distractors: ['如果', '就'],
  },

  // ── If…then (如果…就) ─────────────────────────────────────────
  {
    id: 'zh_b1_s013', language: lang, level, category: 'if_then',
    words: ['如果', '下雨', '我', '就', '不', '去', '了'],
    translation: 'If it rains, I won\'t go.',
    hint: '如果 + Condition，就 + Result',
    distractors: ['虽然', '但是'],
  },
  {
    id: 'zh_b1_s014', language: lang, level, category: 'if_then',
    words: ['如果', '你', '喜欢', '就', '买', '吧'],
    translation: 'If you like it, then buy it.',
    hint: '如果…就… conditional pattern',
    distractors: ['因为', '所以'],
  },

  // ── More and more (越来越) ────────────────────────────────────
  {
    id: 'zh_b1_s015', language: lang, level, category: 'more_and_more',
    words: ['天气', '越来越', '冷', '了'],
    translation: 'The weather is getting colder and colder.',
    hint: '越来越 + Adj + 了 = more and more',
    distractors: ['越', '比'],
  },
  {
    id: 'zh_b1_s016', language: lang, level, category: 'more_and_more',
    words: ['中文', '越', '学', '越', '有意思'],
    translation: 'The more you study Chinese, the more interesting it gets.',
    hint: '越A越B = the more A, the more B',
    distractors: ['越来越', '了'],
  },
];
