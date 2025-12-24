import { useState } from 'react';
import { X, Upload } from 'lucide-react';
import { Button } from '../../ui/Button';
import pdf_svg from "../../../assets/Icon awesome-file-pdf.svg";
import upload_svg from "../../../assets/Icon feather-upload-cloud.svg";

interface UpdateResumeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function UpdateResumeDrawer({ isOpen, onClose, onConfirm }: UpdateResumeDrawerProps) {
  const [attachedFile, setAttachedFile] = useState<string | null>('Sarah Anderson - Resume.docx');
  const [isDragging, setIsDragging] = useState(false);

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
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Bottom Drawer - slides up from bottom */}
      <div 
        className="fixed left-1/2 -translate-x-1/2 bottom-0 w-full max-w-xl bg-white rounded-t-2xl shadow-xl z-[60]"
        style={{ animation: 'slideUpDrawer 0.3s ease-out' }}
      >
        <style>{`
          @keyframes slideUpDrawer {
            from { transform: translateX(-50%) translateY(100%); }
            to { transform: translateX(-50%) translateY(0); }
          }
        `}</style>
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Update resume?</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-gray-600">Upload your resume in a PDF format</p>
          
          {/* Drop Zone */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              isDragging ? 'border-teal-600 bg-teal-50' : 'border-gray-300'
            }`}
          >
            <img src={upload_svg} alt="Upload Icon" className="h-8 w-8 mx-auto mb-4" />
            <p className="text-sm text-gray-600">
              Drag and drop to upload or{' '}
              <label className="text-teal-600 cursor-pointer hover:underline">
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
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <img src={pdf_svg} alt="PDF Icon" className="h-6 w-6" />
              <span className="text-sm text-gray-900 flex-1 truncate">{attachedFile}</span>
              <button 
                onClick={handleRemoveFile}
                className="p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                aria-label="Remove file"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-3 px-6 py-4 border-t border-gray-200">
          <Button
            variant="outline"
            onClick={onClose}
            className="px-6"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            className="px-6 bg-teal-600 text-white hover:bg-teal-700"
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}