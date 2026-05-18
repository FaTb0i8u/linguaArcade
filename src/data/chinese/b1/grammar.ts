/**
 * Chinese (Mandarin) B1 Grammar Rules
 *
 * Intermediate grammar concepts for CEFR B1 / HSK 3-4 learners.
 * Covers complement structures (result, direction, degree),
 * passive voice (被), and complex sentence patterns
 * (虽然...但是, 因为...所以, 如果...就, 越来越).
 */

import type { GrammarRule } from '../../../types';

const lang = 'zh' as const;
const level = 'B1' as const;

export const CHINESE_B1_GRAMMAR: GrammarRule[] = [
  {
    id: 'zh_b1_g001', language: lang, level,
    title: '结果补语 — Result Complements',
    explanation:
      'A result complement is placed directly after the verb to indicate the OUTCOME ' +
      'of the action. The verb expresses the action, and the complement expresses the result.\n\n' +
      '• 听懂 (tīng dǒng) — listen + understand = understand by listening\n' +
      '• 看完 (kàn wán) — read + finish = finish reading\n' +
      '• 找到 (zhǎo dào) — look for + reach = find\n\n' +
      'Negative: 没 + Verb + complement (for completed): 没听懂, 没看完.\n' +
      'Potential form: Verb + 得/不 + complement: 听得懂 (can understand), ' +
      '听不懂 (cannot understand).\n\n' +
      'IMPORTANT: The complement is NOT a separate word — it fuses with the verb ' +
      'to form a compound. Think of it as one unit: 听懂 = "listen-understand".',
    examples: [
      { target: '我听懂了老师说的话。(Wǒ tīng dǒng le lǎoshī shuō de huà.)', english: 'I understood what the teacher said.' },
      { target: '她看完了那本书。(Tā kàn wán le nà běn shū.)', english: 'She finished reading that book.' },
      { target: '我没找到我的钥匙。(Wǒ méi zhǎo dào wǒ de yàoshi.)', english: 'I didn\'t find my key.' },
    ],
  },
  {
    id: 'zh_b1_g002', language: lang, level,
    title: '趋向补语 — Direction Complements',
    explanation:
      'Direction complements indicate the DIRECTION of movement. They combine a simple ' +
      'direction word with 来 (toward speaker) or 去 (away from speaker).\n\n' +
      '• 走进来 (zǒu jìn lái) — walk + in + toward = walk in (toward speaker)\n' +
      '• 跑出去 (pǎo chū qù) — run + out + away = run out (away from speaker)\n' +
      '• 走回来 (zǒu huí lái) — walk + back + toward = walk back\n\n' +
      'With an object, place it between the direction and 来/去:\n' +
      '• 他走进教室来。(He walked into the classroom [toward speaker].)\n\n' +
      'ABSTRACT uses are very common:\n' +
      '• 想出来 = figure out (think + out + toward)\n' +
      '• 说下去 = continue speaking (speak + down + away)',
    examples: [
      { target: '他走进来了。(Tā zǒu jìn lái le.)', english: 'He walked in.' },
      { target: '孩子们跑出去玩了。(Háizimen pǎo chū qù wán le.)', english: 'The children ran out to play.' },
      { target: '你能想出来一个好办法吗？(Nǐ néng xiǎng chū lái yí ge hǎo bànfǎ ma?)', english: 'Can you think of a good solution?' },
    ],
  },
  {
    id: 'zh_b1_g003', language: lang, level,
    title: '程度补语 — Degree Complements',
    explanation:
      'A degree complement describes HOW WELL or TO WHAT DEGREE an action is performed. ' +
      'Use 得 (de) between the verb and the description.\n\n' +
      '• 她唱得很好。(Tā chàng de hěn hǎo.) — She sings very well.\n' +
      '• 他跑得很快。(Tā pǎo de hěn kuài.) — He runs very fast.\n' +
      '• 我睡得不好。(Wǒ shuì de bù hǎo.) — I didn\'t sleep well.\n\n' +
      'If the verb has an object, repeat the verb or front the object:\n' +
      '• 她说中文说得很好。 or 她中文说得很好。\n\n' +
      '极了 (jí le) = "extremely" — attaches directly to adjectives:\n' +
      '• 好极了！(Hǎo jí le!) — Wonderful! / Great!',
    examples: [
      { target: '她唱得很好听。(Tā chàng de hěn hǎo tīng.)', english: 'She sings very nicely.' },
      { target: '他跑得比我快。(Tā pǎo de bǐ wǒ kuài.)', english: 'He runs faster than me.' },
      { target: '今天冷极了。(Jīntiān lěng jí le.)', english: 'It\'s extremely cold today.' },
    ],
  },
  {
    id: 'zh_b1_g004', language: lang, level,
    title: '被 (bèi) — Passive Voice',
    explanation:
      'The 被 (bèi) construction creates passive sentences where the subject is ' +
      'the receiver of the action.\n\n' +
      'Structure: Subject + 被 + (Agent) + Verb + Complement\n\n' +
      '• 书被他拿走了。(Shū bèi tā ná zǒu le.) — The book was taken away by him.\n' +
      '• 我的手机被偷了。(Wǒ de shǒujī bèi tōu le.) — My phone was stolen.\n\n' +
      'IMPORTANT: 被 sentences often imply something NEGATIVE or UNDESIRABLE happened ' +
      'to the subject. The verb must have a complement (了, 走, 完 etc.) — you cannot ' +
      'say *书被他拿 alone.\n\n' +
      'The agent can be omitted when unknown: 杯子被打碎了。(The cup was broken.)',
    examples: [
      { target: '书被他拿走了。(Shū bèi tā ná zǒu le.)', english: 'The book was taken away by him.' },
      { target: '我的手机被偷了。(Wǒ de shǒujī bèi tōu le.)', english: 'My phone was stolen.' },
      { target: '蛋糕被孩子们吃完了。(Dàngāo bèi háizimen chī wán le.)', english: 'The cake was eaten up by the children.' },
    ],
  },
  {
    id: 'zh_b1_g005', language: lang, level,
    title: '虽然...但是 (suīrán...dànshì) — Although...but',
    explanation:
      'This paired conjunction expresses CONCESSION — admitting one fact while ' +
      'stating a contrasting conclusion.\n\n' +
      'Structure: 虽然 + Clause A, 但是 + Clause B\n\n' +
      '• 虽然他很忙，但是他还是来了。\n' +
      '  (Suīrán tā hěn máng, dànshì tā háishi lái le.)\n' +
      '  Although he was very busy, he still came.\n\n' +
      'NOTE: Unlike English, Chinese uses BOTH "although" and "but" in the same sentence. ' +
      '虽然 can also be placed after the subject:\n' +
      '• 他虽然很累，但是很开心。(He, although tired, is very happy.)\n\n' +
      '可是 (kěshì) and 不过 (búguò) can replace 但是.',
    examples: [
      { target: '虽然他很忙，但是他还是来了。(Suīrán tā hěn máng, dànshì tā háishi lái le.)', english: 'Although he was very busy, he still came.' },
      { target: '虽然这件衣服很贵，但是质量很好。(Suīrán zhè jiàn yīfu hěn guì, dànshì zhìliàng hěn hǎo.)', english: 'Although this clothing is expensive, the quality is good.' },
      { target: '他虽然年轻，但是很有经验。(Tā suīrán niánqīng, dànshì hěn yǒu jīngyàn.)', english: 'Although he is young, he is very experienced.' },
    ],
  },
  {
    id: 'zh_b1_g006', language: lang, level,
    title: '因为...所以 (yīnwèi...suǒyǐ) — Because...so',
    explanation:
      'This paired conjunction expresses CAUSE AND EFFECT.\n\n' +
      'Structure: 因为 + Cause, 所以 + Effect\n\n' +
      '• 因为下雨了，所以我没出去。\n' +
      '  (Yīnwèi xià yǔ le, suǒyǐ wǒ méi chū qù.)\n' +
      '  Because it rained, I didn\'t go out.\n\n' +
      'In spoken Chinese, you can use either half alone:\n' +
      '• 因为下雨了，我没出去。(Because it rained, I didn\'t go out.)\n' +
      '• 我没出去，是因为下雨了。(I didn\'t go out, because it rained.)\n\n' +
      'Unlike English, Chinese often uses BOTH "because" and "so" together.',
    examples: [
      { target: '因为下雨了，所以我没出去。(Yīnwèi xià yǔ le, suǒyǐ wǒ méi chū qù.)', english: 'Because it rained, I didn\'t go out.' },
      { target: '因为他生病了，所以今天没来上课。(Yīnwèi tā shēng bìng le, suǒyǐ jīntiān méi lái shàng kè.)', english: 'Because he was sick, he didn\'t come to class today.' },
      { target: '因为路上堵车，所以我迟到了。(Yīnwèi lù shang dǔ chē, suǒyǐ wǒ chí dào le.)', english: 'Because of traffic, I was late.' },
    ],
  },
  {
    id: 'zh_b1_g007', language: lang, level,
    title: '如果...就 (rúguǒ...jiù) — If...then',
    explanation:
      'This paired conjunction expresses CONDITIONAL statements.\n\n' +
      'Structure: 如果 + Condition, Subject + 就 + Result\n\n' +
      '• 如果下雨，我就不去了。\n' +
      '  (Rúguǒ xià yǔ, wǒ jiù bú qù le.)\n' +
      '  If it rains, I won\'t go.\n\n' +
      '就 (jiù) is placed before the verb in the result clause and means "then". ' +
      'It is technically optional but very commonly used.\n\n' +
      '要是 (yàoshi) is a more colloquial alternative to 如果:\n' +
      '• 要是你有时间，就来我家吧。(If you have time, come to my house.)',
    examples: [
      { target: '如果下雨，我就不去了。(Rúguǒ xià yǔ, wǒ jiù bú qù le.)', english: 'If it rains, I won\'t go.' },
      { target: '如果你喜欢，就买吧。(Rúguǒ nǐ xǐhuan, jiù mǎi ba.)', english: 'If you like it, then buy it.' },
      { target: '如果明天天气好，我们就去爬山。(Rúguǒ míngtiān tiānqì hǎo, wǒmen jiù qù pá shān.)', english: 'If the weather is good tomorrow, we\'ll go hiking.' },
    ],
  },
  {
    id: 'zh_b1_g008', language: lang, level,
    title: '越来越 (yuè lái yuè) — More and more',
    explanation:
      '越来越 (yuè lái yuè) + Adjective/Verb expresses that something is INCREASING ' +
      'or CHANGING progressively.\n\n' +
      '• 天气越来越冷了。(Tiānqì yuè lái yuè lěng le.) — The weather is getting colder and colder.\n' +
      '• 她的中文越来越好了。(Tā de Zhōngwén yuè lái yuè hǎo le.) — Her Chinese is getting better and better.\n\n' +
      'Related pattern: 越A越B = "the more A, the more B":\n' +
      '• 越学越有意思。(Yuè xué yuè yǒu yìsi.) — The more you study, the more interesting it gets.\n' +
      '• 他越说越快。(Tā yuè shuō yuè kuài.) — The more he speaks, the faster he gets.\n\n' +
      'The sentence-final 了 emphasises the change happening over time.',
    examples: [
      { target: '天气越来越冷了。(Tiānqì yuè lái yuè lěng le.)', english: 'The weather is getting colder and colder.' },
      { target: '中文越学越有意思。(Zhōngwén yuè xué yuè yǒu yìsi.)', english: 'The more you study Chinese, the more interesting it gets.' },
      { target: '城市的环境越来越好了。(Chéngshì de huánjìng yuè lái yuè hǎo le.)', english: 'The city\'s environment is getting better and better.' },
    ],
  },
];
