import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, } from "react";
import {  useSpring } from "react-spring";
import Background from "../components/Background";

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
    <div className="h-screen">
      <Head>
        <title>Amir Afshari</title>
        <meta
          name="description"
          content="My name is Amir :) This is my portfolio!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background Div */}
      <div className="h-screen absolute -z-50">
        <Background blobState={blobState} />
      </div>
      <main>
        <p
          className="absolute text-1xl sm:text-3xl font-semibold bottom-9 left-2/4 -translate-x-1/2 lg:bottom-1/2"
        >
          &lt;Coming Soon /&gt;
        </p>
      </main>
    </div>
  );
};

export default Home;
