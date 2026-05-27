/**
 * Fighter character sprite — displays actual character art per action.
 *
 * Each character has 5 pose images in assets/fighters/{character}-{action}.png.
 * The component handles horizontal flipping for the right-side opponent.
 */

import React from 'react';
import { View, Image, Text, StyleSheet, ImageSourcePropType } from 'react-native';
import { Colors, FontSizes, FontWeights, Spacing, BorderRadius } from '../../config/theme';

export type FighterAction = 'idle' | 'attack' | 'defend' | 'hurt' | 'victory' | 'defeat';
export type FighterCharacterId = 'maiden' | 'assassin' | 'fighter' | 'rubber-chicken' | 'fried-chicken';

interface FighterCharacterProps {
  name: string;
  character: FighterCharacterId;
  action: FighterAction;
  side: 'left' | 'right';
  isPlayer: boolean;
}

// React Native requires static requires — map each character+action to its asset.
const sprites: Record<FighterCharacterId, Record<string, ImageSourcePropType>> = {
  maiden: {
    idle: require('../../../assets/fighters/maiden-idle.png'),
    attack: require('../../../assets/fighters/maiden-attack.png'),
    hurt: require('../../../assets/fighters/maiden-hurt.png'),
    victory: require('../../../assets/fighters/maiden-victory.png'),
    defeat: require('../../../assets/fighters/maiden-defeat.png'),
  },
  assassin: {
    idle: require('../../../assets/fighters/assassin-idle.png'),
    attack: require('../../../assets/fighters/assassin-attack.png'),
    hurt: require('../../../assets/fighters/assassin-hurt.png'),
    victory: require('../../../assets/fighters/assassin-victory.png'),
    defeat: require('../../../assets/fighters/assassin-defeat.png'),
  },
  fighter: {
    idle: require('../../../assets/fighters/fighter-idle.png'),
    attack: require('../../../assets/fighters/fighter-attack.png'),
    hurt: require('../../../assets/fighters/fighter-hurt.png'),
    victory: require('../../../assets/fighters/fighter-victory.png'),
    defeat: require('../../../assets/fighters/fighter-defeat.png'),
  },
  'rubber-chicken': {
    idle: require('../../../assets/fighters/rubber-chicken-idle.png'),
    attack: require('../../../assets/fighters/rubber-chicken-attack.png'),
    hurt: require('../../../assets/fighters/rubber-chicken-hurt.png'),
    victory: require('../../../assets/fighters/rubber-chicken-victory.png'),
    defeat: require('../../../assets/fighters/rubber-chicken-defeat.png'),
  },
  'fried-chicken': {
    idle: require('../../../assets/fighters/fried-chicken-idle.png'),
    attack: require('../../../assets/fighters/fried-chicken-attack.png'),
    hurt: require('../../../assets/fighters/fried-chicken-hurt.png'),
    victory: require('../../../assets/fighters/fried-chicken-victory.png'),
    defeat: require('../../../assets/fighters/fried-chicken-defeat.png'),
  },
};

export function FighterCharacter({ name, character, action, side, isPlayer }: FighterCharacterProps) {
  // "defend" doesn't have its own sprite — fall back to idle
  const spriteAction = action === 'defend' ? 'idle' : action;
  const source = sprites[character][spriteAction];
  const isFlipped = side === 'right';

  return (
    <View style={[styles.container, isFlipped && styles.flipped]}>
      <Image source={source} style={styles.sprite} resizeMode="contain" />
      <Text style={[styles.name, isPlayer && styles.playerName, isFlipped && styles.unflip]}>
        {name}
      </Text>
      {action !== 'idle' && (
        <View
          style={[
            styles.actionBadge,
            action === 'attack' && styles.attackBadge,
            action === 'hurt' && styles.hurtBadge,
            isFlipped && styles.unflip,
          ]}
        >
          <Text style={styles.actionText}>{action.toUpperCase()}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: Spacing.sm },
  flipped: { transform: [{ scaleX: -1 }] },
  sprite: { width: 150, height: 200 },
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
