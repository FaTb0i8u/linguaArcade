/**
 * Korean C1 Vocabulary
 *
 * TOPIK II Level 5 expectations.
 * Covers academia, law, economics, philosophy, literature,
 * and advanced emotions.
 */

import type { VocabWord } from '../../../types';

const lang = 'ko' as const;
const level = 'C1' as const;

// ── Academia ────────────────────────────────────────────────────

const academia: VocabWord[] = [
  {
    id: 'ko_c1_v001', language: lang, level, category: 'academia',
    word: '논문', translation: 'thesis / academic paper', partOfSpeech: 'noun',
    pronunciation: 'non-mun',
    exampleSentence: '그는 석사 논문을 완성하기 위해 밤낮으로 자료를 분석했다.', exampleTranslation: 'He analyzed data day and night to complete his master\'s thesis.',
  },
  {
    id: 'ko_c1_v002', language: lang, level, category: 'academia',
    word: '학위', translation: 'academic degree', partOfSpeech: 'noun',
    pronunciation: 'hak-wi',
    exampleSentence: '박사 학위를 취득한 후 그녀는 대학에서 강의를 시작했다.', exampleTranslation: 'After obtaining her doctoral degree, she began lecturing at the university.',
  },
  {
    id: 'ko_c1_v003', language: lang, level, category: 'academia',
    word: '교수', translation: 'professor', partOfSpeech: 'noun',
    pronunciation: 'gyo-su',
    exampleSentence: '담당 교수님께서 연구 방향에 대해 조언을 해 주셨다.', exampleTranslation: 'The supervising professor gave advice on the direction of the research.',
  },
  {
    id: 'ko_c1_v004', language: lang, level, category: 'academia',
    word: '연구소', translation: 'research institute', partOfSpeech: 'noun',
    pronunciation: 'yeon-gu-so',
    exampleSentence: '국립 연구소에서 인공지능 관련 대규모 프로젝트를 진행하고 있다.', exampleTranslation: 'The national research institute is carrying out a large-scale project related to artificial intelligence.',
  },
  {
    id: 'ko_c1_v005', language: lang, level, category: 'academia',
    word: '학술', translation: 'academic / scholarly', partOfSpeech: 'noun',
    pronunciation: 'hak-sul',
    exampleSentence: '이번 학술 대회에서는 최신 연구 동향이 발표될 예정이다.', exampleTranslation: 'The latest research trends are expected to be presented at this academic conference.',
  },
  {
    id: 'ko_c1_v006', language: lang, level, category: 'academia',
    word: '분석', translation: 'analysis', partOfSpeech: 'noun',
    pronunciation: 'bun-seok',
    exampleSentence: '수집된 데이터에 대한 심층 분석이 연구의 핵심이었다.', exampleTranslation: 'An in-depth analysis of the collected data was the core of the research.',
  },
  {
    id: 'ko_c1_v007', language: lang, level, category: 'academia',
    word: '가설', translation: 'hypothesis', partOfSpeech: 'noun',
    pronunciation: 'ga-seol',
    exampleSentence: '실험 결과가 기존의 가설을 뒷받침하지 못했다.', exampleTranslation: 'The experimental results did not support the existing hypothesis.',
  },
  {
    id: 'ko_c1_v008', language: lang, level, category: 'academia',
    word: '방법론', translation: 'methodology', partOfSpeech: 'noun',
    pronunciation: 'bang-beom-non',
    exampleSentence: '질적 연구 방법론을 적용하여 심층 면접을 실시했다.', exampleTranslation: 'In-depth interviews were conducted by applying a qualitative research methodology.',
  },
];

// ── Law ─────────────────────────────────────────────────────────

