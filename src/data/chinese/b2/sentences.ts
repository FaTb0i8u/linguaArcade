/**
 * Chinese (Mandarin) B2 Sentence Patterns
 *
 * Pre-built sentences for the Sentence Builder game.
 * Covers B2 grammar points: 不仅...而且, 无论...都, 即使...也,
 * 吧 advanced uses, topic-comment, 连...都/也, formal connectors.
 */

import type { SentencePattern } from '../../../types';

const lang = 'zh' as const;
const level = 'B2' as const;

export const CHINESE_B2_SENTENCES: SentencePattern[] = [
  // ── Not only...but also (不仅...而且) ─────────────────────────
  {
    id: 'zh_b2_s001', language: lang, level, category: 'not_only_but',
    words: ['她', '不仅', '会', '说', '中文', '而且', '会', '说', '日文'],
    translation: 'She not only speaks Chinese, but also speaks Japanese.',
    hint: '不仅...而且 = not only...but also. Same subject goes before 不仅.',
    distractors: ['虽然', '但是'],
  },
  {
    id: 'zh_b2_s002', language: lang, level, category: 'not_only_but',
    words: ['他', '不仅', '聪明', '而且', '非常', '勤奋'],
    translation: 'He is not only smart, but also very diligent.',
    hint: '不仅 + quality A，而且 + quality B',
    distractors: ['虽然', '可是'],
  },
  {
    id: 'zh_b2_s003', language: lang, level, category: 'not_only_but',
    words: ['不仅', '学生', '反对', '而且', '老师', '也', '反对'],
    translation: 'Not only are students against it, but teachers are too.',
    hint: 'Different subjects: 不仅 + SubjA + V，而且 + SubjB + 也 + V',
    distractors: ['因为', '所以'],
  },

  // ── Regardless (无论...都) ────────────────────────────────────
  {
    id: 'zh_b2_s004', language: lang, level, category: 'regardless',
    words: ['无论', '多', '忙', '我', '都', '会', '来'],
    translation: 'No matter how busy, I will come.',
    hint: '无论 + condition + 都 + result',
    distractors: ['即使', '也'],
  },
  {
    id: 'zh_b2_s005', language: lang, level, category: 'regardless',
    words: ['无论', '谁', '来', '都', '要', '遵守', '规则'],
    translation: 'No matter who comes, they must follow the rules.',
    hint: '无论 + question word + 都 — universal condition',
    distractors: ['除非', '否则'],
  },

  // ── Even if (即使...也) ───────────────────────────────────────
  {
    id: 'zh_b2_s006', language: lang, level, category: 'even_if',
    words: ['即使', '下雨', '我们', '也', '要', '去'],
    translation: 'Even if it rains, we still need to go.',
    hint: '即使 + hypothetical condition，也 + result',
    distractors: ['尽管', '仍然'],
  },
  {
    id: 'zh_b2_s007', language: lang, level, category: 'even_if',
    words: ['即使', '再', '难', '我', '也', '不会', '放弃'],
    translation: 'Even if it\'s difficult, I won\'t give up.',
    hint: '即使 + extreme case + 也 + firm determination',
    distractors: ['虽然', '但是'],
  },

  // ── 吧 Advanced ──────────────────────────────────────────────
  {
    id: 'zh_b2_s008', language: lang, level, category: 'ba_advanced',
    words: ['你', '是', '中国', '人', '吧'],
    translation: 'You\'re Chinese, right?',
    hint: '吧 at the end seeks confirmation — "I suppose / right?"',
    distractors: ['吗', '呢'],
  },
  {
    id: 'zh_b2_s009', language: lang, level, category: 'ba_advanced',
    words: ['既然', '大家', '都', '同意', '我们', '就', '开始', '吧'],
    translation: 'Since everyone agrees, let\'s start.',
    hint: '既然...就 + 吧 — suggestion based on accepted fact',
    distractors: ['吗', '了'],
  },

  // ── Topic-Comment ─────────────────────────────────────────────
  {
    id: 'zh_b2_s010', language: lang, level, category: 'topic_comment',
    words: ['这', '本', '书', '我', '已经', '看', '过', '了'],
    translation: 'This book, I\'ve already read it.',
    hint: 'Topic fronting: Topic，Subject + Comment',
    distractors: ['把', '被'],
  },
  {
    id: 'zh_b2_s011', language: lang, level, category: 'topic_comment',
    words: ['关于', '这个', '问题', '我', '有', '一些', '看法'],
    translation: 'Regarding this issue, I have some opinions.',
    hint: '关于 + Topic，Subject + Comment — formal topic marker',
    distractors: ['对于', '因为'],
  },

  // ── Even emphasis (连...都/也) ────────────────────────────────
  {
    id: 'zh_b2_s012', language: lang, level, category: 'even_emphasis',
    words: ['连', '他', '都', '不', '知道', '这', '件', '事'],
    translation: 'Even he doesn\'t know about this.',
    hint: '连 + extreme case + 都 + predicate — emphasizing the unexpected',
    distractors: ['只', '才'],
  },
  {
    id: 'zh_b2_s013', language: lang, level, category: 'even_emphasis',
    words: ['这', '道', '题', '连', '老师', '也', '不会', '做'],
    translation: 'Even the teacher can\'t solve this problem.',
    hint: '连 + person + 也 + negative — even the expert can\'t...',
    distractors: ['只', '就'],
  },

  // ── Formal Connectors ─────────────────────────────────────────
  {
    id: 'zh_b2_s014', language: lang, level, category: 'formal_connectors',
    words: ['由于', '交通', '拥堵', '因此', '我们', '迟到', '了'],
    translation: 'Due to traffic congestion, we were late.',
    hint: '由于...因此... = formal cause-effect connector',
    distractors: ['因为', '所以'],
  },
  {
    id: 'zh_b2_s015', language: lang, level, category: 'formal_connectors',
    words: ['他', '很', '努力', '然而', '结果', '并', '不', '理想'],
    translation: 'He worked very hard; however, the result was not ideal.',
    hint: '然而 = however (formal written contrast)',
    distractors: ['但是', '所以'],
  },
  {
    id: 'zh_b2_s016', language: lang, level, category: 'formal_connectors',
    words: ['此外', '我们', '还', '需要', '考虑', '成本', '问题'],
    translation: 'Furthermore, we also need to consider the cost issue.',
    hint: '此外 = furthermore / in addition (formal connector)',
    distractors: ['总之', '然而'],
  },
];
