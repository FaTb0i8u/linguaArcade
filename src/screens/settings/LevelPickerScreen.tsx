/**
 * Level Picker Screen
 *
 * Lets the user choose their CEFR proficiency level.
 * Shows which levels have content available for the current language,
 * with descriptions so learners can self-assess.
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { confirmAlert, showAlert } from '../../utils/alert';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';
import { getAvailableLevels, getLanguageMeta } from '../../data/registry';
import { Colors, Spacing, FontSizes, FontWeights, BorderRadius, Shadows } from '../../config/theme';
import { Header } from '../../components/common/Header';
import type { CEFRLevel } from '../../types';

interface Props {
  onBack?: () => void;
}

/** Human-readable descriptions of each CEFR level for self-assessment. */
const LEVEL_INFO: Record<CEFRLevel, { label: string; description: string; emoji: string }> = {
  A1: {
    label: 'Beginner',
    description: 'I\'m just starting out. I know little to no words or phrases.',
    emoji: '🌱',
  },
  A2: {
    label: 'Elementary',
    description: 'I can understand basic sentences about familiar topics (family, shopping, local area).',
    emoji: '🌿',
  },
  B1: {
    label: 'Intermediate',
    description: 'I can deal with most everyday situations. I can describe experiences, events, and opinions.',
    emoji: '🌳',
  },
  B2: {
    label: 'Upper Intermediate',
    description: 'I can interact fluently with native speakers. I understand complex texts on concrete and abstract topics.',
    emoji: '🌲',
  },
  C1: {
    label: 'Advanced',
    description: 'I can express myself fluently and spontaneously. I understand demanding, longer texts.',
    emoji: '⛰️',
  },
  C2: {
    label: 'Proficient',
    description: 'I can understand virtually everything heard or read with ease.',
    emoji: '🏔️',
  },
};

const ALL_LEVELS: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export function LevelPickerScreen({ onBack }: Props) {
  const insets = useSafeAreaInsets();
  const { user, updateLevel } = useAuth();

  const currentLang = user?.currentLanguage ?? 'es';
  const currentLevel = user?.currentLevel ?? 'A1';
  const meta = getLanguageMeta(currentLang);
  const availableLevels = new Set(getAvailableLevels(currentLang));

  const handlePick = async (level: CEFRLevel) => {
    if (level === currentLevel) return;
    if (!availableLevels.has(level)) {
      showAlert(
        'Coming Soon',
        `${meta.name} ${level} content is not available yet. We're working on it!`,
      );
      return;
    }
    const confirmed = await confirmAlert(
      'Change Level',
      `Switch to ${level} (${LEVEL_INFO[level].label})? You can change this any time.`,
    );
    if (confirmed) {
      await updateLevel(level);
      onBack?.();
    }
  };

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      {onBack && <Header title="Choose Level" onBack={onBack} />}
      {!onBack && (
        <View style={styles.headerBlock}>
          <Text style={styles.heading}>📊 Choose Your Level</Text>
          <Text style={styles.desc}>Select the level that matches your current ability.</Text>
        </View>
      )}

      <ScrollView contentContainerStyle={styles.list}>
        <Text style={styles.langNote}>
          Showing levels for {meta.name} {meta.flag}
        </Text>

        {ALL_LEVELS.map((level) => {
          const info = LEVEL_INFO[level];
          const isActive = level === currentLevel;
          const isAvailable = availableLevels.has(level);

          return (
            <TouchableOpacity
              key={level}
              style={[
                styles.levelCard,
                isActive && styles.levelCardActive,
                !isAvailable && styles.levelCardDisabled,
              ]}
              onPress={() => handlePick(level)}
              activeOpacity={isAvailable ? 0.7 : 1}
              accessibilityRole="button"
              accessibilityLabel={`${level} ${info.label}`}
              accessibilityState={{ selected: isActive, disabled: !isAvailable }}
            >
              <Text style={styles.emoji}>{info.emoji}</Text>
              <View style={styles.levelInfo}>
                <View style={styles.levelHeader}>
                  <Text style={[
                    styles.levelCode,
                    isActive && styles.levelCodeActive,
                    !isAvailable && styles.levelCodeDisabled,
                  ]}>
                    {level}
                  </Text>
                  <Text style={[
                    styles.levelLabel,
                    !isAvailable && styles.levelLabelDisabled,
                  ]}>
                    {info.label}
                  </Text>
                </View>
                <Text style={[
                  styles.levelDesc,
                  !isAvailable && styles.levelDescDisabled,
                ]}>
                  {info.description}
                </Text>
              </View>
              {isActive && (
                <View style={styles.activeBadge}>
                  <Text style={styles.activeBadgeText}>Active</Text>
                </View>
              )}
              {!isAvailable && !isActive && (
                <Text style={styles.lockIcon}>🔒</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background },
  headerBlock: { padding: Spacing.md },
  heading: {
    fontSize: FontSizes.xxl,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  desc: { fontSize: FontSizes.md, color: Colors.textSecondary },
  list: { padding: Spacing.md, gap: Spacing.sm, paddingBottom: Spacing.xxl },
  langNote: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
    textAlign: 'center',
  },
  levelCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    borderWidth: 2,
    borderColor: Colors.border,
    ...Shadows.sm,
  },
  levelCardActive: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryLight ?? '#EEF2FF',
  },
  levelCardDisabled: {
    opacity: 0.5,
    backgroundColor: Colors.surfaceAlt,
  },
  emoji: { fontSize: 32, marginRight: Spacing.md },
  levelInfo: { flex: 1 },
  levelHeader: { flexDirection: 'row', alignItems: 'center', gap: Spacing.xs, marginBottom: 4 },
  levelCode: {
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
  },
  levelCodeActive: { color: Colors.primary },
  levelCodeDisabled: { color: Colors.textLight },
  levelLabel: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    fontWeight: FontWeights.medium,
  },
  levelLabelDisabled: { color: Colors.textLight },
  levelDesc: {
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
    lineHeight: 16,
  },
  levelDescDisabled: { color: Colors.textLight },
  activeBadge: {
    backgroundColor: Colors.primary,
    paddingVertical: 4,
    paddingHorizontal: Spacing.sm,
    borderRadius: BorderRadius.full,
  },
  activeBadgeText: {
    color: Colors.white,
    fontSize: FontSizes.xs,
    fontWeight: FontWeights.bold,
  },
  lockIcon: { fontSize: 20, marginLeft: Spacing.xs },
});