const law: VocabWord[] = [
  {
    id: 'ko_c1_v009', language: lang, level, category: 'law',
    word: '법원', translation: 'court (of law)', partOfSpeech: 'noun',
    pronunciation: 'beo-won',
    exampleSentence: '대법원은 하급심의 판결을 파기하고 사건을 환송했다.', exampleTranslation: 'The Supreme Court overturned the lower court\'s ruling and remanded the case.',
  },
  {
    id: 'ko_c1_v010', language: lang, level, category: 'law',
    word: '재판', translation: 'trial', partOfSpeech: 'noun',
    pronunciation: 'jae-pan',
    exampleSentence: '재판 과정에서 새로운 증거가 제출되어 쟁점이 달라졌다.', exampleTranslation: 'New evidence was submitted during the trial, changing the issues at stake.',
  },
  {
    id: 'ko_c1_v011', language: lang, level, category: 'law',
    word: '판결', translation: 'verdict / ruling', partOfSpeech: 'noun',
    pronunciation: 'pan-gyeol',
    exampleSentence: '이번 판결은 향후 유사 사건의 선례가 될 것으로 보인다.', exampleTranslation: 'This ruling is expected to set a precedent for similar future cases.',
  },
  {
    id: 'ko_c1_v012', language: lang, level, category: 'law',
    word: '변호', translation: 'defense (legal)', partOfSpeech: 'noun',
    pronunciation: 'byeon-ho',
    exampleSentence: '변호인은 피고인의 무죄를 주장하며 적극적으로 변호에 나섰다.', exampleTranslation: 'The defense attorney actively took up the defense, asserting the defendant\'s innocence.',
  },
  {
    id: 'ko_c1_v013', language: lang, level, category: 'law',
    word: '소송', translation: 'lawsuit / litigation', partOfSpeech: 'noun',
    pronunciation: 'so-song',
    exampleSentence: '소비자 단체가 대기업을 상대로 집단 소송을 제기했다.', exampleTranslation: 'A consumer group filed a class-action lawsuit against the large corporation.',
  },
  {
    id: 'ko_c1_v014', language: lang, level, category: 'law',
    word: '헌법', translation: 'constitution', partOfSpeech: 'noun',
    pronunciation: 'heon-beop',
    exampleSentence: '헌법재판소는 해당 법률이 헌법에 위배된다고 결정했다.', exampleTranslation: 'The Constitutional Court decided that the law in question violated the constitution.',
  },
  {
    id: 'ko_c1_v015', language: lang, level, category: 'law',
    word: '권리', translation: 'right (legal/moral)', partOfSpeech: 'noun',
    pronunciation: 'gwon-ni',
    exampleSentence: '모든 시민은 법 앞에서 평등한 권리를 보장받아야 한다.', exampleTranslation: 'All citizens must be guaranteed equal rights before the law.',
  },
  {
    id: 'ko_c1_v016', language: lang, level, category: 'law',
    word: '의무', translation: 'duty / obligation', partOfSpeech: 'noun',
    pronunciation: 'ui-mu',
    exampleSentence: '납세는 국민으로서 당연히 이행해야 할 의무이다.', exampleTranslation: 'Paying taxes is a duty that must naturally be fulfilled as a citizen.',
  },
];

// ── Economics ───────────────────────────────────────────────────

const economics: VocabWord[] = [
  {
    id: 'ko_c1_v017', language: lang, level, category: 'economics',
    word: '경기', translation: 'economic conditions / business cycle', partOfSpeech: 'noun',
    pronunciation: 'gyeong-gi',
    exampleSentence: '경기 침체가 장기화되면서 실업률이 급격히 상승했다.', exampleTranslation: 'As the economic recession prolonged, the unemployment rate rose sharply.',
  },
  {
    id: 'ko_c1_v018', language: lang, level, category: 'economics',
    word: '물가', translation: 'prices (commodity)', partOfSpeech: 'noun',
    pronunciation: 'mul-ga',
    exampleSentence: '원자재 가격 상승으로 인해 물가가 전반적으로 올랐다.', exampleTranslation: 'Prices rose across the board due to increases in raw material costs.',
  },
  {
    id: 'ko_c1_v019', language: lang, level, category: 'economics',
    word: '인플레이션', translation: 'inflation', partOfSpeech: 'noun',
    pronunciation: 'in-peul-le-i-syeon',
    exampleSentence: '중앙은행은 인플레이션을 억제하기 위해 긴축 통화 정책을 시행했다.', exampleTranslation: 'The central bank implemented a tight monetary policy to curb inflation.',
  },
  {
    id: 'ko_c1_v020', language: lang, level, category: 'economics',
    word: '금리', translation: 'interest rate', partOfSpeech: 'noun',
    pronunciation: 'geum-ni',
    exampleSentence: '금리 인상이 부동산 시장에 미치는 영향에 대한 우려가 커지고 있다.', exampleTranslation: 'Concerns are growing about the impact of interest rate hikes on the real estate market.',
  },
  {
    id: 'ko_c1_v021', language: lang, level, category: 'economics',
    word: '주식', translation: 'stock / shares', partOfSpeech: 'noun',
    pronunciation: 'ju-sik',
    exampleSentence: '투자자들은 불확실한 경제 상황 속에서 주식 시장의 변동성에 주목하고 있다.', exampleTranslation: 'Investors are paying attention to stock market volatility amid uncertain economic conditions.',
  },
  {
    id: 'ko_c1_v022', language: lang, level, category: 'economics',
    word: '무역', translation: 'trade (international)', partOfSpeech: 'noun',
    pronunciation: 'mu-yeok',
    exampleSentence: '양국 간 무역 분쟁이 세계 경제에 파급 효과를 미쳤다.', exampleTranslation: 'The trade dispute between the two countries had ripple effects on the global economy.',
  },
  {
    id: 'ko_c1_v023', language: lang, level, category: 'economics',
    word: '수출', translation: 'export', partOfSpeech: 'noun',
    pronunciation: 'su-chul',
    exampleSentence: '반도체 수출이 국가 경제 성장을 견인하는 핵심 요인이다.', exampleTranslation: 'Semiconductor exports are a key factor driving the nation\'s economic growth.',
  },
  {
    id: 'ko_c1_v024', language: lang, level, category: 'economics',
    word: '불황', translation: 'recession / depression', partOfSpeech: 'noun',
    pronunciation: 'bul-hwang',
    exampleSentence: '장기 불황으로 인해 중소기업들이 연쇄적으로 도산했다.', exampleTranslation: 'Small and medium-sized enterprises went bankrupt one after another due to the prolonged recession.',
  },
];

