// Actions.tsx
import type { CandidateStatus } from "../../../types/CandidateStatus";

interface Props {
  setStatus: (status: CandidateStatus) => void;
  status: CandidateStatus;
}

const Actions: React.FC<Props> = ({ setStatus, status }) => {
  return (
    <div className="flex gap-3 mt-4">
      <button
        disabled={status === "ALLOCATED" || status === "REJECTED"}
        className={`px-4 py-2 border rounded text-sm ${
          status == "ALLOCATED" || status == "REJECTED"
            ? "opacity-40 cursor-not-allowed"
            : ""
        }`}
        onClick={() => setStatus("REJECTED")}
      >
        Reject
      </button>

      {status === "PENDING_WFM" && (
        <button
          className="px-4 py-2 bg-teal-700 text-white rounded text-sm"
          onClick={() => setStatus("WFM_APPROVED")}
        >
          Approve
        </button>
      )}
      {status === "WFM_APPROVED" && (
        <button
          className="px-4 py-2 bg-teal-700 text-white rounded text-sm"
          onClick={() => setStatus("SELECTED")}
        >
          Select
        </button>
      )}

      {status === "SELECTED" && (
        <button
          className={`px-4 py-2 bg-teal-700 text-white rounded text-sm `}
          onClick={() => setStatus("ALLOCATED")}
        >
          Allocate
        </button>
      )}
    </div>
  );
};

export default Actions;
