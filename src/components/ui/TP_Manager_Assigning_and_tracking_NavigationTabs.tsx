import React from "react";

interface NavigationTab {
  id: string;
  label: string;
  active: boolean;
}

const navigationTabs: NavigationTab[] = [
  { id: "home", label: "Home", active: false },
  { id: "applications", label: "Applications", active: false },
  { id: "assigning-tracking", label: "Assigning & Tracking", active: true },
  { id: "reports", label: "Reports", active: false },
];

const NavigationTabs: React.FC = () => {
  return (
    <nav className="flex items-center space-x-8">
      {navigationTabs.map((tab) => (
        <div key={tab.id} className="relative py-5">
          <span
            className={`text-base font-normal transition-colors ${
              tab.active
                ? "text-dark font-medium"
                : "text-gray-primary hover:text-dark"
            }`}
          >
            {tab.label}
          </span>
          {tab.active && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavigationTabs;
