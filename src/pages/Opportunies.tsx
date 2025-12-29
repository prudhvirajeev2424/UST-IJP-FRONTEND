// // THIS IS THE FILE REPLACING APP.TSX GETS THE COMPONENTS FOR OPPORTUNITES PAGE

// import { useState } from "react";
// import { Search } from "lucide-react";
// import { Header } from "../components/employee/opportunities/Header";
// import { Sidebar } from "../components/employee/opportunities/Sidebar";
// import { JobCard } from "../components/employee/opportunities/JobCard";
// import { JobListView } from "../components/employee/opportunities/JobListView";
// import { NotificationPanel } from "../components/employee/opportunities/NotificationPanel";
// import { mockJobs } from "../data/mockOpportunitiesData";

// // Assets
// import sortImg from "../assets/sort.jpg";
// import excelImg from "../assets/excel.jpg";
// import gridDark from "../assets/gridd.jpg";
// import gridLight from "../assets/grid_lite.jpg";
// import listDark from "../assets/list.jpg";
// import listLight from "../assets/list.jpg";

// function Opportunities() {
//   const [showNoti, setShowNoti] = useState(false);
//   const [activeTab, setActiveTab] = useState("All");
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

//   // Logic: Fetch/Filter data based on application status when 'Applied' is clicked
//   const filteredJobs = mockJobs.filter((job) => {
//     if (activeTab === "Applied") return !!job.status; // Show only jobs with a status
//     if (activeTab === "Shortlisted") return job.status === "Shortlisted";
//     // Add other tab logic here if needed
//     return true;
//   });

//   return (
//     <div className="min-h-screen w-full bg-[#F2F7F8] font-rubik flex flex-col overflow-x-hidden">
//       <Header onBellClick={() => setShowNoti(!showNoti)} />

//       {showNoti && <NotificationPanel onClose={() => setShowNoti(false)} />}

//       <div className="w-full pl-[60px] pr-[60px] pt-[50px] pb-[60px]">
//         <div className="grid grid-cols-[420px_1fr] gap-x-[40px] gap-y-[30px] items-center">
//           <h2 className="text-[20px] font-bold text-[#231F20] leading-none">
//             Opportunities
//           </h2>

//           <div className="flex items-center justify-between h-[49px]">
//             <div className="flex gap-2">
//               {["All", "My Opportunities", "Shortlisted", "Applied"].map(
//                 (tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-5 h-[40px] rounded-full text-[13px] font-medium transition-all flex items-center justify-center whitespace-nowrap ${
//                       activeTab === tab
//                         ? "bg-[#003C51] text-white"
//                         : "bg-[#E1E9EB] text-[#555]"
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 )
//               )}
//             </div>

