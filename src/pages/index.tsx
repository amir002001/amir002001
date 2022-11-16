import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import DotsSquare from "../components/svgs/DotsSquare";
import { VscQuote } from "react-icons/vsc";
import LinesRightAngle from "../components/svgs/LinesRightAngle";
import { TbArrowRightTail } from "react-icons/tb";
import ProjectCard from "../components/ProjectCard";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
// import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Home - Amir</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        ></link>
      </Head>
      <header className="container mx-auto p-4">
        <Navbar></Navbar>
      </header>
      <main className="container mx-auto p-4">
        {/* navbar */}

        {/* hero */}
        <section
          id="hero"
          className="relative mt-2 flex h-[90vh] w-full flex-col justify-between
        md:flex-row"
        >
          {/* holds title and subtitle */}
          <div className="md:absolute md:top-1/4">
            <h1 className="max-w-md text-3xl font-medium">
              I am a <span className="text-primary">software engineer</span> and
              I <span className="text-primary">solve problems</span>
            </h1>
            <h4 className="mt-6 max-w-md text-gray-400">
              I love new tech. Talk to me about serverless, lambda, and anything
              JavaScript
            </h4>
          </div>
          {/* holds currently working and photo */}
          <div className="md:absolute md:right-0 md:top-1/3 md:-translate-y-1/2">
            {/* image */}
            <div className="relative w-full">
              <div className="absolute bottom-20 left-1/4 w-24">
                <LinesRightAngle />
              </div>
              <div className="relative mx-auto h-[calc(100vh/3)] w-[calc(100vw/3)] max-w-md brightness-0">
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
          {/* holds quote and cite and icons */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 max-md:hidden">
            <div className="relative flex h-full w-full flex-col items-end p-2">
              {/* quote */}
              <div className="border border-gray-400 p-8">
                <h2>
                  Learn from yesterday, live for today, hope for tomorrow.
                </h2>
              </div>
              {/* cite */}
              <div className="border border-t-0 border-gray-400 p-4">
                <h4>Albert Einstein</h4>
              </div>
              <div className="absolute left-5 -translate-y-1/2 bg-bggray p-1 text-gray-400">
                <VscQuote />
              </div>
              <div className="absolute bottom-[42px] right-6 -translate-y-1/2 bg-bggray p-1 text-gray-400">
                <VscQuote />
              </div>
            </div>
          </div>
        </section>
        {/* projects */}
        <section className="mt-24 max-md:hidden">
          <div className="flex justify-between">
            <div className="flex grow items-center gap-2">
              <h1 className=" text-3xl">
                <span className="text-primary">#</span>projects
              </h1>
              <div className="h-0.5 w-2/3 bg-primary"></div>
            </div>
            <div className="flex items-center gap-1">
              <p>View all</p>
              <TbArrowRightTail />
            </div>
          </div>
          <div className="mt-12 flex gap-3">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>
        {/* positions */}
        <section className="mt-24 max-md:hidden">
          <div className="flex justify-between">
            <div className="flex grow items-center gap-2">
              <h1 className=" text-3xl">
                <span className="text-primary">#</span>positions
              </h1>
              <div className="h-0.5 w-2/3 bg-primary"></div>
            </div>
            <div className="flex items-center gap-1">
              <p>View all</p>
              <TbArrowRightTail />
            </div>
          </div>
        </section>
        {/* contact form */}
        <section className="mt-24 flex items-start max-md:hidden">
          <div className="flex grow items-center gap-2">
            <h1 className=" text-3xl">
              <span className="text-primary">#</span>contact me
            </h1>
            <div className="h-0.5 w-1/3 bg-primary"></div>
          </div>
          <div className="mt-10">
            <ContactMe />
          </div>
        </section>
      </main>
      <div className="mt-12 h-0.5 bg-gray-400 max-md:hidden"></div>
      <footer className="container mx-auto p-4 max-md:hidden">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
