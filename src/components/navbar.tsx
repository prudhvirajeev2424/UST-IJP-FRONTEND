import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Bell, X } from "lucide-react";
import ProfilePic from "/src/assets/DP@2x.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [showNotifications, setShowNotifications] = useState(false);

  const links = ["Home", "Applications", "Assigning & Tracking", "Reports"];

  return (
    <header className="bg-white px-6 py-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.08)] relative z-50">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <span
              className="text-2xl font-bold"
              style={{ color: "var(--003c51)" }}
            >
              UST
            </span>
            <span
              className="text-2xl font-light ml-1"
              style={{ color: "var(--7a7480)" }}
            >
              IJP
            </span>
          </div>

          {/* Navbar Links */}
          <nav className="ml-80 flex gap-5">
            {links.map((link) => {
              // determine route for known pages; fallback to '#' for non-routed items
              const path =
                link === "Home"
                  ? "/home"
                  : link === "Assigning & Tracking"
                  ? "/assigning"
                  : link === "Reports"
                  ? "/reports"
                  : "#";

              return (
                <div key={link} className="relative">
                  {path === "#" ? (
                    <a
                      href="#"
                      onClick={() => setActive(link)}
                      className={`text-sm font-semibold px-2 py-1 ${
                        active === link
                          ? "text-black"
                          : "text-gray-500 hover:text-black"
                      }`}
                    >
                      {link}
                    </a>
                  ) : (
                    <Link
                      to={path}
                      onClick={() => setActive(link)}
                      className={`text-sm font-semibold px-2 py-1 ${
                        active === link
                          ? "text-black"
                          : "text-gray-500 hover:text-black"
                      }`}
                    >
                      {link}
                    </Link>
                  )}

                  {active === link && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-1 bg-teal-600 rounded-full" />
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 relative">
          <Mail size={24} className="text-gray-700" />

          {/* Bell */}
          <div className="relative">
            <Bell
              size={24}
              className="text-gray-700 cursor-pointer"
              onClick={() => setShowNotifications(!showNotifications)}
            />
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              3
            </span>

            {/* 🔔 Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-3 w-96 rounded-xl bg-teal-700 text-white shadow-xl">
                {/* Arrow */}
                <div className="absolute -top-2 right-6 h-4 w-4 rotate-45 bg-teal-700" />

                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-teal-600">
                  <h3 className="text-sm font-semibold">Notifications (3)</h3>
                  <X
                    size={18}
                    className="cursor-pointer opacity-80 hover:opacity-100"
                    onClick={() => setShowNotifications(false)}
                  />
                </div>

                {/* Notifications */}
                <div className="divide-y divide-teal-600">
                  {/* Item 1 */}
                  <div className="flex gap-3 px-4 py-3 hover:bg-teal-600 cursor-pointer">
                    <img
                      src={ProfilePic}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="text-sm">
                      <p>
                        <span className="font-semibold">Zamira Peterson</span>{" "}
                        has applied for the SO 32443388
                      </p>
                      <span className="text-xs opacity-80">Now</span>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex gap-3 px-4 py-3 hover:bg-teal-600 cursor-pointer">
                    <img
                      src={ProfilePic}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="text-sm">
                      <p>
                        <span className="font-semibold">Zamira Peterson</span>{" "}
                        has uploaded the resume and manager’s approval mail
                      </p>
                      <span className="text-xs opacity-80">1m</span>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex gap-3 px-4 py-3 hover:bg-teal-600 cursor-pointer">
                    <img
                      src={ProfilePic}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="text-sm">
                      <p>
                        <span className="font-semibold">Angie Johnson</span> has
                        been approved for the SO 32987221
                      </p>
                      <span className="text-xs opacity-80">2 days</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-semibold">Andrea Stephen</div>
              <div className="text-xs text-gray-500">TP Manager</div>
            </div>

            <img
              src={ProfilePic}
              alt="Profile"
              className="h-9 w-9 rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
