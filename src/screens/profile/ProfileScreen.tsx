/**
 * Profile & stats screen.
 *
 * Shows the user's profile, cumulative stats, and a sign-out button.
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Platform } from 'react-native';
import { confirmAlert } from '../../utils/alert';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';
import { useProgress } from '../../context/ProgressContext';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { ProgressBar } from '../../components/common/ProgressBar';
import { Colors, Spacing, FontSizes, FontWeights, BorderRadius } from '../../config/theme';
import { LEVEL_THRESHOLDS } from '../../config/constants';
import { getLanguageMeta } from '../../data/registry';
import { LanguagePickerScreen } from '../settings/LanguagePickerScreen';
import { LevelPickerScreen } from '../settings/LevelPickerScreen';

export function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const { user, signOut } = useAuth();
  const { progress, accuracy } = useProgress();
  const [showLangPicker, setShowLangPicker] = useState(false);
  const [showLevelPicker, setShowLevelPicker] = useState(false);

  const displayName = user?.displayName ?? 'Learner';
  const email = user?.email ?? '';
  const currentLevel = user?.currentLevel ?? 'A1';
  const xp = progress?.xp ?? 0;
  const streak = progress?.streak ?? 0;
  const wordsLearned = progress?.wordsLearned ?? 0;
  const gamesPlayed = progress?.gamesPlayed ?? 0;
  const lessonsCompleted = progress?.lessonsCompleted ?? 0;
  const totalCorrect = progress?.totalCorrect ?? 0;
  const totalAttempts = progress?.totalAttempts ?? 0;

  const handleSignOut = async () => {
    const confirmed = await confirmAlert('Sign Out', 'Are you sure you want to sign out?');
    if (confirmed) {
      await signOut();
    }
  };

  // Show language picker as a full-screen overlay
  if (showLangPicker) {
    return <LanguagePickerScreen onBack={() => setShowLangPicker(false)} />;
  }

  // Show level picker as a full-screen overlay
  if (showLevelPicker) {
    return <LevelPickerScreen onBack={() => setShowLevelPicker(false)} />;
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[styles.content, { paddingTop: insets.top + Spacing.md }]}
    >
      {/* Avatar & Name */}
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {displayName.charAt(0).toUpperCase()}
          </Text>
        </View>
        <Text style={styles.name}>{displayName}</Text>
        <Text style={styles.email}>{email}</Text>
        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>Level {currentLevel}</Text>
        </View>
      </View>

      {/* Stats grid */}
      <Text style={styles.sectionTitle}>Your Stats</Text>
      <View style={styles.statsGrid}>
        <StatCard icon="⭐" value={xp.toLocaleString()} label="Total XP" />
        <StatCard icon="🔥" value={String(streak)} label="Day Streak" />
        <StatCard icon="📖" value={String(wordsLearned)} label="Words Learned" />
        <StatCard icon="🎯" value={`${accuracy}%`} label="Accuracy" />
        <StatCard icon="📚" value={String(lessonsCompleted)} label="Lessons" />
        <StatCard icon="🕹️" value={String(gamesPlayed)} label="Games Played" />
      </View>

      {/* Detailed stats */}
      <Card style={styles.detailCard}>
        <Text style={styles.detailTitle}>Detailed Performance</Text>
        <DetailRow label="Total Correct Answers" value={String(totalCorrect)} />
        <DetailRow label="Total Attempts" value={String(totalAttempts)} />
        <DetailRow label="Accuracy Rate" value={`${accuracy}%`} />
        <View style={{ marginTop: Spacing.sm }}>
          <ProgressBar
            progress={accuracy / 100}
            color={Colors.primary}
            showLabel
            label={`${accuracy}% overall accuracy`}
          />
        </View>
      </Card>

      {/* Language info */}
      <Card style={styles.detailCard}>
        <Text style={styles.detailTitle}>Language</Text>
        <DetailRow label="Currently Learning" value={`${getLanguageMeta(user?.currentLanguage ?? 'es').name} ${getLanguageMeta(user?.currentLanguage ?? 'es').flag}`} />
        <DetailRow label="CEFR Level" value={currentLevel} />
        <DetailRow label="Next Level" value={currentLevel === 'C2' ? 'Max!' : getNextLevel(currentLevel)} />
        <Button
          title="🌍 Change Language"
          onPress={() => setShowLangPicker(true)}
          variant="outline"
          style={{ marginTop: Spacing.sm }}
        />
        <Button
          title="📊 Change Level"
          onPress={() => setShowLevelPicker(true)}
          variant="outline"
          style={{ marginTop: Spacing.xs }}
        />
      </Card>

      {/* Sign out */}
      <Button
        title="Sign Out"
        onPress={handleSignOut}
        variant="danger"
        style={styles.signOutBtn}
      />
    </ScrollView>
  );
}

// ── Sub-components ────────────────────────────────────────────

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <Card style={styles.statCard}>
      <Text style={styles.statIcon}>{icon}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </Card>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
}

function getNextLevel(current: string): string {
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const idx = levels.indexOf(current);
  return levels[idx + 1] ?? 'C2';
}

// ── Styles ────────────────────────────────────────────────────

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.md, paddingBottom: Spacing.xxl },
  // Profile header
  profileHeader: { alignItems: 'center', marginBottom: Spacing.xl },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  avatarText: { fontSize: FontSizes.hero, color: Colors.white, fontWeight: FontWeights.bold },
  name: { fontSize: FontSizes.xl, fontWeight: FontWeights.bold, color: Colors.textPrimary },
  email: { fontSize: FontSizes.sm, color: Colors.textSecondary, marginTop: 2 },
  levelBadge: {
    marginTop: Spacing.sm,
    backgroundColor: Colors.primaryLight,
    paddingVertical: 4,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.full,
  },
  levelText: { color: Colors.primaryDark, fontWeight: FontWeights.semibold, fontSize: FontSizes.sm },
  // Stats
  sectionTitle: {
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.semibold,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  statCard: {
    width: '31%',
    alignItems: 'center',
    paddingVertical: Spacing.md,
  },
  statIcon: { fontSize: 24, marginBottom: 4 },
  statValue: { fontSize: FontSizes.lg, fontWeight: FontWeights.bold, color: Colors.primary },
  statLabel: { fontSize: FontSizes.xs, color: Colors.textSecondary, marginTop: 2, textAlign: 'center' },
  // Detail card
  detailCard: { marginBottom: Spacing.md },
  detailTitle: {
    fontSize: FontSizes.md,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: Colors.surfaceAlt,
  },
  detailLabel: { fontSize: FontSizes.sm, color: Colors.textSecondary },
  detailValue: { fontSize: FontSizes.sm, fontWeight: FontWeights.semibold, color: Colors.textPrimary },
  // Sign out
  signOutBtn: { marginTop: Spacing.md },
});
