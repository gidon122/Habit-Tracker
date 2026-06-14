import {
  Droplets,
  BookOpen,
  Sparkles,
  Pencil,
  Smartphone,
  PersonStanding,
  Check,
} from "lucide-react";
import React from "react";
import Button from "../components/ui/Button";

// ─── Types ──────────────────────────────────────────────────────────────────
interface StatCardProps {
  label: string;
  value: number;
  accent?: "default" | "green" | "violet";
}

interface HabitRowProps {
  icon: React.ElementType;
  name: string;
  completed: boolean;
  streak?: number;
  iconBg: string;
  iconColor: string;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function StatCard({ label, value, accent = "default" }: StatCardProps) {
  const valueColor =
    accent === "green"
      ? "text-emerald-600"
      : accent === "violet"
        ? "text-violet-600"
        : "text-zinc-900";

  const cardBg =
    accent === "green"
      ? "bg-emerald-50"
      : accent === "violet"
        ? "bg-violet-50"
        : "bg-zinc-50";

  const labelColor =
    accent === "green"
      ? "text-emerald-600"
      : accent === "violet"
        ? "text-violet-600"
        : "text-zinc-500";

  return (
    <div className={`flex-1 ${cardBg} rounded-xl px-4 py-3 flex flex-col gap-1`}>
      <span className={`text-xs font-medium uppercase tracking-widest ${labelColor}`}>
        {label}
      </span>
      <span className={`text-4xl font-bold tabular-nums ${valueColor}`}>
        {value}
      </span>
    </div>
  );
}

function HabitRow({ icon: Icon, name, completed, streak, iconBg, iconColor }: HabitRowProps) {
  return (
    <div className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBg}`}>
            <Icon className={iconColor} size={20} />
          </div>

          <div>
            <p
              className={`text-sm font-semibold ${
                completed
                  ? "text-zinc-400 line-through decoration-emerald-400"
                  : "text-zinc-900"
              }`}
            >
              {name}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {streak !== undefined && streak > 0 && (
            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-600">
              🔥 {streak}d
            </span>
          )}

          <div
            className={`flex h-7 w-7 items-center justify-center rounded-full border-2 flex-shrink-0 ${
              completed
                ? "border-emerald-500 bg-emerald-500"
                : "border-zinc-200 bg-transparent"
            }`}
          >
            {completed && <Check size={12} className="text-white" strokeWidth={3} />}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────

export default function DashboardContent() {
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const dateString = today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const stats = { total: 16, done: 13, left: 3 };

  const habits: HabitRowProps[] = [
    { icon: PersonStanding, name: "Morning run – 30 min", completed: true, streak: 14, iconBg: "bg-emerald-100", iconColor: "text-emerald-600" },
    { icon: BookOpen, name: "Read 20 pages", completed: true, streak: 7, iconBg: "bg-violet-100", iconColor: "text-violet-500" },
    { icon: Droplets, name: "Drink 8 glasses of water", completed: true, streak: 21, iconBg: "bg-cyan-100", iconColor: "text-cyan-500" },
    { icon: Sparkles, name: "Evening meditation", completed: false, streak: 5, iconBg: "bg-purple-100", iconColor: "text-purple-500" },
    { icon: Smartphone, name: "No social media before 9 AM", completed: false, iconBg: "bg-red-100", iconColor: "text-red-400" },
    { icon: Pencil, name: "Journal entry", completed: false, streak: 3, iconBg: "bg-orange-100", iconColor: "text-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-stone-50 p-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-zinc-900">Hey, Gideon 👋</h1>
            <p className="mt-1 text-sm text-zinc-500">
              {dayName}, {dateString}
            </p>
          </div>

          <Button>+ Add habit</Button>
        </div>

        {/* Stat Cards + Progress */}
        <div className="mb-6 rounded-2xl bg-white p-4 shadow-sm">
          <div className="flex gap-3 mb-4">
            <StatCard label="Total" value={stats.total} accent="default" />
            <StatCard label="Done" value={stats.done} accent="green" />
            <StatCard label="Left" value={stats.left} accent="violet" />
          </div>

          <div>
            <div className="flex justify-between text-xs text-zinc-400 mb-2">
              <span>Today's progress</span>
              <span>{Math.round((stats.done / stats.total) * 100)}%</span>
            </div>
            <div className="h-2 rounded-full bg-zinc-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-violet-500 transition-all"
                style={{ width: `${(stats.done / stats.total) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Habit Rows */}
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Today's habits
        </p>

        <div className="space-y-3">
          {habits.map((habit, i) => (
            <HabitRow key={i} {...habit} />
          ))}
        </div>

      </div>
    </div>
  );
}