// ── Philosophy ──────────────────────────────────────────────────

const philosophy: VocabWord[] = [
  {
    id: 'ko_c1_v025', language: lang, level, category: 'philosophy',
    word: '철학', translation: 'philosophy', partOfSpeech: 'noun',
    pronunciation: 'cheol-hak',
    exampleSentence: '서양 철학은 고대 그리스의 사유 전통에서 비롯되었다.', exampleTranslation: 'Western philosophy originated from the intellectual tradition of ancient Greece.',
  },
  {
    id: 'ko_c1_v026', language: lang, level, category: 'philosophy',
    word: '윤리', translation: 'ethics', partOfSpeech: 'noun',
    pronunciation: 'yul-li',
    exampleSentence: '생명 공학의 발전은 새로운 윤리적 문제를 제기하고 있다.', exampleTranslation: 'Advances in biotechnology are raising new ethical issues.',
  },
  {
    id: 'ko_c1_v027', language: lang, level, category: 'philosophy',
    word: '도덕', translation: 'morality / morals', partOfSpeech: 'noun',
    pronunciation: 'do-deok',
    exampleSentence: '도덕의 보편성에 대한 논쟁은 수세기 동안 이어져 왔다.', exampleTranslation: 'The debate over the universality of morality has continued for centuries.',
  },
  {
    id: 'ko_c1_v028', language: lang, level, category: 'philosophy',
    word: '가치관', translation: 'values / value system', partOfSpeech: 'noun',
    pronunciation: 'ga-chi-gwan',
    exampleSentence: '세대 간 가치관의 차이가 사회적 갈등의 원인이 되기도 한다.', exampleTranslation: 'Differences in values between generations can also be a cause of social conflict.',
  },
  {
    id: 'ko_c1_v029', language: lang, level, category: 'philosophy',
    word: '존재', translation: 'existence / being', partOfSpeech: 'noun',
    pronunciation: 'jon-jae',
    exampleSentence: '하이데거는 존재의 의미를 재정립하기 위해 새로운 철학적 틀을 제시했다.', exampleTranslation: 'Heidegger proposed a new philosophical framework to redefine the meaning of existence.',
  },
  {
    id: 'ko_c1_v030', language: lang, level, category: 'philosophy',
    word: '의식', translation: 'consciousness', partOfSpeech: 'noun',
    pronunciation: 'ui-sik',
    exampleSentence: '인간의 의식이 물질적 뇌에서 어떻게 발생하는지는 여전히 미해결 문제이다.', exampleTranslation: 'How human consciousness arises from the material brain remains an unsolved problem.',
  },
  {
    id: 'ko_c1_v031', language: lang, level, category: 'philosophy',
    word: '자유의지', translation: 'free will', partOfSpeech: 'noun',
    pronunciation: 'ja-yu-ui-ji',
    exampleSentence: '결정론적 세계관 속에서 자유의지의 존재 여부는 끊임없이 논의되어 왔다.', exampleTranslation: 'The existence of free will within a deterministic worldview has been endlessly debated.',
  },
  {
    id: 'ko_c1_v032', language: lang, level, category: 'philosophy',
    word: '이성', translation: 'reason / rationality', partOfSpeech: 'noun',
    pronunciation: 'i-seong',
    exampleSentence: '칸트는 이성의 한계를 규명함으로써 근대 인식론의 토대를 마련했다.', exampleTranslation: 'Kant laid the foundation of modern epistemology by delineating the limits of reason.',
  },
];

