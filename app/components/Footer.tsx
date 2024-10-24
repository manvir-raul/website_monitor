import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Facebook.svg";
import Twitter from "../../public/assets/X.svg";
import Feed from "../../public/assets/Feed.svg";
import Dropdown from "./Dropdown";

export function Footer() {
  return (
    <div className="flex pt-[80px] pb-[40px] gap-y-14 flex-col">
      <div className="flex gap-y-14 flex-col lg:flex-row lg:justify-between lg:items-start">
        <div className="flex gap-x-3 items-center">
          <Image src={Logo} alt="logo" />
          <p className="font-bold text-[17px] leading-6">YOUR SITE</p>
        </div>
        <div className="flex gap-y-8 flex-col lg:flex-row lg:gap-x-6 lg:w-2/3 lg:justify-between ">
          <Dropdown options={["Growth", "Sales", "Chat"]} label="Features" />
          <Dropdown
            options={["Free Trail", "Standard", "Business"]}
            label="Pricing"
          />
          <Dropdown
            options={["Personalize", "Automation", "Invoicing", "24/7 Support"]}
            label="Enterprise"
          />
          <Dropdown
            options={[
              "Open Positions",
              "Part-Time",
              "Contractual",
              "Contact Us",
            ]}
            label="Careers"
          />
        </div>
      </div>
      <div className="flex gap-y-10 flex-col items-center lg:flex-row lg:justify-between">
        <p className="font-medium text-[14px] leading-[22px] text-[#5F7896]">
          © Copyright 2024. Your Site. All rights reserved.
        </p>
        <div className="flex gap-x-14">
          <Image src={Twitter} alt="Twitter" />
          <Image src={Facebook} alt="Facebook" />
          <Image src={Feed} alt="Feed" />
        </div>
      </div>
    </div>
  );
}
