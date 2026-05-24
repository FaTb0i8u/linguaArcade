/**
 * Main tab navigator — Home, Lessons, Arcade, Pet, Profile.
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import type { MainTabParamList } from '../types';
import { Colors, FontSizes } from '../config/theme';
import { HomeScreen } from '../screens/home/HomeScreen';
import { LessonScreen } from '../screens/lessons/LessonScreen';
import { ArcadeNavigator } from './ArcadeNavigator';
import PetScreen from '../screens/pet/PetScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

const icons: Record<keyof MainTabParamList, string> = {
  Home: '🏠',
  Lessons: '📚',
  Arcade: '🕹️',
  Pet: '🐾',
  Profile: '👤',
};

export function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => (
          <Text style={{ fontSize: 22, opacity: focused ? 1 : 0.5 }}>{icons[route.name]}</Text>
        ),
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textLight,
        tabBarLabelStyle: { fontSize: FontSizes.xs, fontWeight: '600' },
        tabBarStyle: {
          backgroundColor: Colors.surface,
          borderTopColor: Colors.border,
          paddingTop: 4,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Lessons" component={LessonScreen} />
      <Tab.Screen name="Arcade" component={ArcadeNavigator} />
      <Tab.Screen name="Pet" component={PetScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
