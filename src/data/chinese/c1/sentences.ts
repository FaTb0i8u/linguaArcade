/**
 * Chinese (Mandarin) C1 Sentence Patterns
 *
 * Pre-built sentences for the Sentence Builder game.
 * Covers C1 grammar points: classical particles, 成語, formal structures,
 * rhetorical questions, advanced passives, and academic writing.
 */

import type { SentencePattern } from '../../../types';

const lang = 'zh' as const;
const level = 'C1' as const;

export const CHINESE_C1_SENTENCES: SentencePattern[] = [
  // ── Classical Particles ───────────────────────────────────────
  {
    id: 'zh_c1_s001', language: lang, level, category: 'classical_particles',
    words: ['學習', '之', '目的', '在于', '應用'],
    translation: 'The purpose of learning lies in application.',
    hint: '之 replaces 的 in formal/literary style: 學習之目的 = the purpose of learning.',
    distractors: ['的', '了'],
  },
  {
    id: 'zh_c1_s002', language: lang, level, category: 'classical_particles',
    words: ['不', '勞', '而', '獲', '是', '不', '道德', '的'],
    translation: 'Getting something without working for it is immoral.',
    hint: '而 links manner to action in classical style: 不勞而獲 = gain without labour.',
    distractors: ['但', '又'],
  },
  {
    id: 'zh_c1_s003', language: lang, level, category: 'classical_particles',
    words: ['欲', '速', '則', '不', '達'],
    translation: 'Haste makes waste.',
    hint: '則 = "then" in classical conditional: 欲速則不達 (if you desire speed, then you won\'t arrive).',
    distractors: ['就', '才'],
  },

  // ── Chengyu (成語) ────────────────────────────────────────────
  {
    id: 'zh_c1_s004', language: lang, level, category: 'chengyu',
    words: ['這個', '方案', '真', '是', '一舉兩得'],
    translation: 'This plan truly kills two birds with one stone.',
    hint: '一舉兩得 = one action, two gains. Used as a predicate or comment.',
    distractors: ['自作自受', '過猶不及'],
  },
  {
    id: 'zh_c1_s005', language: lang, level, category: 'chengyu',
    words: ['做事', '要', '講究', '適度', '過猶不及'],
    translation: 'One should value moderation — too much is as bad as too little.',
    hint: '過猶不及 = excess is like insufficiency. Often stands as a concluding comment.',
    distractors: ['一舉兩得', '画龍點睛'],
  },

  // ── Formal Structures ─────────────────────────────────────────
  {
    id: 'zh_c1_s006', language: lang, level, category: 'formal_structures',
    words: ['國家', '以', '教育', '為', '本'],
    translation: 'The nation takes education as its foundation.',
    hint: '以...為 = formal "take X as Y". Subject + 以 + Noun + 為 + Role.',
    distractors: ['把', '將'],
  },
  {
    id: 'zh_c1_s007', language: lang, level, category: 'formal_structures',
    words: ['鉴于', '當前', '的', '經濟', '形勢', '政府', '決定', '出台', '新', '政策'],
    translation: 'In view of the current economic situation, the government decided to introduce new policies.',
    hint: '鉴于 = "in view of" (formal). 鉴于 + Situation，Main Clause.',
    distractors: ['因為', '由于'],
  },
  {
    id: 'zh_c1_s008', language: lang, level, category: 'formal_structures',
    words: ['有鉴于此', '我们', '建議', '采取', '以下', '措施'],
    translation: 'In light of this, we recommend adopting the following measures.',
    hint: '有鉴于此 = "in light of this" — a formal transition to recommendations.',
    distractors: ['因此', '所以'],
  },

  // ── Rhetorical Questions ──────────────────────────────────────
  {
    id: 'zh_c1_s009', language: lang, level, category: 'rhetorical_questions',
    words: ['難道', '你', '不', '明白', '這個', '道理', '吗'],
    translation: 'Surely you understand this principle?',
    hint: '難道...吗 = rhetorical question implying "of course you do!"',
    distractors: ['是否', '是不是'],
  },
  {
    id: 'zh_c1_s010', language: lang, level, category: 'rhetorical_questions',
    words: ['何必', '為', '這種', '小事', '生氣', '呢'],
    translation: 'Why bother getting angry over such a small matter?',
    hint: '何必 = "why bother" (rhetorical/literary). Implies there\'s no need.',
    distractors: ['為什么', '怎么'],
  },

  // ── Advanced Passive ──────────────────────────────────────────
  {
    id: 'zh_c1_s011', language: lang, level, category: 'advanced_passive',
    words: ['這', '部', '电影', '受到', '了', '觀眾', '的', '熱烈', '歡迎'],
    translation: 'This film received an enthusiastic welcome from the audience.',
    hint: '受到 = "receive" (neutral-positive passive). Subject + 受到 + Agent + 的 + Action.',
    distractors: ['被', '遭到'],
  },
  {
    id: 'zh_c1_s012', language: lang, level, category: 'advanced_passive',
    words: ['他', '的', '提議', '遭到', '了', '強烈', '的', '反對'],
    translation: 'His proposal met with strong opposition.',
    hint: '遭到 = "suffer / meet with" (negative passive). Used for unfavourable outcomes.',
    distractors: ['受到', '得到'],
  },
  {
    id: 'zh_c1_s013', language: lang, level, category: 'advanced_passive',
    words: ['這', '位', '科學家', '的', '成就', '為', '世人', '所', '敬仰'],
    translation: 'This scientist\'s achievements are admired by all.',
    hint: '為...所 = literary passive. Subject + 為 + Agent + 所 + Verb.',
    distractors: ['被', '受到'],
  },

  // ── Academic Writing ──────────────────────────────────────────
  {
    id: 'zh_c1_s014', language: lang, level, category: 'academic_writing',
    words: ['據', '研究', '表明', '雙語', '教育', '對', '兒童', '認知', '發展', '有', '積極', '影響'],
    translation: 'Research shows that bilingual education has a positive impact on children\'s cognitive development.',
    hint: '據研究表明 = "research shows that" — standard academic opening.',
    distractors: ['綜上所述', '由此可见'],
  },
  {
    id: 'zh_c1_s015', language: lang, level, category: 'academic_writing',
    words: ['綜上所述', '本文', '認為', '教育', '改革', '勢在必行'],
    translation: 'To summarise, this paper argues that education reform is imperative.',
    hint: '綜上所述 = "to summarise the above" — standard academic conclusion.',
    distractors: ['據研究表明', '眾所周知'],
  },
];
