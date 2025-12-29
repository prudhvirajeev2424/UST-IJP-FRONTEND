import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import type { Candidate } from "../../../types/candidate";
import Avatar from "./common/Avatar";
import Button from "./common/Button";
import ShortlistModal from "./shortListModal/ShortlistModal"; // Import the ShortlistModal
import { useShortlist } from "./context/ShortlistContext";

interface CandidateHeaderProps {
  candidate: Candidate;
}

const CandidateHeader: React.FC<CandidateHeaderProps> = ({ candidate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setShortlisted, shortlisted } = useShortlist();

  const handleShortlistClick = () => {
    if (shortlisted) return; // prevent opening again if already shortlisted
    setIsModalOpen(true); // Open the modal when "Shortlist" is clicked
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleConfirmShortlist = (reason: string) => {
    console.log("Candidate Shortlisted for Reason:", reason);
    // Add additional logic to handle candidate shortlisting (e.g., API call)
    setIsModalOpen(false); // Close modal after confirmation
    try {
      setShortlisted(true);
    } catch (e) {
      // if context isn't available, silently ignore
      console.warn('Shortlist context not available', e);
    }
  };

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
          <div className="text-sm font-medium">
            {candidate.reportingManager}
          </div>
        </div>
        <div className="flex space-x-3">
          <Button variant="secondary" disabled={shortlisted}>Reject</Button>
          <button
            onClick={handleShortlistClick}
            disabled={shortlisted}
            aria-pressed={shortlisted}
            className={`px-4 py-2 rounded text-white bg-[#0097AC] transition-colors duration-200 ease-in-out ${shortlisted ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black'}`}
          >
            Shortlist
          </button>
        </div>
        {/* shortlist banner intentionally removed from CandidateHeader; rendered in ProjectInfo */}
      </div>

      {/* Shortlist Modal */}
      <ShortlistModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmShortlist}
      />
    </div>
  );
};

export default CandidateHeader;
