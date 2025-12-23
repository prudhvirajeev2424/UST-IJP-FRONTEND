import React, { useState, useMemo, useRef, useEffect } from "react";
import Header from "../components/TP_Manager/Assigning_and_Tracking/layout/Header";
import xlIcon from "../assets/XlIcon.png";

import FilterPill from "../components/ui/Shared/TP_Manager/Assigning_and_Tracking/FilterPill";
import SearchInput from "../components/ui/Shared/TP_Manager/Assigning_and_Tracking/SearchInput";
import Button from "../components/ui/Shared/TP_Manager/Assigning_and_Tracking/Button";
import AssignTaskModal from "../components/TP_Manager/Assigning_and_Tracking/AssignTaskModal";
import SuccessBanner from "../components/ui/Shared/TP_Manager/Assigning_and_Tracking/SuccessBanner";
import StatsSummary from "../components/TP_Manager/Assigning_and_Tracking/dashboard/StatsSummary";
import TaskCard from "../components/TP_Manager/Assigning_and_Tracking/dashboard/TaskCard";

import { mockTasks } from "../data/TPManagerAssigningandTrackingMockData";
import { type FilterType } from "../types/AssigningandTrackingTypes";

const Assigning_and_tracking: React.FC = () => {
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showBanner, setShowBanner] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("");
  const bannerTimerRef = useRef<number | null>(null);

  const showSuccess = (message: string) => {
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
    bannerTimerRef.current = id;
  };

  useEffect(() => {
    return () => {
      if (bannerTimerRef.current) clearTimeout(bannerTimerRef.current);
    };
  }, []);

  /* ---------------- FILTER TASKS ---------------- */
  const filteredTasks = useMemo(() => {
    let tasks = [...mockTasks];

    if (activeFilter === "below50") {
      tasks = tasks.filter((t) => t.progress < 50);
    }
    if (activeFilter === "above50") {
      tasks = tasks.filter((t) => t.progress >= 50);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      tasks = tasks.filter(
        (t) =>
          t.user.name.toLowerCase().includes(q) ||
          t.title.toLowerCase().includes(q)
      );
    }

    return tasks;
  }, [activeFilter, searchQuery]);

  /* ---------------- STATS ---------------- */
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
      <Header />

      {showBanner && (
        <SuccessBanner
          message={bannerMessage}
          onClose={() => setShowBanner(false)}
        />
      )}

      <div className="max-w-[1600px] mx-auto px-6 py-6">
        {/* ================= TOP BAR ================= */}
        <div className="flex items-center justify-between gap-6 mb-6">
          {/* LEFT */}
          <h1 className="text-base font-medium text-dark whitespace-nowrap">
            Task & Course Tracker
          </h1>

          {/* CENTER */}
          <div className="flex items-center gap-2">
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

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <SearchInput value={searchQuery} onChange={setSearchQuery} />

            <button className="h-9 w-9 flex items-center justify-center bg-white border border-gray-light rounded-md hover:bg-gray-50">
              <img src={xlIcon} alt="export" className="w-6 h-6" />
            </button>

            <Button
              variant="primary"
              onClick={() => setIsAssignModalOpen(true)}
            >
              Assign a task
            </Button>
          </div>
        </div>

        {/* ================= CONTENT GRID ================= */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 items-start">
          {/* TASK CARDS */}
          <div className="xl:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>

          {/* STATS SUMMARY */}
          <div className="xl:col-span-1 self-start">
            <StatsSummary
              completedCount={stats.completed}
              inProgressCount={stats.inProgress}
              notStartedCount={stats.notStarted}
            />
          </div>
        </div>
      </div>
      <AssignTaskModal
        isOpen={isAssignModalOpen}
        onClose={() => setIsAssignModalOpen(false)}
        onSuccess={(msg: string) => showSuccess(msg)}
      />
    </>
  );
};

export default Assigning_and_tracking;
