import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Habits from "./pages/Habits";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import DashboardLayout from "./layouts/DashboardLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;