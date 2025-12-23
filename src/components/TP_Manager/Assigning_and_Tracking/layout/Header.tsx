import { useState } from "react";
import { Mail, Bell } from "lucide-react";
import ProfilePic from "/src/assets/DP.png"; // make sure this path is correct relative to Navbar file

const Navbar = () => {
  const [active, setActive] = useState("Home"); // track active link

  const links = ["Home", "Applications", "Assigning & Tracking", "Reports"];

  return (
    <header className="bg-white px-6 py-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
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

                {/* Green underline block */}
                {active === link && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-1 bg-green-500 rounded-full" />
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
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
              <div className="text-xs text-gray-500">TP Manager</div>
            </div>

            {/* Profile Image as rounded square */}
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
