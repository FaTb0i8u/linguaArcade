/**
 * Arcade sub-stack — game mode selection + individual games.
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { ArcadeStackParamList } from '../types';
import { ArcadeScreen } from '../screens/arcade/ArcadeScreen';
import { VocabBlitzScreen } from '../screens/arcade/VocabBlitzScreen';
import { ConjugationFighterScreen } from '../screens/arcade/ConjugationFighterScreen';
import { SentenceBuilderScreen } from '../screens/arcade/SentenceBuilderScreen';

const Stack = createNativeStackNavigator<ArcadeStackParamList>();

export function ArcadeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ArcadeHome" component={ArcadeScreen} />
      <Stack.Screen name="VocabBlitz" component={VocabBlitzScreen} />
      <Stack.Screen name="ConjugationFighter" component={ConjugationFighterScreen} />
      <Stack.Screen name="SentenceBuilder" component={SentenceBuilderScreen} />
    </Stack.Navigator>
  );
}
