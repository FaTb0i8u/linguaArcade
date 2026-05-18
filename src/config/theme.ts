/**
 * Design tokens for LinguaArcade.
 *
 * All colours, spacing, typography, and shadows live here so the
 * entire visual identity can be tweaked in one place.
 */

export const Colors = {
  // Brand
  primary: '#6C5CE7',       // vibrant purple — main CTA
  primaryLight: '#A29BFE',
  primaryDark: '#4A3CB5',

  // Accents
  accent: '#00CEC9',        // teal — secondary actions / success
  accentLight: '#81ECEC',
  warning: '#FDCB6E',       // gold — streaks, XP
  danger: '#E17055',        // red-orange — errors, health lost
  dangerDark: '#D63031',

  // Neutrals
  background: '#F8F9FA',
  surface: '#FFFFFF',
  surfaceAlt: '#F1F3F5',
  border: '#DEE2E6',
  textPrimary: '#212529',
  textSecondary: '#6C757D',
  textLight: '#ADB5BD',
  white: '#FFFFFF',
  black: '#000000',

  // Game-specific
  healthGreen: '#00B894',
  healthRed: '#E17055',
  xpGold: '#F9CA24',
  comboBlue: '#74B9FF',
  correctGreen: '#00B894',
  incorrectRed: '#E17055',
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const BorderRadius = {
  sm: 6,
  md: 12,
  lg: 20,
  xl: 28,
  full: 9999,
} as const;

export const FontSizes = {
  xs: 11,
  sm: 13,
  md: 15,
  lg: 18,
  xl: 22,
  xxl: 28,
  hero: 36,
} as const;

export const FontWeights = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
  black: '900' as const,
};

export const Shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
} as const;
