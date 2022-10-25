/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useSpring } from "react-spring";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  const [navVisible, setNavVisible] = useState(true);

  const [{ blobState }, blobStateApi] = useSpring(() => ({
    loop: true,
    config: {
      duration: 2400,
    },
    to: [{ blobState: 1 }, { blobState: 0 }],
    from: {
      blobState: 0,
    },
  }));
  const [navSpring, navSpringApi] = useSpring(() => ({
    from: {
      opacity: 0
    },
    opacity: navVisible ? 1 : 0,
  }));

  const handleHamburgerClick = () => {
    setNavVisible(!navVisible);
  };

  return (
    <div>
      <Head>
        <title>Amir Afshari</title>
        <meta
          name="description"
          content="My name is Amir :) This is my portfolio!"
        />
      </Head>
      {/* Background Div */}

      <main>
        <Nav blobState={blobState} navSpring={navSpring} />
        <p className="absolute text-lg lg:text-2xl xl:text-3xl font-semibold bottom-9 left-2/4 -translate-x-1/2 lg:bottom-1/2">
          &lt;Coming Soon /&gt;
        </p>
        <button
          className="absolute top-3 right-4"
          onClick={handleHamburgerClick}
        >
          <Bars3Icon className="w-10 h-10 md:w-16 md:h-16" />
        </button>
      </main>
    </div>
  );
};

export default Home;
