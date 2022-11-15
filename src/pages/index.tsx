import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import DotsSquare from "../components/svgs/DotsSquare";
import LinesRightAngle from "../components/svgs/LinesRightAngle";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Home - Amir</title>
        
      </Head>

      <main className="container h-screen w-screen flex flex-col item">
        {/* navbar */}
        <Navbar></Navbar>
        {/* hero */}
        <section id="hero" className="p-4 w-screen h-screen flex flex-col justify-between">
          {/* holds title and subtitle */}
          <div>
            <h1 className="text-3xl font-medium">
              I am a <span className="text-primary">software engineer</span> and
              I <span className="text-primary">solve problems</span>
            </h1>
            <h4 className="mt-6 text-gray-400">
              I love new tech. Talk to me about serverless, lambda, and anything
              JavaScript
            </h4>
          </div>
          {/* hold s currently working and photo */}
          <div className="">
            {/* image */}
            <div className="relative w-full">
              <div className="absolute bottom-20 left-1/4 w-32">
                <LinesRightAngle />
              </div>
              <div className="relative h-[calc(100vw/2)] mx-auto max-w-md">
                <Image
                  src={"/temp.png"}
                  alt="me"
                  fill
                  className="object-contain object-bottom"
                ></Image>
              </div>
              <div className="absolute bottom-7 right-2 w-16">
                <DotsSquare />
              </div>
            </div>

            {/* currently working on */}
            <div className="flex items-center gap-2 border border-gray-400 p-2">
              <div className="h-4 w-4 bg-primary" />
              <div>
                <h6 className="text-gray-400">Currently working on</h6>
                <p className="font-medium">lorem</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
