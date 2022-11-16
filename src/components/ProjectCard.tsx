import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="flex w-1/3 flex-col">
      <div className="relative h-[20vh] w-full">
        <Image
          src={"https://via.placeholder.com/800x450.png"}
          alt="project banner"
          fill
          className="object-contain"
        ></Image>
      </div>
      {/* tech */}
      <div className="text-3xl border border-gray-400">
        <i className="devicon-nextjs-original"></i>
        <i className="devicon-tailwindcss-plain colored"></i>
        <i className="devicon-typescript-plain colored"></i>
      </div>
    </div>
  );
}
