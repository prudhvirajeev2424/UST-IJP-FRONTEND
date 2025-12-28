import React from 'react';
import type { Certification } from '../../../types/candidate';
import GroupIcon from '../../../assets/certificatecard.svg';

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  return (
    <div className="p-6 bg-[#ECECE1] rounded-lg">
      {/* Icon aligned left */}
      <div className="mb-4">
        <img 
          src={GroupIcon} 
          alt="Certification badge" 
          className="w-12 h-12 object-contain"
        />
      </div>
      {/* Title aligned left */}
      <h3 className="text-sm font-semibold text-gray-900 text-left leading-snug">
        {certification.title}
      </h3>
    </div>
  );
};

export default CertificationCard;