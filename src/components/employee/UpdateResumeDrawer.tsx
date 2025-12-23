import { useState, useEffect, useRef } from 'react';
import { X, Upload } from 'lucide-react';
import { Button } from '../ui';

interface UpdateResumeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function UpdateResumeDrawer({ isOpen, onClose, onConfirm }: UpdateResumeDrawerProps) {
  const [attachedFile, setAttachedFile] = useState<string | null>('Sarah Anderson - Resume.docx');
  const [isDragging, setIsDragging] = useState(false);
  const [react, setRect] = useState<{ top: number; left: number; width: number; height: number } | null>(null);
  const touchStartRef = useRef<number | null>(null);

  // compute PUBLIC prefix for asset paths in browser builds (avoid Node 'process' reference)
  const PUBLIC = '';

  // compute position of the ResumeDetailModal and update rect when drawer opens
  useEffect(() => {
    if (!isOpen) {
      setRect(null);
      return;
    }
    const updateRect = () => {
      const el = document.getElementById('resume-detail-modal');
      if (el) {
        const r = el.getBoundingClientRect();
        setRect({
          top: Math.round(r.top + window.scrollY),
          left: Math.round(r.left + window.scrollX),
          width: Math.round(r.width),
          height: Math.round(r.height),
        });
      } else {
        // fallback to previous fixed values if modal not present
        setRect({ top: 540, left: 432, width: 1057, height: 540 });
      }
    };

    updateRect();
    // update on resize/scroll to keep alignment
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect, true);
    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect, true);
    };
  }, [isOpen]);

  // forward wheel delta to the modal's scroll container
  const forwardWheelToModal = (deltaY: number) => {
    const sc = document.getElementById('resume-modal-scroll');
    if (sc) {
      sc.scrollBy({ top: deltaY, behavior: 'auto' });
    }
  };

  const handleOverlayWheel = (e: React.WheelEvent) => {
    forwardWheelToModal(e.deltaY);
    e.preventDefault();
  };

  const handleOverlayTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches?.[0]?.clientY ?? null;
  };

  const handleOverlayTouchMove = (e: React.TouchEvent) => {
    const startY = touchStartRef.current;
    if (startY == null) return;
    const currentY = e.touches?.[0]?.clientY ?? 0;
    const delta = startY - currentY;
    forwardWheelToModal(delta);
    touchStartRef.current = currentY;
    e.preventDefault();
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setAttachedFile(files[0].name);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setAttachedFile(files[0].name);
    }
  };

  const handleRemoveFile = () => {
    setAttachedFile(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Overlay (below drawer) */}
      <div 
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
        style={{ zIndex: 60 }}
        onWheel={handleOverlayWheel}
        onTouchStart={handleOverlayTouchStart}
        onTouchMove={handleOverlayTouchMove}
      />
      
      {/* Drawer aligned to ResumeDetailModal when open (solid white panel) */}
      <div
        className="fixed"
        style={{
          position: 'fixed',
          top: 400,
          left: 350,
          width: 1000,
          height: 740,
          backgroundColor: '#FFFFFF',
          borderRadius: '10px 10px 0 0',
          boxSizing: 'border-box',
          zIndex: 70,
          overflow: 'hidden',
        }}
      >
        <style>{`
          @keyframes slideUpDrawer {
            from { transform: translateX(-50%) translateY(100%); }
            to { transform: translateX(-50%) translateY(0); }
          }
        `}</style>
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Update resume?</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground">Upload your resume in a PDF format</p>
          
          {/* Drop Zone */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`rounded-lg p-6 transition-colors flex flex-col items-center justify-center text-center ${
              isDragging ? 'border-primary' : ''
            }`}
            style={{
              minHeight: 80, /* reduced vertical footprint */
              border: '1px dashed var(---d7e0e3)', /* preferred token */
              background: '#F7F9FA',
              borderRadius: '10px',
              opacity: 1,
            }}
          >
            {/* use public/assets/upload_svg.svg */}
            <img
              src={encodeURI('/assets/upload_svg.svg')}
              alt="upload"
              style={{ width: 32, height: 32 }}
              className="mb-3 object-contain"
            />
            <p className="text-sm text-muted-foreground">
              Drag and drop to upload or{' '}
              <label className="text-primary cursor-pointer hover:underline">
                Browse
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </label>
            </p>
          </div>

          {/* Attached File */}
          {attachedFile && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-red-600" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                  <path d="M14 2v6h6" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-sm text-foreground flex-1">{attachedFile}</span>
              <button 
                onClick={handleRemoveFile}
                className="p-1 hover:bg-muted rounded transition-colors"
                aria-label="Remove file"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-3 px-6 py-4 border-t border-border">
          <Button
            variant="outline"
            onClick={onClose}
            className="px-6"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            className="px-6 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}