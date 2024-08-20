import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import ContactSocials from "../components/ContactSocials";
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
        <ContactSocials />
      </div>
    </div>
  );
};

export default HomePage;
