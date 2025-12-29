import React from 'react';
import type { Job } from '../../../types/candidate';
import SkillTag from './SkillTag';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="ml-8">
      {/* Timeline dot + date row shifted left */}
      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4 -ml-6">
        <div className="w-2 h-2 bg-teal-500 rounded-full" />
        <span>
          {job.startDate} - {job.isPresent ? 'Present' : job.endDate}
        </span>
      </div>

      {/* Job card with uniform background color */}
      <div className="p-6 rounded-lg relative bg-[#F2F7F8] shadow-sm">
        {/* Title + Company */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {job.title}
          <span className="text-gray-600 font-normal"> ({job.company})</span>
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          {job.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;