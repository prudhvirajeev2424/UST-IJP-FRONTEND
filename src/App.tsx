import "./App.css";
import { ShortlistProvider } from "./components/TP_Manager/application/context/ShortlistContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/landing_page";
import Home from "./pages/home";
import AssigningAndTracking from "./pages/AssigningandTracking";
<<<<<<< HEAD
import Applications from "./pages/Applications_page";
=======
import ReportsPage from "./pages/ReportsPage";
>>>>>>> origin/team-2
import { ActiveRoleContext } from "./context/ActiveRoleContext";
import { useState } from "react";

function App() {
  const [activeRole, setActiveRole] = useState<string | null>(null);

  return (
    <ShortlistProvider>
      <ActiveRoleContext.Provider value={{ activeRole, setActiveRole }}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/assigning" element={<AssigningAndTracking />} />
<<<<<<< HEAD
            <Route path="/applications" element={<Applications />} />
=======
            <Route path="/reports" element={<ReportsPage />} />
>>>>>>> origin/team-2
          </Routes>
        </Router>
      </ActiveRoleContext.Provider>
    </ShortlistProvider>
  );
}

export default App;
