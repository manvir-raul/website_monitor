import Image from "next/image";
import Logo from "@/public/assets/Logo.svg";
import User from "@/public/assets/User.svg";
import Menu from "@/public/assets/Menu.svg";

// lg:container lg:mx-auto lg:px-20

export function Navbar() {
  const navLinks = [
    {
      name: "Features",
    },
    {
      name: "Pricing",
    },
    { name: "Enterprise" },
    {
      name: "Careers",
    },
  ];

  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" height={40} width={40} />
        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <p key={index} className="font-medium text-[#b5b6b6]">
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-x-[56px]">
        <p className="hidden font-medium text-[#36485C] lg:block">
          Open an Account
        </p>
        <div className="flex items-center gap-x-[12px]">
          <Image src={User} alt="User Profile" height={32} width={32} />
          <p className="hidden font-medium text-[#36485C] lg:block">Sign In</p>
        </div>
        <Image
          src={Menu}
          alt="Menu"
          height={32}
          width={32}
          className="lg:hidden"
        />
      </div>
    </nav>
  );
}
