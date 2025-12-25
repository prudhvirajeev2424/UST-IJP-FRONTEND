// import { Bell } from "lucide-react";

// export const Header = ({ onBellClick }: { onBellClick: () => void }) => {
//   return (
//     <header className="h-[80px] bg-white flex items-center justify-between px-10 border-b border-border-grey relative">
//       <div className="flex items-center gap-1">
//         <span className="text-[22px] font-bold text-text-main">UST</span>
//         <span className="text-[22px] font-light text-[#888]">IJP</span>
//       </div>
      
//       <nav className="flex gap-[35px] h-full items-center">
//         {['Home', 'Opportunities', 'Assigning & Tracking', 'My Applications'].map((item) => (
//           <span 
//             key={item}
//             className={`cursor-pointer text-sm font-medium transition-all ${
//               item === 'Opportunities' 
//               ? 'text-teal-primary border-b-2 border-teal-primary pb-1' 
//               : 'text-text-muted hover:text-teal-primary'
//             }`}
//           >
//             {item}
//           </span>
//         ))}
//       </nav>

//       <div className="flex items-center gap-6">
//         <div className="relative cursor-pointer text-text-muted" onClick={onBellClick}>
//           <Bell size={22} strokeWidth={1.5} />
//           <span className="absolute -top-1.5 -right-1 bg-[#FC6A59] text-white w-4 h-4 text-[10px] rounded-full flex items-center justify-center font-bold">
//             1
//           </span>
//         </div>
//         <div className="flex items-center gap-3">
//           <div className="text-right">
//             <span className="block text-[14px] font-bold text-text-main">Sarah Anderson</span>
//             <span className="block text-[11px] text-text-muted">Lead Developer</span>
//           </div>
//           <img src="/src/assets/DP.png" alt="profile" className="w-10 h-10 rounded-full object-cover" />
//         </div>
//       </div>
//     </header>
//   );
// };
import { Bell } from "lucide-react";

export const Header = ({ onBellClick }: { onBellClick: () => void }) => {
  return (
    <header className="h-[80px] bg-white flex items-center justify-between px-10 border-b border-border-grey relative">
      <div className="flex items-center gap-1">
        <span className="text-[18px] font-bold text-text-main">UST</span>
        <span className="text-[18px] font-light text-[#888]">IJP</span>
      </div>
      
      <nav className="flex gap-[20px] h-full items-center">
        {['Home', 'Opportunities', 'Assigning & Tracking', 'My Applications'].map((item) => (
          <span 
            key={item}
            className={`cursor-pointer text-sm font-medium transition-all ${
              item === 'Opportunities' 
              ? 'text-teal-primary border-b-2 border-teal-primary pb-1' 
              : 'text-text-muted hover:text-teal-primary'
            }`}
          >
            {item}
          </span>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer text-text-muted" onClick={onBellClick}>
          <Bell size={22} strokeWidth={1.5} />
          <span className="absolute -top-1.5 -right-1 bg-[#FC6A59] text-white w-4 h-4 text-[10px] rounded-full flex items-center justify-center font-bold">
            1
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="block text-[14px] font-bold text-text-main">Sarah Anderson</span>
            <span className="block text-[11px] text-text-muted">Lead Developer</span>
          </div>
          <img src="/src/assets/DP.png" alt="profile" className="w-10 h-10 rounded-full object-cover" />
        </div>
      </div>
    </header>
  );
};