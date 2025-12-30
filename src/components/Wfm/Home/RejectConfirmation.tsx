import React, { useState, useContext } from "react";
import { X } from "lucide-react";

// Singleton toast service (inline for demonstration)
let toastContainer: HTMLDivElement | null = null;

function showToast(
  message: string,
  opts?: { type?: "success" | "error" | "info"; duration?: number }
) {
  if (typeof document === "undefined") return;

  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-root";
    document.body.appendChild(toastContainer);
  }

  const id = String(Date.now()) + Math.random().toString(36).slice(2, 9);
  const toast = {
    id,
    message,
    type: opts?.type ?? "info",
    duration: opts?.duration ?? 3000,
  };

  // Simple toast implementation
  const toastEl = document.createElement("div");
  toastEl.className = "toast-notification";
  toastEl.style.cssText = `
    display: flex;
    align-items: center;
    gap: 12px;
    width: 624px;
    height: 70px;
    background: ${
      toast.type === "success"
        ? "#01B27C"
        : toast.type === "error"
        ? "#E53E3E"
        : "#334155"
    };
    border-radius: 8px;
    padding: 0 20px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    color: #FFFFFF;
    font-family: Rubik, system-ui, -apple-system, sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 12px;
    animation: slideDown 0.35s ease-out;
  `;
  toastEl.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="22 4 12 14.01 9 11.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span>${message}</span>
  `;

  if (!toastContainer.querySelector(".toast-container")) {
    const wrapper = document.createElement("div");
    wrapper.className = "toast-container";
    wrapper.style.cssText =
      "position: fixed; left: 50%; top: 20px; transform: translateX(-50%); z-index: 9999;";
    toastContainer.appendChild(wrapper);

    const style = document.createElement("style");
    style.textContent = `
      @keyframes slideDown {
        from { transform: translateY(-100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }

  toastContainer.querySelector(".toast-container")?.appendChild(toastEl);

  setTimeout(() => {
    toastEl.style.animation = "slideUp 0.3s ease-out";
    setTimeout(() => toastEl.remove(), 300);
  }, toast.duration);
}

// ApprovalContext placeholder
const ApprovalContext = React.createContext<
  Record<string, unknown> | undefined
>(undefined);

interface ApprovalModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onConfirm?: (comments: string) => void;
  applicantName?: string;
}

const RejectModal: React.FC<ApprovalModalProps> = ({
  isOpen: controlledIsOpen,
  onClose,
  onConfirm,
  applicantName,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(true);
  const [comments, setComments] = useState("");

  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const approvalCtx = useContext(ApprovalContext);

  const handleClose = () => {
    setInternalIsOpen(false);
    onClose?.();
  };

  const handleConfirm = () => {
    onConfirm?.(comments);
    // Render rejection message using applicantName when provided
    const toastMessage = applicantName
      ? `Candidate ${applicantName} has been rejected.`
      : "Candidate has been rejected for this opportunity";

    // Use error type so toast appears red
    showToast(toastMessage, { type: "error", duration: 3000 });

    if (approvalCtx && typeof approvalCtx.setApproved === "function") {
      try {
        approvalCtx.setApproved(true);
      } catch (e) {
        console.warn("Failed to set approved in context", e);
      }
    }

    setInternalIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black z-[999]"
            style={{
              opacity: 0.6,
            }}
            onClick={handleClose}
          />

          {/* Modal Container - Centered on page */}
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
            {/* Header */}
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
                  fontStyle: "Medium",
                  fontWeight: "500",
                  fontSize: "18px",
                  lineHeight: "22px",
                  letterSpacing: "0px",
                  color: "#231F20",
                  textAlign: "left",
                }}
              >
                Reject this candidate for this opportunity
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
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#D7E0E3")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
                aria-label="Close modal"
              >
                <X size={24} color="#666666" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 flex items-center justify-center px-6">
              <div
                className="relative opacity-100"
                style={{
                  width: "521px",
                  minHeight: "120px",
                  background: "#FFFFFF",
                  border: "1px solid #D7E0E3",
                  borderRadius: "5px",
                  padding: "20px 16px 16px 16px",
                }}
              >
                <label
                  className="absolute bg-white px-2"
                  style={{
                    top: "-10px",
                    left: "12px",
                    fontFamily: "Rubik",
                    fontSize: "14px",
                    color: "#808080",
                  }}
                >
                  Enter Comments
                </label>

                <textarea
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Reason for rejection (optional)"
                  className="w-full mt-2 p-3 border rounded resize-none"
                  rows={4}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 flex justify-center gap-3 border-t border-gray-100">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 cursor-pointer"
                style={{
                  transition: "all 0.3s ease",
                }}
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
                className="px-6 py-2.5 bg-teal-600 border-none rounded text-sm font-medium text-white cursor-pointer"
                style={{
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#000000";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#0D9488";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default RejectModal;