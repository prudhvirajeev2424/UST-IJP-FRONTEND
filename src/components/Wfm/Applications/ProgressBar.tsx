// ProgressBar.tsx
import type { CandidateStatus } from "../../../types/CandidateStatus";
import { STEPS,statusIndexMap } from "../../../utils/ProgressConfig";

interface Props {
  status: CandidateStatus;
}

const ProgressBar: React.FC<Props> = ({ status }) => {
  const activeIndex = statusIndexMap[status] ?? 0;
  return (
    <div className="w-[360px] h-[114px] bg-white rounded-lg p-2">
      <div className="flex justify-center pl-14 pt-6">
        {STEPS.map((step, index) => {
          const isCompleted = index < activeIndex;
          const isActive = index === activeIndex;

          return (
            <div key={step.key} className="flex items-center w-full relative">
              {/* Circle + Tooltip Wrapper */}
              <div className="relative group">
                {/* Tooltip */}
                {step.tooltip && (
                  <div
                    className="absolute -top-12 left-1/2 -translate-x-1/2
                            opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                            transition-all duration-200 pointer-events-none"
                  >
                    <div className="relative bg-teal-700 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap">
                      {step.tooltip}
                      {/* Arrow */}
                      <div className="absolute left-1/2 -bottom-1 w-2 h-2 bg-teal-700 rotate-45 -translate-x-1/2" />
                    </div>
                  </div>
                )}

                {/* Circle */}
                <div
                  className={`h-3 w-3 rounded-full z-10 cursor-pointer
              ${isActive && "bg-purple-600"}
              ${isCompleted && "bg-teal-600"}
              ${!isCompleted && !isActive && "bg-white border border-[#C2BCBE]"}
            `}
                />
              </div>

              {/* Line */}
              {index !== STEPS.length - 1 && (
                <div
                  className={`flex-1 h-[2px]
              ${index < activeIndex ? "bg-teal-600" : "bg-gray-300"}
            `}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom label */}
      <p
        className={`mt-3 text-sm font-medium text-center ${
          activeIndex == 4 ? "text-teal-600" : "text-purple-600 "
        }`}
      >
        {activeIndex != 4 ? STEPS[activeIndex]?.label : "ALLOCATED"}
      </p>
    </div>
  );
};

export default ProgressBar;
