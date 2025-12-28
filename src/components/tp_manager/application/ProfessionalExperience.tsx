import React from 'react';
import type { Job } from '../../../types/candidate';
import JobCard from './JobCard';

interface ProfessionalExperienceProps {
  jobs: Job[];
}

const ProfessionalExperience: React.FC<ProfessionalExperienceProps> = ({ jobs }) => {
  return (
    <section id="experience" className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Professional Experience
      </h2>
      <div className="space-y-8">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperience;