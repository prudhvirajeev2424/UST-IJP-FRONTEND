import React from "react";

const Navbar: React.FC = () => {
  const navItems = ["Home", "Applications", "Assigning & Tracking", "Reports"];

  return (
    <header
      className="h-16 bg-white border-b flex items-center justify-between px-6"
      style={{ borderColor: "var(--d7e0e3)" }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-2xl font-bold" style={{ color: "var(--003c51)" }}>
          UST
        </span>
        <span
          className="text-2xl font-light ml-1"
          style={{ color: "var(--7a7480)" }}
        >
          IJP
        </span>
      </div>

      {/* Navigation Tabs */}
      <nav className="flex items-center gap-8">
        {navItems.map((item) => (
          <div key={item} className="relative pb-4 cursor-pointer">
            <span
              className="text-sm font-normal"
              style={{
                color: item === "Reports" ? "var(--0097ac)" : "var(--7a7480)",
              }}
            >
              {item}
            </span>
            {item === "Reports" && (
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: "var(--0097ac)" }}
              />
            )}
          </div>
        ))}
      </nav>

      {/* Right Section: Icons and User */}
      <div className="flex items-center gap-4">
        {/* Mail Icon */}
        <div className="w-6 h-6 cursor-pointer">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ color: "var(--7a7480)" }}
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
        </div>

        {/* Bell Icon with Badge */}
        <div className="relative cursor-pointer">
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ color: "var(--7a7480)" }}
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-white text-xs flex items-center justify-center"
            style={{ backgroundColor: "var(--fc6a59)", fontSize: "10px" }}
          >
            1
          </span>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2 ml-2">
          <div className="text-right">
            <div
              className="text-sm font-medium"
              style={{ color: "var(--unnamed-color-231f20)" }}
            >
              Andrea Stephen
            </div>
            <div className="text-xs" style={{ color: "var(--7a7480)" }}>
              TP Manager
            </div>
          </div>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium"
            style={{ backgroundColor: "var(--0097ac)" }}
          >
            AS
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;