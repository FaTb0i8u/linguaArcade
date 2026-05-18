/**
 * Chinese (Mandarin) A2 / HSK 2 Vocabulary
 *
 * Organised by thematic category, matching CEFR A2 / HSK 2 expectations.
 * Each word includes part of speech, pinyin with tone marks,
 * an example sentence in simplified Chinese, and its English translation.
 *
 * Categories: travel, shopping, health, work, emotions, routines, hobbies.
 */

import type { VocabWord } from '../../../types';

const lang = 'zh' as const;
const level = 'A2' as const;

// ── Travel ──────────────────────────────────────────────────────

const travel: VocabWord[] = [
  {
    id: 'zh_a2_v001', language: lang, level, category: 'travel',
    word: '火车', translation: 'train', partOfSpeech: 'noun',
    pronunciation: 'huǒ chē',
    exampleSentence: '我坐火车去北京。', exampleTranslation: 'I take the train to Beijing.',
  },
  {
    id: 'zh_a2_v002', language: lang, level, category: 'travel',
    word: '飞机', translation: 'airplane', partOfSpeech: 'noun',
    pronunciation: 'fēi jī',
    exampleSentence: '飞机几点起飞？', exampleTranslation: 'What time does the plane take off?',
  },
  {
    id: 'zh_a2_v003', language: lang, level, category: 'travel',
    word: '地铁', translation: 'subway / metro', partOfSpeech: 'noun',
    pronunciation: 'dì tiě',
    exampleSentence: '坐地铁很方便。', exampleTranslation: 'Taking the subway is very convenient.',
  },
  {
    id: 'zh_a2_v004', language: lang, level, category: 'travel',
    word: '出租车', translation: 'taxi', partOfSpeech: 'noun',
    pronunciation: 'chū zū chē',
    exampleSentence: '我们打出租车去机场吧。', exampleTranslation: 'Let\'s take a taxi to the airport.',
  },
  {
    id: 'zh_a2_v005', language: lang, level, category: 'travel',
    word: '护照', translation: 'passport', partOfSpeech: 'noun',
    pronunciation: 'hù zhào',
    exampleSentence: '请出示你的护照。', exampleTranslation: 'Please show your passport.',
  },
  {
    id: 'zh_a2_v006', language: lang, level, category: 'travel',
    word: '酒店', translation: 'hotel', partOfSpeech: 'noun',
    pronunciation: 'jiǔ diàn',
    exampleSentence: '这家酒店很干净。', exampleTranslation: 'This hotel is very clean.',
  },
  {
    id: 'zh_a2_v007', language: lang, level, category: 'travel',
    word: '行李', translation: 'luggage / baggage', partOfSpeech: 'noun',
    pronunciation: 'xíng li',
    exampleSentence: '你的行李太重了。', exampleTranslation: 'Your luggage is too heavy.',
  },
  {
    id: 'zh_a2_v008', language: lang, level, category: 'travel',
    word: '旅游', translation: 'to travel / tourism', partOfSpeech: 'verb',
    pronunciation: 'lǚ yóu',
    exampleSentence: '我喜欢去国外旅游。', exampleTranslation: 'I like traveling abroad.',
  },
];

// ── Shopping ────────────────────────────────────────────────────

