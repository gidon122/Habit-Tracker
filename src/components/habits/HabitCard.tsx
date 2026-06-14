import { useState } from "react";
import { Pencil, Trash2, Search } from "lucide-react";
import { useHabits } from "../../hook/useHabits";
import { iconMap } from "../../utils/iconMapper";
import type { Habit } from "../../types/habit";
import HabitFormUI from "./HabitForm";
import DeleteHabit from "./DeleteHabit";
import Button from "../ui/Button";

export default function HabitsListUI() {
  const { habits, addHabit, updateHabit, deleteHabit } = useHabits();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Modal toggle state containers
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingHabit, setEditingHabit] = useState<Habit | null>(null);
  const [deletingHabit, setDeletingHabit] = useState<Habit | null>(null);

  // Filter lists dynamically based on search queries
  const filteredHabits = habits.filter(habit =>
    habit.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-stone-50 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header section control layout */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-zinc-900">All habits</h1>
            <p className="mt-1 text-sm text-zinc-500">Manage every habit you've ever created.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={() => setIsCreateOpen(true)}>+ New habit</Button>
          </div>
        </div>

        {/* Filter Toolbar components */}
        <div className="mb-6 rounded-2xl bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Search habits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-3 pl-11 pr-4 text-sm outline-none focus:bg-white focus:border-purple-300 transition"
              />
            </div>
            <div className="flex overflow-hidden rounded-xl border border-zinc-200">
              <button className="bg-amber-50 px-4 py-3 text-sm font-medium text-amber-600">
                Active · {filteredHabits.length}
              </button>
            </div>
          </div>
        </div>

        {/* Habits Master Render List */}
        <div className="space-y-4">
          {filteredHabits.map((habit) => {
            const IconComponent = iconMap[habit.iconName] || Search;

            return (
              <div key={habit.id} className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div 
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${habit.color}15`, color: habit.color }}
                    >
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-zinc-900">{habit.title}</h3>
                        <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-600 capitalize">
                          {habit.frequency}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="hidden items-center gap-4 text-sm text-zinc-500 md:flex">
                      <span className="flex items-center gap-1 font-medium text-amber-600">
                        🔥 {habit.streak}d
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setEditingHabit(habit)}
                        className="text-zinc-400 transition hover:text-zinc-700"
                      >
                        <Pencil size={16} />
                      </button>
                      <button 
                        onClick={() => setDeletingHabit(habit)}
                        className="text-red-400 transition hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {filteredHabits.length === 0 && (
            <p className="text-center text-zinc-400 py-12">No habits found matching your search configuration.</p>
          )}
        </div>
      </div>

      {/* Conditionally Rendered Action Overlays */}
      {isCreateOpen && (
        <HabitFormUI 
          onClose={() => setIsCreateOpen(false)}
          onSave={(data) => {
            addHabit(data);
            setIsCreateOpen(false);
          }}
        />
      )}

      {editingHabit && (
        <HabitFormUI 
          initialHabit={editingHabit}
          onClose={() => setEditingHabit(null)}
          onSave={(data) => {
            updateHabit(editingHabit.id, data);
            setEditingHabit(null);
          }}
        />
      )}

      {deletingHabit && (
        <DeleteHabit 
          habitTitle={deletingHabit.title}
          onCancel={() => setDeletingHabit(null)}
          onConfirm={() => {
            deleteHabit(deletingHabit.id);
            setDeletingHabit(null);
          }}
        />
      )}
    </div>
  );
}