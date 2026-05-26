/**
 * PetScreen — the virtual pet dashboard.
 *
 * Shows the pet with animations based on mood, hunger bar,
 * a feed button, and quick access to the food shop.
 * If no pet is adopted yet, shows the adoption screen.
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Alert,
  ImageSourcePropType,
} from 'react-native';
import { usePet, getHungerState } from '../../context/PetContext';
import { useProgress } from '../../context/ProgressContext';
import { PET_TYPES, FOOD_ITEMS, PET } from '../../config/constants';
import { Colors, Spacing, BorderRadius, FontSizes, FontWeights, Shadows } from '../../config/theme';
import { ProgressBar } from '../../components/common/ProgressBar';
import type { PetTypeId, FoodItemId } from '../../types';

// ── Pet sprite map (hunger state → image) ────────────────────────
type HungerKey = 'full' | 'content' | 'hungry' | 'very-hungry' | 'starving';

const petSprites: Record<PetTypeId, Record<HungerKey, ImageSourcePropType>> = {
  cat: {
    full: require('../../../assets/pets/cat-full.png'),
    content: require('../../../assets/pets/cat-content.png'),
    hungry: require('../../../assets/pets/cat-hungry.png'),
    'very-hungry': require('../../../assets/pets/cat-very-hungry.png'),
    starving: require('../../../assets/pets/cat-starving.png'),
  },
  dog: {
    full: require('../../../assets/pets/dog-full.png'),
    content: require('../../../assets/pets/dog-content.png'),
    hungry: require('../../../assets/pets/dog-hungry.png'),
    'very-hungry': require('../../../assets/pets/dog-very-hungry.png'),
    starving: require('../../../assets/pets/dog-starving.png'),
  },
  rabbit: {
    full: require('../../../assets/pets/rabbit-full.png'),
    content: require('../../../assets/pets/rabbit-content.png'),
    hungry: require('../../../assets/pets/rabbit-hungry.png'),
    'very-hungry': require('../../../assets/pets/rabbit-very-hungry.png'),
    starving: require('../../../assets/pets/rabbit-starving.png'),
  },
  fox: {
    full: require('../../../assets/pets/fox-full.png'),
    content: require('../../../assets/pets/fox-content.png'),
    hungry: require('../../../assets/pets/fox-hungry.png'),
    'very-hungry': require('../../../assets/pets/fox-very-hungry.png'),
    starving: require('../../../assets/pets/fox-starving.png'),
  },
  panda: {
    full: require('../../../assets/pets/panda-full.png'),
    content: require('../../../assets/pets/panda-content.png'),
    hungry: require('../../../assets/pets/panda-hungry.png'),
    'very-hungry': require('../../../assets/pets/panda-very-hungry.png'),
    starving: require('../../../assets/pets/panda-starving.png'),
  },
};

/** Map mood to the sprite key */
function moodToSpriteKey(mood: string): HungerKey {
  switch (mood) {
    case 'ecstatic': return 'full';
    case 'happy': return 'full';
    case 'content': return 'content';
    case 'hungry': return 'hungry';
    case 'starving': return 'starving';
    default: return 'content';
  }
}

/** Get the hunger-state sprite key from the numeric hunger value */
function hungerToSpriteKey(hunger: number): HungerKey {
  if (hunger >= 80) return 'full';
  if (hunger >= 60) return 'content';
  if (hunger >= 40) return 'hungry';
  if (hunger >= 20) return 'very-hungry';
  return 'starving';
}

// ── Adoption Screen ──────────────────────────────────────────────

