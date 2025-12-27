import React from "react";
import DP from "../assets/DP.png";
import IJP from "../assets/ijp.jpg";

const Navbar: React.FC = () => {
  return (
    <nav className="h-20 bg-white flex items-center shadow-sm sticky top-0 z-50">
      <div className="absolute left-[60px] top-[29px] w-[108px] h-[22px] bg-transparent opacity-100">
        <img
          src={IJP}
          alt="UST IJP Logo"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex ml-auto mr-[150px] gap-10 text-[18px]">
        <span className="cursor-pointer hover:text-[#007C85] transition-colors">
          Home
        </span>
        <span className="cursor-pointer hover:text-[#007C85] transition-colors">
          Opportunities
        </span>
        <div className="relative h-full flex items-center">
          <span className="font-medium text-[#007C85]">
            Assigning & Tracking
          </span>
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#007C85]" />
        </div>
        <span className="text-[#7A7480] cursor-pointer hover:text-[#231F20]">
          My Applications
        </span>
      </div>

      <div className="flex items-center gap-4 mr-[60px]">
        <div className="relative cursor-pointer">
          <div className="w-6 h-6 border-2 border-[#231F20] rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
          <span className="absolute -top-1 -right-1 bg-[#FC6A59] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white font-bold">
            1
          </span>
        </div>

        <div className="text-right">
          <p className="text-sm font-bold leading-tight">Sarah Anderson</p>
          <p className="text-[11px] text-[#7A7480]">Lead Developer</p>
        </div>

        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100">
          <img src={DP} alt="DP" className="w-full h-full object-cover" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;