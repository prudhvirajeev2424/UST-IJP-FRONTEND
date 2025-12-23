import type { ProfileSummary } from "../../types/profilesummary";
 
interface SidebarProps {
  profile: ProfileSummary;
}
 
export function Sidebar({ profile }: SidebarProps) {
  return (
    <aside className="flex-shrink-0 pt-6 w-[360px]">
      <div className='w-full min-h-[479px] relative rounded-lg p-5 cursor-pointer shadow-lg overflow-hidden bg-white'>
        {/* Profile Summary */}
        <div className="mt-[40px] mx-[30px]">
          <h3 className="text-sm font-medium text-text-muted mb-3">Profile Summary</h3>
          <p className="text-sm text-text-primary leading-relaxed">
            {profile.description}
          </p>
        </div>
 
        {/* Primary Skills */}
        <div className="mt-[40px] mx-[30px]">
          <h3 className="text-sm font-medium text-text-muted mb-3">Primary Skills</h3>
          <div className="flex flex-wrap gap-1">
            {profile.primarySkills.map((skill) => (
              <span key={skill} className="rounded-3xl p-2 border-2 border-opacity-10 border-success text-success bg-success bg-opacity-10">
                {skill}
              </span>
            ))}
          </div>
        </div>
 
      </div>
    </aside>
  );
}
 