import React, { useState, useEffect, useRef, useMemo } from "react";
import FilterTab from "../../components/ui/FilterTab";
import StatusTabs from "../../components/ui/StatusTabs";
import { ApplicationsTable } from "../../components/ApplicationsTable";
import ProfileCard from "../../components/Wfm/ProfileCard";
import { wfmProfiles } from "../../data/wfmProfiles";
import { mockApplications } from "../../data/profiles";
import { useActiveRole } from "../../context/ActiveRoleContext";

const WfmApplications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [view, setView] = useState<"table" | "kanban">("kanban");
  const [isCompact, setIsCompact] = useState<boolean>(false);
  const initialHeightRef = useRef<number | null>(null);
  const { activeRole } = useActiveRole();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!initialHeightRef.current)
      initialHeightRef.current = window.innerHeight;

    const checkCompact = () => {
      const initial = initialHeightRef.current || window.innerHeight;
      setIsCompact(window.innerHeight < initial * 0.75);
    };

    checkCompact();
    window.addEventListener("resize", checkCompact);
    window.addEventListener("orientationchange", checkCompact);
    return () => {
      window.removeEventListener("resize", checkCompact);
      window.removeEventListener("orientationchange", checkCompact);
    };
  }, []);

  // Filter profiles for kanban view based on activeTab
  const filteredProfiles = useMemo(() => {
    if (!activeTab || activeTab === "All") return wfmProfiles;
    const key = activeTab.toLowerCase();

    // When role is WFM, tabs map directly to profile.status values
    if (activeRole && activeRole.toLowerCase() === "wfm") {
      // Map tab labels to statuses (normalize)
      const mapping: Record<string, string> = {
        all: "all",
        pending: "pending",
        interviewing: "interviewing",
        selected: "selected",
        allocated: "allocated",
        rejected: "rejected",
      };
      const status = mapping[key] || key;
      if (status === "all") return wfmProfiles;
      return wfmProfiles.filter((p) => p.status.toLowerCase() === status);
    }

    // Fallback: try simple matching against status
    return wfmProfiles.filter((p) =>
      p.status.toLowerCase().includes(key.split(" ")[0])
    );
  }, [activeTab, activeRole]);

  // Filter table applications based on activeTab
  const filteredApplications = useMemo(() => {
    if (!activeTab || activeTab === "All") return mockApplications;
    const key = activeTab.toLowerCase();

    if (key.includes("pending"))
      return mockApplications.filter((a) =>
        (a.status || "").toLowerCase().includes("pending")
      );
    if (key.includes("rejected"))
      return mockApplications.filter((a) =>
        (a.status || "").toLowerCase().includes("reject")
      );
    if (key.includes("allocated"))
      return mockApplications.filter((a) =>
        (a.status || "").toLowerCase().includes("allocat")
      );
    if (key.includes("interview"))
      return mockApplications.filter((a) =>
        (a.status || "").toLowerCase().includes("interview")
      );
    // 'selected' or 'accepted' map to shortlisted/shortlisted-like
    if (
      key.includes("selected") ||
      key.includes("accepted") ||
      key.includes("shortlist")
    )
      return mockApplications.filter((a) => {
        const s = (a.status || "").toLowerCase();
        return (
          s.includes("shortlist") ||
          s.includes("selected") ||
          s.includes("accepted")
        );
      });

    // Default: match by substring
    return mockApplications.filter((a) =>
      (a.status || "").toLowerCase().includes(key.split(" ")[0])
    );
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#F2F7F8]">
      <main className="max-w-[1800px] mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Status bar full width above columns */}
          <div className="col-span-12">
            <div className="mb-1">
              <StatusTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onViewChange={setView}
                view={view}
              />
            </div>
          </div>

          {/* Left: Filter */}
          <div className="col-span-3">
            <FilterTab />
          </div>

          {/* Center: main content */}
          <div className="col-span-9 min-w-0">
            <div className="bg-white rounded-lg shadow-sm w-full overflow-x-visible p-4">
              {view === "table" ? (
                <div
                  className={`w-full ${
                    isCompact ? "max-h-[calc(100vh-220px)] overflow-y-auto" : ""
                  }`}
                >
                  <ApplicationsTable applications={filteredApplications} />
                </div>
              ) : (
                <div className="pb-8 px-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-start auto-rows-[340px]">
                    {filteredProfiles.map((p) => (
                      <div key={p.id} className="w-[320px]">
                        <ProfileCard profile={p} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WfmApplications;
