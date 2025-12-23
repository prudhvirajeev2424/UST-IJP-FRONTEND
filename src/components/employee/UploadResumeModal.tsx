import { useState } from 'react';
import { X, Upload } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Button,
} from '../components/ui';

interface UploadResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (file: File) => void;
}

export function UploadResumeModal({ open, onOpenChange, onConfirm }: UploadResumeModalProps) {
  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: string } | null>(
    { name: 'Sarah Anderson - Resume.pdf', size: '2.4 MB' }
  );
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    // Validate file type (PDF, DOC, DOCX)
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    if (!validTypes.includes(file.type)) {
      alert('Please upload a PDF or Word document');
      return;
    }

    const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
    setUploadedFile({
      name: file.name,
      size: `${sizeMB} MB`,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleProceed = async () => {
    if (!uploadedFile) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      onConfirm({} as File);
      onOpenChange(false);
      // Reset to dummy data
      setUploadedFile({ name: 'Sarah Anderson - Resume.pdf', size: '2.4 MB' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (newOpen === false) {
      // Reset to dummy data when closing
      setUploadedFile({ name: 'Sarah Anderson - Resume.pdf', size: '2.4 MB' });
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 gap-0 bg-card border border-border rounded-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <DialogTitle className="text-base font-medium text-foreground">
            Upload resume
          </DialogTitle>
          <button
            onClick={() => handleOpenChange(false)}
            className="rounded-sm opacity-70 hover:opacity-100 transition-opacity focus:outline-none"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6 flex flex-col items-center">
          {/* Description */}
          <p className="text-sm text-muted-foreground text-center">
            Upload your resume in a PDF format
          </p>

          {/* Upload Area */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`w-full border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center gap-4 transition-all ${
              isDragging
                ? 'border-primary bg-primary/5'
                : 'border-muted-foreground/30 hover:border-primary/50'
            }`}
          >
            <div className="rounded-full bg-muted/50 p-4">
              <Upload className="w-8 h-8 text-muted-foreground" />
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Drag and drop to upload or
              </p>
              <label htmlFor="file-input" className="text-sm text-primary cursor-pointer hover:underline font-medium inline">
                Browse
              </label>
              <input
                id="file-input"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleInputChange}
                className="hidden"
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Uploaded File */}
          {uploadedFile && (
            <div className="w-full flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-3 flex-1">
                <div className="h-10 w-10 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-red-600" fill="currentColor">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {uploadedFile.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {uploadedFile.size}
                  </p>
                </div>
              </div>
              <button
                onClick={handleRemoveFile}
                className="text-muted-foreground hover:text-foreground transition-colors p-1 flex-shrink-0 ml-2"
                disabled={isSubmitting}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-3 px-6 py-4 border-t border-border bg-background">
          <Button
            variant="outline"
            onClick={() => handleOpenChange(false)}
            className="px-8 border-border text-foreground hover:bg-muted"
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            onClick={handleProceed}
            className="px-8 bg-primary hover:bg-teal-dark text-primary-foreground"
            disabled={!uploadedFile || isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                Uploading...
              </span>
            ) : (
              'Proceed'
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
