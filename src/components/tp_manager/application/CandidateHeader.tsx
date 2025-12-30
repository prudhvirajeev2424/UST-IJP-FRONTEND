import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import type { Candidate } from "../../../types/candidate";
import type { CandidateStatus } from "../../../types/CandidateStatus";
import Avatar from "./common/Avatar";
import Button from "./common/Button";
import DP from "../../../assets/DP.png";
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
  const [isAllocateOpen, setIsAllocateOpen] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const { setShortlisted, shortlisted, rejected, setRejected } = useShortlist();
  const { activeRole } = useActiveRole();
  const [isWfmApproved, setIsWfmApproved] = useState(false);
  const [isAllocated, setIsAllocated] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  const handleShortlistClick = () => {
    if (shortlisted || rejected) return; // prevent opening again if already shortlisted or rejected
    // For WFM the approve/select/allocate buttons are rendered directly in the header,
    // so do nothing here. For non-WFM, open the shortlist modal.
    if (activeRole === "WFM") {
      return;
    }
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
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
          <Avatar src={DP} alt={candidate.name} size="md" />
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
            disabled={shortlisted || isAllocated || isRejected || rejected}
            onClick={() => setIsRejectOpen(true)}
          >
            Reject
          </Button>

          {/* WFM flows: Approve -> Select -> Allocate (Allocate button appears after Select) */}
          {activeRole === "WFM" ? (
            // WFM role
            !isWfmApproved ? (
              <button
                onClick={() => setIsApproveOpen(true)}
                disabled={shortlisted || isAllocated || isRejected || rejected}
                className={`px-4 py-2 rounded text-white bg-[#0097AC] transition-colors duration-200 ease-in-out ${
                  shortlisted || isAllocated || isRejected || rejected
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-black"
                }`}
              >
                Approve and block
              </button>
            ) : (
              // Approved already
              <>
                {!isSelected ? (
                  <button
                    onClick={() => {
                      // open comments popup for selection
                      setIsSelectOpen(true);
                    }}
                    disabled={
                      shortlisted || isAllocated || isRejected || rejected
                    }
                    className={`px-4 py-2 rounded text-white bg-[#0097AC] transition-colors duration-200 ease-in-out ${
                      shortlisted || isAllocated || isRejected || rejected
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-black"
                    }`}
                  >
                    Select
                  </button>
                ) : (
                  // After selection we only show Allocate (remove Select/Selected button)
                  <button
                    onClick={() => setIsAllocateOpen(true)}
                    disabled={isAllocated || isRejected || rejected}
                    className={`px-4 py-2 rounded text-white bg-[#0D9488] transition-colors duration-200 ease-in-out ${
                      isAllocated || isRejected || rejected
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-black"
                    }`}
                  >
                    Allocate
                  </button>
                )}
              </>
            )
          ) : (
            // Non-WFM: regular shortlist
            <button
              onClick={handleShortlistClick}
              disabled={shortlisted || isAllocated || isRejected || rejected}
              aria-pressed={shortlisted || isAllocated}
              className={`px-4 py-2 rounded text-white bg-[#0097AC] transition-colors duration-200 ease-in-out ${
                shortlisted || isAllocated || isRejected || rejected
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-black"
              }`}
            >
              Shortlist
            </button>
          )}
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

      {/* Allocate / Select modal (reuses ApprovalModal UI but different action text) */}
      {/* Select modal: open when WFM clicks Select so we can capture comments */}
      <ApprovalModal
        isOpen={isSelectOpen}
        onClose={() => setIsSelectOpen(false)}
        primaryActionLabel="Select"
        markApprovedInContext={false}
        headerTitle="Select candidate for this opportunity?"
        commentsPlaceholder={
          "Add optional comments for selection (notes to hiring manager...)"
        }
        toastMessage={
          candidate.name
            ? `Candidate ${candidate.name} has been selected for interview`
            : "Candidate has been selected"
        }
        onConfirm={() => {
          // comments (passed from modal) are ignored here
          setIsSelectOpen(false);
          setIsSelected(true);
          onApprove?.("SELECTED");
        }}
        applicantName={candidate.name}
      />

      <ApprovalModal
        isOpen={isAllocateOpen}
        onClose={() => setIsAllocateOpen(false)}
        primaryActionLabel="Allocate"
        markApprovedInContext={false}
        headerTitle="Allocate candidate for this opportunity?"
        commentsPlaceholder={
          "Add allocation notes (team, slot, reason for allocation...)"
        }
        toastMessage={
          candidate.name
            ? `Candidate ${candidate.name} has been allocated`
            : "Candidate has been allocated"
        }
        onConfirm={() => {
          // comments (passed from modal) are ignored here
          setIsAllocateOpen(false);
          setIsAllocated(true);
          // once allocated, disable both Reject and Allocate buttons
          // notify parent about allocation
          onApprove?.("ALLOCATED");
        }}
        applicantName={candidate.name}
      />

      {/* Reject modal */}
      <RejectModal
        isOpen={isRejectOpen}
        onClose={handleRejectClose}
        onConfirm={() => {
          // Close reject modal and mark locally as rejected so UI updates
          setIsRejectOpen(false);
          // prefer updating shared context; fallback to local state
          try {
            if (typeof setRejected === "function") {
              setRejected(true);
            } else {
              setIsRejected(true);
            }
          } catch (e) {
            // fallback
            setIsRejected(true);
          }
          onReject?.("REJECTED");
        }}
        applicantName={candidate.name}
      />
    </div>
  );
};

export default CandidateHeader;
