import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback,
} from "react";
import xlIcon from "../assets/XlIcon.png";
import AssignTaskModal from "../components/TP_Manager/Assigning_and_Tracking/AssignTaskModal";
import SuccessBanner from "../components/ui/Shared/TP_Manager/Assigning_and_Tracking/SuccessBanner";

import FilterPill from "../components/TP_Manager/Assigning_and_Tracking/dashboard/FilterPill";
import SearchInput from "../components/ui/Shared/TP_Manager/Assigning_and_Tracking/SearchInput";
import StatsSummary from "../components/TP_Manager/Assigning_and_Tracking/dashboard/StatsSummary";
import TaskCard from "../components/TP_Manager/Assigning_and_Tracking/dashboard/TaskCard";
import { mockTasks } from "../data/TPManagerAssigningandTrackingMockData";
import { type FilterType } from "../types/AssigningandTrackingTypes";

const AssigningTracking: React.FC = () => {
  // Local UI state
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showBanner, setShowBanner] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("");

  // timer ref used to auto-dismiss the success banner
  const bannerTimerRef = useRef<number | null>(null);

  /**
   * showSuccess
   * - Shows the success banner with the provided message for 4s.
   * - Memoized with useCallback so it's stable when passed to children.
   */
  const showSuccess = useCallback((message: string) => {
    // clear any existing timer so messages don't overlap
    if (bannerTimerRef.current) {
      clearTimeout(bannerTimerRef.current);
      bannerTimerRef.current = null;
    }

    setBannerMessage(message);
    setShowBanner(true);

    const id = window.setTimeout(() => {
      setShowBanner(false);
      bannerTimerRef.current = null;
    }, 4000);

    bannerTimerRef.current = id; // store timer id for cleanup
  }, []);

  // Cleanup on unmount: clear any pending banner timer
  useEffect(() => {
    return () => {
      if (bannerTimerRef.current) clearTimeout(bannerTimerRef.current);
    };
  }, []);

  /* ---------------- FILTER TASKS ---------------- */
  // Filter tasks based on selected filter and search query.
  // Kept identical in behavior; memoized to avoid re-calculation on unrelated renders.
  const filteredTasks = useMemo(() => {
    // Start with the mock tasks array
    let tasks = mockTasks;

    if (activeFilter === "below50")
      tasks = tasks.filter((t) => t.progress < 50);
    if (activeFilter === "above50")
      tasks = tasks.filter((t) => t.progress >= 50);

    const q = searchQuery.trim().toLowerCase();
    if (q) {
      tasks = tasks.filter(
        (t) =>
          t.user.name.toLowerCase().includes(q) ||
          t.title.toLowerCase().includes(q)
      );
    }

    return tasks;
  }, [activeFilter, searchQuery]);

  /* ---------------- STATS ---------------- */
  // Simple aggregated counts for the right-hand stats panel.
  // Derived from mockTasks and memoized since mockTasks is static.
  const stats = useMemo(
    () => ({
      completed: mockTasks.filter((t) => t.progress === 100).length,
      inProgress: mockTasks.filter((t) => t.progress > 0 && t.progress < 100)
        .length,
      notStarted: mockTasks.filter((t) => t.progress === 0).length,
    }),
    []
  );

  return (
    <>
      {/* Scroll wrapper: remaining viewport below the main Navbar */}
      <div className="h-[calc(100vh-64px)] overflow-auto scrollbar-thin-1 bg-[#F2F7F8]">
        <div className="max-w-[1920px] mx-auto px-6 py-6 relative">
          {/* ================= TOP BAR ================= */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <h1 className="font-rubik font-medium text-[18px] leading-[20px] text-[#231F20] whitespace-nowrap mt-6">
              Task & Course Tracker
            </h1>

            {/* CENTER: Filter Buttons (moved to middle) */}
            <div className="flex items-center justify-center w-full max-w-[600px]">
              <div className="flex items-center gap-4">
                <FilterPill
                  label="All"
                  active={activeFilter === "all"}
                  onClick={() => setActiveFilter("all")}
                />
                <FilterPill
                  label="< 50% completed"
                  active={activeFilter === "below50"}
                  onClick={() => setActiveFilter("below50")}
                />
                <FilterPill
                  label="> 50% completed"
                  active={activeFilter === "above50"}
                  onClick={() => setActiveFilter("above50")}
                />
              </div>
            </div>

            {/* RIGHT: Search Input + Export and Assign Task Buttons */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-320px">
                <SearchInput value={searchQuery} onChange={setSearchQuery} />
              </div>

              <button className="w-[48px] h-[48px] flex items-center justify-center">
                <img
                  src={xlIcon}
                  alt="export"
                  className="w-[48px] h-[48px] object-contain"
                />
              </button>
              <button
                onClick={() => setIsAssignModalOpen(true)}
                className="w-[138px] h-[49px] bg-[#006E74] rounded-[4px] text-white text-[16px] flex items-center justify-center whitespace-nowrap hover:bg-[#006E74] font-[Rubik],Regular font-normal px-4"
              >
                Assign a task
              </button>
            </div>
          </div>

          {/* ================= CONTENT LAYOUT ================= */}
          <div className="grid grid-cols-[1fr_auto] gap-x-[40.5px]">
            {/* TASK CARDS (LEFT) */}
            <div className="grid grid-cols-[repeat(auto-fit,320px)] gap-x-[40.5px] gap-y-[16px] justify-start">
              {filteredTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>

            {/* STATS SUMMARY (RIGHT) */}
            <div className="self-start">
              <StatsSummary
                completedCount={stats.completed}
                inProgressCount={stats.inProgress}
                notStartedCount={stats.notStarted}
              />
            </div>
          </div>
        </div>
      </div>

      {showBanner && (
        <SuccessBanner
          message={bannerMessage}
          onClose={() => setShowBanner(false)}
        />
      )}

      {/* Assign task modal: onSuccess uses memoized showSuccess to avoid unnecessary re-renders */}
      <AssignTaskModal
        isOpen={isAssignModalOpen}
        onClose={() => setIsAssignModalOpen(false)}
        onSuccess={showSuccess}
      />
    </>
  );
};

export default AssigningTracking;