//             <div className="flex items-center gap-4">
//               <div className="relative">
//                 <Search
//                   size={18}
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C2BCBE]"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className="pl-10 pr-4 h-[45px] w-[280px] border border-[#D7E0E3] rounded-md outline-none text-sm bg-white focus:border-[#006E74]"
//                 />
//               </div>
//               <div className="w-11 h-11 bg-white border border-[#D7E0E3] rounded-md flex items-center justify-center cursor-pointer">
//                 <img src={sortImg} alt="Sort" className="w-5" />
//               </div>
//               <div className="w-11 h-11 bg-white border border-[#D7E0E3] rounded-md flex items-center justify-center cursor-pointer">
//                 <img src={excelImg} alt="Excel" className="w-5" />
//               </div>
//               <div className="flex bg-white border border-[#D7E0E3] rounded-md h-11 overflow-hidden">
//                 <button
//                   className={`w-11 flex items-center justify-center border-r border-[#D7E0E3] ${
//                     viewMode === "grid" ? "bg-[#F8FDFE]" : ""
//                   }`}
//                   onClick={() => setViewMode("grid")}
//                 >
//                   <img
//                     src={viewMode === "grid" ? gridDark : gridLight}
//                     alt="Grid"
//                     className="w-[18px]"
//                   />
//                 </button>
//                 <button
//                   className={`w-11 flex items-center justify-center ${
//                     viewMode === "list" ? "bg-[#F8FDFE]" : ""
//                   }`}
//                   onClick={() => setViewMode("list")}
//                 >
//                   <img
//                     src={viewMode === "list" ? listDark : listLight}
//                     alt="List"
//                     className="w-[18px]"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="self-start">
//             {/* Pass the activeTab to Sidebar to change sections dynamically */}
//             <Sidebar activeTab={activeTab} />
//           </div>

//           <div className="self-start">
//             {viewMode === "grid" ? (
//               <div className="grid grid-cols-[repeat(4,1fr)] gap-3">
//                 {filteredJobs.map((job, index) => (
//                   <JobCard key={index} job={job} />
//                 ))}
//               </div>
//             ) : (
//               <JobListView jobs={filteredJobs} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Opportunities;


// import { useState } from "react";
// import { Search } from "lucide-react";
// import { Header } from "../components/employee/opportunities/Header";
// import { Sidebar } from "../components/employee/opportunities/Sidebar";
// import { JobCard } from "../components/employee/opportunities/JobCard";
// import { JobListView } from "../components/employee/opportunities/JobListView";
// import { NotificationPanel } from "../components/employee/opportunities/NotificationPanel";
// import { mockJobs } from "../data/mockOpportunitiesData";

// import sortImg from "../assets/sort.jpg";
// import excelImg from "../assets/excel.jpg";
// import gridDark from "../assets/gridd.jpg";
// import gridLight from "../assets/grid_lite.jpg";
// import listDark from "../assets/list.jpg";
// import listLight from "../assets/list.jpg";

// function Opportunities() {
//   const [showNoti, setShowNoti] = useState(false);
//   const [activeTab, setActiveTab] = useState("All");
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

//   const filteredJobs = mockJobs.filter((job) => {
//     if (activeTab === "Applied") return !!job.status;
//     if (activeTab === "Shortlisted") return job.status === "Shortlisted";
//     return true;
//   });

//   return (
//     <div className="min-h-screen w-full bg-[#F2F7F8] font-rubik flex flex-col overflow-x-hidden">
//       <Header onBellClick={() => setShowNoti(!showNoti)} />
//       {showNoti && <NotificationPanel onClose={() => setShowNoti(false)} />}

//       <div className="w-full max-w-[1700px] mx-auto px-[20px] pt-[30px] pb-[50px]">
//         {/* 2x2 PRECISION GRID: Row 1 = Toolbar, Row 2 = Cards */}
//         <div className="grid grid-cols-[300px_1fr] gap-x-[20px] gap-y-[25px] items-center">
          
//           {/* Row 1, Col 1 */}
//           <h2 className="text-[18px] font-bold text-[#231F20] leading-none">Opportunities</h2>

//           {/* Row 1, Col 2: Toolbar perfectly aligned */}
//           <div className="flex items-center justify-between h-[45px]">
//             <div className="flex gap-1.5">
//               {["All", "My Opportunities", "Shortlisted", "Applied"].map((tab) => (
//                 <button key={tab} onClick={() => setActiveTab(tab)}
//                   className={`px-4 h-[32px] rounded-full text-[11px] font-medium transition-all flex items-center justify-center ${
//                     activeTab === tab ? "bg-[#003C51] text-white" : "bg-[#E1E9EB] text-[#555]"
//                   }`}
//                 > {tab} </button>
//               ))}
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="relative">
//                 <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C2BCBE]" />
//                 <input type="text" placeholder="Search" className="pl-9 pr-4 h-[38px] w-[180px] border border-[#D7E0E3] rounded-md outline-none text-[12px] bg-white" />
//               </div>
//               <div className="w-9 h-9 bg-white border border-[#D7E0E3] rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-50"><img src={sortImg} alt="S" className="w-4" /></div>
//               <div className="w-9 h-9 bg-white border border-[#D7E0E3] rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-50"><img src={excelImg} alt="E" className="w-4" /></div>
//               <div className="flex bg-white border border-[#D7E0E3] rounded-md h-9 overflow-hidden">
//                 <button className={`w-9 flex items-center justify-center border-r border-[#D7E0E3] ${viewMode === "grid" ? "bg-[#F8FDFE]" : ""}`} onClick={() => setViewMode("grid")}><img src={viewMode === "grid" ? gridDark : gridLight} alt="G" className="w-[14px]" /></button>
//                 <button className={`w-9 flex items-center justify-center ${viewMode === "list" ? "bg-[#F8FDFE]" : ""}`} onClick={() => setViewMode("list")}><img src={viewMode === "list" ? listDark : listLight} alt="L" className="w-[14px]" /></button>
//               </div>
//             </div>
//           </div>

//           {/* Row 2, Col 1 */}
//           <div className="self-start"><Sidebar activeTab={activeTab} /></div>

//           {/* Row 2, Col 2 */}
//           <div className="self-start">
//             {viewMode === "grid" ? (
//               <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-4">
//                 {filteredJobs.map((job, index) => <JobCard key={index} job={job} />)}
//               </div>
//             ) : (
//               <JobListView jobs={filteredJobs} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Opportunities;

import { useState } from "react";
import { Search } from "lucide-react";
import { Sidebar } from "../components/employee/opportunities/Sidebar";
import { JobCard } from "../components/employee/opportunities/JobCard";
import { JobListView } from "../components/employee/opportunities/JobListView";
import { mockJobs } from "../data/mockOpportunitiesData";

import sortImg from "../assets/sort.jpg";
import excelImg from "../assets/excel.jpg";
import gridDark from "../assets/gridd.jpg";
import gridLight from "../assets/grid_lite.jpg";
import listDark from "../assets/list.jpg";
import listLight from "../assets/list.jpg";

function Opportunities() {
  const [activeTab, setActiveTab] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredJobs = mockJobs.filter((job) => {
    if (activeTab === "Applied") return !!job.status;
    if (activeTab === "Shortlisted") return job.status === "Shortlisted";
    return true;
  });

  return (
    <div className="w-full max-w-[1700px] mx-auto px-[35px] pt-[30px] pb-[50px] font-rubik">
      {/* Main 2x2 Grid: Aligns "Opportunities" Title and Filter Tabs on one row */}
      <div className="grid grid-cols-[380px_1fr] gap-x-[35px] gap-y-[22px] items-center">
        
        {/* ROW 1 */}
        <h2 className="text-[18px] font-bold text-[#231F20] leading-none">Opportunities</h2>

        <div className="flex items-center justify-between h-[45px]">
          <div className="flex gap-1.5">
            {["All", "My Opportunities", "Shortlisted", "Applied"].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-4 h-[32px] rounded-full text-[11px] font-medium transition-all flex items-center justify-center whitespace-nowrap ${
                  activeTab === tab ? "bg-[#003C51] text-white" : "bg-[#E1E9EB] text-[#555]"
                }`}
              > {tab} </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C2BCBE]" />
              <input type="text" placeholder="Search" className="pl-9 pr-4 h-[36px] w-[200px] border border-[#D7E0E3] rounded-md outline-none text-[12px] bg-white focus:border-[#006E74]" />
            </div>
            <div className="w-9 h-9 bg-white border border-[#D7E0E3] rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-50"><img src={sortImg} alt="S" className="w-4" /></div>
            <div className="w-9 h-9 bg-white border border-[#D7E0E3] rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-50"><img src={excelImg} alt="E" className="w-4" /></div>
            <div className="flex bg-white border border-[#D7E0E3] rounded-md h-9 overflow-hidden">
              <button className={`w-9 flex items-center justify-center border-r border-[#D7E0E3] ${viewMode === "grid" ? "bg-[#F8FDFE]" : ""}`} onClick={() => setViewMode("grid")}><img src={viewMode === "grid" ? gridDark : gridLight} alt="G" className="w-[14px]" /></button>
              <button className={`w-9 flex items-center justify-center ${viewMode === "list" ? "bg-[#F8FDFE]" : ""}`} onClick={() => setViewMode("list")}><img src={viewMode === "list" ? listDark : listLight} alt="L" className="w-[14px]" /></button>
            </div>
          </div>
        </div>

        {/* ROW 2: Starts both components at the same height */}
        <div className="self-start"><Sidebar activeTab={activeTab} /></div>

        <div className="self-start">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-4">
              {filteredJobs.map((job, index) => <JobCard key={index} job={job} />)}
            </div>
          ) : (
            <JobListView jobs={filteredJobs} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Opportunities;