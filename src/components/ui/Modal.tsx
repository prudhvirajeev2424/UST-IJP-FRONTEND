import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ zIndex: 1000 }}
      onClick={handleBackdropClick}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      />

      <div
        className="relative rounded-lg shadow-lg w-full mx-4 max-h-[90vh]"
        style={{
          zIndex: 1001,
          maxWidth: "1010px",
          backgroundColor: "#F2F7F8",
        }}
      >
        {/* ⬇️ Reduced top padding */}
        <div
          className="overflow-y-auto"
          style={{
            maxHeight: "90vh",
            padding: "20px 28px 28px", // ⬅️ less top padding
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
