import Image from "next/image";
import BlurArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Truspilot from "../../public/assets/Trustpilot.svg";
import Cnn from "../../public/assets/CNN.svg";
import Cluth from "../../public/assets/Clutch.svg";

export function Hero() {
  return (
    <div className="pt-4">
      <div className="px-[20px] lg:px-[297px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          Start monitoring your website like a pro
        </h1>
        <p className="text-center pt-6 text-[#36485C] font-normal lg:text-[18px] lg:leading-[24px]">
          Get a bird's eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>
        <div className="flex w-full pt-8  justify-center gap-x-6">
          <button className="w-1/2 py-4 px-8 bg-[#4328EB] rounded-[4px] text-[#FFFFFF] lg:w-fit">
            Try for free
          </button>
          <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-2 lg:w-fit">
            View Pricing
            <span>
              <Image src={BlurArrow} alt="learnmore" />
            </span>
          </button>
        </div>
      </div>
      <div className="relative flex w-full h-full justify-center">
        <Image
          src={Gradient}
          alt="gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />
        <div className="absolute bottom-5 flex flex-col w-full items-center">
          <Image
            src={HeroImage}
            alt="hero image"
            className="h-[310px] -ml-4 sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
          />
          <div className="flex flex-col lg:flex-row items-center  lg:w-full lg:px-20 px-[20px]">
            <p className="text-[#FFFFFF]  lg:pr-20 text-center font-normal lg:text-[18px] lg:leading-[24px]">
              Trusted by these companies
            </p>
            <div className="flex flex-wrap  justify-center gap-6 lg:justify-between  lg:flex-grow ">
              <Image src={Google} alt="google image" />
              <Image src={Slack} alt="slack image" />
              <Image src={Truspilot} alt="Truspilot image" />
              <Image src={Cnn} alt="Cnn image" />{" "}
              <Image src={Cluth} alt="Cluth image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
