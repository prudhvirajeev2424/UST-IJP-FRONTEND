import notfound from "../../../assets/not_found.svg";

interface ResumeNotFoundCardProps {
  onUploadClick: () => void;
}

export function ResumeNotFoundCard({ onUploadClick }: ResumeNotFoundCardProps) {
  return (
    <div className="flex items-center justify-center h-[920px] bg-white rounded-lg w-[1000px]">
      <div className="flex flex-col items-center text-center max-w-[850px]">
        {/* Illustration */}
        <img
          src={notfound}
          alt="Resume Not Found"
          className="h-44 mb-6"
        />

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Resume not found
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          Your resume is not available in the system. To receive job opportunities
          tailored to your profile, please upload or update your resume to proceed.
        </p>

        {/* Upload Button */}
        <button
          onClick={onUploadClick}
          className="px-6 py-2.5 bg-[#006E74] text-white text-sm font-medium rounded-md hover:bg-black transition-colors"
        >
          Upload
        </button>
      </div>
    </div>
  );
}
