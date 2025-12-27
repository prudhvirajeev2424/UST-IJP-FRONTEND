// import React from "react";
// // import Layout from './components/layout/Layout';
// // import MyApplications from "./pages/MyApplications";
// import Opportunities from "./pages/Opportunies";
// // import Assigning_and_Tracking from "./pages/Assigning_and_Tracking";
// const App: React.FC = () => {
//   return (
//     <>
//       {/* <MyApplications /> */}
//       <Opportunities />
//       {/* <Assigning_and_Tracking /> */}
//     </>
//   );
// };

// export default App;


import React, { useState } from "react";
import { Header } from "./components/employee/opportunities/Header";
import { NotificationPanel } from "./components/employee/opportunities/NotificationPanel";

// IMPORT TEAM PAGES HERE
import Opportunities from "./pages/Opportunies";
import MyApplications from "./pages/MyApplications"; 
import Assigning_and_Tracking from "../src/pages/Assigning_and_Tracking"; 
// import Home from "./pages/Home"; 

const App: React.FC = () => {
  // Navigation State
  const [activePage, setActivePage] = useState("Opportunities");
  const [showNoti, setShowNoti] = useState(false);

  // Logic to call the correct component
  const renderPage = () => {
    switch (activePage) {
      case "Home":
        return <div className="p-10 text-center font-rubik text-text-muted">Home Page Content -- starting page (47)</div>;
      case "Opportunities":
        return <Opportunities />;
      case "Assigning & Tracking":
        return <Assigning_and_Tracking/>;
      case "My Applications":
        return <MyApplications />;
      default:
        return <Opportunities />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F2F7F8] font-rubik flex flex-col overflow-x-hidden">
      {/* 1. Global Header (Passes state to switch pages) */}
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onBellClick={() => setShowNoti(!showNoti)} 
      />

      {/* 2. Global Notification (Toggle via Bell) */}
      {showNoti && <NotificationPanel onClose={() => setShowNoti(false)} />}

      {/* 3. Page Content Container */}
      <main className="flex-1">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;