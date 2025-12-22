import React, { useState, useMemo } from "react";
import MainLayout from "../components/TP_Manager_Assigning_and_tracking_layouts/TP_Manager_Assigning_and_tracking_MainLayout";
import Header from "../components/TP_Manager_Assigning_and_tracking_layouts/TP_Manager_Assigning_and_tracking_Header";
import xlIcon from "../assets/TP_Manager_Assigning_and_tracking_xl_icon.png";

import FilterPill from "../components/ui/TP_Manager_Assigning_and_tracking_FilterPill";
import SearchInput from "../components/ui/TP_Manager_Assigning_and_tracking_SearchInput";
import Button from "../components/ui/TP_Manager_Assigning_and_tracking_Button";
import StatsSummary from "../components/TP_Manager_Assigning_and_tracking_dashboard/TP_Manager_Assigning_and_tracking_right_StatsSummary";
import TaskCard from "../components/TP_Manager_Assigning_and_tracking_dashboard/TP_Manager_Assigning_and_tracking_middle_TaskCard";

import { mockTasks } from "../data/TP_Manager_Assigning_and_tracking_mock_data";
import { type FilterType } from "../types/TP_Manager_Assigning_and_tracking_activity";

const Assigning_and_tracking: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [searchQuery, setSearchQuery] = useState("");

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
    <MainLayout>
      <Header />

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

            <Button variant="primary">Assign a task</Button>
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
    </MainLayout>
  );
};

export default Assigning_and_tracking;
