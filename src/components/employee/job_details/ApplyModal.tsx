import { useState } from "react";
import { X, Upload, FileText, Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Button,
  Textarea,
} from "../../ui";

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

const ApplyModal = ({
  open,
  onOpenChange,
  onConfirm,
}: ApplyModalProps) => {
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
    // Handle application submission
    console.log("Application submitted:", { coverLetter, attachedFiles });
    onConfirm();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 gap-0 bg-background">
        <DialogHeader className="p-6 pb-4 border-b border-border">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-medium text-foreground">
              Apply for opportunity
            </DialogTitle>
            <button
              onClick={() => onOpenChange(false)}
              className="rounded-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </DialogHeader>

        <div className="p-6 space-y-6">
          {/* Cover Letter Section */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">
              Cover Letter (How much you are a good fit for this role)
            </label>
            <div className="relative">
              <Textarea
                value={coverLetter}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCoverLetter(e.target.value)}
                className="min-h-[100px] resize-none text-sm border-border focus:border-primary"
                placeholder="Write your cover letter..."
              />
              <button className="absolute bottom-2 right-2 p-1.5 text-primary hover:bg-primary/10 rounded">
                <FileText className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Attach Documents Section */}
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-medium text-foreground">
                Attach Documents
              </h4>
              <p className="text-xs text-muted-foreground">
                Attach your resume and approval mail from reporting manager.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Upload Area 1 */}
              <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="w-6 h-6 text-muted-foreground" />
                <div className="text-center">
                  <span className="text-sm text-muted-foreground">
                    Drag and drop to upload or{" "}
                  </span>
                  <span className="text-sm text-primary cursor-pointer hover:underline">
                    Browse
                  </span>
                </div>
              </div>

              {/* Upload Area 2 */}
              <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="w-6 h-6 text-muted-foreground" />
                <div className="text-center">
                  <span className="text-sm text-muted-foreground">
                    Drag and drop to upload or{" "}
                  </span>
                  <span className="text-sm text-primary cursor-pointer hover:underline">
                    Browse
                  </span>
                </div>
              </div>
            </div>

            {/* Attached Files List */}
            <div className="space-y-2">
              {attachedFiles.map((file) => (
                <div
                  key={file.name}
                  className="flex items-center gap-2 text-sm"
                >
                  {file.type === "doc" ? (
                    <FileText className="w-4 h-4 text-red-500" />
                  ) : (
                    <Mail className="w-4 h-4 text-blue-500" />
                  )}
                  <span className="text-foreground">{file.name}</span>
                  <button
                    onClick={() => handleRemoveFile(file.name)}
                    className="ml-1 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-start gap-3 p-6 pt-4 border-t border-border">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="px-6"
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            className="px-6 bg-primary hover:bg-primary/90"
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyModal;
