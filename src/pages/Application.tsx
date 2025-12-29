import React, { useState, useEffect, useRef } from "react";
import CandidateHeader from "../components/TP_Manager/application/CandidateHeader";
import Sidebar from "../components/TP_Manager/application/Sidebar";
import Introduction from "../components/TP_Manager/application/Introduction";
import ProfessionalExperience from "../components/TP_Manager/application/ProfessionalExperience";
import Certifications from "../components/TP_Manager/application/Certifications";
import Education from "../components/TP_Manager/application/Education";
import Skills from "../components/TP_Manager/application/Skills";
import Accolades from "../components/TP_Manager/application/Accolades";
import Testimonials from "../components/TP_Manager/application/Testimonials";
import ProjectInfo from "../components/TP_Manager/application/ProjectInfo";
import CoverLetter from "../components/TP_Manager/application/CoverLetter";
import {
  candidateData,
  jobs,
  certifications,
  education,
  skills,
  accolades,
  testimonials,
  projectData,
} from "../data/mockData";
import FilterTab from "../components/ui/FilterTab";
import StatusTabs from "../components/ui/StatusTabs";
import { ApplicationsTable } from "../components/ApplicationsTable";
import RightSideProfileCards from "../components/RightSideProfileCards";
import { mockApplications } from "../data/ApplicationsMockdata";

const Application: React.FC = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const contentRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!contentRef.current) return;

//     const rootEl = contentRef.current;

    const sections = Array.from(
      rootEl.querySelectorAll<HTMLElement>(
        "#introduction, #experience, #certifications, #education, #accolades, #skills, #testimonials"
      )
    );

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visible = entries
//           .filter((e) => e.isIntersecting)
//           .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: rootEl,
        threshold: 0.2,
        rootMargin: "0px 0px -40% 0px",
      }
    );

//     sections.forEach((s) => observer.observe(s));
//     return () => observer.disconnect();
//   }, []);

  const handleSectionChange = (id: string) => {
    setActiveSection(id);
    const section = contentRef.current?.querySelector<HTMLElement>(`#${id}`);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F2F7F8" }}>
      {/* CandidateHeader - directly below navbar */}
      <CandidateHeader candidate={candidateData} />

      <div className="flex px-8 py-6 space-x-6">
        {/* Left Sidebar */}
        <Sidebar
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />

//         {/* Main Content Panel */}
//         <div
//           ref={contentRef}
//           className="flex-1 bg-white rounded-lg shadow-sm p-8 overflow-y-auto max-h-[calc(100vh-180px)] scrollbar-hide scroll-smooth"
//         >
//           <section id="introduction" className="scroll-mt-20">
//             <Introduction introduction={candidateData.introduction} />
//           </section>

//           <section id="experience" className="scroll-mt-20">
//             <ProfessionalExperience jobs={jobs} />
//           </section>

//           <section id="certifications" className="scroll-mt-20">
//             <Certifications certifications={certifications} />
//           </section>

//           <section id="education" className="scroll-mt-20">
//             <Education education={education} />
//           </section>

//           <section id="accolades" className="scroll-mt-20">
//             <Accolades accolades={accolades} />
//           </section>

//           <section id="skills" className="scroll-mt-20">
//             <Skills skills={skills} />
//           </section>

//           <section id="testimonials" className="scroll-mt-20">
//             <Testimonials testimonials={testimonials} />
//           </section>
//         </div>

//         {/* Right Sidebar - Project Info & Cover Letter */}
//         <div className="w-80 flex-shrink-0 space-y-6 sticky top-6 self-start">
//           <ProjectInfo project={projectData} />
//           <CoverLetter coverLetter={projectData.coverLetter} />
//         </div>
//       </div>
//     </div>
//   );
// };

export default Application;

// ApplicationsPage: composes StatusTabs, FilterTab and table/kanban content
export const ApplicationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  // default to kanban so navigating to applications shows Kanban view first
  const [view, setView] = useState<"table" | "kanban">("kanban");

  return (
    <div className="min-h-screen bg-[#F2F7F8]">
      {/* Reusable header with tabs, search and view toggle */}
      <StatusTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onViewChange={setView}
        view={view}
      />

      <div className="flex flex-col md:flex-row px-4 md:px-8 items-start gap-6 lg:gap-12">
        {/* Left Filter Panel */}
        <div className="w-full md:w-[380px] xl:w-[420px] flex-shrink-0">
          <FilterTab />
        </div>

        {/* Right Content Area */}
        <div className="flex-1 w-full min-w-0">
          <div className="bg-white rounded-lg shadow-sm w-full overflow-hidden">
            {view === "table" ? (
              <div className="w-full max-h-[calc(100vh-220px)] overflow-auto md:max-h-none md:overflow-visible">
                <ApplicationsTable applications={mockApplications} />
              </div>
            ) : (
              <RightSideProfileCards />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
