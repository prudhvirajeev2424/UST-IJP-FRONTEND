
import { useState, useEffect } from "react";
import { Mail, Bell, X } from "lucide-react";
import ProfilePic from "../assets/DP@2x.png";
import LogoImg from "../assets/Group 172287@2x.jpg";
import BulkMessagePopup from "./BulkMessagePopup";

import Home from "../pages/home";
import LandingPage from "../pages/landing_page";
import { useActiveRole } from "../context/ActiveRoleContext";
import Opportunities from "../pages/Opportunies";
import AssigningAndTracking from "../pages/Assigning_and_Tracking";
import MyApplications from "../pages/MyApplications";
import TP_Applications from "../pages/layout/TP_Applications";
import ApplicationsPage from "../pages/Applications_page";
import ReportsPage from "../pages/ReportsPage";
import AssigningTracking from "../pages/TP_AssigningandTracking";
import WfmApplications from "../pages/layout/WfmApplications";

interface NavbarProps {
  role?: string | null;
}

type View = "landing" | "app";

const Navbar = ({ role }: NavbarProps) => {
  const { activeRole } = useActiveRole();
  const effectiveRole = role ?? activeRole ?? "Employee";

  /* ---------------- STATE ---------------- */
  const [view, setView] = useState<View>("app");
  const [active, setActive] = useState("Home");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showBulkPopup, setShowBulkPopup] = useState(false);
  const [appOpenedByCard, setAppOpenedByCard] = useState(false);
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(
    null
  ); // Track selected profile ID

  /* ---------------- LANDING PAGE ---------------- */
  if (view === "landing") {
    return <LandingPage />;
  }

  /* ---------------- NAV LINKS ---------------- */
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
    links = ["Home", "Applications"];
  } else {
    links = ["Home", "Applications"];
  }

  // Listen for app-level navigation events (e.g., from profile cards)
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (typeof detail === "string") {
        setActive(detail);
      } else if (detail && typeof detail === "object") {
        const { view: viewName, source, layout, profileId } = detail as any;
        if (viewName) setActive(viewName);
        setAppOpenedByCard(
          layout === "TP_Applications" || source === "card" || source === "list"
        );
        if (profileId) setSelectedProfileId(profileId as string); // Set profile ID on event
      }
    };

    window.addEventListener("navigate", handler as EventListener);
    return () =>
      window.removeEventListener("navigate", handler as EventListener);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] h-20">
        <div className="mx-auto max-w-[1920px] px-6 h-full">
          <div className="flex items-center justify-between h-full">
            {/* ---------- LOGO (CLICK → LANDING) ---------- */}
            <button
              type="button"
              onClick={() => {
                setView("landing");
                setActive("Home");
              }}
              className="flex items-center cursor-pointer bg-transparent p-0"
            >
              <img
                src={LogoImg}
                alt="UST IJP"
                className="h-4 object-contain mr-3"
                style={{ display: "block" }}
              />
            </button>

            {/* ---------- CENTER NAV ---------- */}
            <nav className="flex flex-1 justify-center">
              <div className="flex gap-5">
                {links.map((link) => (
                  <div key={link} className="relative">
                    <button
                      onClick={() => {
                        setActive(link);
                      }}
                      className={`px-2 py-1 text-sm font-semibold ${
                        active === link
                          ? "text-black"
                          : "text-gray-500 hover:text-black"
                      }`}
                    >
                      {link}
                    </button>

                    {active === link && (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-1 rounded-full bg-teal-600" />
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* ---------- RIGHT ---------- */}
            <div className="relative flex items-center gap-4">
              {(effectiveRole === "TP Manager" || effectiveRole === "WFM") && (
                <Mail
                  size={24}
                  className="cursor-pointer text-gray-700"
                  onClick={() => {
                    // Open bulk message popup
                    setShowBulkPopup(true);
                  }}
                />
              )}

              {/* Notifications */}
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
                  <div
                    role="dialog"
                    aria-label="Notifications"
                    className="fixed shadow-2xl z-[10000]"
                    style={{
                      top: '79px',
                      right: '24px',
                      width: '438px',
                      background: '#006E74',
                      borderRadius: '20px',
                      opacity: 1,
                    }}
                  >
                    {/* Arrow pointer */}
                    <div 
                      className="absolute -top-2 right-6 h-4 w-4 rotate-45" 
                      style={{ background: '#006E74' }}
                    />
                    
                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-4 border-b border-white border-opacity-20 relative z-10">
                      <h3 className="text-base font-semibold text-white">Notifications (3)</h3>
                      <X
                        size={20}
                        className="cursor-pointer text-white opacity-90 hover:opacity-100"
                        onClick={() => setShowNotifications(false)}
                      />
                    </div>

                    {/* Notification Items */}
                    <div className="overflow-y-auto">
                      {/* Notification 1 */}
                      <div className="flex items-start gap-3 px-5 py-4 hover:bg-white hover:bg-opacity-10 border-b border-white border-opacity-10">
                        <img
                          src={ProfilePic}
                          alt="Zamira Peterson"
                          className="h-10 w-10 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-white leading-relaxed">
                            <span className="font-semibold">Zamira Peterson</span> has applied for the{" "}
                            <span className="font-semibold">SO 32443388</span>
                          </p>
                          <span className="text-xs text-white text-opacity-70 mt-1 inline-block">Now</span>
                        </div>
                      </div>

                      {/* Notification 2 */}
                      <div className="flex items-start gap-3 px-5 py-4 hover:bg-white hover:bg-opacity-10 border-b border-white border-opacity-10">
                        <img
                          src={ProfilePic}
                          alt="Zamira Peterson"
                          className="h-10 w-10 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-white leading-relaxed">
                            <span className="font-semibold">Zamira Peterson</span> has uploaded the resume and manager's approval mail
                          </p>
                          <span className="text-xs text-white text-opacity-70 mt-1 inline-block">1m</span>
                        </div>
                      </div>

                      {/* Notification 3 */}
                      <div className="flex items-start gap-3 px-5 py-4 hover:bg-white hover:bg-opacity-10">
                        <img
                          src={ProfilePic}
                          alt="Angie Johnson"
                          className="h-10 w-10 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-white leading-relaxed">
                            <span className="font-semibold">Angie Johnson</span> has been approved for the{" "}
                            <span className="font-semibold">SO 3298721</span>
                          </p>
                          <span className="text-xs text-white text-opacity-70 mt-1 inline-block">2 days</span>
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

      {/* Bulk message popup (mounted when Mail icon clicked) */}
      {showBulkPopup && (
        <BulkMessagePopup onClose={() => setShowBulkPopup(false)} />
      )}

      {/* ================= PAGE CONTENT ================= */}
      <div className="mt-20">
        {active === "Home" && <Home />}

        {activeRole === "WFM" && active === "Applications" && (
          <WfmApplications />
        )}

        {/* TP Manager pages */}
        {active === "Applications" && effectiveRole === "TP Manager" && (
          <ApplicationsPage />
        )}
        {/* When a profile card requests a detailed view, it will emit a
            navigation event with view: 'ApplicationsDetail' — render the
            full TP applications/detail view in that case. */}
        {active === "ApplicationsDetail" &&
          (effectiveRole === "TP Manager" || appOpenedByCard) && (
            <TP_Applications />
          )}
        {active === "Assigning & Tracking" &&
          effectiveRole === "TP Manager" && <AssigningTracking />}

        {active === "Reports" && effectiveRole === "TP Manager" && (
          <ReportsPage />
        )}

        {/* Employee-specific pages */}
        {active === "Opportunities" && effectiveRole === "Employee" && (
          <Opportunities />
        )}
        {active === "Assigning & Tracking" && effectiveRole === "Employee" && (
          <AssigningAndTracking />
        )}
        {active === "My Applications" && effectiveRole === "Employee" && (
          <MyApplications />
        )}

        {/* TP_Applications page when profile is selected */}
        {/* {(
          // <TP_Applications/>
        )} */}
      </div>
    </>
  );
};

export default Navbar;