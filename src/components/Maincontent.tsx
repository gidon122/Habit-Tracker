import { useState } from "react";
import { Check } from "lucide-react";
import { useHabits } from "../hook/useHabits";
import { iconMap } from "../utils/iconMapper";
import HabitFormUI from "./habits/HabitForm";
import Button from "./ui/Button";

interface StatCardProps {
  label: string;
  value: number;
  accent?: "default" | "green" | "violet";
}

interface HabitRowProps {
  id: string;
  iconName: string;
  name: string;
  completed: boolean;
  streak: number;
  color: string;
  onToggle: () => void;
}

function StatCard({ label, value, accent = "default" }: StatCardProps) {
  const valueColor = accent === "green" ? "text-emerald-600" : accent === "violet" ? "text-violet-600" : "text-zinc-900";
  const cardBg = accent === "green" ? "bg-emerald-50" : accent === "violet" ? "bg-violet-50" : "bg-zinc-50";
  const labelColor = accent === "green" ? "text-emerald-600" : accent === "violet" ? "text-violet-600" : "text-zinc-500";

  return (
    <div className={`flex-1 ${cardBg} rounded-xl px-4 py-3 flex flex-col gap-1`}>
      <span className={`text-xs font-medium uppercase tracking-widest ${labelColor}`}>{label}</span>
      <span className={`text-4xl font-bold tabular-nums ${valueColor}`}>{value}</span>
    </div>
  );
}

function HabitRow({ iconName, name, completed, streak, color, onToggle }: HabitRowProps) {
  const IconComponent = iconMap[iconName] || Check;
  return (
    <div className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition-all hover:border-zinc-200">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div 
            className="flex h-11 w-11 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${color}15`, color: color }}
          >
            <IconComponent size={20} />
          </div>
          <div>
            <p className={`text-sm font-semibold ${completed ? "text-zinc-400 line-through decoration-emerald-400" : "text-zinc-900"}`}>
              {name}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {streak > 0 && (
            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-600">
              🔥 {streak}d
            </span>
          )}
          <button
            type="button"
            onClick={onToggle}
            className={`flex h-7 w-7 items-center justify-center rounded-full border-2 transition ${
              completed ? "border-emerald-500 bg-emerald-500 text-white" : "border-zinc-200 bg-transparent hover:border-zinc-300"
            }`}
          >
            {completed && <Check size={12} strokeWidth={3} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DashboardContent() {
  const { habits, addHabit, toggleCompleteHabit } = useHabits();
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const dateString = today.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
  const todayStr = today.toISOString().split('T')[0];

  // Derive runtime analytics data values dynamically
  const total = habits.length;
  const done = habits.filter(h => h.completedDates.includes(todayStr)).length;
  const left = total - done;
  const progressPercent = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="min-h-screen bg-stone-50 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Top Header Layout */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-zinc-900">Hey, Gideon 👋</h1>
            <p className="mt-1 text-sm text-zinc-500">{dayName}, {dateString}</p>
          </div>
          <Button onClick={() => setIsCreateOpen(true)}>+ Add habit</Button>
        </div>

        {/* Analytical Cards Progress tracking layout */}
        <div className="mb-6 rounded-2xl bg-white p-4 shadow-sm">
          <div className="flex gap-3 mb-4">
            <StatCard label="Total" value={total} accent="default" />
            <StatCard label="Done" value={done} accent="green" />
            <StatCard label="Left" value={left} accent="violet" />
          </div>
          <div>
            <div className="flex justify-between text-xs text-zinc-400 mb-2">
              <span>Today's progress</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="h-2 rounded-full bg-zinc-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-purple-500 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Task lists rows header tracking */}
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">Today's habits</p>
        <div className="space-y-3">
          {habits.map((habit) => (
            <HabitRow
              key={habit.id}
              id={habit.id}
              iconName={habit.iconName}
              name={habit.title}
              completed={habit.completedDates.includes(todayStr)}
              streak={habit.streak}
              color={habit.color}
              onToggle={() => toggleCompleteHabit(habit.id)}
            />
          ))}
          {habits.length === 0 && (
            <p className="text-center text-zinc-400 py-8 bg-white rounded-2xl border border-zinc-100 shadow-sm">
              No habits created yet. Click "+ Add habit" to begin!
            </p>
          )}
        </div>
      </div>

      {isCreateOpen && (
        <HabitFormUI 
          onClose={() => setIsCreateOpen(false)}
          onSave={(data) => {
            addHabit(data);
            setIsCreateOpen(false);
          }}
        />
      )}
    </div>
  );
}