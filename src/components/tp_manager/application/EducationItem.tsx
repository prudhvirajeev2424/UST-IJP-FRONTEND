import React from 'react';
import type { Education } from '../../../types/candidate';

interface EducationItemProps {
  education: Education;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  return (
    <div className="p-4 border rounded-md shadow-sm">
      <h3 className="text-lg font-bold">{education.degree}</h3>
      <p className="text-gray-700">{education.institution}</p>
      <p className="text-sm text-gray-500">
        {education.startYear} - {education.endYear}
      </p>
    </div>
  );
};

export default EducationItem;
