/**
 * Chinese (Mandarin) C2 Grammar Rules
 *
 * Mastery-level grammar concepts for CEFR C2 / HSK 6+ learners.
 * Covers classical Chinese in modern usage, register variation,
 * complex sentence embedding, advanced 成語, legal Chinese,
 * rhetorical devices, discourse coherence, and nuanced word choice.
 */

import type { GrammarRule } from '../../../types';

const lang = 'zh' as const;
const level = 'C2' as const;

export const CHINESE_C2_GRAMMAR: GrammarRule[] = [
  {
    id: 'zh_c2_g001', language: lang, level,
    title: '文言文 (Classical Chinese) in Modern Usage',
    explanation:
      'Classical Chinese (文言文) structures permeate modern formal registers — ' +
      'news headlines, legal texts, political speeches, and literary essays. At the C2 level, ' +
      'learners must recognise and produce these patterns naturally.\n\n' +
      '• 故 (gù) — "therefore / hence"\n' +
      '  Classical equivalent of 所以. Used in conclusions and formal argumentation.\n' +
      '  此人品行端正，故委以重任。(This person is upright; hence entrusted with major duties.)\n\n' +
      '• 亦 (yì) — "also / likewise"\n' +
      '  Classical equivalent of 也. Common in parallel structures and formal writing.\n' +
      '  經濟發展固然重要，文化建設亦不可忽視。\n\n' +
      '• 虽...然 (suī...rán) — "although...still"\n' +
      '  Classical concessive pattern. 虽 alone (without 然) is highly literary.\n' +
      '  虽有良策，然執行不力則無益。\n\n' +
      'These structures signal erudition when used appropriately but sound affected in casual speech.',
    examples: [
      { target: '民以食為天，故糧食安全至關重要。(Mín yǐ shí wéi tiān, gù liángshí ānquán zhìguān zhòngyào.)', english: 'The people regard food as paramount; therefore food security is of vital importance.' },
      { target: '此理亦適用于國际關系領域。(Cǐ lǐ yì shìyòng yú guójì guānxì lǐngyù.)', english: 'This principle likewise applies to the field of international relations.' },
      { target: '虽事出有因，然不可因此而免除责任。(Suī shì chū yǒu yīn, rán bù kě yīncǐ ér miǎnchú zérèn.)', english: 'Although there were justifiable reasons, responsibility cannot be waived on that account.' },
    ],
  },
  {
    id: 'zh_c2_g002', language: lang, level,
    title: 'Register & Style Variation (书面語 vs 口語)',
    explanation:
      'Chinese has a sharp divide between formal written style (书面語 shūmiànyǔ) and ' +
      'spoken style (口語 kǒuyǔ). At C2, learners must command the full register spectrum ' +
      'and choose the right form for each context.\n\n' +
      '• "but" — three registers:\n' +
      '  口語: 不過 (búguò) — casual, conversational\n' +
      '  中性: 但是 (dànshì) — neutral, all-purpose\n' +
      '  书面: 然而 (rán\'ér) — formal, literary\n\n' +
      '• "because" — three registers:\n' +
      '  口語: 因為 (yīnwèi) — everyday\n' +
      '  书面: 由于 (yóuyú) — formal, often at sentence start\n' +
      '  文言: 蓋因 (gài yīn) — literary/archaic\n\n' +
      '• "if" — three registers:\n' +
      '  口語: 要是 (yàoshi) — colloquial\n' +
      '  中性: 如果 (rúguǒ) — standard\n' +
      '  书面: 倘若 (tǎngruò) — formal/literary\n\n' +
      'Mismatching register and context is a common marker of non-native writing.',
    examples: [
      { target: '然而，事實并非如此簡單。(Rán\'ér, shìshí bìng fēi rúcǐ jiǎndān.)', english: 'However, the facts are not so simple. (formal written register)' },
      { target: '由于全球經濟放緩，出口额大幅下降。(Yóuyú quánqiú jīngjì fàng huǎn, chūkǒu é dàfú xiàjiàng.)', english: 'Due to the global economic slowdown, export volume dropped significantly. (formal register)' },
      { target: '倘若各國未能達成共識，后果將不堪設想。(Tǎngruò gè guó wèi néng dáchéng gòngshí, hòuguǒ jiāng bùkān shèxiǎng.)', english: 'Should the nations fail to reach consensus, the consequences would be unthinkable. (formal register)' },
    ],
  },
  {
    id: 'zh_c2_g003', language: lang, level,
    title: 'Complex Sentence Embedding (多层從句)',
    explanation:
      'At mastery level, learners must handle sentences with multiple subordinate clauses ' +
      'chained together — a hallmark of academic, legal, and journalistic Chinese.\n\n' +
      'Pattern 1: 由于...加之...因此...\n' +
      '  (Due to X, compounded by Y, therefore Z)\n' +
      '  由于經費不足，加之人手紧張，因此項目被迫延期。\n\n' +
      'Pattern 2: 在...的情況下...鉴于...應當...\n' +
      '  (Under the circumstances of X, in view of Y, one should Z)\n' +
      '  在資源有限的情況下，鉴于需求日益增長，應當優化配置。\n\n' +
      'Pattern 3: 不僅...而且...甚至...\n' +
      '  (Not only X, but also Y, and even Z)\n' +
      '  Escalating emphasis across three or more clauses.\n\n' +
      'Key skills:\n' +
      '• Use comma-separated clauses with clear logical connectors\n' +
      '• Keep the main clause (result/conclusion) at the end\n' +
      '• Balance clause length for readability',
    examples: [
      { target: '由于經費不足，加之人手紧張，因此項目被迫延期。(Yóuyú jīngfèi bùzú, jiāzhī rénshǒu jǐnzhāng, yīncǐ xiàngmù bèi pò yánqī.)', english: 'Due to insufficient funding, compounded by a shortage of manpower, the project was forced to be delayed.' },
      { target: '在資源有限的情況下，鉴于需求日益增長，應當優化資源配置。(Zài zīyuán yǒuxiàn de qíngkuàng xià, jiànyú xūqiú rìyì zēngzhǎng, yīngdāng yōuhuà zīyuán pèizhì.)', english: 'Under circumstances of limited resources, in view of growing demand, resource allocation should be optimised.' },
      { target: '這場危机不僅影響了國内經濟，而且波及了周邊國家，甚至動搖了國际金融體系。(Zhè chǎng wēijī bùjǐn yǐngxiǎng le guónèi jīngjì, érqiě bōjí le zhōubiān guójiā, shènzhì dòngyáo le guójì jīnróng tǐxì.)', english: 'This crisis not only affected the domestic economy but also spread to neighbouring countries and even shook the international financial system.' },
    ],
  },
  {
    id: 'zh_c2_g004', language: lang, level,
    title: '成語 in Context — Advanced (典故成語)',
    explanation:
      'At C2, learners go beyond simple four-character idioms to master "story idioms" ' +
      '(典故成語 diǎngù chéngyǔ) — those rooted in specific historical anecdotes. ' +
      'Using these in formal argumentation demonstrates cultural literacy.\n\n' +
      '• 塞翁失马 (sài wēng shī mǎ) — "The old man at the frontier lost his horse"\n' +
      '  Meaning: A seeming misfortune may be a blessing in disguise\n' +
      '  Origin: Huainanzi (《淮南子》)\n\n' +
      '• 臥薪尝膽 (wò xīn cháng dǎn) — "Sleep on brushwood and taste gall"\n' +
      '  Meaning: Endure hardship to prepare for ultimate success/revenge\n' +
      '  Origin: King Goujian of Yue (春秋時期)\n\n' +
      '• 亡羊補牢 (wáng yáng bǔ láo) — "Mend the pen after losing a sheep"\n' +
      '  Meaning: Better late than never; take remedial action\n' +
      '  Origin: Zhanguoce (《戰國策》)\n\n' +
      'Usage tips:\n' +
      '• Cite the story origin briefly for rhetorical effect\n' +
      '• Use 1–2 per paragraph in essays; overuse is pretentious\n' +
      '• Match the idiom\'s tone to context (some are humorous, others solemn)',
    examples: [
      { target: '此次失利看似不幸，但塞翁失马，焉知非福。(Cǐ cì shīlì kàn sì bú xìng, dàn sài wēng shī mǎ, yān zhī fēi fú.)', english: 'This setback seems unfortunate, but as the proverb says, who knows if it isn\'t a blessing in disguise.' },
      { target: '他臥薪尝膽多年，終于在行业中嶄露頭角。(Tā wò xīn cháng dǎn duō nián, zhōngyú zài hángyè zhōng zhǎnlù tóujiǎo.)', english: 'He endured years of hardship and finally distinguished himself in the industry.' },
      { target: '發現问题后應及時補救，亡羊補牢，猶未為晚。(Fāxiàn wèntí hòu yīng jíshí bǔjiù, wáng yáng bǔ láo, yóu wèi wéi wǎn.)', english: 'After discovering the problem, remedial action should be taken promptly — it\'s better late than never.' },
    ],
  },
  {
    id: 'zh_c2_g005', language: lang, level,
    title: 'Government & Legal Chinese (公文/法律語體)',
    explanation:
      'Chinese government documents (公文 gōngwén) and legal texts (法律文件) employ ' +
      'a specialised register that C2 learners must comprehend and produce.\n\n' +
      '• 予以 (yǔyǐ) — "give / grant / impose" (legal action)\n' +
      '  對違法行為予以处罰 (impose punishment on illegal acts)\n\n' +
      '• 责令 (zélìng) — "order (by authority)"\n' +
      '  责令限期整改 (order rectification within a deadline)\n\n' +
      '• 依照 (yīzhào) / 依據 (yījù) — "in accordance with"\n' +
      '  依照《中華人民共和國民法典》的規定 (in accordance with the provisions of the Civil Code)\n\n' +
      '• 經...批準 (jīng...pīzhǔn) — "approved by"\n' +
      '  經國務院批準 (approved by the State Council)\n\n' +
      'Characteristic features:\n' +
      '• Impersonal voice — rarely uses personal pronouns\n' +
      '• Verbs of authority: 予以, 责令, 核準, 批复\n' +
      '• Legal citation format: 依據《法律名》第X条第Y款',
    examples: [
      { target: '依據《勞動法》第四十四条，用人單位應當予以補償。(Yījù "Láodòng Fǎ" dì sìshísì tiáo, yòngrén dānwèi yīngdāng yǔyǐ bǔcháng.)', english: 'In accordance with Article 44 of the Labour Law, the employer shall provide compensation.' },
      { target: '經市政府批準，現予以公告。(Jīng shì zhèngfǔ pīzhǔn, xiàn yǔyǐ gōnggào.)', english: 'Approved by the municipal government, this is hereby publicly announced.' },
      { target: '责令該單位于三十日内完成整改，逾期不改者，依法予以处罰。(Zélìng gāi dānwèi yú sānshí rì nèi wánchéng zhěnggǎi, yúqī bù gǎi zhě, yīfǎ yǔyǐ chǔfá.)', english: 'The entity is ordered to complete rectification within thirty days; those who fail to comply shall be punished in accordance with the law.' },
    ],
  },
  {
    id: 'zh_c2_g006', language: lang, level,
    title: 'Rhetorical Devices (修辞手法)',
    explanation:
      'Mastery of Chinese rhetoric involves recognising and deploying classical devices ' +
      'in writing and speech.\n\n' +
      '• 排比 (páibǐ) — Parallelism: Three or more clauses with identical structure\n' +
      '  人民需要和平，人民需要發展，人民需要合作。\n' +
      '  Effect: Builds momentum and emotional force\n\n' +
      '• 對仗 (duìzhàng) — Antithesis: Two parallel clauses with contrasting content\n' +
      '  海内存知己，天涯若比鄰。\n' +
      '  Effect: Elegance, balance, memorability\n\n' +
      '• 反复 (fǎnfù) — Repetition: Repeating key words/phrases for emphasis\n' +
      '  和平！和平！我们要的是和平！\n' +
      '  Effect: Emotional intensity\n\n' +
      '• 設问 (shèwèn) — Posing a question then answering it (self-question-answer)\n' +
      '  什么是教育的根本目的？是培養全面發展的人才。\n' +
      '  Effect: Draws reader in, guides the argument',
    examples: [
      { target: '没有理想的人是可悲的，没有勇氣的人是懦弱的，没有行動的人是空洞的。(Méiyǒu lǐxiǎng de rén shì kěbēi de, méiyǒu yǒngqì de rén shì nuòruò de, méiyǒu xíngdòng de rén shì kōngdòng de.)', english: 'People without ideals are pitiable, people without courage are cowardly, people without action are hollow. (排比 parallelism)' },
      { target: '海内存知己，天涯若比鄰。(Hǎi nèi cún zhījǐ, tiānyá ruò bǐlín.)', english: 'If you have a true friend within the seas, even the ends of the earth feel like next door. (對仗 antithesis)' },
      { target: '什么是真正的勇氣？真正的勇氣不是無所畏惧，而是在恐惧面前依然前行。(Shénme shì zhēnzhèng de yǒngqì? Zhēnzhèng de yǒngqì búshì wú suǒ wèijù, ér shì zài kǒngjù miànqián yīrán qián xíng.)', english: 'What is true courage? True courage is not fearlessness, but pressing forward in the face of fear. (設问 self-question-answer)' },
    ],
  },
  {
    id: 'zh_c2_g007', language: lang, level,
    title: 'Discourse Coherence (語篇衔接)',
    explanation:
      'Sophisticated Chinese writing requires mastery of discourse markers and transitions ' +
      'that create coherent, flowing argumentation.\n\n' +
      '• 綜上所述 (zōng shàng suǒ shù) — "to summarise the above"\n' +
      '  Used at the beginning of a concluding paragraph\n\n' +
      '• 由此可见 (yóucǐ kějiàn) — "from this we can see"\n' +
      '  Draws an inference from previous evidence\n\n' +
      '• 換言之 (huàn yán zhī) — "in other words"\n' +
      '  Reformulates or clarifies a preceding statement\n\n' +
      '• 據此 (jùcǐ) — "based on this / accordingly"\n' +
      '  References what was just stated as a basis for action\n\n' +
      'Other advanced transitional phrases:\n' +
      '• 有鉴于此 — in light of this\n' +
      '• 就此而言 — in this regard\n' +
      '• 值得一提的是 — it is worth mentioning that\n' +
      '• 不可否認 — it cannot be denied that',
    examples: [
      { target: '綜上所述，教育改革勢在必行。(Zōng shàng suǒ shù, jiàoyù gǎigé shì zài bì xíng.)', english: 'To summarise the above, education reform is imperative.' },
      { target: '由此可见，經濟增長與環境保護并非不可兼顾。(Yóucǐ kějiàn, jīngjì zēngzhǎng yǔ huánjìng bǎohù bìng fēi bù kě jiāngù.)', english: 'From this we can see that economic growth and environmental protection are not necessarily incompatible.' },
      { target: '換言之，我们需要的不是更多的資源，而是更合理的分配。(Huàn yán zhī, wǒmen xūyào de búshì gèng duō de zīyuán, ér shì gèng hélǐ de fēnpèi.)', english: 'In other words, what we need is not more resources but more rational distribution.' },
    ],
  },
  {
    id: 'zh_c2_g008', language: lang, level,
    title: 'Nuanced Word Choice (近義詞辨析)',
    explanation:
      'At C2, learners must distinguish near-synonyms that differ in formality, emotional ' +
      'colour, or precise shade of meaning.\n\n' +
      '• "Look" — increasing formality/intensity:\n' +
      '  看 (kàn) → 望 (wàng) → 注視 (zhùshì) → 凝視 (níngshì) → 端詳 (duānxiang)\n' +
      '  看: casual "look at"\n' +
      '  望: "gaze into the distance" (poetic)\n' +
      '  注視: "watch closely" (neutral-formal)\n' +
      '  凝視: "gaze intently / stare" (literary/emotional)\n' +
      '  端詳: "examine closely / study (a face/thing)" (descriptive)\n\n' +
      '• "Think" — different nuances:\n' +
      '  覺得 (juéde) — "feel / have the impression that" (subjective, casual)\n' +
      '  以為 (yǐwéi) — "mistakenly think / assume" (implies error)\n' +
      '  認為 (rènwéi) — "consider / believe that" (neutral-formal)\n\n' +
      '• "Important" — register variation:\n' +
      '  重要 (zhòngyào) — standard / all-purpose\n' +
      '  關鍵 (guānjiàn) — "key / crucial" (emphasises pivotal role)\n' +
      '  至關重要 (zhìguān zhòngyào) — "of vital importance" (very formal)',
    examples: [
      { target: '她凝視着遠方，仿佛在追憶往事。(Tā níngshì zhe yuǎnfāng, fǎngfú zài zhuīyì wǎngshì.)', english: 'She gazed intently into the distance, as if reminiscing about the past. (凝視 = literary/emotional gaze)' },
      { target: '我以為他已經離開了，没想到他還在。(Wǒ yǐwéi tā yǐjīng líkāi le, méi xiǎngdào tā hái zài.)', english: 'I assumed he had already left — I didn\'t expect he was still here. (以為 = mistaken assumption)' },
      { target: '在當前形勢下，維護社會穩定至關重要。(Zài dāngqián xíngshì xià, wéihù shèhuì wěndìng zhìguān zhòngyào.)', english: 'Under the current circumstances, maintaining social stability is of vital importance. (至關重要 = very formal)' },
    ],
  },
];
