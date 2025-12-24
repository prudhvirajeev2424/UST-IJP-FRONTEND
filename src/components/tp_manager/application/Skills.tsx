import React from 'react';
import type { Skill } from '../../../types/candidate';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill.id} 
            className="px-4 py-2 bg-[#ECECE1] text-gray-800 rounded-full text-sm font-medium"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;