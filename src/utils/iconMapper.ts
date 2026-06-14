import { 
  Droplets, Dumbbell, Flame, Target, Apple, BookOpen, 
  Heart, Moon, Pill, Brain, Coffee, Activity, PersonStanding, Sparkles, Smartphone, Pencil
} from "lucide-react";
import type React from 'react';

export const iconMap: Record<string, React.ElementType> = {
  Dumbbell,
  Activity,
  Flame,
  Droplets,
  Heart,
  Apple,
  BookOpen,
  Target,
  Brain,
  Pill,
  Moon,
  Coffee,
  PersonStanding,
  Sparkles,
  Smartphone,
  Pencil
};

export const iconList = Object.keys(iconMap);