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

interface HeaderProps {
  onBellClick: () => void;
  activePage: string;
  setActivePage: (page: string) => void;
}

export const Header = ({ onBellClick, activePage, setActivePage }: HeaderProps) => {
  const navItems = ['Home', 'Opportunities', 'Assigning & Tracking', 'My Applications'];

  return (
    <header className="h-[60px] bg-white flex items-center justify-between px-10 border-b border-border-grey relative z-[100] w-full shrink-0">
      <div className="flex items-center gap-1">
        <span className="text-[17px] font-bold text-[#231F20]">UST</span>
        <span className="text-[17px] font-light text-[#888]">IJP</span>
      </div>
      
      <nav className="flex gap-[22px] h-full items-center">
        {navItems.map((item) => (
          <span 
            key={item}
            onClick={() => setActivePage(item)} // This switches the page in App.tsx
            className={`cursor-pointer text-[12.5px] font-medium transition-all h-full flex items-center px-1 border-b-2 leading-none pt-1 ${
              activePage === item 
              ? 'text-[#006E74] border-[#006E74]' 
              : 'text-[#7A7480] border-transparent hover:text-[#006E74]'
            }`}
          >
            {item}
          </span>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer text-[#7A7480]" onClick={onBellClick}>
          <Bell size={18} strokeWidth={1.5} />
          <span className="absolute -top-1 -right-1 bg-[#FC6A59] text-white w-3 h-3 text-[8px] rounded-full flex items-center justify-center font-bold">1</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="block text-[12.5px] font-bold text-[#231F20] leading-tight">Sarah Anderson</span>
            <span className="block text-[10px] text-[#7A7480]">Lead Developer</span>
          </div>
          <img src="/src/assets/DP.png" alt="profile" className="w-7 h-7 rounded-full object-cover border border-gray-100" />
        </div>
      </div>
    </header>
  );
};