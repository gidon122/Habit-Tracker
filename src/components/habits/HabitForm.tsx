import { useState, useEffect } from "react";
import { iconMap } from "../../utils/iconMapper";
import type { Habit } from "../../types/habit";
import Button from "../ui/Button";

interface HabitFormUIProps {
  initialHabit?: Habit;
  onSave: (habitData: { title: string; frequency: 'Daily'; iconName: string; color: string }) => void;
  onClose: () => void;
}

const colors = [
  "#6366F1", "#3B82F6", "#14B8A6", "#22C55E", 
  "#F59E0B", "#EF4444", "#EC4899", "#8B5CF6"
];

export default function HabitFormUI({ initialHabit, onSave, onClose }: HabitFormUIProps) {
  const [title, setTitle] = useState("");
  const [iconName, setIconName] = useState("Dumbbell");
  const [color, setColor] = useState("#6366F1");

  // Load configuration safely when mounting as an editing wizard
  useEffect(() => {
    if (initialHabit) {
      setTitle(initialHabit.title);
      setIconName(initialHabit.iconName);
      setColor(initialHabit.color);
    }
  }, [initialHabit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSave({ title, frequency: 'Daily', iconName, color });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border border-gray-100">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            {initialHabit ? "Edit Habit" : "New Habit"}
          </h2>
          <button 
            onClick={onClose}
            type="button" 
            className="rounded-md p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Habit Name */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-700">Habit name</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Drink 2L of water"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              required
            />
          </div>

          {/* Frequency */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">Frequency</label>
            <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm outline-none">
              <option>Daily</option>
            </select>
          </div>

          {/* Icons Grid Mapping */}
          <div className="mb-6">
            <label className="mb-3 block text-sm font-medium text-gray-700">Icon</label>
            <div className="grid grid-cols-6 gap-2 max-h-32 overflow-y-auto p-1 border border-gray-100 rounded-xl">
              {Object.keys(iconMap).map((name) => {
                const IconComponent = iconMap[name];
                const isSelected = iconName === name;
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setIconName(name)}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${
                      isSelected
                        ? "border-purple-500 bg-purple-50 text-purple-600 font-bold"
                        : "border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    <IconComponent size={18} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Colors Selection Palette */}
          <div className="mb-8">
            <label className="mb-3 block text-sm font-medium text-gray-700">Color</label>
            <div className="flex flex-wrap gap-3">
              {colors.map((c) => {
                const isSelected = color === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setColor(c)}
                    className={`h-8 w-8 rounded-full transition-transform ${
                      isSelected ? "ring-2 ring-offset-2 ring-purple-600 scale-110" : "hover:scale-105"
                    }`}
                    style={{ backgroundColor: c }}
                  />
                );
              })}
            </div>
          </div>

          {/* Form Actions Footer */}
          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
            >
              Cancel
            </button>
            <Button type="submit">
              {initialHabit ? "Save Changes" : "Create Habit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}