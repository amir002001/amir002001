import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import Background from "../Components/Background";

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
        <title>Create Next App</title>
        <meta
          name="description"
          content="My name is Amir :) This is my portfolio!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background Div */}
      <div className="h-screen">
        <Background blobState={blobState} />
      </div>
      <main></main>
    </div>
  );
};

export default Home;
