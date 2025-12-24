import React, { useState, useMemo, useRef, useEffect } from "react";
import xlIcon from "../assets/XlIcon.png";
import AssignTaskModal from "../components/TP_Manager/Assigning_and_Tracking/AssignTaskModal";
import SuccessBanner from "../components/ui/Shared/TP_Manager/Assigning_and_Tracking/SuccessBanner";

import FilterPill from "../components/TP_Manager/Assigning_and_Tracking/dashboard/FilterPill";
import SearchInput from "../components/ui/Shared/TP_Manager/Assigning_and_Tracking/SearchInput";
import StatsSummary from "../components/TP_Manager/Assigning_and_Tracking/dashboard/StatsSummary";
import TaskCard from "../components/TP_Manager/Assigning_and_Tracking/dashboard/TaskCard";
import Navbar from "../components/navbar";
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
      <Navbar />

      {/*
        Scroll wrapper: set height to remaining viewport below navbar and
        enable overflow with a thin 4px scrollbar. Assumption: navbar height
        is about 64px; adjust the calc() value if your navbar height differs.
      */}
      <div className="h-[calc(100vh-64px)] overflow-auto scrollbar-thin-4 bg-[#F2F7F8]">
        <div className="max-w-[1600px] mx-auto px-6 py-6 relative ">
          {/* ================= TOP BAR ================= */}
          <div className="flex items-start justify-between gap-6 mb-6">
            {/* LEFT */}
            <h1 className="font-rubik font-medium text-[18px] leading-[20px] text-[#231F20] whitespace-nowrap mt-6">
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

              <button className="w-[48px] h-[48px] flex items-center justify-center">
                <img
                  src={xlIcon}
                  alt="export"
                  className="w-[48px] h-[48px] object-contain"
                />
              </button>

              <button
                onClick={() => setIsAssignModalOpen(true)}
                className="
                w-[138px]
                h-[49px]
                bg-[#006E74]
                rounded-[4px]
                font-rubik
                font-medium
                text-white
                text-[14px]
                flex
                items-center
                justify-center
                whitespace-nowrap
                hover:bg-[#006E74]
              "
              >
                Assign a task
              </button>
            </div>
          </div>

          <div className="flex items-start gap-6">
            {/* TASK CARDS (LEFT) */}
            <div
              className="
      flex-1
      grid
      gap-5
      grid-cols-[repeat(auto-fill,minmax(280px,1fr))]
      justify-center
    "
            >
              {filteredTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>

            {/* STATS SUMMARY (RIGHT) */}
            {/* <div className="sticky top-6 w-[360px] flex-shrink-0"> */}
            <StatsSummary
              completedCount={stats.completed}
              inProgressCount={stats.inProgress}
              notStartedCount={stats.notStarted}
            />
            {/* </div> */}
          </div>
        </div>
      </div>
      {showBanner && (
        <SuccessBanner
          message={bannerMessage}
          onClose={() => setShowBanner(false)}
        />
      )}

      <AssignTaskModal
        isOpen={isAssignModalOpen}
        onClose={() => setIsAssignModalOpen(false)}
        onSuccess={(msg: string) => showSuccess(msg)}
      />
    </>
  );
};

export default Assigning_and_tracking;
