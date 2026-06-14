export interface Habit {
  id: string;
  title: string;
  frequency: 'Daily';
  iconName: string; // Stored as a string key to allow safe local storage serialization
  color: string;    // HEX color value
  streak: number;
  completedDates: string[]; // Track absolute date strings (e.g., "2026-06-15") for completion history
}