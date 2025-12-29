import React from "react";

interface SuccessBannerProps {
  message: string;
  onClose?: () => void;
}

const SuccessBanner: React.FC<SuccessBannerProps> = React.memo(
  ({ message, onClose }) => {
    const handleClose = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (onClose) onClose();
    };

    return (
      <div
        role="alert"
        className="fixed left-1/2 top-[65px] z-50 transform -translate-x-1/2"
      >
        <div className="max-w-[900px] w-full px-4">
          <div className="flex items-center justify-between gap-4 bg-emerald-500 text-white rounded-2xl px-5 py-3 shadow-lg transition-all ease-in-out duration-300">
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="text-sm font-medium">{message}</div>
            </div>

            <button
              aria-label="close banner"
              onClick={handleClose}
              className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default SuccessBanner;
