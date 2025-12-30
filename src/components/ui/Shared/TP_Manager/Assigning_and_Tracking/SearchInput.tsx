import React from "react";
import type { SearchInputProps } from "../../../../../types/AssigningandTrackingTypes";

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = "Search",
}) => {
  return (
    <div className="relative w-[320px]">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={
          "w-full h-[49px] pl-9 pr-3 bg-[#FFFFFF] border border-[#D7E0E3] rounded-[5px] text-sm text-dark placeholder:text-gray-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all opacity-100"
        }
      />
    </div>
  );
};

export default SearchInput;
