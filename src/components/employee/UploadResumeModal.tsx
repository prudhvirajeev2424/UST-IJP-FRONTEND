import { useState } from "react";
import { X } from "lucide-react";
<<<<<<< HEAD
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/Dialog";
 
import pdf_svg from "../../../assets/Icon awesome-file-pdf.svg";
import upload_svg from "../../../assets/Icon feather-upload-cloud.svg";
 
=======
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/Dialog";

import pdf_svg from "../../assets/Icon awesome-file-pdf.svg";
import upload_svg from "../../assets/download.svg";

>>>>>>> c2352a1deff3b459eaa8ba9dd7efd41bd4bd492e
interface UploadResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (file: File) => void;
}
<<<<<<< HEAD
 
=======

>>>>>>> c2352a1deff3b459eaa8ba9dd7efd41bd4bd492e
export function UploadResumeModal({
  open,
  onOpenChange,
  onConfirm,
}: UploadResumeModalProps) {
  const [uploadedFile, setUploadedFile] = useState<{
    name: string;
    size: string;
  } | null>({
    name: "Sarah Anderson - Resume.docx",
    size: "2.4 MB",
  });

  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileSelect = (file: File) => {
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
<<<<<<< HEAD
 
=======

>>>>>>> c2352a1deff3b459eaa8ba9dd7efd41bd4bd492e
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

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length > 0) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleProceed = async () => {
    if (!uploadedFile) return;

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    onConfirm({} as File);
    onOpenChange(false);
    setIsSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          w-[800px]
          max-w-[800px]
          p-0
          bg-white
          rounded-xl
          shadow-2xl
          flex
          flex-col
          overflow-hidden
        "
      >
        <div className="bg-[#F3FAF9]">
          <div className="flex items-center justify-between px-8 py-5">
            <DialogTitle className="text-lg font-semibold text-gray-900">
              Upload resume
            </DialogTitle>
            <button onClick={() => onOpenChange(false)}>
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="px-8 py-8">
          <p className="text-base text-gray-700 mb-4 flex align">
            Upload your resume in a PDF format
          </p>

          <div className="space-y-4">
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
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
              <img src={upload_svg} className="h-10 w-10 opacity-40" />
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Drag and drop to upload or
                </p>
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
                className="hidden"
                onChange={(e) =>
                  e.target.files && handleFileSelect(e.target.files[0])
                }
              />
            </div>
<<<<<<< HEAD
 
=======

>>>>>>> c2352a1deff3b459eaa8ba9dd7efd41bd4bd492e
            {uploadedFile && (
              <div className="flex items-center gap-2">
                <img src={pdf_svg} className="h-5 w-5" />
                <span className="text-sm text-gray-700 truncate">
                  {uploadedFile.name}
                </span>
                <button
                  onClick={() => setUploadedFile(null)}
                  className="text-gray-400 hover:text-gray-600 ml-1"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="px-8 py-6 flex justify-center gap-3">
          <button
            className="px-6 py-4 border border-black rounded text-black hover:bg-black hover:text-white disabled:opacity-50"
            onClick={() => onOpenChange(false)}
            disabled={isSubmitting}
          >
            Cancel
          </button>

          <button
            className="px-6 py-4 bg-[#006E74] border border-black rounded text-white hover:bg-black disabled:opacity-50"
            onClick={handleProceed}
            disabled={!uploadedFile || isSubmitting}
          >
            {isSubmitting ? "Proceeding..." : "Proceed"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
<<<<<<< HEAD
 
 
=======
>>>>>>> c2352a1deff3b459eaa8ba9dd7efd41bd4bd492e
