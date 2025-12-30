import React from 'react';

interface Props {
  value: boolean;
  onToggle: () => void;
}

const Toggle: React.FC<Props> = ({ value, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className={`
        relative h-[24px] w-[50px] cursor-pointer rounded-full p-[2px]
        transition-colors
        ${value ? 'bg-teal-500' : 'bg-gray-300'}
      `}
    >
      {/* TEXT INSIDE TOGGLE */}
      <span
        className={`
          absolute top-1/2 -translate-y-1/2
          text-[10px] font-semibold leading-none text-white
          ${value ? 'left-2' : 'right-2'}
        `}
      >
        {value ? 'YES' : 'NO'}
      </span>

      {/* TOGGLE KNOB */}
      <span
        className={`
          absolute top-[4px]
          h-[16px] w-[16px] rounded-full bg-white
          transition-transform duration-200
          ${value ? 'translate-x-[26px]' : 'translate-x-[4px]'}
        `}
      />
    </div>
  );
};

export default Toggle;
