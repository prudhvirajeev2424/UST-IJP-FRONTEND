import { useState } from "react";
import { X} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "../../ui/Dialog";
import { Textarea } from "../../ui";
import copy from "../../../assets/copy.svg"
import mail from "../../../assets/email.svg"
import pdf from "../../../assets/Icon awesome-file-pdf.svg"
import upload from "../../../assets/Icon feather-upload-cloud.svg"

interface AttachedFile {
  name: string;
  type: "doc" | "email";
}

interface ApplyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  jobTitle?: string;
}

const ApplyModal = ({ open, onOpenChange, onConfirm }: ApplyModalProps) => {
  const [coverLetter, setCoverLetter] = useState(
    `I am interested in joining the [Project Name] team at [Company Name]. With experience in [Key Skills], I have contributed to [mention relevant achievement]. I believe my expertise aligns well with the project's goals and would love the opportunity to contribute.
Looking forward to discussing this further.`
  );

  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([
    { name: "Sarah Anderson - Resume.docx", type: "doc" },
    { name: "Approval Mail.eml", type: "email" },
  ]);

  const handleRemoveFile = (fileName: string) => {
    setAttachedFiles(attachedFiles.filter((f) => f.name !== fileName));
  };

  const handleConfirm = () => {
    onConfirm();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          w-[900px]
          max-w-[900px]
          h-[700px]
          max-h-[700px]
          p-0
          bg-white
          rounded-xl
          shadow-2xl
          overflow-hidden
        "
      >

        {/* Header */}
        <div className="bg-[#F3FAF9]">
          <div className="flex items-center justify-between px-8 py-4 mt-6">
            <DialogTitle className="text-lg font-semibold text-gray-900">
              Apply for opportunity
            </DialogTitle>
            <button onClick={() => onOpenChange(false)}>
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-8 space-y-8">

          {/* Cover Letter */}
          <div className="space-y-1">
            <label className="text-xs text-gray-500">
              Cover Letter (How much you are a good fit for this role)
            </label>

            <div className="relative">
              <Textarea
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                placeholder={`I am interested in joining the [Project Name] team at [Company Name]. With experience in [Key Skills], I have contributed to [mention relevant achievement]. I believe my expertise aligns well with the project's goals and would love the opportunity to contribute.
          Looking forward to discussing this further.`}
                className="w-full min-h-[130px] text-sm leading-relaxed resize-none border border-gray-200 rounded-md p-3 text-gray-700 bg-white focus:outline-none focus:ring-0 focus:border-gray-300"
              />

              <button className="absolute bottom-2 right-2 p-1 text-[#006E74] hover:bg-gray-100 rounded">
                <img src={copy} className="w-5 h-5" />
              </button>
            </div>
          </div>


          {/* Attach Documents */}
          <div>
            <h4 className="text-sm font-medium text-gray-900">Attach Documents</h4>
            <p className="text-xs text-gray-500 mb-3">
              Attach your resume and approval mail from reporting manager.
            </p>

            {/* Two Upload Zones */}
            <div className="grid grid-cols-2 gap-4">

              {/* Box 1 */}
              <div className="
                h-[140px] border-2 border-dashed border-gray-300 bg-gray-50
                rounded-lg flex flex-col items-center justify-center gap-2
                cursor-pointer hover:border-[#006E74] hover:bg-teal-50 transition
              ">
                <img src={upload} className="w-8 h-8 text-gray-400" />
                <p className="text-sm text-gray-500">Drag and drop to upload or</p>
                <span className="text-[#006E74] font-semibold cursor-pointer hover:underline text-sm">Browse</span>
              </div>

              {/* Box 2 */}
              <div className="
                h-[140px] border-2 border-dashed border-gray-300 bg-gray-50
                rounded-lg flex flex-col items-center justify-center gap-2
                cursor-pointer hover:border-[#006E74] hover:bg-teal-50 transition
              ">
                <img src={upload} className="w-8 h-8 text-gray-400" />
                <p className="text-sm text-gray-500">Drag and drop to upload or</p>
                <span className="text-[#006E74] font-semibold cursor-pointer hover:underline text-sm">Browse</span>
              </div>
            </div>

            {/* Attached Files */}
            <div className="mt-4 space-y-2">
              {attachedFiles.map((file) => (
                <div key={file.name} className="flex items-center gap-2 text-sm">
                  {file.type === "doc" ? (
                    <img src={pdf} className="w-4 h-4 text-red-500" />
                  ) : (
                    <img src={mail}  className="w-4 h-4 text-blue-500" />
                  )}
                  <span className="text-gray-800">{file.name}</span>
                  <button onClick={() => handleRemoveFile(file.name)}>
                    <X className="w-4 h-4 text-gray-500 hover:text-black" />
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 flex justify-center gap-3">
          <button
            className="w-[98px] h-[49px] border border-black rounded text-black hover:bg-black hover:text-white"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </button>

          <button
            className="w-[98px] h-[49px] bg-[#006E74] border border-black rounded text-white hover:bg-black"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>

      </DialogContent>
    </Dialog>
  );
};

export default ApplyModal;