const shopping: VocabWord[] = [
  {
    id: 'zh_a2_v009', language: lang, level, category: 'shopping',
    word: '价格', translation: 'price', partOfSpeech: 'noun',
    pronunciation: 'jià gé',
    exampleSentence: '这个价格太高了。', exampleTranslation: 'This price is too high.',
  },
  {
    id: 'zh_a2_v010', language: lang, level, category: 'shopping',
    word: '便宜', translation: 'cheap / inexpensive', partOfSpeech: 'adjective',
    pronunciation: 'pián yi',
    exampleSentence: '这件衣服很便宜。', exampleTranslation: 'This piece of clothing is very cheap.',
  },
  {
    id: 'zh_a2_v011', language: lang, level, category: 'shopping',
    word: '贵', translation: 'expensive', partOfSpeech: 'adjective',
    pronunciation: 'guì',
    exampleSentence: '北京的房子很贵。', exampleTranslation: 'Houses in Beijing are very expensive.',
  },
  {
    id: 'zh_a2_v012', language: lang, level, category: 'shopping',
    word: '打折', translation: 'to give a discount', partOfSpeech: 'verb',
    pronunciation: 'dǎ zhé',
    exampleSentence: '这家店今天打折。', exampleTranslation: 'This store has a discount today.',
  },
  {
    id: 'zh_a2_v013', language: lang, level, category: 'shopping',
    word: '付钱', translation: 'to pay', partOfSpeech: 'verb',
    pronunciation: 'fù qián',
    exampleSentence: '你可以用手机付钱。', exampleTranslation: 'You can pay with your phone.',
  },
  {
    id: 'zh_a2_v014', language: lang, level, category: 'shopping',
    word: '信用卡', translation: 'credit card', partOfSpeech: 'noun',
    pronunciation: 'xìn yòng kǎ',
    exampleSentence: '可以用信用卡吗？', exampleTranslation: 'Can I use a credit card?',
  },
  {
    id: 'zh_a2_v015', language: lang, level, category: 'shopping',
    word: '超市', translation: 'supermarket', partOfSpeech: 'noun',
    pronunciation: 'chāo shì',
    exampleSentence: '我去超市买东西。', exampleTranslation: 'I go to the supermarket to buy things.',
  },
];

// ── Health ──────────────────────────────────────────────────────

const health: VocabWord[] = [
  {
    id: 'zh_a2_v016', language: lang, level, category: 'health',
    word: '生病', translation: 'to be sick / to fall ill', partOfSpeech: 'verb',
    pronunciation: 'shēng bìng',
    exampleSentence: '他昨天生病了。', exampleTranslation: 'He got sick yesterday.',
  },
  {
    id: 'zh_a2_v017', language: lang, level, category: 'health',
    word: '感冒', translation: 'to have a cold', partOfSpeech: 'verb',
    pronunciation: 'gǎn mào',
    exampleSentence: '我感冒了，不舒服。', exampleTranslation: 'I have a cold and don\'t feel well.',
  },
  {
    id: 'zh_a2_v018', language: lang, level, category: 'health',
    word: '头疼', translation: 'headache / to have a headache', partOfSpeech: 'verb',
    pronunciation: 'tóu téng',
    exampleSentence: '我今天头疼。', exampleTranslation: 'I have a headache today.',
  },
  {
    id: 'zh_a2_v019', language: lang, level, category: 'health',
    word: '药', translation: 'medicine', partOfSpeech: 'noun',
    pronunciation: 'yào',
    exampleSentence: '你吃药了吗？', exampleTranslation: 'Have you taken the medicine?',
  },
  {
    id: 'zh_a2_v020', language: lang, level, category: 'health',
    word: '医生', translation: 'doctor', partOfSpeech: 'noun',
    pronunciation: 'yī shēng',
    exampleSentence: '你应该去看医生。', exampleTranslation: 'You should go see a doctor.',
  },
  {
    id: 'zh_a2_v021', language: lang, level, category: 'health',
    word: '休息', translation: 'to rest', partOfSpeech: 'verb',
    pronunciation: 'xiū xi',
    exampleSentence: '你累了，休息一下吧。', exampleTranslation: 'You\'re tired, take a rest.',
  },
  {
    id: 'zh_a2_v022', language: lang, level, category: 'health',
    word: '锻炼', translation: 'to exercise / to work out', partOfSpeech: 'verb',
    pronunciation: 'duàn liàn',
    exampleSentence: '每天锻炼身体很重要。', exampleTranslation: 'Exercising every day is important.',
  },
];

// ── Work ────────────────────────────────────────────────────────