// ── Literature ──────────────────────────────────────────────────

const literature: VocabWord[] = [
  {
    id: 'ko_c1_v033', language: lang, level, category: 'literature',
    word: '문학', translation: 'literature', partOfSpeech: 'noun',
    pronunciation: 'mun-hak',
    exampleSentence: '한국 문학은 근대화 과정에서 사회적 현실을 날카롭게 반영해 왔다.', exampleTranslation: 'Korean literature has sharply reflected social realities throughout the modernization process.',
  },
  {
    id: 'ko_c1_v034', language: lang, level, category: 'literature',
    word: '시', translation: 'poetry / poem', partOfSpeech: 'noun',
    pronunciation: 'si',
    exampleSentence: '그의 시는 압축된 언어 속에 깊은 서정성을 담고 있다.', exampleTranslation: 'His poetry contains deep lyricism within compressed language.',
  },
  {
    id: 'ko_c1_v035', language: lang, level, category: 'literature',
    word: '산문', translation: 'prose', partOfSpeech: 'noun',
    pronunciation: 'san-mun',
    exampleSentence: '이 작가는 시보다는 산문에서 자신의 문학적 역량을 발휘한다.', exampleTranslation: 'This author demonstrates literary prowess more in prose than in poetry.',
  },
  {
    id: 'ko_c1_v036', language: lang, level, category: 'literature',
    word: '비유', translation: 'figurative expression / analogy', partOfSpeech: 'noun',
    pronunciation: 'bi-yu',
    exampleSentence: '작가는 전쟁의 참상을 비유적으로 표현하여 독자에게 강렬한 인상을 남겼다.', exampleTranslation: 'The author figuratively expressed the horrors of war, leaving a powerful impression on readers.',
  },
  {
    id: 'ko_c1_v037', language: lang, level, category: 'literature',
    word: '은유', translation: 'metaphor', partOfSpeech: 'noun',
    pronunciation: 'eun-yu',
    exampleSentence: '이 소설에서는 바다가 자유에 대한 은유로 사용되고 있다.', exampleTranslation: 'In this novel, the sea is used as a metaphor for freedom.',
  },
  {
    id: 'ko_c1_v038', language: lang, level, category: 'literature',
    word: '서사', translation: 'narrative / epic', partOfSpeech: 'noun',
    pronunciation: 'seo-sa',
    exampleSentence: '이 작품의 서사 구조는 비선형적이어서 독자에게 독특한 경험을 제공한다.', exampleTranslation: 'The narrative structure of this work is non-linear, offering readers a unique experience.',
  },
  {
    id: 'ko_c1_v039', language: lang, level, category: 'literature',
    word: '주제', translation: 'theme / subject', partOfSpeech: 'noun',
    pronunciation: 'ju-je',
    exampleSentence: '작품의 주제를 파악하기 위해서는 텍스트의 맥락을 면밀히 살펴야 한다.', exampleTranslation: 'To grasp the theme of a work, one must carefully examine the context of the text.',
  },
  {
    id: 'ko_c1_v040', language: lang, level, category: 'literature',
    word: '해석', translation: 'interpretation', partOfSpeech: 'noun',
    pronunciation: 'hae-seok',
    exampleSentence: '동일한 텍스트에 대해 비평가마다 상이한 해석을 내놓는 것은 자연스러운 일이다.', exampleTranslation: 'It is natural for different critics to offer differing interpretations of the same text.',
  },
];

// ── Advanced Emotions ───────────────────────────────────────────

