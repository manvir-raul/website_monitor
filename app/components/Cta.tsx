import Image from "next/image";
import Arrow from "../../public/assets/arrow.png";

export function Cta() {
  return (
    <div className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 w-full rounded-2xl flex flex-col items-center py-[56px] lg:py-[88px] px-[24px] lg:px-[324px] gap-y-6 lg:rounded-2xl lg:gap-y-12">
      <h4 className="font-medium text-[32px] leading-[40px] lg:text-[56px] lg:leading-[64px] text-center text-[#FFFFFF]">
        Monitor your website like a pro
      </h4>
      <p className="text-[16px] leading-[24px] text-center lg:text-[18px] lg:leading-[28px] text-[#FFFFFF]">
        Join over 800+ happy site owners boosting productivity and efficiency!
      </p>
      <div className="flex flex-col gap-y-[32px] lg:gap-x-10 lg:flex-row items-center">
        <button className="py-[16px] px-[32px] bg-[#FFFFFF] font-medium text-[18px] leading-[24px] rounded text-[#EB2891]">
          Try for free
        </button>
        <button className="font-medium  flex gap-x-3  text-[18px] leading-[24px] text-[#FFFFFF]">
          Contact Sales
          <span>
            <Image src={Arrow} alt="arrow" />
          </span>
        </button>
      </div>
    </div>
  );
}
