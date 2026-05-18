/**
 * Reusable Button component with multiple variants.
 */

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Colors, BorderRadius, Spacing, FontSizes, FontWeights, Shadows } from '../../config/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: string; // emoji icon
}

export function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  style,
  textStyle,
  icon,
}: ButtonProps) {
  const containerStyles: ViewStyle[] = [
    styles.base,
    styles[`${variant}Container`],
    styles[`${size}Container`],
    disabled && styles.disabled,
    style as ViewStyle,
  ].filter(Boolean) as ViewStyle[];

  const labelStyles: TextStyle[] = [
    styles.label,
    styles[`${variant}Label`],
    styles[`${size}Label`],
    disabled && styles.disabledLabel,
    textStyle as TextStyle,
  ].filter(Boolean) as TextStyle[];

  return (
    <TouchableOpacity
      style={containerStyles}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityLabel={icon ? `${icon} ${title}` : title}
      accessibilityState={{ disabled: disabled || loading }}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? Colors.primary : Colors.white} />
      ) : (
        <Text style={labelStyles}>
          {icon ? `${icon}  ` : ''}{title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BorderRadius.md,
    ...Shadows.sm,
  },

  // Variants — containers
  primaryContainer: { backgroundColor: Colors.primary },
  secondaryContainer: { backgroundColor: Colors.accent },
  outlineContainer: { backgroundColor: 'transparent', borderWidth: 2, borderColor: Colors.primary },
  dangerContainer: { backgroundColor: Colors.danger },
  ghostContainer: { backgroundColor: 'transparent', shadowOpacity: 0, elevation: 0 },

  // Variants — labels
  primaryLabel: { color: Colors.white },
  secondaryLabel: { color: Colors.white },
  outlineLabel: { color: Colors.primary },
  dangerLabel: { color: Colors.white },
  ghostLabel: { color: Colors.primary },

  // Sizes — containers
  smContainer: { paddingVertical: Spacing.xs, paddingHorizontal: Spacing.md },
  mdContainer: { paddingVertical: Spacing.sm + 4, paddingHorizontal: Spacing.lg },
  lgContainer: { paddingVertical: Spacing.md, paddingHorizontal: Spacing.xl },

  // Sizes — labels
  smLabel: { fontSize: FontSizes.sm },
  mdLabel: { fontSize: FontSizes.md },
  lgLabel: { fontSize: FontSizes.lg },

  label: {
    fontWeight: FontWeights.semibold,
    textAlign: 'center',
  },

  disabled: { opacity: 0.5 },
  disabledLabel: { opacity: 0.7 },
});
