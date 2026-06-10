# HabitForge — Complete Product Strategy
### Solo Developer Edition · June 2026

---

## TABLE OF CONTENTS

1. Product Understanding
2. MVP Definition
3. Release Roadmap
4. UI/UX Design System
5. Application Architecture
6. Development Breakdown
7. Sprint Planning (8 Weeks)
8. Technical Recommendations
9. Risks & Challenges
10. Launch Strategy

---

# 1. PRODUCT UNDERSTANDING

## Product Summary

**HabitForge** is a personal habit-tracking web application that helps individuals build consistent daily routines through structured tracking, visual progress feedback, streaks, and gamification. Users create custom habits (e.g., "Drink Water", "Code 2 Hours", "Exercise"), check them off daily, and watch their consistency compound over time via charts, heatmaps, XP, and achievement badges.

## Target Audience

| Segment | Description |
|---|---|
| **Primary** | Students & young professionals (18–32) building productive routines |
| **Secondary** | Fitness & wellness enthusiasts tracking health habits |
| **Tertiary** | Developers & builders tracking professional growth habits |

**User Psychographic:** Goal-oriented self-improvers who are motivated by visual progress, streaks, and achievement systems — people who feel the GitHub contribution graph but for their personal life.

## Core Problem Being Solved

Most people **start habits but don't sustain them** because:
- No visual feedback makes it hard to feel progress
- Nothing is at stake when they miss a day
- Apps are either too simple (boring) or too complex (overwhelming)
- No identity or ownership over their routine

**HabitForge solves this** through: structured daily check-ins → streak psychology → visual consistency evidence → gamification loop.

## Value Proposition

> *"Turn your intentions into identity. HabitForge shows you — with undeniable clarity — who you're becoming, one day at a time."*

**Functional value:** Reliable, fast habit tracking with rich analytics.  
**Emotional value:** Daily motivation, sense of progress, ownership.  
**Aspirational value:** Become the disciplined person you want to be.

---

# 2. MVP DEFINITION

## Version 1 Feature Breakdown

### ✅ MUST HAVE (Launch blockers)

| # | Feature | Why it's required |
|---|---|---|
| 1 | User Auth (Sign up / Login / Logout) | Multi-user data isolation |
| 2 | Create / Edit / Delete Habits | Core CRUD |
| 3 | Daily check-off (mark habit complete) | Core value action |
| 4 | Streak counter per habit | Retention psychology hook |
| 5 | Today's dashboard view | Daily driver screen |
| 6 | Weekly completion progress bar | Immediate feedback |
| 7 | Habit Log persistence (HabitLog table) | Required for any future analytics |
| 8 | Responsive mobile layout | 70%+ users will be on phones |
| 9 | Dark mode | Expected by modern users, retention driver |

### 🟡 SHOULD HAVE (Ship in v1.1, 2–3 weeks after launch)

| # | Feature | Reasoning |
|---|---|---|
| 10 | Habit categories | Organizes growing habit lists |
| 11 | Completion rate % per habit | First analytics hook |
| 12 | Monthly calendar heatmap | Makes app feel premium fast |
| 13 | Habit frequency (daily/weekly/monthly) | Needed for non-daily habits |
| 14 | XP system + Levels | Early gamification layer |

### 🔵 NICE TO HAVE (v2.0, 6–8 weeks post-launch)

| # | Feature | Reasoning |
|---|---|---|
| 15 | Recharts analytics page | Rich data exploration |
| 16 | Badges & Achievements | Advanced retention |
| 17 | Pomodoro Timer | Productivity extension |
| 18 | Daily Journal / Notes | Premium differentiator |
| 19 | Push Notifications | Re-engagement |
| 20 | Avatar upload + User Profile | Social polish |
| 21 | Language support (i18n) | Global scale |

## Complexity Cuts for Fast Launch

**Remove from MVP:**
- ❌ Avatar upload (Appwrite Storage adds complexity, defer)
- ❌ Pomodoro timer (separate product, scope creep)
- ❌ Push notifications (service worker complexity, defer)
- ❌ i18n (premature optimization, defer)
- ❌ Pie charts / line charts (defer to v1.1 after HabitLog data accumulates)

---

# 3. RELEASE ROADMAP

## Phase 1 — MVP Release (Weeks 1–4)

| Attribute | Detail |
|---|---|
| **Goal** | Shippable, usable product with core value loop |
| **Target Date** | End of Week 4 |
| **User Impact** | Users can track daily habits and see streaks |
| **Tech Complexity** | Medium — Auth + CRUD + streak logic |
| **Dev Effort** | 4 weeks solo |

**Features:**
- Auth (Sign up, Login, Logout, Forgot Password)
- Habit CRUD (daily frequency only in v1)
- Daily check-off with streak update
- Dashboard: Today's habits, streak, completion %
- Weekly progress bar
- Dark mode toggle
- Mobile responsive

