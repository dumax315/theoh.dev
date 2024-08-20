import type { NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import NavBar from "../components/NavBar";
import AboutComputer from "../components/AboutComputer";
import { DarkModeContext } from "./_app";

const HomePage: NextPage = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`bg-gradient-to-r from-black via-neutral-400 to-black ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <Head>
        <title>Theo Halpern</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="description" content="Theo Halpern's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen lg:border-l-8 lg:border-r-8 dark:border-black border-white lg:max-w-5xl dark:bg-neutral-900 bg-stone-300 m-auto text-zinc-800 dark:text-zinc-300">
        {/*nesting compenent test*/}
        <NavBar darkModeState={setIsDarkMode} isDark={isDarkMode} />

        <AboutComputer />
        <div className="m-auto max-w-3xl">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdvij2eMkqwAFmhtG0nuah3NJD-ot5XECNWhzL0i5h739Jbig/viewform?embedded=true"
            marginHeight={0}
            marginWidth={0}
            width={"100%"}
            height={800}
            frameBorder={0}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
