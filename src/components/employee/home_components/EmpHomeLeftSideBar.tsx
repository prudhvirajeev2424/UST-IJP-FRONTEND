import type { ProfileSummary } from "../../../types/profilesummary";
import { AlertCircle, ArrowRight } from 'lucide-react';
 
interface SidebarProps {
  profile: Omit<ProfileSummary, "resumeUpdated">;
  hasresume:any
  handleresume:any
}
 
export function EmpHomeLeftSideBar({ profile ,hasresume,handleresume}: SidebarProps) {
  const { description,primarySkills} = profile
  const hasResume = hasresume
  const handleResumeClick = handleresume
  
  return (
    <aside className="flex-shrink-0 pt-6 w-[360px]">
      <div className="w-full min-h-[479px] relative rounded-lg cursor-pointer shadow-lg overflow-hidden bg-white">
        {/* Profile Summary */}
        <div className="mt-[40px] mx-[30px] mt-[40px]">
          <h3 className="text-left font-medium text-text-muted mb-3 opacity-60 ">
            Profile Summary
          </h3>
          <p className="text-left text-text-primary leading-relaxed ">
            {description}
          </p>
        </div>

        {/* Primary Skills */}
        <div className="mt-[40px] mx-[30px]">
          <h3 className="text-left font-medium text-text-muted mb-3 opacity-60">
            Primary Skills
          </h3>
          <div className="flex flex-wrap gap-1">
            {primarySkills.map((skill) => (
              <span
                key={skill}
                className="rounded-3xl p-2 border-2 border-opacity-10 border-success text-success bg-success bg-opacity-10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div >
          {hasResume ? (
            <div className="">
            <button
              onClick={handleResumeClick}
              className="w-full flex items-center justify-between py-3 px-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <img
                    src="src\assets\Icon ionic-md-contact.svg"
                    alt="UST Logo"
                    className="w-4 h-4"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">Resume</p>
                  <p className="text-xs text-muted-foreground">
                    Updated: 6 months ago
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-primary" />
            </button>
            </div>
          ) : (
            // <div className="flex items-center justify-between  bg-muted/30 rounded-lg w-[300px] h-[76.8px] ml-[30px] mb-[40.63px] mr=[30px]">
            <div className="
              h-[76.38px] w-[300px]
              bg-[#006E74]/5
              border border-[#006E74]/5
              rounded-[10px]
              mt-[48px] mb-[40.63px]
              ml-[30px] mr-[30px]
              flex items-center 
            ">
  {/* <div className="flex items-center gap-[12px]"> */}
    <img
      src="src/assets/Icon ionic-md-contact.svg"
      alt="UST Logo"
      className="w-[36px] h-[36px] text-[#7A7480] ml-[30px] mb-[20px] mt-[20.38px] "
    />
    <span className="text-sm ml-[10px] mr-[33px]">Resume not found</span>
  

  <AlertCircle className="text-[#FC6A59] mr-[30px] color-red" />
  {/* </div> */}
</div>
 )}
        </div>
      </div>
    </aside>
  );
}
 