---

## Phase 2 — Feedback Improvements (Weeks 5–6)

| Attribute | Detail |
|---|---|
| **Goal** | Polish based on first-user feedback, add retention features |
| **User Impact** | Users feel more engaged and see their progress history |
| **Tech Complexity** | Low–Medium |
| **Dev Effort** | 2 weeks |

**Features:**
- Monthly heatmap calendar (GitHub-style)
- Habit categories (filter/organize habits)
- Habit frequency (weekly, monthly)
- Completion rate per habit
- Error states, loading states, empty states
- Performance: lazy loading, optimistic UI updates

---

## Phase 3 — Growth Features (Weeks 7–9)

| Attribute | Detail |
|---|---|
| **Goal** | Add analytics + gamification to deepen retention |
| **User Impact** | Users share streaks, earn badges, feel rewarded |
| **Tech Complexity** | Medium-High (XP logic, chart rendering) |
| **Dev Effort** | 3 weeks |

**Features:**
- Analytics page with Recharts (weekly bar chart, line chart, pie chart)
- XP system + Level display
- Achievement badges (7-day streak, 30-day streak, 100 habits)
- Longest streak tracking
- User profile page

---

## Phase 4 — Advanced Features (Weeks 10–14)

| Attribute | Detail |
|---|---|
| **Goal** | Premium experience, notification-driven re-engagement |
| **User Impact** | Daily notification loop keeps users coming back |
| **Tech Complexity** | High (service workers, notifications) |
| **Dev Effort** | 4 weeks |

**Features:**
- Web Push notifications (daily reminders)
- Daily motivational quotes
- Notes / Daily journal per habit entry
- Habit priority (high/medium/low)
- Pomodoro timer (linked to habit)
- Avatar upload + User Profile settings

---

## Phase 5 — Scale & Optimization (Week 15+)

| Attribute | Detail |
|---|---|
| **Goal** | Performance, scale, monetization |
| **Tech Complexity** | High |
| **Dev Effort** | Ongoing |

**Features:**
- i18n (language support)
- PWA (installable on mobile)
- Rate limiting & abuse prevention
- Caching strategy (React Query)
- Monetization layer (Pro plan)
- Analytics (PostHog / Mixpanel events)
- A/B testing framework

---

# 4. UI/UX DESIGN SYSTEM

## Design Direction

**Aesthetic:** Dark-first, data-dense but breathable. Inspired by productivity tools like Linear and Raycast — purposeful, sharp, not generic SaaS. The signature element is the **contribution heatmap** used as a background texture on the dashboard hero.

**Tone:** Confident, direct, motivating. Copy uses second person present tense: "You're on a 7-day streak" not "Streak: 7 days."

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--bg-base` | `#0F0F13` | App background (dark mode) |
| `--bg-surface` | `#1A1A22` | Cards, panels |
| `--bg-elevated` | `#24242F` | Inputs, hover states |
| `--accent-primary` | `#6C63FF` | Primary actions, active states |
| `--accent-glow` | `#8B85FF` | Hover glow, progress |
| `--success` | `#22C55E` | Completed habits, streaks |
| `--warning` | `#F59E0B` | Partial progress |
| `--danger` | `#EF4444` | Delete, missed streak |
| `--text-primary` | `#F0EFF8` | Headlines, labels |
| `--text-muted` | `#7C7B8A` | Descriptions, timestamps |
| `--border` | `#2E2E3D` | Dividers, card borders |

**Light mode:** Inverts base/surface, accent remains violet. Text `#1A1A22`.

## Typography

| Role | Family | Weight | Size |
|---|---|---|---|
| Display / Headline | `Syne` | 700–800 | 28–48px |
| Body | `Inter` | 400–500 | 14–16px |
| Data / Monospace | `JetBrains Mono` | 400 | 12–13px |
| Labels / Caps | `Inter` | 600 | 11px, 0.08em tracking |

## App Flow

```
Landing / Onboarding
        │
        ├── Sign Up
        │       └── Onboarding: Add First Habit
        │                       └── Dashboard
        │
        └── Login
                └── Dashboard
                        │
                        ├── Habits Page (CRUD)
                        ├── Analytics Page
                        ├── Settings Page
                        └── Profile Page
```

## Navigation Structure

**Sidebar (desktop) / Bottom nav (mobile):**

```
🏠 Dashboard       — Today's habits, stats summary
📋 Habits          — All habits list, manage
📊 Analytics       — Charts, heatmap, trends
👤 Profile         — XP, level, achievements
⚙️ Settings        — Dark mode, account, notifications
```

## Screen Hierarchy & Wireframes

---

### SCREEN 1: Dashboard

