import React from 'react'
import Sidebar from '../components/Sidebar'
// import Navbar from '../components/Navbar'
import Maincontent from '../components/Maincontent'

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
  <Sidebar />

  <div className="flex flex-1 flex-col overflow-hidden">
    
    <main className="flex-1 overflow-y-auto">
      <Maincontent />
    </main>
  </div>
</div>
  )
}

export default Dashboard
