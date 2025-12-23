import { useState } from 'react';
import { X, Upload } from 'lucide-react';
import { Button } from '@/components/ui';

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
        className="fixed left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[650px] bg-background rounded-t-2xl shadow-xl z-[60]"
        style={{ animation: 'slideUpDrawer 0.3s ease-out' }}
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
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              isDragging ? 'border-primary bg-primary/5' : 'border-border'
            }`}
          >
            <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-3" />
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