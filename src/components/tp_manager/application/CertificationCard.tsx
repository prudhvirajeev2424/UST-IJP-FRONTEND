import React from 'react';
import type { Certification } from '../../../types/candidate';
import GroupIcon from '../../assets/Group.svg'; // adjust path if needed

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg text-center">
      {/* Show the image aligned left */}
      <div className="mx-auto mb-4 flex items-center justify-start">
        <img 
          src={GroupIcon} 
          alt="Certification badge" 
          className="w-16 h-16 object-contain"
        />
      </div>
      <h3 className="text-sm font-semibold text-gray-900 mb-1 text-left">
        {certification.title}
      </h3>
    </div>
  );
};

export default CertificationCard;