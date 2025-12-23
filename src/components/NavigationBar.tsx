import React from "react";
import { MailIcon, BellIcon } from "./Icons";

export const Navbar: React.FC = () => {
  return (
    <div className="w-full h-[70px] bg-white border-b border-[#E5E7EB] px-8 flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-12 flex-shrink-0">
        <div className="flex items-center gap-1 flex-shrink-0">
          <span
            className="text-[24px] font-bold text-[#231F20] whitespace-nowrap"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            UST
          </span>
          <span
            className="text-[24px] font-light text-[#7A7480] whitespace-nowrap"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            IJP
          </span>
        </div>
        <nav className="flex items-center gap-8 flex-shrink-0">
          <a
            href="#"
            className="text-[16px] text-[#7A7480] hover:text-[#231F20] transition-colors py-6 whitespace-nowrap"
            style={{ fontFamily: "Rubik, sans-serif", fontWeight: 400 }}
          >
            Home
          </a>
          <a
            href="#"
            className="text-[16px] text-[#231F20] border-b-[3px] border-[#0097AC] py-6 whitespace-nowrap"
            style={{ fontFamily: "Rubik, sans-serif", fontWeight: 500 }}
          >
            Applications
          </a>
          <a
            href="#"
            className="text-[16px] text-[#7A7480] hover:text-[#231F20] transition-colors py-6 whitespace-nowrap"
            style={{ fontFamily: "Rubik, sans-serif", fontWeight: 400 }}
          >
            Assigning & Tracking
          </a>
          <a
            href="#"
            className="text-[16px] text-[#7A7480] hover:text-[#231F20] transition-colors py-6 whitespace-nowrap"
            style={{ fontFamily: "Rubik, sans-serif", fontWeight: 400 }}
          >
            Reports
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-6 flex-shrink-0">
        <button className="text-[#7A7480] hover:text-[#231F20] transition-colors flex-shrink-0">
          <MailIcon />
        </button>
        <button className="relative text-[#7A7480] hover:text-[#231F20] transition-colors flex-shrink-0">
          <BellIcon />
          <span
            className="absolute -top-1 -right-1 w-5 h-5 bg-[#FC6A59] rounded-full text-white text-[11px] font-medium flex items-center justify-center"
            style={{ fontFamily: "Rubik, sans-serif", fontWeight: 500 }}
          >
            1
          </span>
        </button>
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="text-right">
            <div
              className="text-[14px] text-[#231F20] whitespace-nowrap"
              style={{ fontFamily: "Rubik, sans-serif", fontWeight: 500 }}
            >
              Andrea Stephen
            </div>
            <div
              className="text-[12px] text-[#7A7480] whitespace-nowrap"
              style={{ fontFamily: "Rubik, sans-serif", fontWeight: 400 }}
            >
              TP Manager
            </div>
          </div>
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Andrea"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-[#E5E7EB] flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;