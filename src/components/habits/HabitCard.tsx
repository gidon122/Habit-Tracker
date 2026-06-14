import {
  Droplets,
  Dumbbell,
  BookOpen,
  Flame,
  Pencil,
  Trash2,
  Search,
  Sparkles,
} from "lucide-react";
import Button from "../ui/button";

export default function HabitsListUI() {
  const habits = [
    {
      icon: Droplets,
      title: "Drink 2L of water",
      frequency: "daily",
      streak: 13,
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-500",
    },
    {
      icon: Dumbbell,
      title: "Morning run",
      frequency: "daily",
      streak: 5,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-500",
    },
    {
      icon: BookOpen,
      title: "Read 20 minutes",
      frequency: "daily",
      streak: "3",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-500",
    },
    {
      icon: Sparkles,
      title: "Meditate",
      frequency: "daily",
      streak: 2,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
    },
    {
      icon: Pencil,
      title: "Journal",
      frequency: "daily",
      streak: 2,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-zinc-900">All habits</h1>
            <p className="mt-1 text-sm text-zinc-500">
              Manage every habit you've ever created.
            </p>
          </div>

          <div className="flex items-center gap-3">
          

            <Button>
                + New habit
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 rounded-2xl bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
              />

              <input
                type="text"
                placeholder="Search habits..."
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-3 pl-11 pr-4 text-sm outline-none"
              />
            </div>

            <div className="flex overflow-hidden rounded-xl border border-zinc-200">
              <button className="bg-amber-50 px-4 py-3 text-sm font-medium text-amber-600">
                Active · 11
              </button>
            </div>
          </div>
        </div>

        {/* Habit Cards */}
        <div className="space-y-4">
          {habits.map((habit, index) => {
            const Icon = habit.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  {/* Left */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${habit.iconBg}`}
                    >
                      <Icon className={habit.iconColor} size={20} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-zinc-900">
                          {habit.title}
                        </h3>

                        

                        <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-600">
                          {habit.frequency}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-6">
                    <div className="hidden items-center gap-4 text-sm text-zinc-500 md:flex">
                      <span className="flex items-center gap-1">
                        🔥 {habit.streak}
                      </span>

                    </div>

                    <div className="flex items-center gap-3">
                      <button className="text-zinc-500 transition hover:text-zinc-700">
                        <Pencil size={16} />
                      </button>

                      <button className="text-red-400 transition hover:text-red-500">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}