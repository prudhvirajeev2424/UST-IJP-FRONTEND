import React from 'react';
import DownloadIcon from '../../assets/download.svg'; 

interface IntroductionProps {
  introduction: string;
}

const Introduction: React.FC<IntroductionProps> = ({ introduction }) => {
  return (
    <section id="introduction" className="mb-12">
      {/* Header row: title left, date + icon right */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-900">Introduction</h2>

        <div className="flex items-center space-x-2">
          <p className="text-xs text-gray-500">Applied on 21st January, 2025</p>
          <img
            src={DownloadIcon}
            alt="Download"
            className="w-4 h-4 cursor-pointer hover:scale-105 transition-transform"
          />
        </div>
      </div>

      {/* Body text */}
      <p className="text-sm text-gray-700 leading-relaxed">
        {introduction}
      </p>
    </section>
  );
};

export default Introduction;