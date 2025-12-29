import React, { useState } from "react";
import { Phone, Mail, ArrowLeft } from "lucide-react";
import type { Candidate } from "../../../types/candidate";
import Button from "./common/Button";
<<<<<<< HEAD
import ShortlistModal from "./shortListModal/ShortlistModal"; // Import the ShortlistModal
import RejectModal from "./rejectModal/RejectModal";
=======
import ShortlistModal from "./shortListModal/ShortlistModal";
>>>>>>> 88fa95eee6ae529922eab4be50958a1856de05fd
import { useShortlist } from "./context/ShortlistContext";

import DP from "../../../assets/DP.png";

interface CandidateHeaderProps {
  candidate: Candidate;
  onBack?: () => void; // optional custom back handler
}

const CandidateHeader: React.FC<CandidateHeaderProps> = ({ candidate, onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setShortlisted, shortlisted } = useShortlist();
  const [isRejectModalOpen, setIsRejectModalOpen] = React.useState(false);

  const handleShortlistClick = () => {
    if (shortlisted) return;
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleConfirmShortlist = (reason: string) => {
    console.log("Candidate Shortlisted for Reason:", reason);
    setIsModalOpen(false);
    try {
      setShortlisted(true);
    } catch (e) {
<<<<<<< HEAD
      // if context isn't available, silently ignore
      console.warn("Shortlist context not available", e);
=======
      console.warn("Shortlist context not available", e);
    }
  };

  const handleBackClick = () => {
    if (onBack) {
      onBack(); // use custom handler if provided
    } else {
      window.history.back(); // fallback to browser back
>>>>>>> 88fa95eee6ae529922eab4be50958a1856de05fd
    }
  };

  const handleRejectClick = () => {
    setIsRejectModalOpen(true);
  };

  const handleConfirmReject = (reason: string) => {
    console.log("Candidate Rejected for Reason:", reason);
    setIsRejectModalOpen(false);
    // additional reject logic (API etc) could go here
  };

  return (
    <div className="bg-[#1e3a4c] text-white px-4 py-6"> {/* shifted left */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Back Arrow */}
          <button
            onClick={handleBackClick}
            className="p-2 rounded-full" // no hover effect
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Square DP image */}
          <img
            src={DP}
            alt={candidate.name}
            className="w-16 h-16 rounded-lg object-cover"
          />
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
          <div className="text-xs text-[#5dd4e8]">Reporting Manager</div>
          <div className="text-sm font-medium text-white">{candidate.reportingManager}</div>
        </div>

        <div className="flex space-x-3">
<<<<<<< HEAD
          <Button
            variant="secondary"
            disabled={shortlisted}
            onClick={handleRejectClick}
          >
=======
          <Button variant="secondary" disabled={shortlisted}>
>>>>>>> 88fa95eee6ae529922eab4be50958a1856de05fd
            Reject
          </Button>
          <button
            onClick={handleShortlistClick}
            disabled={shortlisted}
            aria-pressed={shortlisted}
            className={`px-4 py-2 rounded text-white bg-[#0097AC] transition-colors duration-200 ease-in-out ${
              shortlisted ? "opacity-50 cursor-not-allowed" : "hover:bg-black"
            }`}
          >
            Shortlist
          </button>
        </div>
      </div>

      {/* Shortlist Modal */}
      <ShortlistModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmShortlist}
      />

      {/* Reject Modal */}
      <RejectModal
        isOpen={isRejectModalOpen}
        onClose={() => setIsRejectModalOpen(false)}
        onConfirm={handleConfirmReject}
      />
    </div>
  );
};

export default CandidateHeader;
