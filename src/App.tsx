import Landingpage from './pages/Landingpage'
import Login from './pages/Login'
import Register from './pages/Register'
// import Dashboard from './pages/Dashboard'
import Habits from './pages/Habits'


const App = () => {
  return (
    <div>
      <Landingpage />
      <Login />
      <Register />
      {/* <Dashboard /> */}
      <Habits />
    </div>
  )
}

export default App
