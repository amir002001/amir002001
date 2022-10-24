/* eslint-disable @next/next/no-img-element */
import { Bars3Icon } from "@heroicons/react/24/solid";
import React from "react";
import { SpringValue } from "react-spring";
import Background from "./Background";

interface Props {
  blobState: SpringValue<number>;
}

const Nav = ({ blobState }: Props) => {
  return (
    <div>
      <div className="h-screen absolute -z-50">
        <Background blobState={blobState} />
      </div>
      <div className="h-screen w-screen relative">
        {/* lg breakpoint blobs */}
        <div className="hidden lg:block">
          <div className="absolute top-[4.37%] right-[20.83%] w-[17.40%] max-w-[306px]">
            <img alt="blob1" src="/blobs/blob1.svg" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-3xl xl:text-4xl">
              Projects
            </span>
          </div>
          <div className="absolute bottom-[34.64%] left-[1.02%] w-[22.75%] max-w-[400px]">
            <img alt="blob2" src="/blobs/blob2.svg" />
            <span className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-3xl xl:text-4xl">
              Contact
            </span>
          </div>
          <div className="absolute bottom-[2.2%] left-[14.47%] w-[20.34%] max-w-[360px]">
            <img alt="blob3" src="/blobs/blob3.svg" />
            <span className="absolute top-[53%] left-[54%] -translate-x-1/2 -translate-y-1/2 font-semibold text-3xl xl:text-4xl">
              Skills
            </span>
          </div>
          <div className="absolute top-[25.07%] right-[3.07%] w-[23.44%] max-w-[412px]">
            <img alt="blob4" src="/blobs/blob4.svg" />
            <span className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-3xl xl:text-4xl">
              Experience
            </span>
          </div>
        </div>
        {/* mobile rows */}
        <button className="absolute top-3 right-4">
          <Bars3Icon className="w-10 h-10 md:w-16 md:h-16" />
        </button>
      </div>
    </div>
  );
};

export default Nav;
