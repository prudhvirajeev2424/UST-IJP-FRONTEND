import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import type { Candidate } from "../../../types/candidate";
import type { CandidateStatus } from "../../../types/CandidateStatus";
import Avatar from "./common/Avatar";
import Button from "./common/Button";
import ShortlistModal from "./shortListModal/ShortlistModal"; // Import the ShortlistModal
import { useShortlist } from "./context/ShortlistContext";
import { useActiveRole } from "../../../context/ActiveRoleContext";
import ApprovalModal from "../../Wfm/Home/ApproveConfirmationDialog";
import RejectModal from "../../Wfm/Home/RejectConfirmation";

interface CandidateHeaderProps {
  candidate: Candidate;
  onApprove?: (newStatus: CandidateStatus) => void;
  onReject?: (newStatus: CandidateStatus) => void;
}

const CandidateHeader: React.FC<CandidateHeaderProps> = ({
  candidate,
  onApprove,
  onReject,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApproveOpen, setIsApproveOpen] = useState(false);
  const [isRejectOpen, setIsRejectOpen] = useState(false);
  const { setShortlisted, shortlisted } = useShortlist();
  const { activeRole } = useActiveRole();
  const [isWfmApproved, setIsWfmApproved] = useState(false);

  const rightButtonLabel =
    activeRole === "WFM"
      ? isWfmApproved
        ? "Select"
        : "Approve and block"
      : "Shortlist";

  const handleShortlistClick = () => {
    if (shortlisted) return; // prevent opening again if already shortlisted
    // If current user is WFM open the Approve confirmation modal, otherwise open shortlist modal
    if (activeRole === "WFM") {
      setIsApproveOpen(true);
    } else {
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleApproveClose = () => {
    setIsApproveOpen(false);
  };

  const handleRejectClose = () => {
    setIsRejectOpen(false);
  };

  const handleConfirmShortlist = (reason: string) => {
    console.log("Candidate Shortlisted for Reason:", reason);
    // Add additional logic to handle candidate shortlisting (e.g., API call)
    setIsModalOpen(false); // Close modal after confirmation
    try {
      setShortlisted(true);
    } catch (e) {
      // if context isn't available, silently ignore
      console.warn("Shortlist context not available", e);
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
          <Button
            variant="secondary"
            disabled={shortlisted}
            onClick={() => setIsRejectOpen(true)}
          >
            Reject
          </Button>
          <button
            onClick={handleShortlistClick}
            disabled={shortlisted || (activeRole === "WFM" && isWfmApproved)}
            aria-pressed={
              shortlisted || (activeRole === "WFM" && isWfmApproved)
            }
            className={`px-4 py-2 rounded text-white bg-[#0097AC] transition-colors duration-200 ease-in-out ${
              shortlisted || (activeRole === "WFM" && isWfmApproved)
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-black"
            }`}
          >
            {rightButtonLabel}
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

      {/* Approve modal for WFM */}
      <ApprovalModal
        isOpen={isApproveOpen}
        onClose={handleApproveClose}
        onConfirm={() => {
          // Optionally perform side-effects here (e.g., API calls)
          setIsApproveOpen(false);
          // mark approved locally so button switches to 'Select'
          setIsWfmApproved(true);
          // notify parent that approval happened
          onApprove?.("WFM_APPROVED");
        }}
        applicantName={candidate.name}
      />

      {/* Reject modal */}
      <RejectModal
        isOpen={isRejectOpen}
        onClose={handleRejectClose}
        onConfirm={() => {
          // Close reject modal and optionally perform side-effects
          setIsRejectOpen(false);
          onReject?.("REJECTED");
        }}
        applicantName={candidate.name}
      />
    </div>
  );
};

export default CandidateHeader;
