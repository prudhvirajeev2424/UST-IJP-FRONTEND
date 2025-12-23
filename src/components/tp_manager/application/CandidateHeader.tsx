import React from 'react';
import { Phone, Mail } from 'lucide-react';
import type { Candidate } from '../../../types/candidate';
import Avatar from './Avatar';
import Button from './Button';

interface CandidateHeaderProps {
  candidate: Candidate;
}

const CandidateHeader: React.FC<CandidateHeaderProps> = ({ candidate }) => {
  return (
    <div className="bg-[#1e3a4c] text-white px-8 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar src={candidate.avatar} alt={candidate.name} size="md" />
          <div>
            <h1 className="text-xl font-semibold">{candidate.name}</h1>
            <p className="text-sm text-gray-300">{candidate.position}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
  <div className="flex items-center space-x-2">
    <Phone className="w-4 h-4" />
    <span className="text-sm">{candidate.phone}</span>
  </div>
  <div className="flex items-center space-x-2">
    <Mail className="w-4 h-4" />
    <span className="text-sm">{candidate.email}</span>
  </div>
</div>

        <div className="text-right">
          <div className="text-xs text-gray-300">Reporting Manager</div>
          <div className="text-sm font-medium">{candidate.reportingManager}</div>
        </div>
        <div className="flex space-x-3">
          <Button variant="secondary">Reject</Button>
          <Button variant="primary">Shortlist</Button>
        </div>
      </div>
    </div>
  );
};

export default CandidateHeader;