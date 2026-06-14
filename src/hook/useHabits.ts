import { useState, useEffect } from 'react';
import type { Habit } from '../types/habit';

export function useHabits() {
  const [habits, setHabits] = useState<Habit[]>([]);

  // Initialize habits from LocalStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('habit_forge_habits');
    if (stored) {
      try {
        setHabits(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse habits data", e);
      }
    } else {
      // Seed default items if empty to populate the initial UI nicely
      const defaultHabits: Habit[] = [
        { id: '1', title: 'Morning run – 30 min', frequency: 'Daily', iconName: 'PersonStanding', color: '#22C55E', streak: 14, completedDates: [new Date().toISOString().split('T')[0]] },
        { id: '2', title: 'Read 20 pages', frequency: 'Daily', iconName: 'BookOpen', color: '#8B5CF6', streak: 7, completedDates: [new Date().toISOString().split('T')[0]] },
        { id: '3', title: 'Drink 8 glasses of water', frequency: 'Daily', iconName: 'Droplets', color: '#14B8A6', streak: 21, completedDates: [new Date().toISOString().split('T')[0]] },
        { id: '4', title: 'Evening meditation', frequency: 'Daily', iconName: 'Sparkles', color: '#EC4899', streak: 5, completedDates: [] },
      ];
      setHabits(defaultHabits);
      localStorage.setItem('habit_forge_habits', JSON.stringify(defaultHabits));
    }
  }, []);

  // Sync state modifications to LocalStorage automatically
  const saveHabits = (updatedHabits: Habit[]) => {
    setHabits(updatedHabits);
    localStorage.setItem('habit_forge_habits', JSON.stringify(updatedHabits));
  };

  const addHabit = (habit: Omit<Habit, 'id' | 'streak' | 'completedDates'>) => {
    const newHabit: Habit = {
      ...habit,
      id: crypto.randomUUID(),
      streak: 0,
      completedDates: []
    };
    saveHabits([...habits, newHabit]);
  };

  const updateHabit = (id: string, updatedFields: Partial<Habit>) => {
    const updated = habits.map(h => h.id === id ? { ...h, ...updatedFields } : h);
    saveHabits(updated);
  };

  const deleteHabit = (id: string) => {
    const filtered = habits.filter(h => h.id !== id);
    saveHabits(filtered);
  };

  const toggleCompleteHabit = (id: string) => {
    const todayStr = new Date().toISOString().split('T')[0];
    const updated = habits.map(h => {
      if (h.id === id) {
        const isCompletedToday = h.completedDates.includes(todayStr);
        let newDates = [...h.completedDates];
        let newStreak = h.streak;

        if (isCompletedToday) {
          newDates = newDates.filter(d => d !== todayStr);
          newStreak = Math.max(0, newStreak - 1);
        } else {
          newDates.push(todayStr);
          newStreak += 1;
        }

        return { ...h, completedDates: newDates, streak: newStreak };
      }
      return h;
    });
    saveHabits(updated);
  };

  return { habits, addHabit, updateHabit, deleteHabit, toggleCompleteHabit };
}