import React, { useState } from "react";
import CoverLetterPopup from "./CoverLetterPopup";

interface CoverLetterProps {
  coverLetter: string;
}

const CoverLetter: React.FC<CoverLetterProps> = ({ coverLetter }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-6">
        {/* Heading */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Cover Letter
        </h3>

        {/* Bold grey line */}
        <hr className="border-t-2 border-gray-300 mb-4" />

        {/* Cover letter preview with inline View more */}
        <p className="text-sm text-gray-700 leading-relaxed">
          {coverLetter}{" "}
          <button
            onClick={() => setShowModal(true)}
            className="text-sm text-teal-600 hover:text-black inline-block transform transition-transform duration-300 ease-in-out hover:translate-x-1"
          >
            View more
          </button>
        </p>
      </div>

      {/* Use the popup component */}
      {showModal && (
        <CoverLetterPopup
          onClose={() => setShowModal(false)}
          coverLetter={`I am interested in joining the [Project Name] team at [Company Name]. With experience in [Key Skills], I have contributed to [mention relevant achievement]. I believe my expertise aligns well with the project's goals and would love the opportunity to contribute. Looking forward to discussing this further.`}
        />
      )}
    </>
  );
};

export default CoverLetter;
