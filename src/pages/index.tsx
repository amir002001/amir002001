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

      <main className="container mx-auto p-4">
        {/* navbar */}
        <Navbar></Navbar>
        {/* hero */}
        <section id="hero" className="relative w-full h-[90vh] flex flex-col justify-between mt-2
        md:flex-row">
          {/* holds title and subtitle */}
          <div className="md:absolute md:top-1/4">
            <h1 className="text-3xl font-medium max-w-md">
              I am a <span className="text-primary">software engineer</span> and
              I <span className="text-primary">solve problems</span>
            </h1>
            <h4 className="mt-6 text-gray-400 max-w-md">
              I love new tech. Talk to me about serverless, lambda, and anything
              JavaScript
            </h4>
          </div>
          {/* hold s currently working and photo */}
          <div className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
            {/* image */}
            <div className="relative w-full">
              <div className="absolute bottom-20 left-1/4 w-24">
                <LinesRightAngle />
              </div>
              <div className="relative w-[calc(100vw/3)] h-[calc(100vh/3)] mx-auto max-w-md brightness-0">
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
              <div className="md:flex md:gap-2">
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
