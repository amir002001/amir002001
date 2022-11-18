import { useState } from "react";
import { VscMenu, VscClose } from "react-icons/vsc";
import { ImLinkedin, ImGithub } from "react-icons/im";
import Logo from "./svgs/Logo";
import { useSpring, animated } from "@react-spring/web";
import { HiOutlineNewspaper } from "react-icons/hi";

const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const translate = useSpring({
    transform: isNavMenuOpen ? "translateX(0%)" : "translateX(-100%)",
  });
  return (
    <nav className="w-full">
      <div className={`flex w-full items-center justify-between pb-1`}>
        <a href="#" className="z-20 flex items-center ">
          <div className="mr-3 flex h-5 w-5 sm:h-10">
            <Logo />
          </div>
          <span className="whitespace-nowrap text-base font-semibold">
            Amir
          </span>
        </a>
        <button
          className="z-20 sm:-translate-y-2 md:hidden"
          onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
        >
          {isNavMenuOpen ? <VscClose size={25} /> : <VscMenu size={25} />}
        </button>
        <animated.div
          className="z-10 bg-bggray max-md:fixed max-md:top-0 max-md:h-screen max-md:w-screen md:!translate-x-0"
          style={translate}
        >
          <ul
            className="flex flex-col  gap-7 pl-6 pt-16 text-3xl
          text-gray-400 md:flex-row md:items-center md:pt-0 md:text-lg"
          >
            <li>
              <a href="#" className="" aria-current="page">
                <span className="text-primary">#</span>home
              </a>
            </li>
            <li>
              <a href="#" className="">
                <span className="text-primary">#</span>projects
              </a>
            </li>
            <li>
              <a href="#" className="">
                <span className="text-primary">#</span>positions
              </a>
            </li>
            <li>
              <button className="flex items-center gap-2 border border-primary p-2">
                Blog
                <HiOutlineNewspaper />
              </button>
            </li>
          </ul>
          {/* socials */}
          <div className="absolute bottom-10 flex w-full justify-center gap-4 text-gray-400 md:hidden">
            <button>
              <ImGithub size={40} />
            </button>
            <button>
              <ImLinkedin size={40} />
            </button>
          </div>
        </animated.div>
      </div>
    </nav>
  );
};

export default Navbar;
