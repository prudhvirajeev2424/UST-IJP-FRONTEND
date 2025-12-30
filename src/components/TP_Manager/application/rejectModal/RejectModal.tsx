import React, { useState } from "react";
import { X } from "lucide-react";
import { showToast } from "../shortListModal/toastService";

interface RejectModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onConfirm?: (reason: string) => void;
}

const RejectModal: React.FC<RejectModalProps> = ({
  isOpen: controlledIsOpen,
  onClose,
  onConfirm,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(true);
  // Prefill textarea with the sample text from the screenshot
  const [reason, setReason] = useState(
    "Skill mismatch with the Job description"
  );
  const [touched, setTouched] = useState(false);
  const [focused, setFocused] = useState(false);

  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleClose = () => {
    setInternalIsOpen(false);
    onClose?.();
  };

  const handleConfirm = () => {
    setTouched(true);
    if (reason.trim().length === 0) {
      // don't proceed if reason is empty
      return;
    }

    onConfirm?.(reason.trim());
    // Show error toast to match design
    showToast("Candidate has been rejected from this opportunity", {
      type: "error",
      duration: 3000,
    });
    setInternalIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black z-[999]"
        style={{ opacity: 0.6 }}
        onClick={handleClose}
      />

      <div
        className="fixed z-[1000] opacity-100 flex flex-col"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "601px",
          height: "448px",
          background: "#FFFFFF",
          borderRadius: "10px",
          boxShadow:
            "0px 10px 40px rgba(0, 0, 0, 0.3), 0px 2px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          className="flex justify-between items-center opacity-100"
          style={{
            width: "601px",
            height: "70px",
            background: "#F2F7F8",
            borderRadius: "10px 10px 0px 0px",
            padding: "0 24px",
          }}
        >
          <h2
            className="m-0 opacity-100"
            style={{
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "22px",
              letterSpacing: "0px",
              color: "#231F20",
              textAlign: "left",
            }}
          >
            Reject candidate from this opportunity?
          </h2>
          <button
            onClick={handleClose}
            className="bg-transparent border-none cursor-pointer flex items-center justify-center"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#D7E0E3")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
            aria-label="Close modal"
          >
            <X size={24} color="#666666" />
          </button>
        </div>

        <div
          className="flex-1 flex items-center justify-center"
          style={{ padding: "40px" }}
        >
          <div
            className="relative opacity-100"
            style={{
              // exact textarea panel per spec
              width: "521px",
              height: "128px",
              background: "#FFFFFF",
              border: "1px solid #D7E0E3",
              borderRadius: "5px",
              padding: "0",
              boxSizing: "border-box",
            }}
          >
            <label
              htmlFor="reject-reason"
              className="absolute bg-white px-2"
              style={{
                top: "-10px",
                left: "12px",
                fontFamily: "Rubik",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "14px",
                color: "#808080",
              }}
            >
              Provide a reason for rejection
            </label>
            <textarea
              id="reject-reason"
              aria-required={true}
              value={reason}
              onBlur={() => {
                setTouched(true);
                setFocused(false);
              }}
              onFocus={() => setFocused(true)}
              onChange={(e) => setReason(e.target.value)}
              placeholder={""}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                outline: "none",
                resize: "none",
                fontFamily: "Rubik, system-ui, -apple-system, sans-serif",
                fontSize: "14px",
                color: "#231F20",
                textAlign: "left",
                padding: "16px",
                boxSizing: "border-box",
                background: "transparent",
              }}
            />
            {touched && reason.trim().length === 0 && (
              <div
                style={{
                  position: "absolute",
                  left: "12px",
                  bottom: "-18px",
                  color: "#FC6A59",
                  fontSize: "12px",
                }}
              >
                This field is required
              </div>
            )}
          </div>
        </div>

        <div className="px-6 py-4 flex justify-center gap-3 border-t border-gray-100">
          <button
            onClick={handleClose}
            className="px-6 py-2.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 cursor-pointer"
            style={{ transition: "all 0.3s ease" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#000000";
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FFFFFF";
              e.currentTarget.style.color = "#4B5563";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-6 py-2.5 bg-[#006E74] border-none rounded text-sm font-medium text-white cursor-pointer"
            style={{
              transition: "all 0.3s ease",
              boxShadow: "0px 1px 2px rgba(0,0,0,0.06)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#004F50";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#006E74";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default RejectModal;
