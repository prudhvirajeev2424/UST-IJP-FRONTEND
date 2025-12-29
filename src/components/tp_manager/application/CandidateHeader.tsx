import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import type { Candidate } from "../../../types/candidate";
import Button from "./common/Button";
import ShortlistModal from "./shortListModal/ShortlistModal";
import { useShortlist } from "./context/ShortlistContext";

// 👉 Import your static DP image
import DP from "../../../assets/DP.png";

interface CandidateHeaderProps {
  candidate: Candidate;
}

const CandidateHeader: React.FC<CandidateHeaderProps> = ({ candidate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setShortlisted, shortlisted } = useShortlist();

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
      console.warn("Shortlist context not available", e);
    }
  };

  return (
    <div className="bg-[#1e3a4c] text-white px-8 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* 👉 Square DP image instead of candidate.avatar */}
          <img
            src={DP}
            alt={candidate.name}
            className="w-16 h-16 rounded-none object-cover"
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
          <div className="text-xs text-gray-300">Reporting Manager</div>
          <div className="text-sm font-medium">{candidate.reportingManager}</div>
        </div>
        <div className="flex space-x-3">
          <Button variant="secondary" disabled={shortlisted}>
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
    </div>
  );
};

export default CandidateHeader;
