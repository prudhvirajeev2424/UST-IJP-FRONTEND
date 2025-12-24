import { useState } from "react";
import { Mail, Bell, X, Menu } from "lucide-react";
import { useActiveRole } from "../context/ActiveRoleContext";
import ProfilePic from "../assets/DP@2x.png";
import Home from "../pages/home";

interface NavbarProps {
  role?: string | null;
}

const Navbar = ({ role }: NavbarProps) => {
  const { activeRole } = useActiveRole();
  const effectiveRole = role ?? activeRole;

  const [active, setActive] = useState("Home");
  const [showNotifications, setShowNotifications] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const allLinks = ["Home", "Applications", "Assigning & Tracking", "Reports"];

  let links: string[] = [];

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
    links = allLinks.filter(
      (l) => l !== "Assigning & Tracking" && l !== "Reports"
    );
  } else {
    links = ["Home", "Applications"];
  }

  // (we render pages in-place; paths are unused)

  const handleNavClick = (link: string) => {
    setActive(link);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white h-16 shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
        <div className="relative max-w-7xl mx-auto h-full px-4 md:px-6">
          <div className="flex items-center h-full w-full">
            {/* LOGO */}
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-[#003c51]">UST</span>
              <span className="text-2xl font-light text-[#7a7480]">IJP</span>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2">
              <div className="flex gap-5">
                {links.map((link) => (
                  <button
                    key={link}
                    onClick={() => handleNavClick(link)}
                    className={`relative text-sm font-semibold px-2 py-1 ${
                      active === link
                        ? "text-black"
                        : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {link}
                    {active === link && (
                      <span className="absolute -bottom-1 left-0 right-0 h-1 bg-teal-600 rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </nav>

            {/* RIGHT SIDE */}
            <div className="ml-auto flex items-center gap-3 md:gap-4 relative">
              {/* Mail button (no effects) */}
              <button className="hidden sm:block bg-transparent p-0 border-0 outline-none">
                <Mail size={22} className="text-gray-700" />
              </button>

              {/* Notifications */}
              <div className="relative">
                <Bell
                  size={22}
                  className="text-gray-700 cursor-pointer"
                  onClick={() => setShowNotifications(!showNotifications)}
                />
                <span className="absolute -top-1.5 -right-1.5 h-4 w-4 flex items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
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
                        className="cursor-pointer"
                        onClick={() => setShowNotifications(false)}
                      />
                    </div>

                    <div className="divide-y divide-teal-600">
                      {[
                        "has applied for the SO 32443388",
                        "has uploaded the resume and manager’s approval mail",
                        "has been approved for the SO 32987221",
                      ].map((text, idx) => (
                        <div
                          key={idx}
                          className="flex gap-3 px-4 py-3 hover:bg-teal-600 cursor-pointer"
                        >
                          <img
                            src={ProfilePic}
                            className="h-9 w-9 rounded-full"
                          />
                          <div className="text-sm">
                            <p>
                              <span className="font-semibold">
                                Zamira Peterson
                              </span>{" "}
                              {text}
                            </p>
                            <span className="text-xs opacity-80">
                              {idx === 0 ? "Now" : idx === 1 ? "1m" : "2 days"}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Profile */}
              <div className="hidden sm:flex items-center gap-3">
                <div className="text-right">
                  <div className="text-sm font-semibold">Andrea Stephen</div>
                  <div className="text-xs text-gray-500">{effectiveRole}</div>
                </div>
                <img
                  src={ProfilePic}
                  className="h-9 w-9 rounded-lg object-cover"
                />
              </div>

              {/* Mobile menu */}
              <button
                className="md:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <Menu size={26} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Page content rendered by Navbar (so landing page only needs to render Navbar) */}
      <div className="mt-16">
        {active === "Home" && <Home />}
        {active !== "Home" && (
          <div className="p-6">
            <h2 className="text-lg font-semibold">{active}</h2>
            <p className="text-sm text-gray-600">
              Content for {active} goes here.
            </p>
          </div>
        )}

        {/* MOBILE NAV */}
        {mobileOpen && (
          <div className="md:hidden mt-2 rounded-xl border bg-white shadow">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className={`block w-full text-left px-4 py-3 text-sm font-semibold ${
                  active === link
                    ? "bg-teal-50 text-teal-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
