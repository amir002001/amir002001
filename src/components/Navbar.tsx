import { useState } from "react";
import { VscMenu, VscClose } from "react-icons/vsc";
import { ImLinkedin, ImGithub } from "react-icons/im";
import Logo from "./svgs/Logo";

const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  return (
    <nav className="w-screen">
      <div className="flex flex-wrap items-center justify-between px-3 pt-3 pb-1">
        <a href="#" className="z-20 flex">
          <div className="mr-3 h-6 w-6 sm:h-10">
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
        <div
          className={`absolute top-0 left-0 z-10 h-screen w-screen bg-bggray ${
            isNavMenuOpen || "-translate-x-full"
          }
           md:hidden`}
        >
          <ul
            className="flex flex-col gap-7 pl-6 pt-16 text-3xl text-gray-400
          md:flex-row"
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
                <span className="text-primary">#</span>jobs
              </a>
            </li>
            <li>
              <a href="#" className="">
                <span className="text-primary">#</span>contact
              </a>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
