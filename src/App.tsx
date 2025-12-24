import "./App.css";
// react-router removed: login/role state controls which UI is shown
import { useState } from "react";

import LoginPage from "./pages/landing_page";
import { ShortlistProvider } from "./components/tp_manager/application/context/ShortlistContext";
import { ActiveRoleContext } from "./context/ActiveRoleContext";

function App() {
  const [activeRole, setActiveRole] = useState<string | null>(null);

  return (
    <ShortlistProvider>
      <ActiveRoleContext.Provider value={{ activeRole, setActiveRole }}>
        <LoginPage />
      </ActiveRoleContext.Provider>
    </ShortlistProvider>
  );
}

export default App;
