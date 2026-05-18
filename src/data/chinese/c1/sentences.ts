/**
 * Chinese (Mandarin) C1 Sentence Patterns
 *
 * Pre-built sentences for the Sentence Builder game.
 * Covers C1 grammar points: classical particles, 成语, formal structures,
 * rhetorical questions, advanced passives, and academic writing.
 */

import type { SentencePattern } from '../../../types';

const lang = 'zh' as const;
const level = 'C1' as const;

export const CHINESE_C1_SENTENCES: SentencePattern[] = [
  // ── Classical Particles ───────────────────────────────────────
  {
    id: 'zh_c1_s001', language: lang, level, category: 'classical_particles',
    words: ['学习', '之', '目的', '在于', '应用'],
    translation: 'The purpose of learning lies in application.',
    hint: '之 replaces 的 in formal/literary style: 学习之目的 = the purpose of learning.',
    distractors: ['的', '了'],
  },
  {
    id: 'zh_c1_s002', language: lang, level, category: 'classical_particles',
    words: ['不', '劳', '而', '获', '是', '不', '道德', '的'],
    translation: 'Getting something without working for it is immoral.',
    hint: '而 links manner to action in classical style: 不劳而获 = gain without labour.',
    distractors: ['但', '又'],
  },
  {
    id: 'zh_c1_s003', language: lang, level, category: 'classical_particles',
    words: ['欲', '速', '则', '不', '达'],
    translation: 'Haste makes waste.',
    hint: '则 = "then" in classical conditional: 欲速则不达 (if you desire speed, then you won\'t arrive).',
    distractors: ['就', '才'],
  },

  // ── Chengyu (成语) ────────────────────────────────────────────
  {
    id: 'zh_c1_s004', language: lang, level, category: 'chengyu',
    words: ['这个', '方案', '真', '是', '一举两得'],
    translation: 'This plan truly kills two birds with one stone.',
    hint: '一举两得 = one action, two gains. Used as a predicate or comment.',
    distractors: ['自作自受', '过犹不及'],
  },
  {
    id: 'zh_c1_s005', language: lang, level, category: 'chengyu',
    words: ['做事', '要', '讲究', '适度', '过犹不及'],
    translation: 'One should value moderation — too much is as bad as too little.',
    hint: '过犹不及 = excess is like insufficiency. Often stands as a concluding comment.',
    distractors: ['一举两得', '画龙点睛'],
  },

  // ── Formal Structures ─────────────────────────────────────────
  {
    id: 'zh_c1_s006', language: lang, level, category: 'formal_structures',
    words: ['国家', '以', '教育', '为', '本'],
    translation: 'The nation takes education as its foundation.',
    hint: '以...为 = formal "take X as Y". Subject + 以 + Noun + 为 + Role.',
    distractors: ['把', '将'],
  },
  {
    id: 'zh_c1_s007', language: lang, level, category: 'formal_structures',
    words: ['鉴于', '当前', '的', '经济', '形势', '政府', '决定', '出台', '新', '政策'],
    translation: 'In view of the current economic situation, the government decided to introduce new policies.',
    hint: '鉴于 = "in view of" (formal). 鉴于 + Situation，Main Clause.',
    distractors: ['因为', '由于'],
  },
  {
    id: 'zh_c1_s008', language: lang, level, category: 'formal_structures',
    words: ['有鉴于此', '我们', '建议', '采取', '以下', '措施'],
    translation: 'In light of this, we recommend adopting the following measures.',
    hint: '有鉴于此 = "in light of this" — a formal transition to recommendations.',
    distractors: ['因此', '所以'],
  },

  // ── Rhetorical Questions ──────────────────────────────────────
  {
    id: 'zh_c1_s009', language: lang, level, category: 'rhetorical_questions',
    words: ['难道', '你', '不', '明白', '这个', '道理', '吗'],
    translation: 'Surely you understand this principle?',
    hint: '难道...吗 = rhetorical question implying "of course you do!"',
    distractors: ['是否', '是不是'],
  },
  {
    id: 'zh_c1_s010', language: lang, level, category: 'rhetorical_questions',
    words: ['何必', '为', '这种', '小事', '生气', '呢'],
    translation: 'Why bother getting angry over such a small matter?',
    hint: '何必 = "why bother" (rhetorical/literary). Implies there\'s no need.',
    distractors: ['为什么', '怎么'],
  },

  // ── Advanced Passive ──────────────────────────────────────────
  {
    id: 'zh_c1_s011', language: lang, level, category: 'advanced_passive',
    words: ['这', '部', '电影', '受到', '了', '观众', '的', '热烈', '欢迎'],
    translation: 'This film received an enthusiastic welcome from the audience.',
    hint: '受到 = "receive" (neutral-positive passive). Subject + 受到 + Agent + 的 + Action.',
    distractors: ['被', '遭到'],
  },
  {
    id: 'zh_c1_s012', language: lang, level, category: 'advanced_passive',
    words: ['他', '的', '提议', '遭到', '了', '强烈', '的', '反对'],
    translation: 'His proposal met with strong opposition.',
    hint: '遭到 = "suffer / meet with" (negative passive). Used for unfavourable outcomes.',
    distractors: ['受到', '得到'],
  },
  {
    id: 'zh_c1_s013', language: lang, level, category: 'advanced_passive',
    words: ['这', '位', '科学家', '的', '成就', '为', '世人', '所', '敬仰'],
    translation: 'This scientist\'s achievements are admired by all.',
    hint: '为...所 = literary passive. Subject + 为 + Agent + 所 + Verb.',
    distractors: ['被', '受到'],
  },

  // ── Academic Writing ──────────────────────────────────────────
  {
    id: 'zh_c1_s014', language: lang, level, category: 'academic_writing',
    words: ['据', '研究', '表明', '双语', '教育', '对', '儿童', '认知', '发展', '有', '积极', '影响'],
    translation: 'Research shows that bilingual education has a positive impact on children\'s cognitive development.',
    hint: '据研究表明 = "research shows that" — standard academic opening.',
    distractors: ['综上所述', '由此可见'],
  },
  {
    id: 'zh_c1_s015', language: lang, level, category: 'academic_writing',
    words: ['综上所述', '本文', '认为', '教育', '改革', '势在必行'],
    translation: 'To summarise, this paper argues that education reform is imperative.',
    hint: '综上所述 = "to summarise the above" — standard academic conclusion.',
    distractors: ['据研究表明', '众所周知'],
  },
];
