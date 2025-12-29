import React from 'react';

interface SkillsBadgeProps {
  skills: string[];
  maxDisplay?: number;
}

const SkillsBadge: React.FC<SkillsBadgeProps> = ({ skills, maxDisplay = 2 }) => {
  const displaySkills = skills.slice(0, maxDisplay);
  const remainingCount = skills.length - maxDisplay;

  return (
    <div className="flex items-center gap-2">
      <span className="text-[14px] text-ijp-near-black leading-tight">
        {displaySkills.join(', ')}
      </span>
      {remainingCount > 0 && (
        <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#006E74] bg-white text-[10.5px] font-semibold text-[#006E74] leading-none">
          +{remainingCount}
        </span>
      )}
    </div>
  );
};

export default SkillsBadge;