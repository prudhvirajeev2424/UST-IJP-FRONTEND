import type { ProfileSummary } from "../../../types/profilesummary";
 
interface SidebarProps {
  profile: Omit<ProfileSummary, "resumeUpdated">;
  hasresume:any
  handleresume:any
}
 
export function EmpHomeLeftSideBar({ profile ,hasresume,handleresume}: SidebarProps) {
  const { description,primarySkills} = profile
  const {hasResume} = hasresume
  const handleResumeClick = handleresume
  
  return (
    <aside className="flex-shrink-0 pt-6 w-[360px]">
      <div className='w-full min-h-[479px] relative rounded-lg p-5 cursor-pointer shadow-lg overflow-hidden bg-white'>
        {/* Profile Summary */}
        <div className="mt-[40px] mx-[30px]">
          <h3 className="text-sm font-medium text-text-muted mb-3">Profile Summary</h3>
          <p className="text-sm text-text-primary leading-relaxed">
            {description}
          </p>
        </div>
 
        {/* Primary Skills */}
        <div className="mt-[40px] mx-[30px]">
          <h3 className="text-sm font-medium text-text-muted mb-3">Primary Skills</h3>
          <div className="flex flex-wrap gap-1">
            {primarySkills.map((skill) => (
              <span key={skill} className="rounded-3xl p-2 border-2 border-opacity-10 border-success text-success bg-success bg-opacity-10">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {hasResume ? (
                    <button
                      onClick={handleResumeClick}
                      className="w-full flex items-center justify-between py-3 px-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-medium text-foreground">Resume</p>
                          <p className="text-xs text-muted-foreground">Updated: 6 months ago</p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </button>
                  ) : (
                    <div className="flex items-center justify-between py-2 px-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span>Resume not found</span>
                      </div>
                      <AlertCircle className="w-4 h-4 text-coral" />
                    </div>
                  )}
 
      </div>
    </aside>
  );
}
 