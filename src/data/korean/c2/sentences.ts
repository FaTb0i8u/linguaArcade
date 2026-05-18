/**
 * Korean C2 Sentence Patterns (TOPIK II Level 6 — Mastery)
 *
 * Covers: literary verb forms (-노라/-리라), strong concessives (-ㄹ지라도/-다 하더라도),
 * formal writing connectors, 사자성어 in context, nominalization (-음/-기),
 * advanced particle nuance.
 */

import type { SentencePattern } from '../../../types';

const lang = 'ko' as const;
const level = 'C2' as const;

export const KOREAN_C2_SENTENCES: SentencePattern[] = [
  // ── literary_forms: archaic endings (3) ──────────────────
  {
    id: 'ko_c2_s001', language: lang, level, category: 'literary_forms',
    words: ['나는', '오늘도', '이', '길을', '가노라'],
    translation: 'I walk this path again today. (literary declaration)',
    hint: '-노라: archaic declarative ending (해라체, literary prose/poetry)',
    distractors: ['간다', '가요', '갑니다'],
  },
  {
    id: 'ko_c2_s002', language: lang, level, category: 'literary_forms',
    words: ['진리는', '반드시', '승리하리라'],
    translation: 'Truth shall surely triumph.',
    hint: '-리라: literary future/volitional ending expressing resolve',
    distractors: ['승리한다', '승리할까', '승리해요'],
  },
  {
    id: 'ko_c2_s003', language: lang, level, category: 'literary_forms',
    words: ['산천이', '이리도', '아름답도다'],
    translation: 'How beautiful the mountains and rivers are!',
    hint: '-도다: literary exclamatory ending (admiration/emotion)',
    distractors: ['아름답다', '아름다워요', '아름답습니다'],
  },

  // ── concessive: -ㄹ지라도 / -다 하더라도 (3) ────────────
  {
    id: 'ko_c2_s004', language: lang, level, category: 'concessive',
    words: ['비록', '실패할지라도', '도전하는', '것', '자체에', '의미가', '있다'],
    translation: 'Even if one fails, there is meaning in the act of trying itself.',
    hint: '비록…-(으)ㄹ지라도: strong literary concessive — "even if"',
    distractors: ['실패하면', '실패해도', '실패하니까'],
  },
  {
    id: 'ko_c2_s005', language: lang, level, category: 'concessive',
    words: ['아무리', '바쁘다', '하더라도', '건강을', '소홀히', '해서는', '안', '된다'],
    translation: 'No matter how busy you are, you must not neglect your health.',
    hint: '-다 하더라도: "even if one says that…" — emphatic concessive',
    distractors: ['바빠서', '바쁘면', '바쁘니까'],
  },
  {
    id: 'ko_c2_s006', language: lang, level, category: 'concessive',
    words: ['세상이', '변할지언정', '진실의', '가치는', '영원하다'],
    translation: 'Even if the world changes, the value of truth is eternal.',
    hint: '-(으)ㄹ지언정: strongest literary concessive — "even if / rather than"',
    distractors: ['변하면', '변해도', '변하더라도'],
  },

  // ── formal_writing: academic connectors (3) ──────────────
  {
    id: 'ko_c2_s007', language: lang, level, category: 'formal_writing',
    words: ['상기한', '바와', '같이', '인구', '감소는', '노동력', '부족으로', '이어진다'],
    translation: 'As mentioned above, population decline leads to a labour shortage.',
    hint: '상기한 바와 같이: "as mentioned above" — formal writing reference',
    distractors: ['그래서', '그러면', '하지만'],
  },
  {
    id: 'ko_c2_s008', language: lang, level, category: 'formal_writing',
    words: ['요컨대', '이번', '연구는', '기존', '이론의', '한계를', '극복하는', '데', '기여할', '수', '있다'],
    translation: 'In short, this study can contribute to overcoming the limitations of existing theories.',
    hint: '요컨대: "in short / to sum up" — discourse summary connector',
    distractors: ['그러므로', '한편', '이를테면'],
  },
  {
    id: 'ko_c2_s009', language: lang, level, category: 'formal_writing',
    words: ['경제', '성장률은', '둔화되었다', '한편', '실업률은', '소폭', '감소했다'],
    translation: 'The economic growth rate slowed. Meanwhile, unemployment decreased slightly.',
    hint: '한편: "meanwhile / on the other hand" — shifts perspective',
    distractors: ['그러므로', '요컨대', '이에 따라'],
  },

  // ── four_char_idioms: 사자성어 in context (2) ────────────
  {
    id: 'ko_c2_s010', language: lang, level, category: 'four_char_idioms',
    words: ['이번', '정책은', '환경도', '보호하고', '경제도', '살리니', '일석이조라', '할', '수', '있다'],
    translation: 'This policy protects the environment and revives the economy — one could call it killing two birds with one stone.',
    hint: '일석이조 (一石二鳥): one stone, two birds — dual benefit',
    distractors: ['자업자득이라', '유비무환이라', '과유불급이라'],
  },
  {
    id: 'ko_c2_s011', language: lang, level, category: 'four_char_idioms',
    words: ['유비무환의', '자세로', '비상', '대책을', '미리', '마련해', '두어야', '한다'],
    translation: 'With a spirit of preparedness, we must put emergency measures in place in advance.',
    hint: '유비무환 (有備無患): preparedness prevents calamity',
    distractors: ['일석이조의', '자업자득의', '과유불급의'],
  },

  // ── nominalization: -음 / -기 (2) ────────────────────────
  {
    id: 'ko_c2_s012', language: lang, level, category: 'nominalization',
    words: ['그가', '거짓말을', '했음이', '명백하다'],
    translation: 'It is evident that he told a lie.',
    hint: '-음이 + adjective: nominalization with -음 for factual statement',
    distractors: ['했다고', '하기가', '한다면'],
  },
  {
    id: 'ko_c2_s013', language: lang, level, category: 'nominalization',
    words: ['이', '문제를', '해결하기', '위해', '다방면의', '노력이', '필요하다'],
    translation: 'Multifaceted efforts are needed in order to solve this problem.',
    hint: '-기 위해(서): "in order to" — nominalization with -기 for purpose',
    distractors: ['해결함에', '해결하면', '해결하니까'],
  },

  // ── particle_nuance: advanced particles (2) ──────────────
  {
    id: 'ko_c2_s014', language: lang, level, category: 'particle_nuance',
    words: ['이것이야말로', '우리가', '추구해야', '할', '진정한', '가치이다'],
    translation: 'This is truly the genuine value we should pursue.',
    hint: '(이)야말로: emphatic particle — "truly / precisely this"',
    distractors: ['이것은', '이것만', '이것도'],
  },
  {
    id: 'ko_c2_s015', language: lang, level, category: 'particle_nuance',
    words: ['그는', '자기', '이름조차', '쓸', '수', '없을', '만큼', '손을', '다쳤다'],
    translation: 'He injured his hand to the extent that he couldn\'t even write his own name.',
    hint: '조차: "even" — emphatically negative particle (stronger than 도)',
    distractors: ['이름까지', '이름만', '이름마저'],
  },
];
