/**
 * Language Picker Screen
 *
 * Lets the user choose which language to study.
 * Shows all registered language packs with metadata (flag, name, native name).
 * The current language is highlighted. Selecting a new language updates
 * the user profile immediately.
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { confirmAlert } from '../../utils/alert';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';
import { getAvailableLanguages, getLanguageMeta } from '../../data/registry';
import { Colors, Spacing, FontSizes, FontWeights, BorderRadius, Shadows } from '../../config/theme';
import { Header } from '../../components/common/Header';
import type { SupportedLanguage } from '../../types';

interface Props {
  onBack?: () => void;
}

export function LanguagePickerScreen({ onBack }: Props) {
  const insets = useSafeAreaInsets();
  const { user, updateLanguage } = useAuth();

  const currentLang = user?.currentLanguage ?? 'es';
  const languages = getAvailableLanguages();

  const handlePick = async (lang: SupportedLanguage) => {
    if (lang === currentLang) return;
    const confirmed = await confirmAlert(
      'Switch Language',
      `Switch to ${getLanguageMeta(lang).name}? Your progress is saved per language.`,
    );
    if (confirmed) {
      await updateLanguage(lang);
    }
  };

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      {onBack && <Header title="Choose Language" onBack={onBack} />}
      {!onBack && (
        <View style={styles.headerBlock}>
          <Text style={styles.heading}>🌍 Choose Your Language</Text>
          <Text style={styles.desc}>Pick a language to start learning. You can switch at any time.</Text>
        </View>
      )}

      <ScrollView contentContainerStyle={styles.list}>
        {languages.map((code) => {
          const meta = getLanguageMeta(code);
          const isActive = code === currentLang;
          return (
            <TouchableOpacity
              key={code}
              style={[styles.langCard, isActive && styles.langCardActive]}
              onPress={() => handlePick(code)}
              activeOpacity={0.7}
              accessibilityRole="button"
              accessibilityLabel={`${meta.name}, ${meta.nativeName}`}
              accessibilityState={{ selected: isActive }}
            >
              <Text style={styles.flag}>{meta.flag}</Text>
              <View style={styles.langInfo}>
                <Text style={[styles.langName, isActive && styles.langNameActive]}>
                  {meta.name}
                </Text>
                <Text style={styles.langNative}>{meta.nativeName}</Text>
              </View>
              {isActive && (
                <View style={styles.activeBadge}>
                  <Text style={styles.activeBadgeText}>Active</Text>
                </View>
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
  langCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    borderWidth: 2,
    borderColor: Colors.border,
    ...Shadows.sm,
  },
  langCardActive: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryLight ?? '#EEF2FF',
  },
  flag: { fontSize: 40, marginRight: Spacing.md },
  langInfo: { flex: 1 },
  langName: {
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
  },
  langNameActive: { color: Colors.primary },
  langNative: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    marginTop: 2,
  },
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
});
