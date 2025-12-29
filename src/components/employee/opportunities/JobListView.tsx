// import type { Job } from '../../../types/application';

// export const JobListView = ({ jobs }: { jobs: Job[] }) => {
//   return (
//     <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-border-grey">
//       <table className="w-full text-left border-collapse font-rubik">
//         <thead>
//           <tr className="bg-[#FAFAFA] border-b border-border-grey">
//             <th className="p-5 text-[13px] font-medium text-text-muted uppercase tracking-wider">SO#</th>
//             <th className="p-5 text-[13px] font-medium text-text-muted uppercase tracking-wider">Role</th>
//             <th className="p-5 text-[13px] font-medium text-text-muted uppercase tracking-wider">Band</th>
//             <th className="p-5 text-[13px] font-medium text-text-muted uppercase tracking-wider">Location</th>
//             <th className="p-5 text-[13px] font-medium text-text-muted uppercase tracking-wider">Skills</th>
//             <th className="p-5 text-[13px] font-medium text-text-muted uppercase tracking-wider">Action Taken</th>
//           </tr>
//         </thead>
//         <tbody>
//           {jobs.map((job, index) => (
//             <tr key={index} className="border-b border-gray-100 hover:bg-slate-50/50 transition-colors">
//               {/* SO# - Stays Teal as per SS */}
//               <td className="p-5 text-sm font-medium text-teal-light duration-200 hover:text-black hover:underline">
//                 {job.id.replace('SO#', '')}
//               </td>

//               {/* ROLE - Changes to BLACK on hover */}
//               <td className="p-5 text-sm font-medium text-teal-light cursor-pointer transition-colors duration-200 hover:text-black hover:underline">
//                 {job.role}
//               </td>

//               <td className="p-5 text-sm text-[#555]">
//                 {job.band.replace('Band ', '')}
//               </td>

//               <td className="p-5 text-sm text-[#555]">
//                 {job.location}
//               </td>

//               <td className="p-5 text-sm text-[#555]">
//                 {job.skills.slice(0, 2).join(', ')} 
//                 {job.skills.length > 2 && (
//                   <span className="font-bold ml-1 text-text-muted">
//                     +{job.skills.length - 2}
//                   </span>
//                 )}
//               </td>

//               <td className="p-5">
//                 {job.status && (
//                   <span className={`px-3 py-1 rounded-[4px] text-[11px] font-bold capitalize inline-block
//                     ${job.status === 'Shortlisted' ? 'bg-[#E6F9F3] text-[#01B27C]' : 
//                       job.status === 'Actioned' ? 'bg-[#FFF9E6] text-[#FFBF00]' : 
//                       'bg-[#FFEBEB] text-[#FC6A59]'}`}>
//                     {job.status}
//                   </span>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

import type { Job } from "../../../types/application";

export const JobListView = ({ jobs }: { jobs: Job[] }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#D7E0E3]">
      <table className="w-full text-left border-collapse font-rubik">
        <thead>
          <tr className="bg-[#FAFAFA] border-b border-[#D7E0E3]">
            <th className="py-2.5 px-5 text-[11px] font-medium text-[#7A7480] uppercase tracking-tight">SO#</th>
            <th className="py-2.5 px-5 text-[11px] font-medium text-[#7A7480] uppercase tracking-tight">Role</th>
            <th className="py-2.5 px-5 text-[11px] font-medium text-[#7A7480] uppercase tracking-tight">Band</th>
            <th className="py-2.5 px-5 text-[11px] font-medium text-[#7A7480] uppercase tracking-tight">Location</th>
            <th className="py-2.5 px-5 text-[11px] font-medium text-[#7A7480] uppercase tracking-tight">Skills</th>
            <th className="py-2.5 px-5 text-[11px] font-medium text-[#7A7480] uppercase tracking-tight">Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index} className="border-b border-gray-100 hover:bg-slate-50 transition-colors">
              <td className="py-2.5 px-5 text-[13px] font-medium text-[#0097AC] hover:text-black hover:underline cursor-pointer">
                {job.id.replace("SO#", "")}
              </td>
              <td className="py-2.5 px-5 text-[13px] font-medium text-[#0097AC] hover:text-black hover:underline cursor-pointer">
                {job.role}
              </td>
              <td className="py-2.5 px-5 text-[13px] text-[#555]">{job.band}</td>
              <td className="py-2.5 px-5 text-[13px] text-[#555]">{job.location}</td>
              <td className="py-2.5 px-5 text-[13px] text-[#555]">
                {job.skills.slice(0, 2).join(", ")}
                {job.skills.length > 2 && <span className="font-bold ml-1 text-[#7A7480]">+{job.skills.length - 2}</span>}
              </td>
              <td className="py-2.5 px-5">
                {job.status && (
                  <span className={`px-2 py-0.5 rounded-[4px] text-[10px] font-bold capitalize inline-block ${
                    job.status === "Shortlisted" ? "bg-[#E6F9F3] text-[#01B27C]" : 
                    job.status === "Actioned" ? "bg-[#FFF9E6] text-[#FFBF00]" : "bg-[#FFEBEB] text-[#FC6A59]"
                  }`}>
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