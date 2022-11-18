import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Projects: NextPage = () => {
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
      <main className="container mx-auto p-4"></main>
      <footer className="container mx-auto p-4 max-md:hidden">
        <Footer />
      </footer>
    </>
  );
};

export default Projects;
