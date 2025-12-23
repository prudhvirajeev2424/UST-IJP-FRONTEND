import { useState } from "react";
import { Mail, Bell } from "lucide-react";
import ProfilePic from "../assets/DP@2x.png"; // make sure this path is correct relative to Navbar file

interface NavbarProps {
  role?: string | null;
}

const Navbar = ({ role }: NavbarProps) => {
  const [active, setActive] = useState("Home"); // track active link

  const allLinks = ["Home", "Applications", "Assigning & Tracking", "Reports"];
  // Role-based visibility
  let links: string[];
  if (role === "TP Manager") {
    // TP Manager sees all links
    links = allLinks;
  } else if (role === "Employee") {
    // Employee sees Home, Add Opportunities, My Applications
    links = [
      "Home",
      "Opportunities",
      "Assigning & Tracking",
      "My Applications",
    ];
  } else if (role === "WFM") {
    // WFM should not see Assigning & Tracking or Reports
    links = allLinks.filter(
      (l) => l !== "Assigning & Tracking" && l !== "Reports"
    );
  } else {
    // default to showing Home and Applications if role is not provided
    links = ["Home", "Applications"];
  }

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto w-full px-6 py-[14px]">
        <div className="flex items-center justify-between">
          {/* Left: logo */}
          <div className="flex-shrink-0">
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
          </div>

          {/* Center: nav links */}
          <nav className="flex-1 flex justify-center">
            <div className="flex gap-5">
              {links.map((link) => (
                <div key={link} className="relative">
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

                  {active === link && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-1 bg-green-500 rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Right: icons & profile */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <Mail size={24} className="text-gray-700" />

            <div className="relative">
              <Bell size={24} className="text-gray-700" />
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                1
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm font-semibold">Andrea Stephen</div>
                <div className="text-xs text-gray-500">
                  {role ?? "TP Manager"}
                </div>
              </div>

              <img
                src={ProfilePic}
                alt="Profile"
                className="h-9 w-9 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
