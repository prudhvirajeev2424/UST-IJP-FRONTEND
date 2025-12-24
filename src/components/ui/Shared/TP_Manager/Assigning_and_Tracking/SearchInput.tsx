import React from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

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
        className="
          w-full
          h-[49px]
          pl-9
          pr-3
          bg-white
          border
          border-gray-light
          rounded-md
          text-sm
          text-dark
          placeholder:text-gray-primary
          focus:outline-none
          focus:ring-2
          focus:ring-primary
          focus:border-transparent
        "
      />
    </div>
  );
};

export default SearchInput;
