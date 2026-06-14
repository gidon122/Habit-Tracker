import { useEffect, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
// Add to imports at the top:
import { useNavigate, useLocation } from 'react-router-dom'
import {
  BarChart3,
  CheckCircle2,
  Home,
  Moon,
  Settings,
  Sun,
  User,
} from 'lucide-react'

const navItems = [
  { name: 'Dashboard', icon: Home, href: '/' },
  { name: 'Habits', icon: CheckCircle2, href: '/habits' },
  { name: 'Analytics', icon: BarChart3, href: '/analytics' },
  { name: 'Profile', icon: User, href: '/profile' },
]

const Sidebar = () => {
  const navigate = useNavigate()
const location = useLocation()
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const storedMode = window.localStorage.getItem('habit-tracker-dark-mode')
    if (storedMode !== null) {
      setDarkMode(storedMode === 'true')
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    window.localStorage.setItem('habit-tracker-dark-mode', String(darkMode))
  }, [darkMode])

  return (
    <aside className="flex h-screen w-70 flex-shrink-0 flex-col justify-between bg-stone-50 px-5 py-5 text-slate-100 shadow-2xl shadow-slate-950/40 backdrop-blur-xl ring-1 ring-white/10">
          <div>
      <div className="flex h-16 items-center justify-between px-6">
        <h1 className="text-2xl font-black tracking-tighter">
           HABIT{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
           FORGE
        </span>
        </h1>
      </div>

        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon

const isActive = location.pathname === item.href
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => navigate(item.href)}
                className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-300/60 ${
                  isActive
                    ? 'bg-slate-800 text-white shadow-lg shadow-slate-950/20'
                    : 'text-slate-400 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900/90 text-slate-300 shadow-sm shadow-slate-950/10">
                  <Icon size={18} />
                </span>
                <span className="font-medium">{item.name}</span>
              </button>
            )
          })}
        </nav>

        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Dark Mode</p>
              <p className="mt-1 text-sm font-medium text-slate-200">Switch theme</p>
            </div>
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              className={`relative inline-flex h-10 w-18 items-center rounded-full p-1 transition-colors duration-300 ${
                darkMode ? 'bg-emerald-400/80' : 'bg-slate-700/80'
              }`}
              aria-label="Toggle dark mode"
            >
              <span
                className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-slate-100 shadow-lg shadow-slate-950/20 transition-transform duration-300 ${
                  darkMode ? 'translate-x-8' : 'translate-x-0'
                }`}
              >
                {darkMode ? <Moon size={16} /> : <Sun size={16} />}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-xl shadow-slate-950/20">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 rounded-2xl bg-slate-800">
            <span className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-emerald-300">AG</span>
          </div>
          <div>
            <p className="mt-1 font-semibold text-white">Amina Grant</p>
          </div>
        </div>
        <button
          type="button"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-3xl bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-emerald-400/15 hover:text-emerald-200"
        >
          <Settings size={18} />
          Settings
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
