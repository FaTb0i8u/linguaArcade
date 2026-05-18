/**
 * Fighter character sprite (simplified with emoji + animations).
 *
 * In v1 we use large emoji as stand-in characters.
 * A future version can swap these for Lottie or sprite-sheet animations.
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, FontSizes, FontWeights, Spacing, BorderRadius } from '../../config/theme';

type FighterAction = 'idle' | 'attack' | 'defend' | 'hurt' | 'victory' | 'defeat';

interface FighterCharacterProps {
  name: string;
  action: FighterAction;
  side: 'left' | 'right';
  isPlayer: boolean;
}

const actionEmojis: Record<FighterAction, string> = {
  idle: '🧍',
  attack: '👊',
  defend: '🛡️',
  hurt: '😵',
  victory: '🎉',
  defeat: '😢',
};

export function FighterCharacter({ name, action, side, isPlayer }: FighterCharacterProps) {
  const emoji = actionEmojis[action];
  const isFlipped = side === 'right';

  return (
    <View style={[styles.container, isFlipped && styles.flipped]}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={[styles.name, isPlayer && styles.playerName, isFlipped && styles.unflip]}>{name}</Text>
      {action !== 'idle' && (
        <View style={[styles.actionBadge, action === 'attack' && styles.attackBadge, action === 'hurt' && styles.hurtBadge, isFlipped && styles.unflip]}>
          <Text style={styles.actionText}>{action.toUpperCase()}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: Spacing.sm },
  flipped: { transform: [{ scaleX: -1 }] },
  emoji: { fontSize: 64 },
  name: {
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
    marginTop: Spacing.xs,
  },
  playerName: { color: Colors.primary },
  unflip: { transform: [{ scaleX: -1 }] },
  actionBadge: {
    marginTop: 4,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: BorderRadius.sm,
    backgroundColor: Colors.primaryLight,
  },
  attackBadge: { backgroundColor: Colors.danger },
  hurtBadge: { backgroundColor: Colors.warning },
  actionText: {
    fontSize: FontSizes.xs,
    fontWeight: FontWeights.bold,
    color: Colors.white,
  },
});
