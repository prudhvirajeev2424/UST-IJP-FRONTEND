import React from 'react';
import type { Education } from '../../../types/candidate';
import EducationIcon from '../../../assets/Education.svg';

interface EducationItemProps {
  education: Education;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  return (
    <div className="ml-8">
      {/* Timeline dot + date row */}
      <div className="flex items-center space-x-2 text-sm mb-4 -ml-6">
        <div
          data-timeline-dot
          className="w-2 h-2 rounded-full"
          style={{ background: '#14b8a6', zIndex: 20 }}
        />
        <span style={{ color: '#374151' }}>
          {education.startYear} - {education.endYear}
        </span>
      </div>

      {/* Education card */}
      <div className="p-6 rounded-lg relative bg-[#F2F7F8] shadow-sm flex items-start space-x-4">
        {/* Icon directly (no container) */}
        <img 
          src={EducationIcon} 
          alt="Education" 
          className="w-25 h-25"
        />

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {education.degree}
          </h3>
          <p className="text-sm text-gray-600">
            {education.institution}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
