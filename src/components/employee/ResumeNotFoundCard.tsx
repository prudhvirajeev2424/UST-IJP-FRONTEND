import notfound from '../assets/not_found.svg';
interface ResumeNotFoundCardProps {
  onUploadClick: () => void;
}

export function ResumeNotFoundCard({ onUploadClick }: ResumeNotFoundCardProps) {
  return (
    <div className="flex items-center justify-center min-h-[500px] bg-white rounded-lg p-8">
      <div className="text-center max-w-md">
        {/* Illustration */}
        <div className="mb-8">
            <img src={notfound} alt="Resume Not Found" className="mx-auto h-40 w-40 mb-4" />
            {/* Document/Resume */}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Resume not found
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Your resume is not available in the system. To receive job Opportunities tailored to your profile, please upload or update your resume to proceed
        </p>

        {/* Upload Button */}
        <button
          onClick={onUploadClick}
          className="px-6 py-2.5 bg-teal-600 text-white text-sm font-medium rounded-md hover:bg-teal-700 transition-colors"
        >
          Upload
        </button>
      </div>
    </div>
  );
}