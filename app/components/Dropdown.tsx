"use client";
import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = (): void => setIsOpen(!isOpen);

  const handleOptionClick = (option: string): void => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left lg:flex-grow">
      <div
        className="flex justify-between w-full text-[16px] leading-[24px] text-[#36485C] "
        onClick={toggleDropdown}
      >
        {label}
        <svg
          className={`w-5 h-5 ml-2  lg:hidden transition-all duration-500  ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#36485C"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <ul
        className={`pl-1 flex gap-y-4 font-medium text-[16px] leading-[24px] flex-col mt-[16px] ${
          isOpen ? "max-h-96" : "max-h-0"
        } lg:max-h-96 overflow-hidden transition-all duration-1000 `}
      >
        {options.map((option, index) => (
          <li
            key={index}
            className="cursor-pointer"
            // onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
