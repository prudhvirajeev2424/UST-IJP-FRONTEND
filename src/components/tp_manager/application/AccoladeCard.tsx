import React from 'react';
import type { Accolade } from '../../../types/candidate';
import AccoladeIcon from '../../../assets/alocades.svg'; // adjust path if needed

interface AccoladeCardProps {
  accolade: Accolade;
}

const AccoladeCard: React.FC<AccoladeCardProps> = ({ accolade }) => {
  return (
    <div className="p-6 bg-[#f7f1f8] rounded-lg text-left">
      {/* Image aligned left */}
      <div className="mb-4 flex items-center justify-start">
        <img 
          src={AccoladeIcon} 
          alt="Accolade badge" 
          className="w-16 h-16 object-contain"
        />
      </div>
      <h3 className="text-sm font-semibold text-gray-900 mb-1">
        {accolade.title}
      </h3>
    </div>
  );
};

export default AccoladeCard;