const work: VocabWord[] = [
  {
    id: 'zh_a2_v023', language: lang, level, category: 'work',
    word: '工作', translation: 'work / job / to work', partOfSpeech: 'noun',
    pronunciation: 'gōng zuò',
    exampleSentence: '你的工作是什么？', exampleTranslation: 'What is your job?',
  },
  {
    id: 'zh_a2_v024', language: lang, level, category: 'work',
    word: '办公室', translation: 'office', partOfSpeech: 'noun',
    pronunciation: 'bàn gōng shì',
    exampleSentence: '他在办公室里开会。', exampleTranslation: 'He is having a meeting in the office.',
  },
  {
    id: 'zh_a2_v025', language: lang, level, category: 'work',
    word: '会议', translation: 'meeting / conference', partOfSpeech: 'noun',
    pronunciation: 'huì yì',
    exampleSentence: '下午有一个重要的会议。', exampleTranslation: 'There is an important meeting this afternoon.',
  },
  {
    id: 'zh_a2_v026', language: lang, level, category: 'work',
    word: '老板', translation: 'boss', partOfSpeech: 'noun',
    pronunciation: 'lǎo bǎn',
    exampleSentence: '老板对我很好。', exampleTranslation: 'The boss is very nice to me.',
  },
  {
    id: 'zh_a2_v027', language: lang, level, category: 'work',
    word: '同事', translation: 'colleague / coworker', partOfSpeech: 'noun',
    pronunciation: 'tóng shì',
    exampleSentence: '我的同事很友好。', exampleTranslation: 'My colleagues are very friendly.',
  },
  {
    id: 'zh_a2_v028', language: lang, level, category: 'work',
    word: '工资', translation: 'salary / wages', partOfSpeech: 'noun',
    pronunciation: 'gōng zī',
    exampleSentence: '他的工资不高。', exampleTranslation: 'His salary is not high.',
  },
  {
    id: 'zh_a2_v029', language: lang, level, category: 'work',
    word: '加班', translation: 'to work overtime', partOfSpeech: 'verb',
    pronunciation: 'jiā bān',
    exampleSentence: '今天我要加班。', exampleTranslation: 'I have to work overtime today.',
  },
];

// ── Emotions ────────────────────────────────────────────────────

const emotions: VocabWord[] = [
  {
    id: 'zh_a2_v030', language: lang, level, category: 'emotions',
    word: '高兴', translation: 'happy / glad', partOfSpeech: 'adjective',
    pronunciation: 'gāo xìng',
    exampleSentence: '见到你我很高兴。', exampleTranslation: 'I am very happy to see you.',
  },
  {
    id: 'zh_a2_v031', language: lang, level, category: 'emotions',
    word: '难过', translation: 'sad / upset', partOfSpeech: 'adjective',
    pronunciation: 'nán guò',
    exampleSentence: '她听到这个消息很难过。', exampleTranslation: 'She was very sad to hear this news.',
  },
  {
    id: 'zh_a2_v032', language: lang, level, category: 'emotions',
    word: '生气', translation: 'angry / to get angry', partOfSpeech: 'adjective',
    pronunciation: 'shēng qì',
    exampleSentence: '别生气了，没关系。', exampleTranslation: 'Don\'t be angry, it\'s fine.',
  },
  {
    id: 'zh_a2_v033', language: lang, level, category: 'emotions',
    word: '紧张', translation: 'nervous / tense', partOfSpeech: 'adjective',
    pronunciation: 'jǐn zhāng',
    exampleSentence: '考试前我很紧张。', exampleTranslation: 'I am very nervous before exams.',
  },
  {
    id: 'zh_a2_v034', language: lang, level, category: 'emotions',
    word: '无聊', translation: 'bored / boring', partOfSpeech: 'adjective',
    pronunciation: 'wú liáo',
    exampleSentence: '这个电影太无聊了。', exampleTranslation: 'This movie is too boring.',
  },
  {
    id: 'zh_a2_v035', language: lang, level, category: 'emotions',
    word: '着急', translation: 'anxious / worried', partOfSpeech: 'adjective',
    pronunciation: 'zháo jí',
    exampleSentence: '别着急，慢慢来。', exampleTranslation: 'Don\'t worry, take it slowly.',
  },
  {
    id: 'zh_a2_v036', language: lang, level, category: 'emotions',
    word: '满意', translation: 'satisfied / pleased', partOfSpeech: 'adjective',
    pronunciation: 'mǎn yì',
    exampleSentence: '老板对我的工作很满意。', exampleTranslation: 'The boss is very satisfied with my work.',
  },
];

// ── Daily Routines ──────────────────────────────────────────────