```
┌─────────────────────────────────────────────┐
│  Good morning, Gideon ☀️         [Avatar]   │
├─────────────────────────────────────────────┤
│  TODAY — Tuesday, June 9                    │
│                                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│  │ 4 / 6    │ │ 🔥 12   │ │ 67%     │    │
│  │ Done     │ │ Streak  │ │ Rate    │    │
│  └──────────┘ └──────────┘ └──────────┘    │
├─────────────────────────────────────────────┤
│  TODAY'S HABITS                             │
│                                             │
│  ✅  Drink Water      [Health]  🔥 12d     │
│  ✅  Read 10 Pages    [Growth]  🔥 5d      │
│  ☐   Exercise         [Health]  🔥 3d      │
│  ☐   Code 2 Hours     [Work]    🔥 8d      │
│  ✅  Pray             [Spirit]  🔥 30d     │
│  ☐   Cold Shower      [Health]  —          │
│                                             │
│  ████████████░░░░ 67% Today                 │
└─────────────────────────────────────────────┘
```

---

### SCREEN 2: Habits Management

```
┌─────────────────────────────────────────────┐
│  MY HABITS                    [+ New Habit] │
│  [All ▼]  [Health]  [Work]  [Growth]        │
├─────────────────────────────────────────────┤
│  ┌───────────────────────────────────────┐  │
│  │ 💧 Drink Water                        │  │
│  │ Daily · Health · 🔥 12-day streak     │  │
│  │                          [Edit][Del]  │  │
│  └───────────────────────────────────────┘  │
│  ┌───────────────────────────────────────┐  │
│  │ 📚 Read 10 Pages                      │  │
│  │ Daily · Growth · 🔥 5-day streak      │  │
│  │                          [Edit][Del]  │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

---

### SCREEN 3: Add / Edit Habit Modal

```
┌──────────────────────────────────┐
│  New Habit                  [×]  │
│                                  │
│  Name *                          │
│  ┌──────────────────────────┐    │
│  │ e.g. Drink Water         │    │
│  └──────────────────────────┘    │
│                                  │
│  Description (optional)          │
│  ┌──────────────────────────┐    │
│  │                          │    │
│  └──────────────────────────┘    │
│                                  │
│  Category          Frequency     │
│  [Health ▼]        [Daily ▼]     │
│                                  │
│  Icon (optional)                 │
│  💧 🏃 📚 🧘 💪 🙏 💻 ✍️        │
│                                  │
│           [Cancel]  [Save Habit] │
└──────────────────────────────────┘
```

---

### SCREEN 4: Analytics Page

```
┌─────────────────────────────────────────────┐
│  ANALYTICS                                  │
├─────────────────────────────────────────────┤
│  ACTIVITY HEATMAP — Last 12 Weeks           │
│  Jun  Jul  Aug  Sep  Oct  Nov               │
│  ■■■□■■■ ■■□□■■■ ■■■■■□■ ...               │
│  ■■□□■■■ ■□□□■■■ ■■■■□□■ ...               │
├─────────────────────────────────────────────┤
│  WEEKLY COMPLETION                          │
│  Mon  ████████░░  8/10                      │
│  Tue  ██████████  10/10                     │
│  Wed  ██████░░░░  6/10                      │
│  Thu  ████░░░░░░  4/10                      │
│  Fri  ███████░░░  7/10                      │
├─────────────────────────────────────────────┤
│  COMPLETION RATE (30 days)   LINE CHART     │
│  ↗ 74% avg · Trending up                   │
└─────────────────────────────────────────────┘
```

---

### SCREEN 5: Profile / Gamification

```
┌─────────────────────────────────────────────┐
│  [Avatar]  Gideon                           │
│            Level 4 — Habit Architect        │
│  ████████████████░░░░  380 / 500 XP         │
├─────────────────────────────────────────────┤
│  ACHIEVEMENTS                               │
│                                             │
│  🏅 First Habit     ✅ Unlocked             │
│  🔥 7-Day Streak    ✅ Unlocked             │
│  🔥 30-Day Streak   ✅ Unlocked             │
│  💯 100 Completions ⬜ 73/100               │
│  🏆 50-Day Streak   ⬜ 12/50               │
└─────────────────────────────────────────────┘
```

---

## User Journeys

**Journey 1 — New User**
1. Lands on homepage → sees value prop + demo GIF
2. Signs up → onboarding: "Add your first habit"
3. Adds "Drink Water" → lands on Dashboard
4. Checks off habit → sees streak start at 🔥 1
5. Returns next day → sees "Day 2!" motivation

**Journey 2 — Daily Return**
1. Opens app (or gets notification)
2. Sees today's incomplete habits
3. Checks off 3 habits
4. Progress bar fills to 75%
5. Streak counter increments → dopamine hit

## Accessibility

- All interactive elements have `aria-label`
- Color is never the sole indicator of state (icons + text always accompany)
- Keyboard-navigable (Tab, Enter, Space, Escape for modals)
- `prefers-reduced-motion` respected — no animations when set
- WCAG AA contrast minimum throughout
- Focus ring visible on all focusable elements

---

# 5. APPLICATION ARCHITECTURE

## Folder Structure

```
src/
│
├── assets/
│   └── icons/, images/
│
├── components/
│   ├── ui/                     # Reusable primitives
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── Badge.tsx
│   │   ├── ProgressBar.tsx
│   │   └── Tooltip.tsx
│   ├── habits/
│   │   ├── HabitCard.tsx
│   │   ├── HabitForm.tsx
│   │   ├── HabitList.tsx
│   │   └── HabitCheckbox.tsx
│   ├── charts/
│   │   ├── WeeklyBarChart.tsx
│   │   ├── MonthlyLineChart.tsx
│   │   ├── HeatmapCalendar.tsx
│   │   └── CompletionPie.tsx
│   ├── dashboard/
│   │   ├── StatCard.tsx
│   │   ├── TodayProgress.tsx
│   │   └── StreakBadge.tsx
│   └── layouts/
│       ├── AppLayout.tsx
│       ├── Sidebar.tsx
│       └── BottomNav.tsx
│
├── pages/
│   ├── Dashboard/index.tsx
│   ├── Habits/index.tsx
│   ├── Analytics/index.tsx
│   ├── Profile/index.tsx
│   ├── Settings/index.tsx
│   └── Auth/
│       ├── Login.tsx
│       ├── Register.tsx
│       └── ForgotPassword.tsx
│
├── hooks/
│   ├── useHabits.ts
│   ├── useStreak.ts
│   ├── useHabitLogs.ts
│   ├── useXP.ts
│   └── useTheme.ts
│
├── services/
│   ├── appwrite/
│   │   └── client.ts           # Appwrite init
│   ├── auth/
│   │   └── authService.ts
│   └── habits/
│       ├── habitService.ts
│       └── habitLogService.ts
│
├── store/
│   ├── authStore.ts             # Zustand
│   ├── habitStore.ts
│   └── uiStore.ts              # theme, modals, toasts
│
├── types/
│   ├── habit.ts
│   ├── user.ts
│   ├── habitLog.ts
│   └── achievement.ts
│
├── utils/
│   ├── streakCalculator.ts
│   ├── xpCalculator.ts
│   ├── dateHelpers.ts
│   └── formatters.ts
│
├── constants/
│   ├── categories.ts
│   ├── achievements.ts
│   └── xpLevels.ts
│
├── routes/
│   └── AppRouter.tsx
│
├── App.tsx
└── main.tsx
```

## Database Schema (Appwrite Collections)

### Users (Appwrite Auth — built-in)
```typescript
interface User {
  $id: string;
  name: string;
  email: string;
  createdAt: string;
}
```

### habits (Collection)
```typescript
interface Habit {
  $id: string;
  userId: string;          // indexed
  title: string;
  description?: string;
  category: string;        // 'health' | 'work' | 'growth' | 'spirit' | 'custom'
  frequency: 'daily' | 'weekly' | 'monthly';
  icon?: string;           // emoji or icon key
  color?: string;          // accent color hex
  priority?: 'low' | 'medium' | 'high';
  currentStreak: number;   // denormalized for fast reads
  longestStreak: number;   // denormalized
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
```

### habit_logs (Collection)
```typescript
interface HabitLog {
  $id: string;
  habitId: string;         // indexed
  userId: string;          // indexed
  completedAt: string;     // ISO date string, indexed
  note?: string;
  xpAwarded: number;
}
```

### user_stats (Collection)
```typescript
interface UserStats {
  $id: string;
  userId: string;          // unique index
  totalXP: number;
  level: number;
  totalCompletions: number;
  unlockedAchievements: string[];  // array of achievement keys
  updatedAt: string;
}
```

### Appwrite Indexes
- `habits`: index on `[userId, isActive]`
- `habit_logs`: index on `[habitId, completedAt]`
- `habit_logs`: index on `[userId, completedAt]` (for dashboard queries)

## Authentication Flow

```
User submits credentials
        │
        ▼
Appwrite createEmailPasswordSession()
        │
        ▼
Session stored in Appwrite (httpOnly cookie)
        │
        ▼
authStore.setUser(user)
        │
        ▼
Navigate to /dashboard

On app load:
─────────────
main.tsx mounts
→ authStore.init() called
→ appwrite.account.get()
  ├── Success → setUser() → show app
  └── Error   → setUser(null) → redirect to /login

Protected routes:
─────────────────
<ProtectedRoute> checks authStore.user
  └── null → <Navigate to="/login" />
```

## State Management Strategy (Zustand)

```typescript
// authStore.ts
interface AuthStore {
  user: User | null;
  isLoading: boolean;
  init: () => Promise<void>;
  login: (email, password) => Promise<void>;
  logout: () => Promise<void>;
}

// habitStore.ts
interface HabitStore {
  habits: Habit[];
  todayLogs: HabitLog[];
  isLoading: boolean;
  fetchHabits: () => Promise<void>;
  fetchTodayLogs: () => Promise<void>;
  addHabit: (habit) => Promise<void>;
  updateHabit: (id, data) => Promise<void>;
  deleteHabit: (id) => Promise<void>;
  toggleComplete: (habit) => Promise<void>;  // creates/removes log + updates streak
}

// uiStore.ts
interface UIStore {
  theme: 'dark' | 'light';
  toast: Toast | null;
  activeModal: string | null;
  toggleTheme: () => void;
  showToast: (message, type) => void;
  openModal: (name) => void;
  closeModal: () => void;
}
```

## Streak Logic (Critical)

```typescript
// utils/streakCalculator.ts

export function calculateStreak(logs: HabitLog[], frequency: Habit['frequency']): number {
  if (!logs.length) return 0;

  const sorted = [...logs].sort((a, b) =>
    new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
  );

  let streak = 0;
  let expectedDate = startOfDay(new Date());

  for (const log of sorted) {
    const logDate = startOfDay(new Date(log.completedAt));

    if (isSameDay(logDate, expectedDate)) {
      streak++;
      expectedDate = subDays(expectedDate, 1);
    } else if (isBefore(logDate, expectedDate)) {
      break; // gap found
    }
    // duplicate logs on same day: skip
  }

  return streak;
}
```

## Deployment Architecture

```
Developer Machine
      │ git push
      ▼
GitHub Repository
      │ GitHub Actions CI
      ▼
  ┌─────────────────────┐
  │   Build & Test      │
  │   npm run build     │
  │   npm run lint      │
  └─────────────────────┘
      │ on success
      ▼
  Vercel (Auto Deploy)
  ├── Production: habitforge.app
  └── Preview: pr-{n}.habitforge.vercel.app

Backend:
  Appwrite Cloud (managed)
  └── Project: habitforge-prod
      ├── Auth
      ├── Database: habits, habit_logs, user_stats
      └── Functions (future: streak recalculation)
```

---

# 6. DEVELOPMENT BREAKDOWN

## Milestone 1 — Project Foundation

**Objective:** Working app skeleton with routing and auth

| Task | Detail |
|---|---|
| Scaffold Vite + React + TS | `npm create vite@latest` |
| Install all dependencies | See Tech Recommendations |
| Configure Tailwind CSS | Custom tokens mapped to design system |
| Set up folder structure | As per architecture above |
| Configure React Router | Public routes + Protected routes |
| Build AppLayout + Sidebar + BottomNav | Shell with navigation |
| Connect Appwrite | `client.ts` init, environment variables |
| Build Auth pages | Login, Register, ForgotPassword |
| Implement authStore | init, login, logout |

**Acceptance Criteria:**
- User can sign up, log in, log out
- Unauthenticated users redirected to `/login`
- App layout renders correctly on mobile and desktop

---

## Milestone 2 — Habit CRUD

**Objective:** Users can fully manage their habits

| Task | Detail |
|---|---|
| Build HabitForm component | react-hook-form + zod validation |
| Build HabitCard component | Shows title, category, streak, actions |
| Implement habitService | createHabit, updateHabit, deleteHabit |
| Implement habitStore | fetchHabits, addHabit, updateHabit, deleteHabit |
| Build Habits page | List + filter + empty state |
| Add/Edit modal | Reuse HabitForm, handle both modes |
| Delete confirmation | Modal or inline confirm |

**Acceptance Criteria:**
- All CRUD operations persist to Appwrite
- Form validation prevents bad data
- Empty state shown when no habits exist

---

## Milestone 3 — Tracking & Streaks

**Objective:** Core daily-use value loop

| Task | Detail |
|---|---|
| Build HabitCheckbox component | Optimistic UI toggle |
| Implement habitLogService | createLog, deleteLog, fetchTodayLogs |
| Implement toggleComplete in store | Create/delete HabitLog + recalculate streak |
| Build streakCalculator util | Pure function, unit tested |
| Update habit streak in Appwrite | On every toggle |
| Build Dashboard page | Today's habits, 3 stat cards, progress bar |
| Today progress calculation | (completedToday / total) * 100 |

**Acceptance Criteria:**
- Checking off a habit creates a HabitLog document
- Streak increments correctly after consecutive days
- Re-checking on same day does not double-count
- Dashboard shows accurate today stats

---

## Milestone 4 — Analytics & Heatmap

**Objective:** Historical visualization that makes the app feel premium

| Task | Detail |
|---|---|
| Build HeatmapCalendar component | 12-week contribution graph |
| Fetch 90-day logs for heatmap | Query habit_logs by date range |
| Build WeeklyBarChart | Recharts BarChart |
| Build MonthlyLineChart | Recharts LineChart |
| Build Analytics page | Assemble charts |
| Completion rate calculation | logs / expected * 100 per habit |

**Acceptance Criteria:**
- Heatmap shows correct intensity based on log count
- Charts update when new logs are added
- Charts handle empty state gracefully

---

## Milestone 5 — Gamification

**Objective:** XP, Levels, Achievements drive retention

| Task | Detail |
|---|---|
| Define XP constants | Per-completion XP amounts |
| Define level thresholds | XP required per level |
| Define achievement list | Keys, conditions, metadata |
| Implement xpCalculator util | Pure, unit tested |
| Build userStats service | init, increment, query |
| Update stats on habit toggle | After successful log creation |
| Build Profile page | Level, XP bar, achievement grid |
| Achievement unlock toast | Animated notification |

**Acceptance Criteria:**
- XP increments by correct amount on completion
- Level-up notification appears when threshold crossed
- Achievements unlock exactly when conditions are met
- Profile shows accurate stats

---

## Milestone 6 — Polish & Launch Prep

**Objective:** Production-quality UX before public launch

| Task | Detail |
|---|---|
| Dark/light mode toggle | Tailwind dark: classes, uiStore |
| Loading skeletons | Replace spinners with skeleton UI |
| Toast notifications | Success/error feedback |
| Error boundaries | Catch and display errors gracefully |
| Mobile optimization | Test on real device, fix tap targets |
| Performance audit | Lighthouse score >90 |
| SEO basics | Meta tags, OG image |
| CI/CD pipeline | GitHub Actions → Vercel |
| Environment variables | .env.production setup |

---

# 7. SPRINT PLANNING (8 Weeks, Solo Developer)

## Week 1 — Foundation

| | Detail |
|---|---|
| **Goal** | Project running, auth working |
| **Tasks** | Scaffold Vite app · Install deps · Tailwind config · Folder structure · Appwrite project setup · Auth pages (Login, Register) · authStore · Protected routes · AppLayout shell |
| **Deliverable** | Working auth flow: sign up → dashboard redirect |
| **Tests** | Manual: all auth flows · Verify Appwrite session persistence |

## Week 2 — Habit CRUD

| | Detail |
|---|---|
| **Goal** | Full habit management |
| **Tasks** | HabitForm component · HabitCard component · habitService (CRUD) · habitStore · Habits page · Add/Edit modal · Delete confirmation |
| **Deliverable** | User can create, edit, delete habits. Data persists in Appwrite. |
| **Tests** | Manual CRUD flows · Form validation (empty name, long strings) · Refresh persistence |

## Week 3 — Tracking Core

| | Detail |
|---|---|
| **Goal** | Daily check-off working with streaks |
| **Tasks** | HabitCheckbox (optimistic UI) · habitLogService · toggleComplete store action · streakCalculator util · Dashboard page skeleton · Today's habit list |
| **Deliverable** | User can check off habits; streak updates; dashboard shows today's list |
| **Tests** | Toggle habit on/off · Verify HabitLog created/deleted in Appwrite · Streak calculation on day 1, 2, gap, resume |

## Week 4 — Dashboard & Progress

| | Detail |
|---|---|
| **Goal** | Full working dashboard |
| **Tasks** | StatCard components (streak, completion %, total) · Today progress bar · Weekly progress display · Polish Dashboard layout · Dark mode implementation |
| **Deliverable** | Fully functional dashboard, dark mode working |
| **Tests** | Stats accuracy with 0, 1, many habits · Dark mode persistence after refresh |

## Week 5 — Analytics & Heatmap

| | Detail |
|---|---|
| **Goal** | Analytics page live |
| **Tasks** | Install Recharts · HeatmapCalendar component · WeeklyBarChart · MonthlyLineChart · Analytics page · Fetch 90-day historical logs |
| **Deliverable** | Analytics page with heatmap + 2 charts |
| **Tests** | Heatmap colors correct · Charts render with sparse data · Empty state for new users |

## Week 6 — Gamification

| | Detail |
|---|---|
| **Goal** | XP + Level + Achievements working |
| **Tasks** | xpCalculator · Level constants · Achievement definitions · userStats service · userStats Appwrite collection · Profile page · Achievement unlock toasts · XP increment on toggle |
| **Deliverable** | Profile page showing level, XP bar, achievements |
| **Tests** | XP increments correctly · Level-up triggers at right threshold · Achievements unlock and don't re-unlock |

## Week 7 — Polish

| | Detail |
|---|---|
| **Goal** | Production-quality feel |
| **Tasks** | Loading skeletons everywhere · Toast system · Error boundaries · Mobile audit + fixes · Accessibility pass (aria labels, keyboard nav) · Empty states copy · Settings page (theme, account) |
| **Deliverable** | App feels complete and professional |
| **Tests** | Test on real mobile device · Lighthouse performance/accessibility run |

## Week 8 — Launch

| | Detail |
|---|---|
| **Goal** | Ship to real users |
| **Tasks** | GitHub Actions CI setup · Vercel production deploy · Custom domain · Environment variables audit · Landing page (simple, fast) · OG image · Submit to Product Hunt draft |
| **Deliverable** | App live at production URL · First 10 beta users invited |
| **Tests** | Full E2E manual test on prod · All auth flows · CRUD on production DB · Verify no console errors |

---

# 8. TECHNICAL RECOMMENDATIONS

## Full Stack

| Layer | Choice | Why |
|---|---|---|
| **Framework** | React 18 + TypeScript | Ecosystem, DX, type safety |
| **Build Tool** | Vite | Fast HMR, instant builds |
| **Styling** | Tailwind CSS v4 | Utility-first, dark mode built-in |
| **State** | Zustand | Lightweight, no boilerplate |
| **Forms** | React Hook Form + Zod | Performance + type-safe validation |
| **Routing** | React Router v6 | Standard, nested routes |
| **Charts** | Recharts | React-native, composable |
| **Date Handling** | date-fns | Tree-shakeable, functional |
| **Icons** | Lucide React | Consistent, lightweight |
| **Backend** | Appwrite Cloud (free tier) | Auth + DB + Storage, you know it |
| **Hosting** | Vercel | Free, instant deploys from GitHub |
| **Auth** | Appwrite Auth (built-in) | Email/password + OAuth later |
| **Analytics** | PostHog (free tier) | Event tracking, funnels, session replay |
| **Error Monitoring** | Sentry (free tier) | Catch production errors |
| **CI/CD** | GitHub Actions | Free for public/private repos |

## Install Commands

```bash
npm create vite@latest habitforge -- --template react-ts
cd habitforge
npm install react-router-dom zustand react-hook-form zod
npm install recharts date-fns lucide-react
npm install -D tailwindcss @tailwindcss/vite
npm install appwrite
npm install -D @types/react @types/react-dom
```

## Appwrite Collections Setup

Create in Appwrite Console:
1. **habits** — attributes per schema above, permissions: `user:read`, `user:write`
2. **habit_logs** — attributes per schema above, permissions: `user:read`, `user:write`
3. **user_stats** — attributes per schema above, permissions: `user:read`, `user:write`

Add all required indexes before writing code.

---

# 9. RISKS & CHALLENGES

## Technical Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Streak logic bugs (timezone issues) | High | High | Always store dates in UTC; use `date-fns/utc`; write unit tests for streak calculator |
| Appwrite free tier limits (10k users) | Low (initially) | High | Monitor usage; Appwrite self-host is a free escape valve |
| Optimistic UI out of sync with Appwrite | Medium | Medium | Implement proper rollback on API failure; show error toasts |
| Recharts performance with large datasets | Low | Medium | Limit queries to 90 days; paginate if needed |
| React re-renders on large habit lists | Low | Low | Memoize HabitCard with React.memo |

## Product Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Users don't return after Day 1 | High | High | Focus on streak psychology; send D1, D3, D7 re-engagement emails |
| Feature bloat delays launch | High | High | Strictly enforce MVP scope; keep a "parking lot" doc for future ideas |
| App not sticky enough without notifications | Medium | High | Build web push notifications in Phase 4; until then, rely on streak fear |
| Competition from Habitica, Streaks, etc. | Medium | Medium | Focus on web-first, faster, simpler UX |

## Security Concerns

| Concern | Solution |
|---|---|
| Users accessing other users' data | Appwrite document-level permissions (user-scoped read/write) |
| XSS in habit titles | React escapes JSX by default; avoid `dangerouslySetInnerHTML` |
| Rate abuse (creating thousands of logs) | Appwrite has built-in rate limiting; add client-side debounce |
| Exposed Appwrite Project ID | Public-safe; Appwrite uses permissions, not secrets, for client access |

## Scalability Concerns

- Streak recalculation at scale: move to Appwrite Function (server-side) before 10k DAU
- Log queries: ensure compound indexes on `[userId, completedAt]` before launch
- Consider React Query (TanStack Query) in Phase 2 to replace manual Zustand fetching logic

---

# 10. LAUNCH STRATEGY

## Beta Launch Plan (End of Week 8)

**Step 1 — Soft launch (Week 8, Day 1–3)**
- Invite 10–20 personal contacts: friends, online community members
- Goal: find any critical bugs before public launch
- Use a simple "Beta Access" landing page (just email signup)

**Step 2 — Community launch (Week 8, Day 4–7)**
- Post in: r/webdev, r/selfimprovement, r/productivity, Twitter/X, LinkedIn
- Message: "I built a habit tracker in 4 weeks as a solo dev — here's what I learned" (dev story angle)
- Share on Indie Hackers (developer community loves these builds)

**Step 3 — Product Hunt (Week 9)**
- Prepare PH listing: screenshots, GIF demo, tagline
- Launch on a Tuesday or Wednesday (highest traffic days)
- Target: Top 5 of the day

## Feedback Collection Strategy

| Method | Tool | When |
|---|---|---|
| In-app feedback button | Custom modal → email/Appwrite | Day 1 |
| User interview (5 users) | Calendly + video call | Week 2 post-launch |
| Usage analytics | PostHog events | From day 1 |
| NPS survey | Tally form (email after 7 days) | Week 2 post-launch |

**Key events to track in PostHog:**
- `habit_created`, `habit_completed`, `streak_reached_7`, `streak_reached_30`
- `analytics_page_viewed`, `level_up`, `achievement_unlocked`
- `user_returned_day2`, `user_returned_day7`

## First 100 Users Strategy

| Channel | Tactics |
|---|---|
| Dev communities | Share on Twitter/X with dev journey thread; "Built in 8 weeks" narrative |
| Reddit | r/productivity, r/getmotivated, r/Habits (show don't sell) |
| Indie Hackers | Post build log; milestone updates attract followers |
| Personal network | Ask 10 people to each share with 3 others |
| SEO (long-term) | Write "habit tracker for developers" blog posts |
| GitHub | Open-source the project for visibility + contributions |

## Monetization Opportunities

**Free tier (launch):** All current features, up to 10 habits.

**HabitForge Pro ($4.99/month or $39/year) — Phase 5:**

| Free | Pro |
|---|---|
| Up to 10 habits | Unlimited habits |
| 30-day history | Full history |
| Basic analytics | Advanced analytics + exports |
| — | Pomodoro timer |
| — | Daily journal |
| — | Custom habit colors/icons |
| — | Email reminder notifications |
| — | Priority support |

**Implementation:** Appwrite can store a `subscription` field on `user_stats`. Use Lemon Squeezy for payments (simpler than Stripe for solo devs, handles VAT).

---

# APPENDIX: QUICK REFERENCE

## TypeScript Interfaces (Complete)

```typescript
// types/habit.ts
export interface Habit {
  $id: string;
  userId: string;
  title: string;
  description?: string;
  category: HabitCategory;
  frequency: 'daily' | 'weekly' | 'monthly';
  icon?: string;
  color?: string;
  priority?: 'low' | 'medium' | 'high';
  currentStreak: number;
  longestStreak: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export type HabitCategory = 'health' | 'work' | 'growth' | 'spirit' | 'personal' | 'custom';

// types/habitLog.ts
export interface HabitLog {
  $id: string;
  habitId: string;
  userId: string;
  completedAt: string;
  note?: string;
  xpAwarded: number;
}

// types/user.ts
export interface UserStats {
  $id: string;
  userId: string;
  totalXP: number;
  level: number;
  totalCompletions: number;
  unlockedAchievements: string[];
  updatedAt: string;
}
```

## Achievement Definitions

```typescript
// constants/achievements.ts
export const ACHIEVEMENTS = [
  { key: 'first_habit',    label: 'First Step',     desc: 'Create your first habit',        icon: '🌱', xpBonus: 50  },
  { key: 'first_complete', label: 'Day One',        desc: 'Complete a habit for the first time', icon: '✅', xpBonus: 25 },
  { key: 'streak_7',       label: 'Week Warrior',   desc: '7-day streak on any habit',       icon: '🔥', xpBonus: 100 },
  { key: 'streak_30',      label: 'Monthly Master', desc: '30-day streak on any habit',      icon: '💎', xpBonus: 500 },
  { key: 'streak_100',     label: 'Century',        desc: '100-day streak',                  icon: '🏆', xpBonus: 1000 },
  { key: 'completions_10', label: 'Getting Started',desc: 'Complete 10 habits total',        icon: '🎯', xpBonus: 50  },
  { key: 'completions_100',label: 'Century Club',   desc: 'Complete 100 habits total',       icon: '💯', xpBonus: 200 },
  { key: 'habits_5',       label: 'Builder',        desc: 'Create 5 habits',                 icon: '🏗️', xpBonus: 75  },
];
```

## XP & Level System

```typescript
// constants/xpLevels.ts
export const XP_PER_COMPLETION = 10;
export const XP_STREAK_BONUS = (streak: number) => streak >= 7 ? 5 : 0; // bonus at 7+ days

export const LEVELS = [
  { level: 1,  xpRequired: 0,    title: 'Beginner'          },
  { level: 2,  xpRequired: 100,  title: 'Committed'         },
  { level: 3,  xpRequired: 250,  title: 'Consistent'        },
  { level: 4,  xpRequired: 500,  title: 'Habit Architect'   },
  { level: 5,  xpRequired: 1000, title: 'Discipline Master' },
  { level: 6,  xpRequired: 2000, title: 'Legendary'         },
];
```

---

*Built for: Gideon · June 2026 · HabitForge v1.0 Strategy*
