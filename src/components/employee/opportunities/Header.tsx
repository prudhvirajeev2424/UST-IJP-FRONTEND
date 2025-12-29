import { Bell } from "lucide-react";

interface HeaderProps {
  onBellClick: () => void;
  activePage: string;
  setActivePage: (page: string) => void;
}

export const Header = ({ onBellClick, activePage, setActivePage }: HeaderProps) => {
  const navItems = ['Home', 'Opportunities', 'Assigning & Tracking', 'My Applications'];

  return (
    <header className="h-[60px] bg-white flex items-center justify-between px-10 border-b border-[#D7E0E3] relative z-[100] w-full shrink-0">
      <div className="flex items-center gap-1">
        <span className="text-[17px] font-bold text-[#231F20]">UST</span>
        <span className="text-[17px] font-light text-[#888]">IJP</span>
      </div>
      
      <nav className="flex gap-[25px] h-full items-center">
        {navItems.map((item) => (
          <span 
            key={item}
            onClick={() => setActivePage(item)}
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
          <img src="/src/assets/DP.png" alt="profile" className="w-7 h-7 rounded-full object-cover" />
        </div>
      </div>
    </header>
  );
};