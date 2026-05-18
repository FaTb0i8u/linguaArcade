/**
 * Home / Dashboard screen.
 *
 * Shows streak, XP, quick stats, and quick-access buttons
 * to lessons and the arcade.
 */

import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useProgress } from '../../context/ProgressContext';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { ProgressBar } from '../../components/common/ProgressBar';
import { Colors, Spacing, FontSizes, FontWeights, BorderRadius } from '../../config/theme';
import { LEVEL_THRESHOLDS } from '../../config/constants';
import { getRandomTip, getGreeting } from '../../data/registry';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import type { MainTabParamList } from '../../types';

export function HomeScreen() {
  const { user } = useAuth();
  const { progress, accuracy } = useProgress();
  const navigation = useNavigation<NavigationProp<MainTabParamList>>();

  const lang = user?.currentLanguage ?? 'es';
  // Memoize tip so it doesn't change on every re-render
  const tip = useMemo(() => getRandomTip(lang), [lang]);

  const displayName = user?.displayName ?? 'Learner';
  const xp = progress?.xp ?? 0;
  const streak = progress?.streak ?? 0;
  const wordsLearned = progress?.wordsLearned ?? 0;
  const gamesPlayed = progress?.gamesPlayed ?? 0;
  const lessonsCompleted = progress?.lessonsCompleted ?? 0;

  // Progress toward next level
  const currentLevel = user?.currentLevel ?? 'A1';
  const levels: Array<'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'> = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const currentIdx = levels.indexOf(currentLevel);
  const nextLevel = levels[currentIdx + 1] ?? 'C2';
  const currentThreshold = LEVEL_THRESHOLDS[currentLevel];
  const nextThreshold = LEVEL_THRESHOLDS[nextLevel];
  const levelProgress = nextThreshold > currentThreshold
    ? (wordsLearned - currentThreshold) / (nextThreshold - currentThreshold)
    : 1;

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      {/* Greeting */}
      <View style={styles.greeting}>
        <Text style={styles.hello}>{getGreeting(lang)}, {displayName}! 👋</Text>
        <Text style={styles.levelBadge}>{currentLevel}</Text>
      </View>

      {/* Streak & XP banner */}
      <Card variant="elevated" style={styles.statsBanner}>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statIcon}>🔥</Text>
            <Text style={styles.statNumber}>{streak}</Text>
            <Text style={styles.statLabel}>Streak</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statIcon}>⭐</Text>
            <Text style={styles.statNumber}>{xp}</Text>
            <Text style={styles.statLabel}>XP</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statIcon}>🎯</Text>
            <Text style={styles.statNumber}>{accuracy}%</Text>
            <Text style={styles.statLabel}>Accuracy</Text>
          </View>
        </View>
      </Card>

      {/* Level progress */}
      <Card style={styles.levelCard}>
        <Text style={styles.sectionTitle}>Progress to {nextLevel}</Text>
        <ProgressBar
          progress={levelProgress}
          color={Colors.primary}
          showLabel
          label={`${wordsLearned} / ${nextThreshold} words`}
        />
      </Card>

      {/* Quick stats */}
      <View style={styles.quickStats}>
        <Card style={styles.miniCard}>
          <Text style={styles.miniNumber}>{wordsLearned}</Text>
          <Text style={styles.miniLabel}>Words Learned</Text>
        </Card>
        <Card style={styles.miniCard}>
          <Text style={styles.miniNumber}>{lessonsCompleted}</Text>
          <Text style={styles.miniLabel}>Lessons Done</Text>
        </Card>
        <Card style={styles.miniCard}>
          <Text style={styles.miniNumber}>{gamesPlayed}</Text>
          <Text style={styles.miniLabel}>Games Played</Text>
        </Card>
      </View>

      {/* Quick access */}
      <Text style={styles.sectionTitle}>Quick Start</Text>
      <View style={styles.actions}>
        <Button
          title="Start Lesson"
          icon="📚"
          onPress={() => navigation.navigate('Lessons')}
          style={styles.actionBtn}
        />
        <Button
          title="Play Arcade"
          icon="🕹️"
          onPress={() => navigation.navigate('Arcade')}
          variant="secondary"
          style={styles.actionBtn}
        />
      </View>

      {/* Tip of the day */}
      <Card style={styles.tipCard}>
        <Text style={styles.tipTitle}>💡 Tip of the Day</Text>
        <Text style={styles.tipText}>{tip}</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.md, paddingBottom: Spacing.xxl },
  greeting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
    marginTop: Spacing.xl,
  },
  hello: {
    fontSize: FontSizes.xl,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
    flex: 1,
  },
  levelBadge: {
    fontSize: FontSizes.md,
    fontWeight: FontWeights.bold,
    color: Colors.white,
    backgroundColor: Colors.primary,
    paddingVertical: 4,
    paddingHorizontal: Spacing.sm,
    borderRadius: BorderRadius.sm,
    overflow: 'hidden',
  },
  statsBanner: {
    marginBottom: Spacing.md,
    backgroundColor: Colors.primary,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: { alignItems: 'center', flex: 1 },
  statDivider: { width: 1, height: 40, backgroundColor: 'rgba(255,255,255,0.3)' },
  statIcon: { fontSize: 20, marginBottom: 4 },
  statNumber: {
    fontSize: FontSizes.xl,
    fontWeight: FontWeights.bold,
    color: Colors.white,
  },
  statLabel: {
    fontSize: FontSizes.xs,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 2,
  },
  levelCard: { marginBottom: Spacing.md },
  sectionTitle: {
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.semibold,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  quickStats: {
    flexDirection: 'row',
    gap: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  miniCard: { flex: 1, alignItems: 'center' },
  miniNumber: {
    fontSize: FontSizes.xl,
    fontWeight: FontWeights.bold,
    color: Colors.primary,
  },
  miniLabel: {
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
    marginTop: 4,
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    gap: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  actionBtn: { flex: 1 },
  tipCard: {
    backgroundColor: '#FFF9E6',
    borderLeftWidth: 4,
    borderLeftColor: Colors.warning,
  },
  tipTitle: {
    fontSize: FontSizes.md,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  tipText: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
});
