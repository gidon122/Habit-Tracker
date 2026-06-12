import React from 'react'
import Button from './ui/Button'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-purple-400/30 bg-white/10 backdrop-blur-md">
  <div className="flex h-16 items-center justify-between px-6">
    <h1 className="text-2xl font-black tracking-tighter">
      HABIT{" "}
      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        FORGE
      </span>
    </h1>

    <Button>Add New Habit</Button>
  </div>
</nav>
  )
}

export default Navbar
