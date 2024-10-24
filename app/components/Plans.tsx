import Image from "next/image";
import Check from "../../public/assets/check.svg";

export function Plans() {
  return (
    <div className="flex flex-col gap-y-[40px] py-[48px] ">
      <div className="flex flex-col gap-y-4 items-center">
        <h3 className="font-medium text-[24px] leading-9 text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Flexible plans for you
        </h3>
        <p className="text-[16px] leading-6 text-[#36485C] lg:text-[18px] lg:leading-[28px]">
          No hidden fees!
        </p>
      </div>
      <div className="flex gap-y-6 flex-col lg:flex-row lg:gap-x-6">
        <div className="bg-[#F5F4FF] p-6 gap-y-4 rounded-lg flex flex-col lg:w-1/3">
          <div className="flex gap-y-3 flex-col">
            <h4 className="font-medium text-[18px] leading-6 text-[#4328EB]">
              Free Trial
            </h4>
            <p className="text-[16px] leading-6 text-[#36485C]">
              Perfect for testing the waters
            </p>
          </div>
          <p className="font-medium text-[24px] leading-9 text-[#172026]">
            $0<span className="text-[#5F7896]">/mo</span>
          </p>
          <ul className="text-[#36485C] flex gap-y-4 flex-col">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-4 text-[#36485C]">
              <span>
                <Image src={Check} alt="check" />
              </span>
              Sed do eiusmod tempor incididunt
            </li>
            <li className="flex items-center gap-x-4 text-[#36485C]">
              <span>
                <Image src={Check} alt="check" />
              </span>
              Consectetur adipiscing elit
            </li>
          </ul>
          <div className="flex-grow flex items-end">
            <button className="py-[14px] px-[30px] bg-[#FFFFFF] w-full rounded">
              Start Trial
            </button>
          </div>
        </div>
        <div className="bg-[#4328EB] p-6 gap-y-4 rounded-lg flex flex-col lg:w-1/3">
          <div className="flex gap-y-3 flex-col">
            <h4 className="font-medium text-[18px] leading-6 text-[#FFFFFF]">
              Business
            </h4>
            <p className="text-[16px] leading-6 text-[#F4F8FA]">
              Perfect for small businesses
            </p>
          </div>
          <p className="font-medium text-[24px] leading-9 text-[#FFFFFF]">
            $500<span className="text-[#F4F8FA]">/mo</span>
          </p>
          <ul className="text-[#F4F8FA] flex gap-y-4 flex-col">
            <li className="flex items-center gap-x-2 ">
              <span>
                <Image src={Check} alt="check" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-4 ">
              <span>
                <Image src={Check} alt="check" />
              </span>
              Sed do eiusmod tempor incididunt
            </li>
            <li className="flex items-center gap-x-4 ">
              <span>
                <Image src={Check} alt="check" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex items-center gap-x-4 ">
              <span>
                <Image src={Check} alt="check" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-4 ">
              <span>
                <Image src={Check} alt="check" />
              </span>
              Sed do eiusmod tempor incididunt
            </li>
          </ul>
          <button className="py-[14px] px-[30px] bg-[#FFFFFF] w-full rounded">
            Get Started
          </button>
        </div>
        <div className="bg-[#F5F4FF] p-6 gap-y-4 rounded-lg flex flex-col lg:w-1/3">
          <div className="flex gap-y-3 flex-col">
            <h4 className="font-medium text-[18px] leading-6 text-[#4328EB]">
              Enterprise
            </h4>
            <p className="text-[16px] leading-6 text-[#36485C]">
              Perfect for big companies
            </p>
          </div>
          <p className="font-medium text-[24px] leading-9 text-[#172026]">
            Custom
          </p>
          <div className="text-[#36485C] flex gap-y-4  text-[16px] leading-6 flex-col">
            <p className="flex items-center gap-x-2 text-[#36485C]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <p className="flex items-center gap-x-4 text-[#36485C]">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </div>
          <div className="flex-grow flex items-end">
            <button className="py-[14px] px-[30px] bg-[#FFFFFF] w-full rounded">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
