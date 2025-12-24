import "./App.css";
// react-router removed: login/role state controls which UI is shown
import { useState } from "react";

import LoginPage from "./pages/landing_page";
import { ShortlistProvider } from "./components/tp_manager/application/context/ShortlistContext";
import { ActiveRoleContext } from "./context/ActiveRoleContext";
import Application from "./pages/Application";

function App() {
  const [activeRole, setActiveRole] = useState<string | null>(null);

  return (
    <ShortlistProvider>
      <ActiveRoleContext.Provider value={{ activeRole, setActiveRole }}>
        <LoginPage />
      </ActiveRoleContext.Provider>

      <Application/>
    </ShortlistProvider>
  );
}

export default App;