const routines: VocabWord[] = [
  {
    id: 'zh_a2_v037', language: lang, level, category: 'routines',
    word: '起床', translation: 'to get up / to get out of bed', partOfSpeech: 'verb',
    pronunciation: 'qǐ chuáng',
    exampleSentence: '我每天早上七点起床。', exampleTranslation: 'I get up at 7 AM every day.',
  },
  {
    id: 'zh_a2_v038', language: lang, level, category: 'routines',
    word: '刷牙', translation: 'to brush teeth', partOfSpeech: 'verb',
    pronunciation: 'shuā yá',
    exampleSentence: '起床以后先刷牙。', exampleTranslation: 'Brush your teeth first after getting up.',
  },
  {
    id: 'zh_a2_v039', language: lang, level, category: 'routines',
    word: '洗脸', translation: 'to wash one\'s face', partOfSpeech: 'verb',
    pronunciation: 'xǐ liǎn',
    exampleSentence: '她每天早上洗脸。', exampleTranslation: 'She washes her face every morning.',
  },
  {
    id: 'zh_a2_v040', language: lang, level, category: 'routines',
    word: '上班', translation: 'to go to work', partOfSpeech: 'verb',
    pronunciation: 'shàng bān',
    exampleSentence: '他每天八点上班。', exampleTranslation: 'He goes to work at 8 AM every day.',
  },
  {
    id: 'zh_a2_v041', language: lang, level, category: 'routines',
    word: '下班', translation: 'to get off work', partOfSpeech: 'verb',
    pronunciation: 'xià bān',
    exampleSentence: '你几点下班？', exampleTranslation: 'What time do you get off work?',
  },
  {
    id: 'zh_a2_v042', language: lang, level, category: 'routines',
    word: '睡觉', translation: 'to sleep / to go to bed', partOfSpeech: 'verb',
    pronunciation: 'shuì jiào',
    exampleSentence: '我十一点睡觉。', exampleTranslation: 'I go to bed at eleven o\'clock.',
  },
  {
    id: 'zh_a2_v043', language: lang, level, category: 'routines',
    word: '散步', translation: 'to take a walk', partOfSpeech: 'verb',
    pronunciation: 'sàn bù',
    exampleSentence: '晚饭以后我去散步。', exampleTranslation: 'I go for a walk after dinner.',
  },
];

// ── Hobbies ─────────────────────────────────────────────────────

const hobbies: VocabWord[] = [
  {
    id: 'zh_a2_v044', language: lang, level, category: 'hobbies',
    word: '运动', translation: 'sports / exercise / to exercise', partOfSpeech: 'noun',
    pronunciation: 'yùn dòng',
    exampleSentence: '你喜欢什么运动？', exampleTranslation: 'What sports do you like?',
  },
  {
    id: 'zh_a2_v045', language: lang, level, category: 'hobbies',
    word: '游泳', translation: 'to swim / swimming', partOfSpeech: 'verb',
    pronunciation: 'yóu yǒng',
    exampleSentence: '夏天我常去游泳。', exampleTranslation: 'I often go swimming in summer.',
  },
  {
    id: 'zh_a2_v046', language: lang, level, category: 'hobbies',
    word: '跑步', translation: 'to jog / running', partOfSpeech: 'verb',
    pronunciation: 'pǎo bù',
    exampleSentence: '他每天早上跑步。', exampleTranslation: 'He jogs every morning.',
  },
  {
    id: 'zh_a2_v047', language: lang, level, category: 'hobbies',
    word: '唱歌', translation: 'to sing', partOfSpeech: 'verb',
    pronunciation: 'chàng gē',
    exampleSentence: '她唱歌唱得很好。', exampleTranslation: 'She sings very well.',
  },
  {
    id: 'zh_a2_v048', language: lang, level, category: 'hobbies',
    word: '跳舞', translation: 'to dance', partOfSpeech: 'verb',
    pronunciation: 'tiào wǔ',
    exampleSentence: '我不会跳舞。', exampleTranslation: 'I can\'t dance.',
  },
  {
    id: 'zh_a2_v049', language: lang, level, category: 'hobbies',
    word: '画画', translation: 'to draw / to paint', partOfSpeech: 'verb',
    pronunciation: 'huà huà',
    exampleSentence: '小朋友喜欢画画。', exampleTranslation: 'Children like to draw.',
  },
  {
    id: 'zh_a2_v050', language: lang, level, category: 'hobbies',
    word: '拍照', translation: 'to take photos', partOfSpeech: 'verb',
    pronunciation: 'pāi zhào',
    exampleSentence: '可以帮我拍照吗？', exampleTranslation: 'Can you take a photo for me?',
  },
];

// ── Export ───────────────────────────────────────────────────────

export const CHINESE_A2_VOCAB: VocabWord[] = [
  ...travel,
  ...shopping,
  ...health,
  ...work,
  ...emotions,
  ...routines,
  ...hobbies,
];
