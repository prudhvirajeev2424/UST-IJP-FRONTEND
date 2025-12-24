const ApplicationStatus = () => {
  const stats = [
    { label: "Pending Action", value: 8, rgb: "rgb(136, 29, 135)" },
    { label: "Allocated", value: 4, rgb: "rgb(0, 151, 172)" },
    { label: "Interviewing", value: 6, rgb: "rgb(255, 190, 0)" },
    { label: "Rejected", value: 6, rgb: "rgb(252, 106, 89)" },
    { label: "Selected", value: 4, rgb: "rgb(6, 178, 124)" },
  ];

  // Calculate stroke-dasharray for donut chart segments
  const total = 28;
  const circumference = 2 * Math.PI * 42;
  const pendingAction = (8 / total) * circumference;
  const interviewing = (6 / total) * circumference;
  const allocated = (4 / total) * circumference;
  const rejected = (6 / total) * circumference;
  const selected = (4 / total) * circumference;

  return (
    <div className="bg-white w-[360px] h-[416px] rounded-[10px] opacity-100 absolute top-[116px] left-[60px] shadow-lg border border-gray-200">
      <h3 className="font-rubik text-[16px] leading-[19px] font-medium tracking-[0px] text-[#231F20] text-center mt-6 mb-4 py-2">
        Application Status
      </h3>

      {/* Donut Chart */}
      <div className="flex justify-center mb-6">
        <div className="relative w-36 h-36">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* Shortlisted (Purple) */}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="rgb(136 29 135)"
              strokeWidth="7"
              strokeDasharray={`${pendingAction} ${circumference}`}
              strokeDashoffset="0"
            />
            {/* Rejected (Red) */}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="rgb(252 106 89)"
              strokeWidth="7"
              strokeDasharray={`${rejected} ${circumference}`}
              strokeDashoffset={-pendingAction}
            />
            {/* Interviewing (Yellow) */}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="rgb(255 190 0)"
              strokeWidth="7"
              strokeDasharray={`${interviewing} ${circumference}`}
              strokeDashoffset={-(rejected + pendingAction)}
            />
            {/* Allocated (Blue) */}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="rgb(0 151 172)"
              strokeWidth="7"
              strokeDasharray={`${allocated} ${circumference}`}
              strokeDashoffset={-(rejected + pendingAction + interviewing)}
            />
            {/* Accepted (Green) */}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="rgb(6 178 124)"
              strokeWidth="7"
              strokeDasharray={`${selected} ${circumference}`}
              strokeDashoffset={-(pendingAction + rejected + interviewing + allocated)}
            />
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-rubik text-[24px] leading-[28px] font-normal tracking-[0px] text-[#231F20] text-center">
              {total}
            </span>
            <span className="text-xs font-rubik text-black-900 text-center leading-tight" >
              Total<br />
              Applications
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4  mb-4 ">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-2 justify-start px-4 ">
            <p
              className="font-rubik text-[24px] leading-[28px] font-normal text-left"
              style={{ color: stat.rgb }}
            >
              {stat.value.toString().padStart(2, "0")}
            </p>
            <p className="font-rubik text-[14px] leading-[17px] font-normal tracking-[0px] text-[#231F20] text-center" >{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationStatus;
