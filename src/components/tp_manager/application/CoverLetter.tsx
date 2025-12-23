import React, { useState } from 'react';

interface CoverLetterProps {
  coverLetter: string;
}

const CoverLetter: React.FC<CoverLetterProps> = ({ coverLetter }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-6">
        {/* Heading */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Cover Letter</h3>

        {/* Bold grey line */}
        <hr className="border-t-2 border-gray-300 mb-4" />

        {/* Cover letter preview with inline View more */}
        <p className="text-sm text-gray-700 leading-relaxed">
          {coverLetter}
          {' '}
          <button
            onClick={() => setShowModal(true)}
            className="text-sm text-teal-600 hover:text-black inline-block transform transition-transform duration-300 ease-in-out hover:translate-x-1"
          >
            View more
          </button>
        </p>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[500px] max-w-full">
            {/* Modal header */}
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold text-gray-900">Cover Letter</h4>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                ✕
              </button>
            </div>

            {/* Modal content */}
            <div className="text-sm text-gray-600 leading-relaxed">
              {/* Replace this with actual job details */}
              <p>
                Here are the full details of the job. You can expand this section
                with responsibilities, requirements, and other relevant information.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoverLetter;