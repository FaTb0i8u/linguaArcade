/**
 * Chinese (Mandarin) B2 Grammar Rules
 *
 * Upper-intermediate grammar concepts for CEFR B2 / HSK 4-5 learners.
 * Covers compound conjunctions (不僅...而且, 無論...都, 即使...也),
 * advanced 把 constructions, topic-comment structures, 連...都/也
 * emphasis, formal written connectors, and 是...的 emphasis pattern.
 */

import type { GrammarRule } from '../../../types';

const lang = 'zh' as const;
const level = 'B2' as const;

export const CHINESE_B2_GRAMMAR: GrammarRule[] = [
  {
    id: 'zh_b2_g001', language: lang, level,
    title: '不僅...而且 (bùjǐn...érqiě) — Not only...but also',
    explanation:
      'A compound conjunction used to ADD information progressively. The second clause ' +
      'escalates or supplements the first.\n\n' +
      'Structure (same subject):\n' +
      '  Subject + 不僅 + Clause A，而且 + Clause B\n' +
      '  她不僅會唱歌，而且會跳舞。\n\n' +
      'Structure (different subjects):\n' +
      '  不僅 + SubjectA + ClauseA，而且 + SubjectB + ClauseB\n' +
      '  不僅他来了，而且他的朋友也来了。\n\n' +
      'NOTE: The subject can appear before or after 不僅. When both clauses share ' +
      'a subject, place it before 不僅. When subjects differ, each goes in its own clause.',
    examples: [
      { target: '她不僅會說中文，而且會說日文。(Tā bùjǐn huì shuō Zhōngwén, érqiě huì shuō Rìwén.)', english: 'She not only speaks Chinese, but also speaks Japanese.' },
      { target: '這個问题不僅影響經濟，而且影響社會穩定。(Zhège wèntí bùjǐn yǐngxiǎng jīngjì, érqiě yǐngxiǎng shèhuì wěndìng.)', english: 'This problem not only affects the economy, but also social stability.' },
      { target: '不僅學生反對，而且老師也反對。(Bùjǐn xuéshēng fǎnduì, érqiě lǎoshī yě fǎnduì.)', english: 'Not only are students against it, but teachers are too.' },
    ],
  },
  {
    id: 'zh_b2_g002', language: lang, level,
    title: '無論/不管...都 (wúlùn/bùguǎn...dōu) — Regardless / No matter...all',
    explanation:
      'Expresses a UNIVERSAL CONDITION — no matter what the situation, the result ' +
      'remains the same.\n\n' +
      'Structure: 無論/不管 + Question-Word Clause，Subject + 都 + Result\n\n' +
      '• 無論多忙，我都會来。(No matter how busy, I will come.)\n' +
      '• 不管你去哪里，我都支持你。(Wherever you go, I support you.)\n\n' +
      '無論 is slightly more formal than 不管; both are interchangeable in most contexts. ' +
      'The condition clause often contains a question word (誰, 什么, 哪里, 多少, 怎么) ' +
      'or the A-不-A pattern.',
    examples: [
      { target: '無論多忙，我都會来。(Wúlùn duō máng, wǒ dōu huì lái.)', english: 'No matter how busy, I will come.' },
      { target: '不管發生什么事，我们都不要害怕。(Bùguǎn fāshēng shénme shì, wǒmen dōu bú yào hàipà.)', english: 'No matter what happens, we should not be afraid.' },
      { target: '無論誰来，都要遵守規則。(Wúlùn shéi lái, dōu yào zūnshǒu guīzé.)', english: 'No matter who comes, they must follow the rules.' },
    ],
  },
  {
    id: 'zh_b2_g003', language: lang, level,
    title: '即使...也 (jíshǐ...yě) — Even if...still',
    explanation:
      'A concessive conditional expressing that the result holds EVEN IF the condition ' +
      'is true. The condition is usually HYPOTHETICAL (may not have happened).\n\n' +
      'Structure: 即使 + Condition，Subject + 也 + Result\n\n' +
      '• 即使下雨，我们也要去。(Even if it rains, we still need to go.)\n\n' +
      'Compare with 盡管...仍然:\n' +
      '• 即使 → HYPOTHETICAL condition (might happen)\n' +
      '• 盡管 → FACTUAL concession (already happened or is true)\n\n' +
      'In spoken Chinese, 就算 (jiùsuàn) can replace 即使 in informal contexts.',
    examples: [
      { target: '即使下雨，我们也要去。(Jíshǐ xià yǔ, wǒmen yě yào qù.)', english: 'Even if it rains, we still need to go.' },
      { target: '即使失败了，也不要灰心。(Jíshǐ shībài le, yě bú yào huīxīn.)', english: 'Even if you fail, don\'t lose heart.' },
      { target: '即使工作很辛苦，她也從不抱怨。(Jíshǐ gōngzuò hěn xīnkǔ, tā yě cóng bù bàoyuàn.)', english: 'Even if the work is hard, she never complains.' },
    ],
  },
  {
    id: 'zh_b2_g004', language: lang, level,
    title: '把字句 Advanced Uses — Complex 把 Constructions',
    explanation:
      'At B2, learners advance beyond basic 把 to master complex constructions with ' +
      'complements after the verb.\n\n' +
      'Structure: Subject + 把 + Object + Verb + Complement\n\n' +
      'Common complement types with 把:\n' +
      '• Result complement: 把问题解決了 (solved the problem)\n' +
      '• Directional complement: 把书放在桌子上 (put the book on the table)\n' +
      '• Descriptive complement: 把房間打扫得很干淨 (cleaned the room very well)\n\n' +
      'KEY RULE: The verb in a 把 sentence MUST have a complement (了, 完, 在, 到, 得...). ' +
      'You cannot say *我把书看 — you must say 我把书看完了。\n\n' +
      '把 emphasizes what was DONE to the object — the disposal or handling of it.',
    examples: [
      { target: '請把門關上。(Qǐng bǎ mén guān shàng.)', english: 'Please close the door.' },
      { target: '他把作业做完了。(Tā bǎ zuòyè zuò wán le.)', english: 'He finished his homework.' },
      { target: '她把房間打扫得很干淨。(Tā bǎ fángjiān dǎsǎo de hěn gānjìng.)', english: 'She cleaned the room very well.' },
    ],
  },
  {
    id: 'zh_b2_g005', language: lang, level,
    title: 'Topic-Comment Structure — 話题–說明',
    explanation:
      'Chinese is a TOPIC-PROMINENT language. A topic is fronted to the beginning of ' +
      'the sentence, and the rest of the sentence comments on it.\n\n' +
      'Informal topic fronting:\n' +
      '  這本书，我已經看過了。(This book, I\'ve already read.)\n' +
      '  那個人，我不認識。(That person, I don\'t know.)\n\n' +
      'Formal topic marking with 關于/對于:\n' +
      '  關于這個问题，我有一些看法。(Regarding this issue, I have some opinions.)\n' +
      '  對于這件事，大家意见不同。(Regarding this matter, everyone has different opinions.)\n\n' +
      'The topic need not be the grammatical subject — it sets the frame for the comment.',
    examples: [
      { target: '這本书，我已經看過了。(Zhè běn shū, wǒ yǐjīng kàn guò le.)', english: 'This book, I\'ve already read it.' },
      { target: '關于這個问题，我有一些看法。(Guānyú zhège wèntí, wǒ yǒu yìxiē kànfǎ.)', english: 'Regarding this issue, I have some opinions.' },
      { target: '中文，他說得很流利。(Zhōngwén, tā shuō de hěn liúlì.)', english: 'Chinese, he speaks it very fluently.' },
    ],
  },
  {
    id: 'zh_b2_g006', language: lang, level,
    title: '連...都/也 (lián...dōu/yě) — Even...',
    explanation:
      'The 連...都/也 structure emphasizes an EXTREME or UNEXPECTED case to express ' +
      '"even X does/doesn\'t...".\n\n' +
      'Structure: 連 + Noun/Verb Phrase + 都/也 + Predicate\n\n' +
      '• 連他都不知道。(Even HE doesn\'t know.) — He\'s an expert, yet even he...\n' +
      '• 連一口飯都没吃。(Didn\'t even eat a single bite.) — Emphasizing the extreme.\n' +
      '• 我連他的名字也不記得了。(I can\'t even remember his name.) — Total lack.\n\n' +
      '連 marks the focus of emphasis. 都 and 也 are largely interchangeable here, ' +
      'though 都 is more common.',
    examples: [
      { target: '連他都不知道這件事。(Lián tā dōu bù zhīdào zhè jiàn shì.)', english: 'Even he doesn\'t know about this.' },
      { target: '她忙得連飯都没時間吃。(Tā máng de lián fàn dōu méi shíjiān chī.)', english: 'She\'s so busy she doesn\'t even have time to eat.' },
      { target: '這道题連老師也不會做。(Zhè dào tí lián lǎoshī yě bú huì zuò.)', english: 'Even the teacher can\'t solve this problem.' },
    ],
  },
  {
    id: 'zh_b2_g007', language: lang, level,
    title: 'Formal Written Connectors',
    explanation:
      'Written Chinese uses a set of formal connectors rarely found in casual speech. ' +
      'Mastering them is essential for reading newspapers, academic texts, and formal writing.\n\n' +
      '• 由于 (yóuyú) — due to / because of (more formal than 因為)\n' +
      '• 因此 (yīncǐ) — therefore / for this reason (more formal than 所以)\n' +
      '• 此外 (cǐwài) — furthermore / in addition\n' +
      '• 總之 (zǒngzhī) — in summary / in short\n' +
      '• 然而 (rán\'ér) — however / nevertheless\n\n' +
      'These are frequently combined: 由于...因此... (due to...therefore...).\n' +
      '然而 introduces a contrast, similar to 但是 but more literary.',
    examples: [
      { target: '由于交通擁堵，因此我们遲到了。(Yóuyú jiāotōng yōngdǔ, yīncǐ wǒmen chídào le.)', english: 'Due to traffic congestion, we were late.' },
      { target: '此外，我们還需要考慮成本问题。(Cǐwài, wǒmen hái xūyào kǎolǜ chéngběn wèntí.)', english: 'Furthermore, we also need to consider the cost issue.' },
      { target: '他很努力，然而結果并不理想。(Tā hěn nǔlì, rán\'ér jiéguǒ bìng bù lǐxiǎng.)', english: 'He worked very hard; however, the result was not ideal.' },
    ],
  },
  {
    id: 'zh_b2_g008', language: lang, level,
    title: '是...的 (shì...de) Construction — Emphasizing Past Details',
    explanation:
      'The 是...的 construction emphasizes the TIME, PLACE, MANNER, or PURPOSE of a ' +
      'PAST action (the action itself is already known).\n\n' +
      'Structure: Subject + 是 + [Time/Place/Manner] + Verb + 的\n\n' +
      '• 他是去年来的。(It was LAST YEAR that he came.) — Emphasizes time\n' +
      '• 我是坐飛机来的。(I came BY PLANE.) — Emphasizes manner\n' +
      '• 她是在北京出生的。(She was born IN BEIJING.) — Emphasizes place\n\n' +
      'This CANNOT be used for actions that haven\'t happened yet. The action must be ' +
      'completed. In negative form: 不是...的 — 我不是坐火車来的。(I didn\'t come by train.)\n\n' +
      'With an object, 的 can go before or after it:\n' +
      '  你是在哪兒買的這本书？ or 你是在哪兒買這本书的？',
    examples: [
      { target: '他是去年来中國的。(Tā shì qùnián lái Zhōngguó de.)', english: 'It was last year that he came to China.' },
      { target: '我是坐地鐵来的。(Wǒ shì zuò dìtiě lái de.)', english: 'I came by subway.' },
      { target: '她是在大學認識她丈夫的。(Tā shì zài dàxué rènshi tā zhàngfu de.)', english: 'She met her husband at university.' },
    ],
  },
];
