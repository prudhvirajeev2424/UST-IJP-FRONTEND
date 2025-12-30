import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import uploadSvg from '../../../assets/upload_svg.svg';
import pdf from '../../../assets/Icon awesome-file-pdf.svg';

interface UpdateResumeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function UpdateResumeDrawer({ isOpen, onClose, onConfirm }: UpdateResumeDrawerProps) {
  const [attachedFile, setAttachedFile] = useState<string | null>('Sarah Anderson - Resume.docx');
  const [isDragging, setIsDragging] = useState(false);
  const [rect, setRect] = useState<{ top: number; left: number; width: number; height: number } | null>(null);
  const touchStartRef = useRef<number | null>(null);

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
      
      {/* Drawer aligned to ResumeDetailModal when open */}
      <div
        className="fixed left-1/2 top-[480px] -translate-x-1/2 bg-white shadow-2xl rounded-t-xl flex flex-col overflow-hidden"
        style={{
          width: 1000,
          height: 680,
          zIndex: 70,
        }}
      >
        <style>{`
          @keyframes slideUpDrawer {
            from { transform: translateX(-50%) translateY(100%); }
            to { transform: translateX(-50%) translateY(0); }
          }
        `}</style>
        
        {/* Header with colored background */}
        <div className="bg-[#F3FAF9]">
          <div className="flex items-center justify-between px-8 py-5">
            <h2 className="text-lg font-semibold text-gray-900">Update resume?</h2>
            <button 
              onClick={onClose}
              className="hover:opacity-70 transition-opacity"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-8">
          <p className="text-base text-gray-700 mb-4">
            Upload your resume in a PDF format
          </p>
          
          <div className="space-y-4">
            {/* Drop Zone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`
                h-[140px]
                border-2
                border-dashed
                rounded-lg
                flex
                flex-col
                items-center
                justify-center
                gap-2
                transition
                ${
                  isDragging
                    ? "border-teal-600 bg-teal-50"
                    : "border-gray-300 bg-gray-50"
                }
              `}
            >
              <img
                src={uploadSvg}
                alt="upload"
                className="h-10 w-10 opacity-40"
              />
              <div className="text-center">
                <p className="text-sm text-gray-500">Drag and drop to upload or</p>
                <label
                  htmlFor="file-input"
                  className="text-teal-600 font-semibold cursor-pointer hover:text-teal-700 text-sm"
                >
                  Browse
                </label>
              </div>
              <input
                id="file-input"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>

            {/* Attached File */}
            {attachedFile && (
              <div className="flex items-center gap-2">
                <img src={pdf} className="h-5 w-5" alt="PDF" />
                <span className="text-sm text-gray-700 truncate flex-1">
                  {attachedFile}
                </span>
                <button 
                  onClick={handleRemoveFile}
                  className="text-gray-400 hover:text-gray-600 ml-1"
                  aria-label="Remove file"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 flex justify-center gap-3">
          <button
            onClick={onClose}
            className="px-6 py-4 border border-black rounded text-black hover:bg-black hover:text-white disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-4 bg-[#006E74] border border-black rounded text-white hover:bg-black disabled:opacity-50"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateResumeDrawer;