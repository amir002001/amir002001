/* eslint-disable @next/next/no-img-element */
import { Bars3Icon } from "@heroicons/react/24/solid";
import React from "react";
import { SpringValue } from "react-spring";
import Background from "./Background";
import { animated } from "react-spring";

interface Props {
  blobState: SpringValue<number>;
  navSpring: {
    opacity: SpringValue<number>;
  };
}

const Nav = ({ blobState, navSpring }: Props) => {
  return (
    <animated.div style={navSpring}>
      <div className="h-screen absolute -z-50">
        <Background blobState={blobState} />
      </div>
      <div className="h-screen w-screen relative">
        {/* lg breakpoint blobs */}
        <div className="hidden lg:block">
          <div className="unselectable blob top-[4.37%] right-[20.83%] w-[17.40%] max-w-[306px]">
            <img alt="blob1" src="/blobs/blob1.svg" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-3xl xl:text-4xl">
              Projects
            </span>
          </div>
          <div className="unselectable blob bottom-[34.64%] left-[5.02%] w-[22.75%] max-w-[400px]">
            <img alt="blob2" src="/blobs/blob2.svg" />
            <span className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-3xl xl:text-4xl">
              Contact
            </span>
          </div>
          <div className="unselectable blob bottom-[2.2%] left-[14.47%] w-[20.34%] max-w-[360px]">
            <img alt="blob3" src="/blobs/blob3.svg" />
            <span className="absolute top-[53%] left-[54%] -translate-x-1/2 -translate-y-1/2 font-semibold text-3xl xl:text-4xl">
              Skills
            </span>
          </div>
          <div className="unselectable blob top-[25.07%] right-[3.07%] w-[23.44%] max-w-[412px]">
            <img alt="blob4" src="/blobs/blob4.svg" />
            <span className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-3xl xl:text-4xl">
              Experience
            </span>
          </div>
        </div>
        {/* mobile rows */}
        <div className="absolute lg:hidden left-1/2 -translate-x-1/2 flex flex-col text-center 
        space-y-4
        mt-6">
          <p className="mobile-nav-item bg-site-red p-3">Projects</p>
          <p className="mobile-nav-item bg-site-red p-3">Experience</p>
          <p className="mobile-nav-item bg-site-red p-3">Skills</p>
          <p className="mobile-nav-item bg-site-red p-3">Contact</p>
        </div>
      </div>
    </animated.div>
  );
};

export default Nav;