function AdoptionScreen({ onAdopt }: { onAdopt: (typeId: PetTypeId, name: string) => void }) {
  const [selected, setSelected] = useState<PetTypeId | null>(null);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.adoptContainer}>
      <Text style={styles.adoptTitle}>🐾 Adopt a Pet!</Text>
      <Text style={styles.adoptSubtitle}>
        Choose a companion to keep you company on your language learning journey.
        Take care of them by doing lessons and games to earn coins!
      </Text>

      <View style={styles.petGrid}>
        {PET_TYPES.map((pet) => (
          <TouchableOpacity
            key={pet.id}
            style={[
              styles.petOption,
              selected === pet.id && styles.petOptionSelected,
            ]}
            onPress={() => setSelected(pet.id as PetTypeId)}
          >
            <Image
              source={petSprites[pet.id as PetTypeId].full}
              style={styles.petOptionImage}
              resizeMode="contain"
            />
            <Text style={styles.petOptionName}>{pet.name}</Text>
            <Text style={styles.petOptionDesc}>{pet.description}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {selected && (
        <TouchableOpacity
          style={styles.adoptButton}
          onPress={() => {
            const pet = PET_TYPES.find(p => p.id === selected);
            onAdopt(selected, pet?.name ?? 'Pet');
          }}
        >
          <Text style={styles.adoptButtonText}>
            Adopt {PET_TYPES.find(p => p.id === selected)?.name}! 🎉
          </Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

// ── Main Pet Screen ──────────────────────────────────────────────

export default function PetScreen() {
  const { pet, currentHunger, mood, hasPet, adoptPet, feedPet } = usePet();
  const { progress, spendCoins } = useProgress();
  const [feedingAnimation] = useState(new Animated.Value(1));

  if (!hasPet) {
    return <AdoptionScreen onAdopt={adoptPet} />;
  }

  const petType = PET_TYPES.find(p => p.id === pet?.typeId);
  const hungerState = getHungerState(currentHunger);
  const coins = progress?.coins ?? 0;

  // Get the sprite for current hunger level
  const spriteKey = hungerToSpriteKey(currentHunger);
  const petImage = pet ? petSprites[pet.typeId]?.[spriteKey] : null;

  // Background color based on mood
  const getBgColor = () => {
    switch (mood) {
      case 'ecstatic': return '#E8F8F5';
      case 'happy': return '#EBF5FB';
      case 'content': return '#FEF9E7';
      case 'hungry': return '#FDEDEC';
      case 'starving': return '#F9EBEA';
    }
  };

  const handleFeed = async (foodId: FoodItemId) => {
    const food = FOOD_ITEMS.find(f => f.id === foodId);
    if (!food) return;

    if (coins < food.cost) {
      Alert.alert(
        'Not Enough Coins! 💰',
        `You need ${food.cost} coins but only have ${coins}.\n\nDo lessons or play games to earn more!`,
      );
      return;
    }

    if (currentHunger >= PET.MAX_HUNGER) {
      Alert.alert('Already Full! 😊', `${pet?.name} is already full and happy!`);
      return;
    }

    const success = await feedPet(foodId, spendCoins);
    if (success) {
      // Bounce animation
      Animated.sequence([
        Animated.timing(feedingAnimation, { toValue: 1.3, duration: 200, useNativeDriver: true }),
        Animated.timing(feedingAnimation, { toValue: 1, duration: 200, useNativeDriver: true }),
      ]).start();
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header with coins */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Pet</Text>
        <View style={styles.coinBadge}>
          <Text style={styles.coinEmoji}>🪙</Text>
          <Text style={styles.coinText}>{coins}</Text>
        </View>
      </View>

      {/* Pet display area */}
      <View style={[styles.petArea, { backgroundColor: getBgColor() }]}>
        <Animated.View style={{ transform: [{ scale: feedingAnimation }] }}>
          {petImage && (
            <Image source={petImage} style={styles.petImage} resizeMode="contain" />
          )}
        </Animated.View>
        <Text style={styles.petName}>{pet?.name}</Text>
        <Text style={styles.moodLabel}>{hungerState.emoji} {hungerState.label}</Text>
      </View>

      {/* Hunger bar */}
      <View style={styles.hungerSection}>
        <View style={styles.hungerHeader}>
          <Text style={styles.hungerLabel}>Hunger</Text>
          <Text style={styles.hungerValue}>{currentHunger}/{PET.MAX_HUNGER}</Text>
        </View>
        <ProgressBar
          progress={currentHunger / PET.MAX_HUNGER}
          color={currentHunger >= 60 ? Colors.healthGreen : currentHunger >= 30 ? Colors.warning : Colors.danger}
          height={12}
        />
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{pet?.totalFeedings ?? 0}</Text>
          <Text style={styles.statLabel}>Feedings</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{pet?.adoptedDay ?? 0}</Text>
          <Text style={styles.statLabel}>Days Together</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{progress?.streak ?? 0}🔥</Text>
          <Text style={styles.statLabel}>Streak</Text>
        </View>
      </View>

      {/* Food shop inline */}
      <Text style={styles.shopTitle}>🍽️ Feed {pet?.name}</Text>
      <View style={styles.foodGrid}>
        {FOOD_ITEMS.map((food) => {
          const canAfford = coins >= food.cost;
          return (
            <TouchableOpacity
              key={food.id}
              style={[styles.foodCard, !canAfford && styles.foodCardDisabled]}
              onPress={() => handleFeed(food.id as FoodItemId)}
              disabled={!canAfford}
            >
              <Text style={styles.foodEmoji}>{food.emoji}</Text>
              <Text style={styles.foodName}>{food.name}</Text>
              <Text style={styles.foodRestore}>+{food.hungerRestore} 🍖</Text>
              <View style={[styles.foodCost, !canAfford && styles.foodCostDisabled]}>
                <Text style={styles.foodCostText}>🪙 {food.cost}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Tip */}
      <View style={styles.tipBox}>
        <Text style={styles.tipText}>
          💡 Complete lessons and play arcade games to earn coins for {pet?.name}'s food!
        </Text>
      </View>
    </ScrollView>
  );
}

// ── Styles ───────────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: Spacing.md,
    paddingBottom: Spacing.xxl,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  headerTitle: {
    fontSize: FontSizes.xxl,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
  },
  coinBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.full,
    ...Shadows.sm,
  },
  coinEmoji: {
    fontSize: 18,
    marginRight: Spacing.xs,
  },
  coinText: {
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.bold,
    color: Colors.xpGold,
  },

  // Pet area
  petArea: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.xl,
    borderRadius: BorderRadius.lg,
    marginBottom: Spacing.lg,
    ...Shadows.sm,
  },
  petImage: {
    width: 150,
    height: 150,
    marginBottom: Spacing.sm,
  },
  petName: {
    fontSize: FontSizes.xl,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
  },
  moodLabel: {
    fontSize: FontSizes.md,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },

  // Hunger
  hungerSection: {
    marginBottom: Spacing.lg,
  },
  hungerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.xs,
  },
  hungerLabel: {
    fontSize: FontSizes.md,
    fontWeight: FontWeights.semibold,
    color: Colors.textPrimary,
  },
  hungerValue: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
  },

  // Stats
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.lg,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    marginHorizontal: Spacing.xs,
    borderRadius: BorderRadius.md,
    ...Shadows.sm,
  },
  statValue: {
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.bold,
    color: Colors.primary,
  },
  statLabel: {
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },

  // Shop
  shopTitle: {
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },
  foodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: Spacing.lg,
  },
  foodCard: {
    width: '48%',
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    marginBottom: Spacing.md,
    ...Shadows.sm,
  },
  foodCardDisabled: {
    opacity: 0.5,
  },
  foodEmoji: {
    fontSize: 32,
    marginBottom: Spacing.xs,
  },
  foodName: {
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.semibold,
    color: Colors.textPrimary,
  },
  foodRestore: {
    fontSize: FontSizes.xs,
    color: Colors.healthGreen,
    marginTop: 2,
  },
  foodCost: {
    marginTop: Spacing.sm,
    backgroundColor: Colors.primaryLight + '30',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.full,
  },
  foodCostDisabled: {
    backgroundColor: Colors.danger + '20',
  },
  foodCostText: {
    fontSize: FontSizes.xs,
    fontWeight: FontWeights.medium,
    color: Colors.textPrimary,
  },

  // Tip
  tipBox: {
    backgroundColor: Colors.primaryLight + '20',
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
  },
  tipText: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },

  // Adoption screen
  adoptContainer: {
    padding: Spacing.lg,
    alignItems: 'center',
  },
  adoptTitle: {
    fontSize: FontSizes.hero,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
    marginTop: Spacing.xl,
    marginBottom: Spacing.sm,
  },
  adoptSubtitle: {
    fontSize: FontSizes.md,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.xl,
    lineHeight: 22,
  },
  petGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: Spacing.lg,
  },
  petOption: {
    width: '45%',
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    margin: Spacing.sm,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    ...Shadows.sm,
  },
  petOptionSelected: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryLight + '15',
  },
  petOptionImage: {
    width: 80,
    height: 80,
    marginBottom: Spacing.sm,
  },
  petOptionName: {
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.semibold,
    color: Colors.textPrimary,
  },
  petOptionDesc: {
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 4,
  },
  adoptButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.full,
    ...Shadows.sm,
  },
  adoptButtonText: {
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.bold,
    color: Colors.white,
  },
});
