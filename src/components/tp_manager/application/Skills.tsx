import React from "react";
import type { Skill } from "../../../types/candidate";

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Skills</h2>
      <div className="flex flex-col gap-2">
        {(() => {
          const rows: (typeof skills)[] = [];
          for (let i = 0; i < skills.length; i += 4) {
            rows.push(skills.slice(i, i + 4));
          }
          return rows.map((row, rowIdx) => (
            <div key={rowIdx} className="flex gap-2">
              {row.map((skill) => (
                <span
                  key={skill.id}
                  className="inline-block px-3 py-1 bg-[#ECECE1] text-gray-800 rounded-full text-sm font-medium"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          ));
        })()}
      </div>
    </section>
  );
};

export default Skills;
