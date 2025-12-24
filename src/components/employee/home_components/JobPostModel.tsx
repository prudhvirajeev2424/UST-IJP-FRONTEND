import { X, MapPin } from "lucide-react";
import { useState } from "react";

const JobPostingModal = () => {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="w-[1520px] h-[928px] bg-white rounded-t-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200 font-sans overflow-hidden ">
      <div className="flex items-center justify-between px-[60px] py-[12px] bg-white">
        <span 
          className="font-normal text-[#231f20]"
          style={{
            fontSize: '20px',
            lineHeight: '24px',
            letterSpacing: '0px',
            fontFamily: 'Rubik, sans-serif'
          }}
        >
    
          {/* <div className="flex items-center justify-between px-[60px] py-[12px] bg-white"> */}
           <div className="ml-[5px] mt-[28px] ">
            <span 
          className="font-normal text-[#231f20]"
          style={{
            fontSize: '20px',
            lineHeight: '24px',
            letterSpacing: '0px',
            fontFamily: 'Rubik, sans-serif'
          }}
        >
          SO : 32443388
        </span>
          </div>
          
        </span>
        <button
          className="text-gray-400 hover:text-gray-600 mr-[-20px] mt-[28px]"
          onClick={() => setOpen(false)}
          aria-label="Close job posting"
        >
          <X size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="flex">

        {/* LEFT — SUMMARY CARD */}
        <div
          className="
            w-[360px] h-[663px]
            bg-[#F2F7F8]
            rounded-[10px]
            px-6 py-6
            ml-[60px]
            mt-[16px]
            md-[195px]
            
          "
        >
          <div className="mb-6">
            <h3 className="text-sm font-medium text-pink-600 mb-2">
              Summary
            </h3>
            <p className="text-sm leading-[22px] text-[#7a7480]">
              Join our team as a Software Development Lead, where you will oversee
              and guide the development of software solutions from concept to
              deployment. This leadership role involves managing a team of
              developers, collaborating with stakeholders, and ensuring projects
              meet quality standards and timelines.
            </p>
          </div>

          <div className="mb-4">
            <span className="text-sm text-gray-500 block mb-1">SO#</span>
            <span className="text-sm text-[#231f20]">32443388</span>
          </div>

          <div className="mb-4">
            <span className="text-sm text-gray-500 block mb-1">
              Role & Band
            </span>
            <span className="text-sm text-[#231f20]">
              Lead 2 - Software Engineer / B2
            </span>
          </div>

          <div className="mb-4">
            <span className="text-sm text-gray-500 block mb-1">Account</span>
            <span className="text-sm font-semibold text-pink-600">
              T-Mobile
            </span>
          </div>

          <div className="mb-4 flex items-center gap-1">
            <MapPin size={14} className="text-gray-500" />
            <span className="text-sm text-[#231f20]">Bangalore</span>
          </div>

          <div>
            <span className="text-sm text-gray-500 block mb-2">
              Hiring Manager
            </span>
            <div className="flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
                className="w-9 h-9 rounded-full object-cover"
                alt="Emily Stephen"
              />
              <span className="text-sm text-[#231f20]">
                Emily Stephen
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — JOB DETAILS */}
        <div
          className="
            w-[1000px] h-[858px]
            bg-[#F2F7F8]
            rounded-t-[10px]
            px-[48px] py-[32px]
            mt-[16.3px]
            ml-[40px]
            mr-[50px]
          "
        >
          {/* Title */}
          <div className="flex justify-between mb-6">
            <h1 className="text-xl font-semibold text-[#231f20]">
              Lead 2 - Software Engineer
            </h1>
            <span className="text-xs text-gray-400">
              Posted in 26 December 2024
            </span>
          </div>

          {/* Job Summary */}
          <div className="mb-6">
            <h2 className="text-base font-medium text-[#231f20] mb-2">
              Job Summary
            </h2>
            <p className="text-sm leading-[22px] text-gray-500">
              We are seeking a highly skilled and experienced Senior Backend
              Software Engineer to join our dynamic technology team. The ideal
              candidate will be responsible for designing, developing, and
              maintaining scalable, robust, and secure backend systems.
            </p>
          </div>

          {/* Key Responsibilities */}
          <div className="mb-6">
            <h2 className="text-base font-medium text-[#231f20] mb-3">
              Key Responsibilities
            </h2>
            <ul className="space-y-2">
              {[
                "Design, develop, and maintain high-performance backend services and APIs.",
                "Collaborate with front-end developers and stakeholders.",
                "Optimize applications for speed and scalability.",
                "Write clean, maintainable, documented code.",
                "Mentor junior engineers and conduct code reviews.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="w-[6px] h-[6px] mt-[8px] rounded-full bg-[#0097AC]" />
                  <span className="text-sm text-gray-500 leading-[22px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-base font-medium text-[#231f20] mb-3">
              Must Have Skills
            </h2>

            <div className="mb-3">
              <span className="text-sm text-gray-500 block mb-2">
                Primary
              </span>
              <div className="flex gap-2 flex-wrap">
                <SkillChip>Java</SkillChip>
                <SkillChip>Node.js</SkillChip>
                <SkillChip>.NET</SkillChip>
                <SkillChip>Python</SkillChip>
              </div>
            </div>

            <div className="mb-3">
              <span className="text-sm text-gray-500 block mb-2">
                Others
              </span>
              <div className="flex gap-2 flex-wrap">
                <SkillChip>Presentation</SkillChip>
                <SkillChip>MS PowerPoint</SkillChip>
                <SkillChip>MS Excel</SkillChip>
              </div>
            </div>

            <span className="text-sm text-gray-500 block mb-2">
              Good to Have Skills
            </span>
            <div className="flex gap-2 flex-wrap">
              <SkillChip>Nextiva</SkillChip>
              <SkillChip>Miro</SkillChip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillChip = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-[5px] text-xs text-[#231f20] bg-[#ECECE1] rounded-full">
    {children}
  </span>
);

export default JobPostingModal;
