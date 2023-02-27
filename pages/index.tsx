import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from "react"
import NavBar from "../components/NavBar"
import NameSocials from "../components/NameSocials"
import BodyContent from "../components/BodyContent"


const HomePage: NextPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
  <div className={`bg-gradient-to-r from-black via-neutral-400 to-black ${isDarkMode ? "dark" : ""}`} >
    <Head>
      <title>theoh</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
      <meta name="description" content="theoh's personal website" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="min-h-screen lg:border-l-8 lg:border-r-8 dark:border-black border-white lg:max-w-5xl dark:bg-neutral-900 bg-stone-300 m-auto text-zinc-800 dark:text-zinc-300">
      {/*nesting compenent test*/}
      <NavBar darkModeState={setIsDarkMode} isDark={isDarkMode}/>
      <NameSocials />
      <BodyContent />
      <div className="p-2">
      </div>
    </div>
    </div>
  );
}

export default HomePage