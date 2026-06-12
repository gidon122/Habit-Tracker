import {
  Droplets,
  Dumbbell,
  Flame,
  Target,
  Apple,
  BookOpen,
  Heart,
  Moon,
  Pill,
  Brain,
  Coffee,
  Activity,
} from "lucide-react";
import Button from "../ui/button";

export default function HabitFormUI() {
  const icons = [
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
  ];

  const colors = [
    "#6366F1",
    "#3B82F6",
    "#14B8A6",
    "#22C55E",
    "#F59E0B",
    "#EF4444",
    "#EC4899",
    "#8B5CF6",
    "#14B8A6",
  ];

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border border-gray-100">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">New Habit</h2>

        <button className="rounded-md p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600">
          ✕
        </button>
      </div>

      {/* Habit Name */}
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Habit name
        </label>

        <input
          type="text"
          placeholder="e.g. Drink 2L of water"
          className="w-full rounded-xl border-2 border-amber-300 bg-white px-4 py-3 text-sm outline-none"
        />
      </div>

      {/* Description */}
      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Description
        </label>

        <textarea
          rows={3}
          placeholder="Why does this habit matter to you?"
          className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none"
        />
      </div>

      {/* Category & Frequency */}
      <div className="mb-5 grid grid-cols-2 gap-3">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Category
          </label>

          <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm outline-none">
            <option>Health</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Frequency
          </label>

          <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm outline-none">
            <option>Daily</option>
          </select>
        </div>
      </div>

      {/* Icons */}
      <div className="mb-6">
        <label className="mb-3 block text-sm font-medium text-gray-700">
          Icon
        </label>

        <div className="flex flex-wrap gap-2">
          {icons.map((Icon, index) => (
            <button
              key={index}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${
                index === 0
                  ? "border-amber-400 bg-amber-50 text-amber-500"
                  : "border-gray-200 bg-white text-gray-500"
              }`}
            >
              <Icon size={18} />
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="mb-8">
        <label className="mb-3 block text-sm font-medium text-gray-700">
          Color
        </label>

        <div className="flex flex-wrap gap-3">
          {colors.map((color, index) => (
            <button
              key={index}
              className={`h-8 w-8 rounded-full ${
                index === 0
                  ? "ring-2 ring-offset-2 ring-indigo-500"
                  : ""
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end gap-3">
        <button className="rounded-xl bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-200">
          Cancel
        </button>

          <Button>Create Habit</Button>
      </div>
    </div>
  );
}