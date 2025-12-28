import { useState } from "react";
import { Mail, Bell, X } from "lucide-react";
import ProfilePic from "../assets/DP@2x.png";
import Home from "../pages/home";
import { useActiveRole } from "../context/ActiveRoleContext";
import Application from "../pages/Application";
import Opportunities from "../pages/Opportunies";
import AssigningAndTracking from "../pages/Assigning_and_Tracking";
import MyApplications from "../pages/MyApplications";

interface NavbarProps {
  role?: string | null;
}

const Navbar = ({ role }: NavbarProps) => {
  const { activeRole } = useActiveRole();
  const effectiveRole = role ?? activeRole ?? "Employee";
  const [active, setActive] = useState("Home");
  const [showNotifications, setShowNotifications] = useState(false);

  const allLinks = ["Home", "Applications", "Assigning & Tracking", "Reports"];

  let links: string[];
  if (effectiveRole === "TP Manager") {
    links = allLinks;
  } else if (effectiveRole === "Employee") {
    links = [
      "Home",
      "Opportunities",
      "Assigning & Tracking",
      "My Applications",
    ];
  } else if (effectiveRole === "WFM") {
    // WFM should see only Home and Applications
    links = ["Home", "Applications"];
  } else {
    links = ["Home", "Applications"];
  }

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
        <div className="max-w-[1920px] mx-auto w-full px-6 py-[14px]">
          <div className="flex items-center justify-between">
            {/* Left */}
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

            {/* Center Nav */}
            <nav className="flex-1 flex justify-center">
              <div className="flex gap-5">
                {links.map((link) => (
                  <div key={link} className="relative">
                    <button
                      type="button"
                      onClick={() => setActive(link)}
                      className={`text-sm font-semibold px-2 py-1 ${
                        active === link
                          ? "text-black"
                          : "text-gray-500 hover:text-black"
                      }`}
                      aria-current={active === link ? "page" : undefined}
                    >
                      {link}
                    </button>

                    {active === link && (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-1 bg-teal-600 rounded-full" />
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Right */}
            <div className="flex-shrink-0 flex items-center gap-4 relative">
              <Mail size={24} className="text-gray-700" />

              <div className="relative">
                <Bell
                  size={24}
                  className="text-gray-700 cursor-pointer"
                  onClick={() => setShowNotifications(!showNotifications)}
                />
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                  3
                </span>

                {showNotifications && (
                  <div className="absolute right-0 mt-3 w-96 rounded-xl bg-teal-700 text-white shadow-xl">
                    <div className="absolute -top-2 right-6 h-4 w-4 rotate-45 bg-teal-700" />
                    <div className="flex items-center justify-between px-4 py-3 border-b border-teal-600">
                      <h3 className="text-sm font-semibold">
                        Notifications (3)
                      </h3>
                      <X
                        size={18}
                        className="cursor-pointer opacity-80 hover:opacity-100"
                        onClick={() => setShowNotifications(false)}
                      />
                    </div>
                    <div className="divide-y divide-teal-600">
                      <div className="flex gap-3 px-4 py-3 hover:bg-teal-600 cursor-pointer">
                        <img
                          src={ProfilePic}
                          className="h-9 w-9 rounded-full object-cover"
                        />
                        <div className="text-sm">
                          <p>
                            <span className="font-semibold">
                              Zamira Peterson
                            </span>{" "}
                            has applied for the SO 32443388
                          </p>
                          <span className="text-xs opacity-80">Now</span>
                        </div>
                      </div>
                      <div className="flex gap-3 px-4 py-3 hover:bg-teal-600 cursor-pointer">
                        <img
                          src={ProfilePic}
                          className="h-9 w-9 rounded-full object-cover"
                        />
                        <div className="text-sm">
                          <p>
                            <span className="font-semibold">
                              Zamira Peterson
                            </span>{" "}
                            has uploaded the resume and manager’s approval mail
                          </p>
                          <span className="text-xs opacity-80">1m</span>
                        </div>
                      </div>
                      <div className="flex gap-3 px-4 py-3 hover:bg-teal-600 cursor-pointer">
                        <img
                          src={ProfilePic}
                          className="h-9 w-9 rounded-full object-cover"
                        />
                        <div className="text-sm">
                          <p>
                            <span className="font-semibold">Angie Johnson</span>{" "}
                            has been approved for the SO 32987221
                          </p>
                          <span className="text-xs opacity-80">2 days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-sm font-semibold">Andrea Stephen</div>
                  <div className="text-xs text-gray-500">{effectiveRole}</div>
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

      <div className="mt-16">
        {active === "Home" && <Home />}
        {active === "Applications" && effectiveRole === "TP Manager" && (<Application />)}

        {/* Employee-specific pages */}
        {active === "Opportunities" && effectiveRole === "Employee" && (<Opportunities />)}
        {active === "Assigning & Tracking" && effectiveRole === "Employee" && (<AssigningAndTracking />)}
        {active === "My Applications" && effectiveRole === "Employee" && (<MyApplications />)}

        {/* Fallback for any other nav labels */}
        {active !== "Home" &&
          active !== "Applications" &&
          active !== "Opportunities" &&
          active !== "Assigning & Tracking" &&
          active !== "My Applications" && (
            <div className="p-6">
              <h2 className="text-lg font-semibold">{active}</h2>
              <p className="text-sm text-gray-600">
                Content for {active} goes here.
              </p>
            </div>
          )}
      </div>
    </>
  );
};
export default Navbar;
