/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useSpring } from "react-spring";
import Background from "../components/Background";
import { Bars3Icon } from "@heroicons/react/24/solid";
import styles from "./Home.module.css";

const Home: NextPage = () => {
  const [{ blobState }, set] = useSpring(() => ({
    blobState: 0,
  }));

  useEffect(() => {
    let blobIndex = 0;
    const id = window.setInterval(() => {
      blobIndex = (blobIndex + 1) % 2;
      set({ blobState: blobIndex });
    }, 2000);

    return () => {
      window.clearInterval(id);
    };
  }, [set]);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Head>
        <title>Amir Afshari</title>
        <meta
          name="description"
          content="My name is Amir :) This is my portfolio!"
        />
      </Head>
      {/* Background Div */}
      <div className="h-screen absolute -z-50">
        <Background blobState={blobState} />
      </div>
      <main>
        <div className="h-screen w-screen relative">
          {/* lg breakpoint blobs */}
          <div>
            <div className="absolute top-[4.37%] right-[20.83%]">
              <img alt="blob1" src="/blobs/blob1.svg" />
            </div>
            <div className="absolute bottom-[34.64%] left-[1.02%]">
              <img alt="blob2" src="/blobs/blob2.svg" />
            </div>
            <div className="absolute bottom-[2.2%] left-[14.47%]">
              <img alt="blob3" src="/blobs/blob3.svg" />
            </div>
            <div className="absolute top-[25.07%] right-[3.07%]">
              <img alt="blob4" src="/blobs/blob4.svg" />
            </div>
          </div>
          {/* mobile rows */}
          <button className="absolute top-3 right-4">
            <Bars3Icon className="w-16 h-16" />
          </button>
          <p className="absolute text-1xl sm:text-3xl font-semibold bottom-9 left-2/4 -translate-x-1/2 lg:bottom-1/2">
            &lt;Coming Soon /&gt;
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
