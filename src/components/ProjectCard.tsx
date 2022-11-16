import Image from "next/image";
import { ImNewTab } from "react-icons/im";
import { AiOutlineInfoCircle } from "react-icons/ai";
export default function ProjectCard() {
  return (
    <div className="flex w-1/3 flex-col">
      <div className="relative h-[20vh] w-full border border-gray-400">
        <Image
          src={"https://via.placeholder.com/800x450.png"}
          alt="project banner"
          fill
          className="object-fit"
        ></Image>
      </div>
      {/* tech */}
      <div className="flex gap-3 border border-t-0 border-gray-400 p-3 text-3xl">
        <i className="devicon-nextjs-original"></i>
        <i className="devicon-tailwindcss-plain colored"></i>
        <i className="devicon-typescript-plain colored"></i>
      </div>
      <div className="border border-t-0 border-gray-400 p-3">
        <h3 className="text-2xl">Lorem Project</h3>
        <p className="mt-3 text-gray-300">This is a lorem project</p>
        <div className="flex gap-3">
          <button className="my-3 flex items-center gap-2 border border-primary p-1.5">
            Visit
            <ImNewTab />
          </button>
          <button className="my-3 flex items-center gap-2 border border-white p-1.5">
            More Info
            <AiOutlineInfoCircle size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
