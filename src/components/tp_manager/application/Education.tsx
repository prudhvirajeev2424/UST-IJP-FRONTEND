import React from 'react';
import type { Education as EducationType } from '../../../types/candidate';
import EducationItem from './EducationItem';

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Education</h2>
      <div className="space-y-8">
        {education.map((edu) => (
          <EducationItem key={edu.id} education={edu} />
        ))}
      </div>
    </section>
  );
};

export default Education;