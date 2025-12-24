import { useState } from "react";
import { X, Upload } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "../../ui/Dialog";
import { Button } from "../../ui/Button";
import pdf_svg from "../../../assets/Icon awesome-file-pdf.svg";
import upload_svg from "../../../assets/Icon feather-upload-cloud.svg";

interface UploadResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (file: File) => void;
}

export function UploadResumeModal({
  open,
  onOpenChange,
  onConfirm,
}: UploadResumeModalProps) {
  const [uploadedFile, setUploadedFile] = useState<{
    name: string;
    size: string;
  } | null>({ name: "Sarah Anderson - Resume.pdf", size: "2.4 MB" });
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
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!validTypes.includes(file.type)) {
      alert("Please upload a PDF or Word document");
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
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onConfirm({} as File);
      onOpenChange(false);
      // Reset to dummy data
      setUploadedFile({ name: "Sarah Anderson - Resume.pdf", size: "2.4 MB" });
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
      setUploadedFile({ name: "Sarah Anderson - Resume.pdf", size: "2.4 MB" });
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 gap-0 bg-white border border-gray-200 rounded-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <DialogTitle className="text-base font-medium text-gray-900">
            Upload resume
          </DialogTitle>
          <button
            onClick={() => handleOpenChange(false)}
            className="rounded-sm opacity-70 hover:opacity-100 transition-opacity focus:outline-none"
          >
            <X className="h-5 w-5 text-gray-900" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6 flex flex-col items-center">
          {/* Description */}
          <p className="text-sm text-gray-600 text-center">
            Upload your resume in a PDF format
          </p>

          {/* Upload Area */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`w-full border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center gap-4 transition-all ${
              isDragging
                ? "border-teal-600 bg-teal-50"
                : "border-gray-300 hover:border-teal-500"
            }`}
          >
              <img src={upload_svg} alt="Upload Icon" className="h-8 w-8 text-gray-400" />
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Drag and drop to upload or{" "}
                <label
                  htmlFor="file-input"
                  className="text-teal-600 cursor-pointer hover:underline font-medium"
                >
                  Browse
                </label>
              </p>
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
            <div className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3 flex-1">
                
                  <img src={pdf_svg} alt="PDF Icon" className="h-6 w-6" />
          
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {uploadedFile.name}
                  </p>
                  <p className="text-xs text-gray-600">
                    {uploadedFile.size}
                  </p>
                </div>
              </div>
              <button
                onClick={handleRemoveFile}
                className="text-gray-600 hover:text-gray-900 transition-colors p-1 flex-shrink-0 ml-2"
                disabled={isSubmitting}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-3 px-6 py-4 border-t border-gray-200 bg-white">
          <Button
            variant="outline"
            onClick={() => handleOpenChange(false)}
            className="px-8"
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            onClick={handleProceed}
            className="px-8 bg-teal-600 hover:bg-teal-700 text-white"
            disabled={!uploadedFile || isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Uploading...
              </span>
            ) : (
              "Proceed"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}