const advancedEmotions: VocabWord[] = [
  {
    id: 'ko_c1_v041', language: lang, level, category: 'advanced_emotions',
    word: '비통', translation: 'grief / bitter sorrow', partOfSpeech: 'noun',
    pronunciation: 'bi-tong',
    exampleSentence: '전쟁으로 가족을 잃은 이들의 비통함은 이루 말할 수 없었다.', exampleTranslation: 'The grief of those who lost their families to war was beyond words.',
  },
  {
    id: 'ko_c1_v042', language: lang, level, category: 'advanced_emotions',
    word: '경외', translation: 'awe / reverence', partOfSpeech: 'noun',
    pronunciation: 'gyeong-oe',
    exampleSentence: '광활한 자연 앞에 서면 누구나 경외심을 느끼게 된다.', exampleTranslation: 'Standing before vast nature, anyone feels a sense of awe.',
  },
  {
    id: 'ko_c1_v043', language: lang, level, category: 'advanced_emotions',
    word: '체념', translation: 'resignation / acceptance of fate', partOfSpeech: 'noun',
    pronunciation: 'che-nyeom',
    exampleSentence: '그녀는 오랜 투병 끝에 체념이 아닌 초연함으로 삶을 마주했다.', exampleTranslation: 'After a long battle with illness, she faced life not with resignation but with detachment.',
  },
  {
    id: 'ko_c1_v044', language: lang, level, category: 'advanced_emotions',
    word: '환희', translation: 'ecstasy / great joy', partOfSpeech: 'noun',
    pronunciation: 'hwan-hui',
    exampleSentence: '우승이 확정되는 순간 선수들은 환희에 찬 함성을 질렀다.', exampleTranslation: 'The moment the championship was confirmed, the players burst into cries of ecstasy.',
  },
  {
    id: 'ko_c1_v045', language: lang, level, category: 'advanced_emotions',
    word: '연민', translation: 'compassion / pity', partOfSpeech: 'noun',
    pronunciation: 'yeon-min',
    exampleSentence: '타인의 고통에 연민을 느끼는 것은 인간 본성의 중요한 부분이다.', exampleTranslation: 'Feeling compassion for the suffering of others is an important part of human nature.',
  },
  {
    id: 'ko_c1_v046', language: lang, level, category: 'advanced_emotions',
    word: '회의', translation: 'skepticism / doubt', partOfSpeech: 'noun',
    pronunciation: 'hoe-ui',
    exampleSentence: '반복되는 실패 속에서 그는 자신의 능력에 대한 깊은 회의에 빠졌다.', exampleTranslation: 'Amid repeated failures, he fell into deep skepticism about his own abilities.',
  },
  {
    id: 'ko_c1_v047', language: lang, level, category: 'advanced_emotions',
    word: '경멸', translation: 'contempt / scorn', partOfSpeech: 'noun',
    pronunciation: 'gyeong-myeol',
    exampleSentence: '그녀는 부정행위를 저지른 동료를 경멸의 눈초리로 바라보았다.', exampleTranslation: 'She looked at the colleague who committed fraud with a gaze of contempt.',
  },
  {
    id: 'ko_c1_v048', language: lang, level, category: 'advanced_emotions',
    word: '갈등', translation: 'conflict / inner turmoil', partOfSpeech: 'noun',
    pronunciation: 'gal-deung',
    exampleSentence: '이상과 현실 사이의 갈등은 청년들의 보편적인 고민이다.', exampleTranslation: 'The conflict between ideals and reality is a universal concern of young people.',
  },
  {
    id: 'ko_c1_v049', language: lang, level, category: 'advanced_emotions',
    word: '망연자실', translation: 'dumbfounded / at a total loss', partOfSpeech: 'noun',
    pronunciation: 'mang-yeon-ja-sil',
    exampleSentence: '갑작스러운 해고 통보에 그는 망연자실할 수밖에 없었다.', exampleTranslation: 'He could only stand dumbfounded at the sudden notice of dismissal.',
  },
  {
    id: 'ko_c1_v050', language: lang, level, category: 'advanced_emotions',
    word: '격분', translation: 'fury / intense indignation', partOfSpeech: 'noun',
    pronunciation: 'gyeok-bun',
    exampleSentence: '시민들은 정부의 은폐 사실이 드러나자 격분을 감추지 못했다.', exampleTranslation: 'Citizens could not hide their fury when the government\'s cover-up was revealed.',
  },
];

// ── Combined Export ─────────────────────────────────────────────

export const KOREAN_C1_VOCAB: VocabWord[] = [
  ...academia,
  ...law,
  ...economics,
  ...philosophy,
  ...literature,
  ...advancedEmotions,
];
