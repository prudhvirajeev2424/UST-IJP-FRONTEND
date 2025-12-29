import React from "react";
import SortIcons from "../../../assets/sortIcons.svg";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      {/* Search Input */}
      <div className="relative w-[320px]">
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-md border border-[#D7E0E3] bg-white py-[9px] pl-3.5 pr-10 text-[14px] text-ijp-near-black placeholder-[#898E95] leading-tight focus:border-ijp-teal focus:outline-none focus:ring-1 focus:ring-ijp-teal"
        />
      </div>

      {/* Sort Icon Button */}
      <button
        className="flex items-center justify-center h-[38px] w-[38px] rounded-md border border-[#D7E0E3] bg-white text-[#7A7480] hover:bg-gray-50 transition-colors"
        aria-label="Sort"
      >
        {/* Use the SVG asset as an image (URL import) */}
        <img src={SortIcons} alt="Sort" className="h-[48px] w-[48px]" />
      </button>
    </div>
  );
};

export default SearchBar;
