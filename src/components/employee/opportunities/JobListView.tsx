import type { Job } from "../../../types/application";

interface JobListViewProps {
  jobs: Job[];
  onViewDetails: (index: number) => void; // New prop to handle row clicks
}

export const JobListView = ({ jobs, onViewDetails }: JobListViewProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#D7E0E3]">
      <table className="w-full text-left border-collapse font-rubik">
        <thead>
          <tr className="bg-[#FAFAFA] border-b border-[#D7E0E3]">
            <th className="py-2.5 px-5 text-[11px] font-medium text-[#7A7480] uppercase tracking-tight">
              SO#
            </th>
            <th className="py-2.5 px-5 text-[11px] font-medium text-[#7A7480] uppercase tracking-tight">
              Role
            </th>
            <th className="py-2.5 px-5 text-[11px] font-medium text-[#7A7480] uppercase tracking-tight">
              Band
            </th>
            <th className="py-2.5 px-5 text-[11px] font-medium text-[#7A7480] uppercase tracking-tight">
              Location
            </th>
            <th className="py-2.5 px-5 text-[11px] font-medium text-[#7A7480] uppercase tracking-tight">
              Skills
            </th>
            <th className="py-2.5 px-5 text-[11px] font-medium text-[#7A7480] uppercase tracking-tight">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr
              key={index}
              onClick={() => onViewDetails(index)} // ← Click triggers detail view
              className="border-b border-gray-100 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <td className="py-2.5 px-5 text-[12.5px] font-medium text-[#0097AC] hover:text-black">
                {job.id.replace("SO#", "")}
              </td>
              <td className="py-2.5 px-5 text-[12.5px] font-medium text-[#0097AC] hover:text-black uppercase tracking-tight">
                {job.role}
              </td>
              <td className="py-2.5 px-5 text-[12.5px] text-[#555]">{job.band}</td>
              <td className="py-2.5 px-5 text-[12.5px] text-[#555]">{job.location}</td>
              <td className="py-2.5 px-5 text-[12.5px] text-[#555]">
                {job.skills.slice(0, 2).join(", ")}
                {job.skills.length > 2 && (
                  <span className="font-bold ml-1 text-[#7A7480]">
                    +{job.skills.length - 2}
                  </span>
                )}
              </td>
              <td className="py-2.5 px-5">
                {job.status && (
                  <span
                    className={`px-2 py-0.5 rounded-[4px] text-[10px] font-bold capitalize inline-block ${
                      job.status === "Shortlisted"
                        ? "bg-[#E6F9F3] text-[#01B27C]"
                        : job.status === "Actioned"
                        ? "bg-[#FFF9E6] text-[#FFBF00]"
                        : "bg-[#FFEBEB] text-[#FC6A59]"
                    }`}
                  >
                    {job.status}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};