const ApplicationStatus = () => {
  return (
    <div className="bg-white rounded-[10px] p-5 w-full shadow-sm mt-5 box-border">
      {/* Title */}
      <h2 className="text-[16px] font-normal text-[#231F20] text-center mb-3 leading-[24px]">
        Application Status
      </h2>

      {/* Chart */}
      <div className="relative flex justify-center items-center mb-2">
        <svg
          width="175"
          height="175"
          viewBox="0 0 175 175"
          className="-rotate-[120deg]"
        >
          <circle
            cx="87.5"
            cy="87.5"
            r="65"
            stroke="#01B27C"
            strokeWidth="10"
            fill="none"
            strokeDasharray="204.1 408.2"
          />
          <circle
            cx="87.5"
            cy="87.5"
            r="65"
            stroke="#881E87"
            strokeWidth="10"
            fill="none"
            strokeDasharray="145.5 408.2"
            strokeDashoffset="-204.1"
          />
          <circle
            cx="87.5"
            cy="87.5"
            r="65"
            stroke="#FC6A59"
            strokeWidth="10"
            fill="none"
            strokeDasharray="58.6 408.2"
            strokeDashoffset="-349.6"
          />
        </svg>

        {/* Center Text */}
        <div className="absolute flex flex-col items-center justify-center text-center">
          <div className="text-[32px] font-normal text-[#231F20] leading-[38px]">
            28
          </div>
          <div className="text-sm text-[#231F20]">Total</div>
          <div className="text-sm text-[#231F20]">Applications</div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-between items-center gap-6 pt-4">
        <div className="flex flex-col items-center min-w-[80px]">
          <div className="text-[32px] font-normal leading-[38px] text-[#01B27C]">
            28
          </div>
          <div className="text-sm text-[#231F20]">Accepted</div>
        </div>

        <div className="flex flex-col items-center min-w-[80px]">
          <div className="text-[32px] font-normal leading-[38px] text-[#881E87]">
            20
          </div>
          <div className="text-sm text-[#231F20]">Shortlisted</div>
        </div>

        <div className="flex flex-col items-center min-w-[80px]">
          <div className="text-[32px] font-normal leading-[38px] text-[#FC6A59]">
            08
          </div>
          <div className="text-sm text-[#231F20]">Rejected</div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatus;
