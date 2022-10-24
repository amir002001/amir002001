/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useSpring } from "react-spring";
import Background from "../components/Background";
import { Bars3Icon } from "@heroicons/react/24/solid";
import styles from "./Home.module.css";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  const [{ blobState }, set] = useSpring(() => ({
    blobState: 0,
  }));

  useEffect(() => {
    let blobIndex = 0;
    const id = window.setInterval(() => {
      blobIndex = (blobIndex + 1) % 2;
      set({ blobState: blobIndex });
    }, 1500);

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

      <main>
        <Nav blobState={blobState} />
        <p className="absolute text-2xl xl:text-3xl font-semibold bottom-9 left-2/4 -translate-x-1/2 lg:bottom-1/2">
          &lt;Coming Soon /&gt;
        </p>
      </main>
    </div>
  );
};

export default Home;
