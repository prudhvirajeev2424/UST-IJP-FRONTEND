import React from 'react';

interface SkillTagProps {
  skill: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => {
  return (
    <span className="px-3 py-1 bg-[#ECECE1] text-gray-800 text-sm rounded-full">
      {skill}
    </span>
  );
};

export default SkillTag;