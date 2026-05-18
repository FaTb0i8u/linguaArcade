/**
 * Chinese (Mandarin) C2 Sentence Patterns
 *
 * Pre-built sentences for the Sentence Builder game.
 * Covers C2 grammar points: classical Chinese, register variation,
 * complex embedding, advanced 成语, legal register, rhetorical devices.
 */

import type { SentencePattern } from '../../../types';

const lang = 'zh' as const;
const level = 'C2' as const;

export const CHINESE_C2_SENTENCES: SentencePattern[] = [
  // ── Classical Chinese ─────────────────────────────────────────
  {
    id: 'zh_c2_s001', language: lang, level, category: 'classical_chinese',
    words: ['民', '以', '食', '为', '天', '故', '粮食', '安全', '至关重要'],
    translation: 'The people regard food as paramount; therefore food security is of vital importance.',
    hint: '故 = classical "therefore". Used in formal conclusions after stating a premise.',
    distractors: ['所以', '因此'],
  },
  {
    id: 'zh_c2_s002', language: lang, level, category: 'classical_chinese',
    words: ['虽', '千万', '人', '吾', '往', '矣'],
    translation: 'Even if there are tens of thousands opposing me, I shall go forth.',
    hint: '虽 without 然 is highly literary (Mencius). 吾 = classical "I". 矣 = sentence-final particle.',
    distractors: ['虽然', '我', '了'],
  },
  {
    id: 'zh_c2_s003', language: lang, level, category: 'classical_chinese',
    words: ['岂', '能', '坐视', '不管'],
    translation: 'How could we just sit by and do nothing?',
    hint: '岂 = rhetorical "how could". Implies "of course we cannot!"',
    distractors: ['怎么', '难道'],
  },

  // ── Register Variation ────────────────────────────────────────
  {
    id: 'zh_c2_s004', language: lang, level, category: 'register_variation',
    words: ['然而', '事实', '并非', '如此', '简单'],
    translation: 'However, the facts are not so simple.',
    hint: '然而 = formal written "however" (书面语). Compare: 不过 (spoken), 但是 (neutral).',
    distractors: ['不过', '但是'],
  },
  {
    id: 'zh_c2_s005', language: lang, level, category: 'register_variation',
    words: ['倘若', '各国', '未能', '达成', '共识', '后果', '将', '不堪设想'],
    translation: 'Should the nations fail to reach consensus, the consequences would be unthinkable.',
    hint: '倘若 = formal "if" (书面语). 不堪设想 = "too terrible to contemplate".',
    distractors: ['如果', '要是'],
  },

  // ── Complex Embedding ─────────────────────────────────────────
  {
    id: 'zh_c2_s006', language: lang, level, category: 'complex_embedding',
    words: ['由于', '经费', '不足', '加之', '人手', '紧张', '因此', '项目', '被迫', '延期'],
    translation: 'Due to insufficient funding, compounded by a shortage of manpower, the project was forced to be delayed.',
    hint: '由于...加之...因此... = multi-clause causal chain. 加之 = "compounded by".',
    distractors: ['因为', '而且', '所以'],
  },
  {
    id: 'zh_c2_s007', language: lang, level, category: 'complex_embedding',
    words: ['在', '资源', '有限', '的', '情况', '下', '鉴于', '需求', '日益', '增长', '应当', '优化', '资源', '配置'],
    translation: 'Under circumstances of limited resources, in view of growing demand, resource allocation should be optimised.',
    hint: '在...的情况下 + 鉴于... + 应当... = multi-layer subordination in formal prose.',
    distractors: ['因为', '所以', '需要'],
  },
  {
    id: 'zh_c2_s008', language: lang, level, category: 'complex_embedding',
    words: ['这场', '危机', '不仅', '影响', '了', '国内', '经济', '而且', '波及', '了', '周边', '国家'],
    translation: 'This crisis not only affected the domestic economy but also spread to neighbouring countries.',
    hint: '不仅...而且... = "not only...but also..." escalating emphasis.',
    distractors: ['虽然', '但是', '也'],
  },

  // ── Advanced 成语 ─────────────────────────────────────────────
  {
    id: 'zh_c2_s009', language: lang, level, category: 'chengyu_advanced',
    words: ['塞翁失马', '焉', '知', '非', '福'],
    translation: 'The old man lost his horse — who knows if it isn\'t a blessing?',
    hint: '塞翁失马，焉知非福 = "A seeming misfortune may be a blessing in disguise." 焉 = classical "how".',
    distractors: ['怎么', '不是'],
  },
  {
    id: 'zh_c2_s010', language: lang, level, category: 'chengyu_advanced',
    words: ['亡羊补牢', '犹', '未', '为', '晚'],
    translation: 'Mending the pen after losing a sheep — it is still not too late.',
    hint: '亡羊补牢，犹未为晚 = "Better late than never." 犹 = classical "still".',
    distractors: ['还', '也'],
  },

  // ── Legal Register ────────────────────────────────────────────
  {
    id: 'zh_c2_s011', language: lang, level, category: 'legal_register',
    words: ['依据', '劳动法', '第四十四条', '用人', '单位', '应当', '予以', '补偿'],
    translation: 'In accordance with Article 44 of the Labour Law, the employer shall provide compensation.',
    hint: '依据 + Law + Article → 应当 + 予以 + Action = standard legal Chinese pattern.',
    distractors: ['根据', '给予'],
  },
  {
    id: 'zh_c2_s012', language: lang, level, category: 'legal_register',
    words: ['经', '市政府', '批准', '现', '予以', '公告'],
    translation: 'Approved by the municipal government, this is hereby publicly announced.',
    hint: '经...批准 = "approved by". 现予以 = "hereby" (government register).',
    distractors: ['通过', '发布'],
  },
  {
    id: 'zh_c2_s013', language: lang, level, category: 'legal_register',
    words: ['责令', '该', '单位', '于', '三十日内', '完成', '整改'],
    translation: 'The entity is ordered to complete rectification within thirty days.',
    hint: '责令 = "order" (government authority). 于...内 = "within (time period)".',
    distractors: ['要求', '在'],
  },

  // ── Rhetorical Devices ────────────────────────────────────────
  {
    id: 'zh_c2_s014', language: lang, level, category: 'rhetorical_devices',
    words: ['人民', '需要', '和平', '人民', '需要', '发展', '人民', '需要', '合作'],
    translation: 'The people need peace, the people need development, the people need cooperation.',
    hint: '排比 (páibǐ) = parallelism in threes. Same structure repeated for rhetorical force.',
    distractors: ['国家', '希望'],
  },
  {
    id: 'zh_c2_s015', language: lang, level, category: 'rhetorical_devices',
    words: ['什么', '是', '真正', '的', '勇气', '是', '在', '恐惧', '面前', '依然', '前行'],
    translation: 'What is true courage? It is pressing forward in the face of fear.',
    hint: '设问 (shèwèn) = the writer poses a question, then immediately answers it.',
    distractors: ['为什么', '不是'],
  },
];
