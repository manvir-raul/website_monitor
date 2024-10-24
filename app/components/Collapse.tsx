"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Plus from "../../public/assets/Plus.svg";
import Minus from "../../public/assets/Minus.svg";

export function Collapse({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("max-h-20");
  const contentRef = useRef(null);

  useEffect(() => {
    const h = contentRef?.current?.scrollHeight;
    const hh = Math.ceil((h / 16 + 2) * 4);
    const mm = `max-h-${hh} lg:max-h-7`;
    console.log("height", h, hh, mm);
    setHeight(mm);
  }, []);

  console.log("isOpen", isOpen, height);

  return (
    <div className="flex items-start bg-[#E3F1FF]  lg:p-6 rounded-lg lg:justify-between manvir">
      <div
        className={`flex flex-col p-4   lg:p-0  rounded-lg  lg:rounded-none ${
          isOpen ? "gap-y-2 lg:gap-y-4 gap-x-4" : "gap-y-0 lg:gap-y-0 gap-x-0"
        } transition-all duration-1000`}
      >
        <h4
          className="flex font-medium items-center justify-between  lg:text-[18px] text-[#172026]"
          ref={contentRef}
        >
          {item.question}
          <span className="block  lg:hidden">
            <Image
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
              src={isOpen ? Minus : Plus}
              alt="minus"
              width={24}
              height={24}
              className={`cursor-pointer transition-opacity duration-300 ease-in-out `}
            />
          </span>
        </h4>
        <p
          className={`text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]  ${
            isOpen ? "max-h-96" : "max-h-0"
          } overflow-hidden transition-all duration-1000`}
        >
          {item.answer}
        </p>
      </div>
      <Image
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        src={isOpen ? Minus : Plus}
        alt="minus"
        width={24}
        height={24}
        className="hidden lg:block cursor-pointer bibek"
      />
    </div>
  );
}
