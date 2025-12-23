import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/landing_page";
// import EmployeePage from "./pages/EmployeePage";
// import TPManagerPage from "./pages/TPManagerPage";
// import WFMPage from "./pages/WFMPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/employee" element={<EmployeePage />} />
        <Route path="/tpmanager" element={<TPManagerPage />} />
        <Route path="/wfm" element={<WFMPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
