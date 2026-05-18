/**
 * Arcade hub — game mode selection.
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ArcadeStackParamList } from '../../types';
import { GAME_MODES } from '../../config/constants';
import { getLanguageMeta } from '../../data/registry';
import { useAuth } from '../../context/AuthContext';
import { Colors, Spacing, FontSizes, FontWeights, BorderRadius, Shadows } from '../../config/theme';

type Props = NativeStackScreenProps<ArcadeStackParamList, 'ArcadeHome'>;

export function ArcadeScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { user } = useAuth();
  const meta = getLanguageMeta(user?.currentLanguage ?? 'es');

  const navigateToGame = (type: string) => {
    switch (type) {
      case 'vocab_blitz':
        navigation.navigate('VocabBlitz');
        break;
      case 'conjugation_fighter':
        navigation.navigate('ConjugationFighter');
        break;
      case 'sentence_builder':
        navigation.navigate('SentenceBuilder');
        break;
    }
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[styles.content, { paddingTop: insets.top + Spacing.md }]}
    >
      <Text style={styles.heading}>🕹️ Arcade</Text>
      <Text style={styles.desc}>Pick a game and level up your {meta.name}! {meta.flag}</Text>

      {GAME_MODES.map((mode) => (
        <TouchableOpacity
          key={mode.type}
          style={styles.gameCard}
          onPress={() => navigateToGame(mode.type)}
          activeOpacity={0.8}
        >
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>{mode.icon}</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.gameName}>{mode.name}</Text>
            <Text style={styles.gameDesc}>{mode.description}</Text>
            <View style={styles.badges}>
              {mode.contentTypes.map((ct) => (
                <View key={ct} style={styles.badge}>
                  <Text style={styles.badgeText}>{ct}</Text>
                </View>
              ))}
            </View>
          </View>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.md, paddingBottom: Spacing.xxl },
  heading: {
    fontSize: FontSizes.xxl,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  desc: { fontSize: FontSizes.md, color: Colors.textSecondary, marginBottom: Spacing.lg },
  gameCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    ...Shadows.md,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.primaryLight + '30',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  icon: { fontSize: 28 },
  cardBody: { flex: 1 },
  gameName: {
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  gameDesc: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
    lineHeight: 18,
  },
  badges: { flexDirection: 'row', gap: 6 },
  badge: {
    backgroundColor: Colors.primaryLight + '40',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: BorderRadius.sm,
  },
  badgeText: {
    fontSize: FontSizes.xs,
    color: Colors.primaryDark,
    fontWeight: FontWeights.medium,
  },
  arrow: {
    fontSize: 28,
    color: Colors.textLight,
    marginLeft: Spacing.sm,
  },
});
