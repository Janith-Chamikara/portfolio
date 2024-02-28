import { FC } from "react";
import { navLinks, socials } from "../../assets/assets";
import NavLink from "../Link/NavLink";

const NavBar: FC = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="hidden md:flex h-auto w-auto  flex-row items-center"
        >
          {/* <Image
         src="/NavLogo.png"
         alt="logo"
         width={70}
         height={70}
         className="cursor-pointer hover:animate-slowspin"
       /> */}

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Janith Chamikara
          </span>
        </a>

        <div className="max-w-[500px] mx-auto md:mx-0 h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {navLinks.map((link, index) => (
              <NavLink name={link.name} to={link.to} key={index} />
            ))}
          </div>
        </div>

        <div className=" gap-3 hidden md:flex md:flex-row">
          {socials.map((social, index) => (
            <a key={index} href={social.to}>
              <social.icon size={"25px"} color="white" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
