import React, { useState } from 'react';
 
const ConfirmationDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [comments, setComments] = useState('');

  // Styles derived from the provided layout/properties
  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.45)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // keep stacking order above page
    zIndex: 50,
  };

  const dialogStyle: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 601,
    height: 416,
    background: '#FFFFFF', // fallback to white
    borderRadius: 10,
    opacity: 1,
    border: '1px solid #D7E0E3',
    boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 60,
  };
 
  const handleConfirm = () => {
    console.log('Confirmed with comments:', comments);
    setIsOpen(false);
  };
 
  const handleCancel = () => {
    console.log('Cancelled');
    setIsOpen(false);
  };
 
  const handleReopen = () => {
    setIsOpen(true);
    setComments('');
  };
 
  if (!isOpen) {
    return (
      <div className="flex items-center justify-center min-h-[416px] bg-transparent">
        <button
          onClick={handleReopen}
          className="px-6 py-3 text-white rounded transition-colors"
          style={{ backgroundColor: 'var(--0097ac)' }}
        >
          Reopen Dialog
        </button>
      </div>
    );
  }

  return (
    <div aria-modal="true" role="dialog" aria-labelledby="dialog-title" style={overlayStyle}>
      {/* Outer dialog with fixed size from screenshots */}
      <div
        style={dialogStyle}
        className="relative bg-[var(--ffffff)] rounded-dialog shadow-dialog flex flex-col"
      >
        {/* Header row — exact height from guides */}
        <div className="h-[69px] px-[24px] flex items-center justify-between">
          <h2
            id="dialog-title"
            className="unnamed-character-style-1 font-[500]"
            style={{ color: 'var(--unnamed-color-231f20)' }}
          >
            Approve candidate for this opportunity?
          </h2>
 
          <button
            onClick={handleCancel}
            className="text-[var(--7a7480)] hover:text-[var(--231f20)] transition-colors"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
 
        {/* Content block — 40px side padding equals 521px usable width */}
        <div className="px-[40px] pt-[12px]">
          <label
            htmlFor="comments"
            className="unnamed-character-style-2 mb-[8px] block"
            style={{ color: 'var(--unnamed-color-231f20)' }}
          >
            Enter Comments
          </label>
 
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Candidate profile is verified and is ready to proceed to the next stage."
            className="
              w-[521px] h-[80px] resize-none rounded
              border px-[12px] py-[12px]
              focus:outline-none unnamed-character-style-2
            "
            style={{
              borderColor: 'var(--d7e0e3)',
              color: 'var(--unnamed-color-231f20)',
            }}
          />
        </div>
 
        {/* Spacer so actions sit visually below textarea (matches guides) */}
        <div className="flex-1" />
 
        {/* Actions row — pixel perfect center about dialog’s vertical axis */}
        <div className="pb-[24px]">
          <div className="mx-auto grid grid-cols-[72px_98px] gap-[24px]">
            <button
              onClick={handleCancel}
              className="
                w-[72px] h-[36px] rounded
                border border-[color:var(--d7e0e3)]
                text-[var(--unnamed-color-231f20)]
                bg-[var(--ffffff)]
                transition-all hover:opacity-90
                unnamed-character-style-2
              "
            >
              Cancel
            </button>
 
            <button
              onClick={handleConfirm}
              className="
                w-[98px] h-[36px] rounded
                bg-[var(--0097ac)] text-[var(--ffffff)]
                transition-all hover:opacity-90
                unnamed-character-style-2
              "
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default ConfirmationDialog;