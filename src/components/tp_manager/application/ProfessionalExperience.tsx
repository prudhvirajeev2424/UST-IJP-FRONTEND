import React from 'react';
import type { Job } from '../../../types/candidate';
import JobCard from './JobCard';

interface ProfessionalExperienceProps {
  jobs: Job[];
  totalYears?: number;
  position?: string;
}

const ProfessionalExperience: React.FC<ProfessionalExperienceProps> = ({ 
  jobs, 
  totalYears = 10, 
  position = "Java Developer" 
}) => {
  return (
    <section id="experience" className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        Professional Experience
      </h2>
      <p className="text-sm text-black-600 mb-6">
        Total {totalYears} years as {position}
      </p>
      <div className="space-y-8">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperience;