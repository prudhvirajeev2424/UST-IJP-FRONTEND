import { ActiveRoleContext } from "./landing_page";
import React from "react";
import WfmHome from "./layout/WfmHome";
import ApplicationsPage from "./Applications_page";
import WfmApplications from "./layout/WfmApplications";
import Assigning_and_tracking from "./AssigningandTracking";
 
const Home: React.FC = () => {
  const { activeRole, activePage } = React.useContext(ActiveRoleContext);
 
  // WFM: if navbar selected Applications, show WfmApplications, else show WfmHome
  if (activeRole === "WFM") {
    if (activePage === "Applications") {
      return (
        <div className="bg-gray-50">
          <WfmApplications />
        </div>
      );
    }
 
    return (
      <div className="bg-gray-50">
        <WfmHome />
      </div>
    );
  }
 
  // TP Manager: respect navbar selection; default to ApplicationsPage
  if (activeRole === "TP Manager") {
    if (activePage === "Assigning & Tracking") {
      return (
        <div className="bg-gray-50">
          <Assigning_and_tracking />
        </div>
      );
    }
 
    if (activePage === "Applications" || !activePage) {
      return (
        <div className="bg-gray-50">
          <ApplicationsPage />
        </div>
      );
    }
  }
 
  // Default/Employee: show Applications when selected, else WfmHome fallback
  if (activePage === "Applications") {
    return (
      <div className="bg-gray-50">
        <ApplicationsPage />
      </div>
    );
  }
 
  return (
    <div className="bg-gray-50">
      <WfmHome />
    </div>
  );
};
 
export default Home;