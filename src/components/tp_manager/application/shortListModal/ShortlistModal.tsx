import React, { useState, useContext } from 'react';
import { X } from 'lucide-react';
import { showToast } from './toastService';
import ShortlistContext from '../context/ShortlistContext';

interface ShortlistModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onConfirm?: (reason: string) => void;
}

const ShortlistModal: React.FC<ShortlistModalProps> = ({ 
  isOpen: controlledIsOpen, 
  onClose, 
  onConfirm 
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(true);
  // using singleton showToast so no provider wrap is necessary

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  // read context safely at top-level (returns undefined if provider not present)
  const shortlistCtx = useContext(ShortlistContext as React.Context<any>);

  const handleClose = () => {
    setInternalIsOpen(false);
    onClose?.();
  };

  const handleConfirm = () => {
  onConfirm?.('');
  // Show toast via singleton service
  showToast('Candidate has been shortlisted for this opportunity', { type: 'success', duration: 3000 })
    // If ShortlistContext provider is present, update it so other parts of the UI reflect the change
    if (shortlistCtx && typeof shortlistCtx.setShortlisted === 'function') {
      try {
        shortlistCtx.setShortlisted(true);
      } catch (e) {
        // ignore if setting fails
        // eslint-disable-next-line no-console
        console.warn('Failed to set shortlisted in context', e);
      }
    }
    // Close modal
    setInternalIsOpen(false);
  };

  return (
    <>
      {/* Toasts are rendered by the ToastProvider */}

      {/* Modal - Only renders when open */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black z-[999]"
            style={{
              opacity: 0.6
            }}
            onClick={handleClose}
          />

          {/* Modal Container - Centered on page */}
          <div
            className="fixed z-[1000] opacity-100 flex flex-col"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '601px',
              height: '448px',
              background: '#FFFFFF',
              borderRadius: '10px',
              boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.3), 0px 2px 10px rgba(0, 0, 0, 0.2)'
            }}
          >
            {/* Header */}
            <div 
              className="flex justify-between items-center opacity-100"
              style={{
                width: '601px',
                height: '70px',
                background: '#F2F7F8',
                borderRadius: '10px 10px 0px 0px',
                padding: '0 24px'
              }}
            >
              <h2 
                className="m-0 opacity-100"
                style={{
                  fontFamily: 'Rubik',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: '18px',
                  lineHeight: '22px',
                  letterSpacing: '0px',
                  color: '#231F20',
                  textAlign: 'left'
                }}
              >
                Shortlist candidate for this opportunity?
              </h2>
              <button
                onClick={handleClose}
                className="bg-transparent border-none cursor-pointer flex items-center justify-center"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#D7E0E3'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
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
                  width: '521px',
                  height: '120px',
                  background: '#FFFFFF',
                  border: '1px solid #D7E0E3',
                  borderRadius: '5px',
                  padding: '20px 16px 16px 16px'
                }}
              >
                <span 
                  className="absolute bg-white px-2"
                  style={{
                    top: '-10px',
                    left: '12px',
                    fontFamily: 'Rubik',
                    fontSize: '12px',
                    fontWeight: '400',
                    lineHeight: '14px',
                    color: '#808080',
                    letterSpacing: '0px'
                  }}
                >
                  Provide a reason for rejection
                </span>
                <p 
                  className="m-0"
                  style={{
                    fontFamily: 'Rubik',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    color: '#000000',
                    letterSpacing: '0px'
                  }}
                >
                  The candidate profile matches with the given Job Description
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 flex justify-center gap-3 border-t border-gray-100">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 cursor-pointer"
                style={{
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#000000';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.color = '#4B5563';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-6 py-2.5 bg-teal-600 border-none rounded text-sm font-medium text-white cursor-pointer"
                style={{
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#000000';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#0D9488';
                  e.currentTarget.style.transform = 'translateY(0)';
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

export default ShortlistModal;