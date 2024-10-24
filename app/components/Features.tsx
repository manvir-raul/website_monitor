"use client";
import Image from "next/image";
import Feature1 from "../../public/assets/feature-1.svg";
import Feature2 from "../../public/assets/feature-2.svg";
import Feature3 from "../../public/assets/feature-3.svg";
import Check from "../../public/assets/check.svg";
import bluebutton from "../../public/assets/blue-button.svg";
import greenButton from "../../public/assets/green-button.svg";
import pinkButton from "../../public/assets/pink-button.svg";

export function Features() {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
      <div className="flex gap-x-6 sm:flex-row-reverse ">
        <Image
          src={Feature1}
          alt="features1"
          className="hidden w-1/2 sm:block"
        />
        <div className="lg:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="text-[#0085FF] font-medium lg:text-[18px] ">
            Sales Monitoring
          </h3>
          <h1 className="pt-3 font-medium text-2xl text-[#172026] leading-9 lg:text-[42px] lg:leading-[58px]">
            Simplify your sales monitoring
          </h1>
          <Image src={Feature1} alt="features1" className="pt-6 lg:hidden" />
          <p className="pt-6 text-[#36485C] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird's eye view with our customizable
            dashboard.
          </p>
          <ul className="pt-6 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check" />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>
          <p className="text-[#0085FF] font-medium flex items-center gap-x-2 pt-[24px] lg:text-[18px]">
            Learn More
            <span>
              <Image src={bluebutton} alt="bluetooth" />
            </span>
          </p>
        </div>
      </div>
      <div className="flex gap-x-6 sm:flex-row ">
        <Image
          src={Feature2}
          alt="features1"
          className="hidden w-1/2 sm:block"
        />
        <div className="lg:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="text-[#00A424]  font-medium lg:text-[18px] ">
            Customer Support
          </h3>
          <h1 className="pt-3 font-medium text-2xl text-[#172026] leading-9 lg:text-[42px] lg:leading-[58px]">
            Get in touch with your customers
          </h1>
          <Image src={Feature2} alt="features1" className="pt-6 lg:hidden" />
          <p className="pt-6 text-[#36485C] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird's eye view with our customizable
            dashboard.
          </p>
          <ul className="pt-6 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check" />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>
          <p className="text-[#00A424] font-medium flex items-center gap-x-2 pt-[24px] lg:text-[18px]">
            Learn More
            <span>
              <Image src={greenButton} alt="bluetooth" />
            </span>
          </p>
        </div>
      </div>
      <div className="flex gap-x-6 sm:flex-row-reverse ">
        <Image
          src={Feature3}
          alt="features1"
          className="hidden w-1/2 sm:block"
        />
        <div className="lg:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="text-[#EB2891] font-medium lg:text-[18px] ">
            Growth Monitoring
          </h3>
          <h1 className="pt-3 font-medium text-2xl text-[#172026] leading-9 lg:text-[42px] lg:leading-[58px]">
            Monitor your site’s new subscribers
          </h1>
          <Image src={Feature3} alt="features1" className="pt-6 lg:hidden" />
          <p className="pt-6 text-[#36485C] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird's eye view with our customizable
            dashboard.
          </p>
          <div className="pt-6 flex gap-x-6 w-full">
            <div className="w-1/2 flex flex-col pt-4 gap-y-3 lg:gap-y-4">
              <h3 className="font-medium  text-[20px] leading-[26px] lg:text-[32px] lg:leading-[40px]">
                100+
              </h3>
              <p className="lg:text-[18px] text-[#5F7896]">
                Lorem ipsum dolor sit
              </p>
            </div>
            <div className="w-1/2 flex flex-col  pt-4 gap-y-3 lg:gap-y-4">
              <h3 className="font-medium  text-[20px] leading-[26px] lg:text-[32px] lg:leading-[40px]">
                800+
              </h3>
              <p className="lg:text-[18px] text-[#5F7896]">
                Conse adipiscing elit
              </p>
            </div>
          </div>

          <p className="text-[#EB2891] font-medium flex items-center gap-x-2 pt-[24px] lg:text-[18px]">
            Learn More
            <span>
              <Image src={pinkButton} alt="bluetooth" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
