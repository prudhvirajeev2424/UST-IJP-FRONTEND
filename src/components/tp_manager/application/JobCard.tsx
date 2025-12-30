import React from 'react';
import type { Job } from '../../../types/candidate';
import SkillTag from './SkillTag';

interface JobCardProps {
  job: Job;
  /** Hex color for the dot and connector; parent can pass different colors per job */
  dotColor?: string;
}

const JobCard: React.FC<JobCardProps> = ({ job, dotColor = '#14b8a6' }) => {
  return (
    <div className="ml-8">
      {/* Timeline dot + date row shifted left */}
      <div className="flex items-center space-x-2 text-sm mb-4 -ml-6">
        {/* give the dot a data attribute so the parent can measure its position */}
        <div
          data-timeline-dot
          className="w-2 h-2 rounded-full"
          style={{ background: dotColor, zIndex: 20 }}
        />

        {/* date text should be dark gray (not the dot color) */}
        <span style={{ color: '#374151' }}>
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