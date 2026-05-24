/**
 * PetContext — manages the virtual pet's state, hunger decay, and feeding.
 *
 * The pet's hunger decays over real-world time (2 points per hour).
 * Users feed the pet by spending coins earned from lessons and games.
 */

import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { PET, FOOD_ITEMS, STORAGE_KEYS, PET_TYPES } from '../config/constants';
import { StorageService } from '../services/storage';
import type { PetState, PetTypeId, PetMood, FoodItemId } from '../types';

// ── Helpers ──────────────────────────────────────────────────────

/** Calculate hunger after time-based decay */
function calculateCurrentHunger(pet: PetState): number {
  const now = Date.now();
  const lastFed = new Date(pet.lastFedAt).getTime();
  const hoursElapsed = (now - lastFed) / (1000 * 60 * 60);
  const decay = Math.floor(hoursElapsed * PET.HUNGER_DECAY_PER_HOUR);
  return Math.max(0, pet.hunger - decay);
}

/** Determine mood from hunger level */
export function getMood(hunger: number): PetMood {
  if (hunger >= 80) return 'ecstatic';
  if (hunger >= 60) return 'happy';
  if (hunger >= 40) return 'content';
  if (hunger >= 20) return 'hungry';
  return 'starving';
}

/** Get the display state (emoji + label) for current hunger */
export function getHungerState(hunger: number) {
  const states = PET.HUNGER_STATES;
  for (const state of states) {
    if (hunger >= state.threshold) return state;
  }
  return states[states.length - 1];
}

// ── Context Types ────────────────────────────────────────────────

interface PetContextValue {
  pet: PetState | null;
  currentHunger: number;
  mood: PetMood;
  isLoading: boolean;
  hasPet: boolean;

  /** Adopt a new pet (first time) */
  adoptPet: (typeId: PetTypeId, name: string) => Promise<void>;

  /** Feed the pet — returns true if successful, false if insufficient coins */
  feedPet: (foodId: FoodItemId, spendCoins: (amount: number) => Promise<boolean>) => Promise<boolean>;

  /** Refresh state (e.g., when app foregrounds) */
  refresh: () => Promise<void>;
}

const PetContext = createContext<PetContextValue | undefined>(undefined);

// ── Provider ─────────────────────────────────────────────────────

export function PetProvider({ children }: { children: React.ReactNode }) {
  const [pet, setPet] = useState<PetState | null>(null);
  const [currentHunger, setCurrentHunger] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Persistence ──
  const savePet = useCallback(async (state: PetState) => {
    await StorageService.set(STORAGE_KEYS.PET_DATA, state);
  }, []);

  const loadPet = useCallback(async () => {
    setIsLoading(true);
    try {
      const saved = await StorageService.get<PetState>(STORAGE_KEYS.PET_DATA);
      if (saved) {
        setPet(saved);
        setCurrentHunger(calculateCurrentHunger(saved));
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  // ── Adoptions ──
  const adoptPet = useCallback(async (typeId: PetTypeId, name: string) => {
    const petType = PET_TYPES.find(p => p.id === typeId);
    const newPet: PetState = {
      id: `pet_${Date.now()}`,
      typeId,
      name: name || petType?.name || 'Pet',
      hunger: PET.MAX_HUNGER,
      lastFedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      totalFeedings: 0,
      adoptedDay: 0,
    };
    setPet(newPet);
    setCurrentHunger(PET.MAX_HUNGER);
    await savePet(newPet);
  }, [savePet]);

  // ── Feeding ──
  const feedPet = useCallback(async (
    foodId: FoodItemId,
    spendCoins: (amount: number) => Promise<boolean>,
  ): Promise<boolean> => {
    if (!pet) return false;

    const food = FOOD_ITEMS.find(f => f.id === foodId);
    if (!food) return false;

    // Attempt to spend coins
    const success = await spendCoins(food.cost);
    if (!success) return false;

    // Apply hunger restoration
    const hunger = calculateCurrentHunger(pet);
    const newHunger = Math.min(PET.MAX_HUNGER, hunger + food.hungerRestore);

    const updatedPet: PetState = {
      ...pet,
      hunger: newHunger,
      lastFedAt: new Date().toISOString(),
      totalFeedings: pet.totalFeedings + 1,
    };

    setPet(updatedPet);
    setCurrentHunger(newHunger);
    await savePet(updatedPet);
    return true;
  }, [pet, savePet]);

  // ── Hunger tick (update display every minute) ──
  useEffect(() => {
    if (!pet) return;

    const tick = () => setCurrentHunger(calculateCurrentHunger(pet));
    tick();

    timerRef.current = setInterval(tick, 60_000); // every minute
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [pet]);

  // ── Resume from background: recalculate hunger ──
  useEffect(() => {
    const handleAppState = (state: AppStateStatus) => {
      if (state === 'active' && pet) {
        setCurrentHunger(calculateCurrentHunger(pet));
      }
    };
    const sub = AppState.addEventListener('change', handleAppState);
    return () => sub.remove();
  }, [pet]);

  // ── Initial load ──
  useEffect(() => { loadPet(); }, [loadPet]);

  const refresh = loadPet;
  const mood = getMood(currentHunger);
  const hasPet = pet !== null;

  return (
    <PetContext.Provider
      value={{ pet, currentHunger, mood, isLoading, hasPet, adoptPet, feedPet, refresh }}
    >
      {children}
    </PetContext.Provider>
  );
}

// ── Hook ─────────────────────────────────────────────────────────

export function usePet() {
  const ctx = useContext(PetContext);
  if (!ctx) throw new Error('usePet must be used within PetProvider');
  return ctx;
}
