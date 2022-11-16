import { ImGithub, ImLinkedin } from "react-icons/im";
import { IoMailOutline } from "react-icons/io5";
import Logo from "./svgs/Logo";

const Footer = () => {
  return (
    <div className="flex justify-between items-start">
      <div>
        <div className="flex gap-8">
          <a href="#" className="z-20 flex w-fit items-center">
            <div className="mr-3 flex h-5 w-5 sm:h-10">
              <Logo />
            </div>
            <span className="whitespace-nowrap text-xl font-semibold">
              Amir
            </span>
          </a>
          <a
            href="mailto:its@amirafshari.dev"
            className="ml-10 flex w-fit items-center gap-1 text-gray-200"
          >
            <IoMailOutline size={20} />
            <span>its@amirafshari.dev</span>
          </a>
        </div>
        <p className="mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex gap-5 text-gray-200">
        <button>
          <ImGithub size={40} />
        </button>
        <button>
          <ImLinkedin size={40} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
