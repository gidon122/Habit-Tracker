import React from 'react'
import Sidebar from '../components/Sidebar'
import HabitCard from '../components/habits/HabitCard'
// import HabitForm from '../components/habits/HabitForm'

const Habits = () => {
  return (
     <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
    
    <main className="flex-1 overflow-y-auto">
      <HabitCard />
    </main>
    </div>
    </div>
  )
}

export default Habits
