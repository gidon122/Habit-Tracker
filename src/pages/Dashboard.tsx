import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
  <Sidebar />

  <div className="flex flex-1 flex-col overflow-hidden">
    <Navbar />
    <main className="flex-1 overflow-y-auto">

    </main>
  </div>
</div>
  )
}

export default Dashboard
