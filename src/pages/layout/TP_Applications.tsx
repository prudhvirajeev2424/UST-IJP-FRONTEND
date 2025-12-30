import React, { useState, useEffect, useRef } from "react";
import CandidateHeader from "../../components/tp_manager/application/CandidateHeader";
import Sidebar from "../../components/tp_manager/application/Sidebar";
import Introduction from "../../components/tp_manager/application/Introduction";
import ProfessionalExperience from "../../components/tp_manager/application/ProfessionalExperience";
import Certifications from "../../components/tp_manager/application/Certifications";
import Education from "../../components/tp_manager/application/Education";
import Skills from "../../components/tp_manager/application/Skills";
import Accolades from "../../components/tp_manager/application/Accolades";
import Testimonials from "../../components/tp_manager/application/Testimonials";
import ProjectInfo from "../../components/tp_manager/application/ProjectInfo";
import CoverLetter from "../../components/tp_manager/application/CoverLetter";

import { 
  candidateData, 
  jobs, 
  certifications, 
  education, 
  skills, 
  accolades, 
  testimonials, 
  projectData 
} from '../../data/mockData';
import { profiles } from '../../data/profiles';
import type { Candidate } from '../../types/candidate';

interface TPApplicationsProps {
  profileId?: string | undefined;
}

const TP_Applications: React.FC<TPApplicationsProps> = ({ profileId }) => {
  const [activeSection, setActiveSection] = useState('introduction');
  const contentRef = useRef<HTMLDivElement>(null);
  const [candidate, setCandidate] = useState<Candidate | null>(candidateData);

  useEffect(() => {
    if (!profileId) {
      setCandidate(candidateData);
      return;
    }

    const found = profiles.find((p) => p.id === profileId);
    if (found) {
      const mapped: Candidate = {
        id: found.id,
        name: found.name,
        position: found.developer ?? 'Developer',
        phone: found.uid ?? 'N/A',
        email: '',
        avatar: found.avatar ?? '',
        reportingManager: 'N/A',
        introduction: candidateData.introduction ?? found.name,
      };

      setCandidate(mapped);
    } else {
      setCandidate(candidateData);
    }
  }, [profileId]);

  useEffect(() => {
    if (!contentRef.current) return;

    const rootEl = contentRef.current;

    const sections = Array.from(
      rootEl.querySelectorAll<HTMLElement>(
        "#introduction, #experience, #certifications, #education, #accolades, #skills, #testimonials"
      )
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

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

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleSectionChange = (id: string) => {
    setActiveSection(id);
    const section = contentRef.current?.querySelector<HTMLElement>(`#${id}`);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div 
      className="h-full w-full overflow-hidden" 
      style={{ backgroundColor: '#F2F7F8' }}
    >
      {/* CandidateHeader - directly below navbar */}
      <CandidateHeader candidate={candidate ?? candidateData} />

      <div className="flex px-8 py-6 space-x-6 h-[calc(100%-140px)]">
        {/* Left Sidebar */}
        <Sidebar
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />

        {/* Main Content Panel */}
        <div
          ref={contentRef}
          className="flex-1 bg-white rounded-lg shadow-sm p-8 overflow-y-auto scrollbar-hide scroll-smooth"
        >
          <section id="introduction" className="scroll-mt-20">
            <Introduction introduction={candidate?.introduction ?? candidateData.introduction} />
          </section>

          <section id="experience" className="scroll-mt-20">
            <ProfessionalExperience jobs={jobs} />
          </section>

          <section id="certifications" className="scroll-mt-20">
            <Certifications certifications={certifications} />
          </section>

          <section id="education" className="scroll-mt-20">
            <Education education={education} />
          </section>

          <section id="accolades" className="scroll-mt-20">
            <Accolades accolades={accolades} />
          </section>

          <section id="skills" className="scroll-mt-20">
            <Skills skills={skills} />
          </section>

          <section id="testimonials" className="scroll-mt-20">
            <Testimonials testimonials={testimonials} />
          </section>
        </div>

        {/* Right Sidebar - Project Info & Cover Letter */}
        <div className="w-80 flex-shrink-0 space-y-6 overflow-y-auto scrollbar-hide max-h-full">
          <ProjectInfo project={projectData} />
          <CoverLetter coverLetter={projectData.coverLetter} />
        </div>
      </div>
    </div>
  );
};

export default TP_Applications;