import { useState } from "react";
import { Search } from "lucide-react";
import { Sidebar } from "../components/employee/opportunities/Sidebar";
import { JobCard } from "../components/employee/opportunities/JobCard";
import { JobListView } from "../components/employee/opportunities/JobListView";
import sortImg from "../assets/sort.jpg";
import excelImg from "../assets/excel.jpg";
import gridDark from "../assets/gridd.jpg";
import gridLight from "../assets/grid_lite.jpg";
import listDark from "../assets/list.jpg";
import listLight from "../assets/list.jpg";
import JobDetails from "../components/employee/job_details/JobDetails";

// Use old mock data for LISTING (visuals, statuses, repetition)
import { mockJobs } from "../data/mockOpportunitiesData"; // your original repeated data

// Use real unique data for DETAILS page lookup
import { opportunities } from "../data/mockData";

function Opportunities() {
  const [activeTab, setActiveTab] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  const handleViewJobDetails = (displayJobIndex: number) => {
    // Map the displayed job (from mockJobs) to a real unique job ID from opportunities
    const realJobId = opportunities[displayJobIndex % opportunities.length].id;
    setSelectedJobId(realJobId);
  };

  const handleBackToHome = () => {
    setSelectedJobId(null);
  };

  // Filter using mockJobs (keeps your original statuses like Shortlisted, Actioned, Rejected)
  const filteredJobs = mockJobs.filter((job) => {
    if (activeTab === "All") return true;
    if (activeTab === "My Opportunities") return !!job.status;
    if (activeTab === "Shortlisted") return job.status === "Shortlisted";
    if (activeTab === "Applied") return job.status === "Actioned"; // Fixed: only valid status
    return true;
  });

  if (selectedJobId) {
    return <JobDetails jobId={selectedJobId} onBack={handleBackToHome} />;
  }

  return (
    <div className="w-full bg-[#F2F7F8] font-rubik min-h-screen">
      <div className="max-w-[1650px] mx-auto px-[35px] pt-[30px] pb-[50px]">
        {/* ROW 1: Toolbar */}
        <div className="flex items-center gap-[30px] mb-[25px]">
          <h2 className="text-[17px] font-bold text-[#231F20] leading-none shrink-0 w-[330px]">
            Opportunities
          </h2>

          <div className="flex-1 flex items-center justify-between">
            {/* Tabs */}
            <div className="flex gap-1.5">
              {["All", "My Opportunities", "Shortlisted", "Applied"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 h-[30px] rounded-full text-[11px] font-medium transition-all ${
                    activeTab === tab
                      ? "bg-[#003C51] text-white"
                      : "bg-[#E1E9EB] text-[#555]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search + Icons */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C2BCBE]" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-9 pr-4 h-[36px] w-[180px] border border-[#D7E0E3] rounded-md text-[12px] bg-white"
                />
              </div>

              <div className="w-8 h-8 bg-white border border-[#D7E0E3] rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-50">
                <img src={sortImg} alt="Sort" className="w-4" />
              </div>

              <div className="w-8 h-8 bg-white border border-[#D7E0E3] rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-50">
                <img src={excelImg} alt="Export" className="w-4" />
              </div>

              <div className="flex bg-white border border-[#D7E0E3] rounded-md h-8 overflow-hidden">
                <button
                  className={`w-8 flex items-center justify-center border-r border-[#D7E0E3] ${
                    viewMode === "grid" ? "bg-[#F8FDFE]" : ""
                  }`}
                  onClick={() => setViewMode("grid")}
                >
                  <img
                    src={viewMode === "grid" ? gridDark : gridLight}
                    alt="Grid"
                    className="w-[14px]"
                  />
                </button>
                <button
                  className={`w-8 flex items-center justify-center ${
                    viewMode === "list" ? "bg-[#F8FDFE]" : ""
                  }`}
                  onClick={() => setViewMode("list")}
                >
                  <img
                    src={viewMode === "list" ? listDark : listLight}
                    alt="List"
                    className="w-[14px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: Sidebar + Content */}
        <div className="flex gap-[30px] items-start">
          <div className="shrink-0 w-[330px]">
            <Sidebar activeTab={activeTab} />
          </div>

          <div className="flex-1 min-w-0">
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredJobs.map((job, index) => (
                  <JobCard
                    key={`${job.id}-${index}`} // unique key since IDs are repeated
                    job={job}
                    onViewDetails={() => handleViewJobDetails(index)}
                  />
                ))}
              </div>
            ) : (
              <JobListView
                jobs={filteredJobs}
                onViewDetails={(index: number) => handleViewJobDetails(index)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opportunities;