import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useState } from "react"
import NavBar from "../components/NavBar"
import NameSocials from "../components/NameSocials"
import { DarkModeContext } from './_app'


const HomePage: NextPage = () => {
  const {isDarkMode, setIsDarkMode} = useContext(DarkModeContext);

  return (
  <div className={`bg-gradient-to-r from-black via-neutral-400 to-black ${isDarkMode ? "dark" : ""}`} >
    <Head>
    <title>Theo Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Theo Halpern's Resume" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="min-h-screen lg:border-l-8 lg:border-r-8 dark:border-black border-white lg:max-w-5xl dark:bg-neutral-900 bg-stone-300 m-auto text-zinc-800 dark:text-zinc-300">
      {/*nesting compenent test*/}
      <NavBar darkModeState={setIsDarkMode} isDark={isDarkMode}/>
      
      <NameSocials />
      <iframe className="w-11/12 h-[1200px] m-auto" src="https://docs.google.com/document/d/1WlE7o0wuzHzzmGNcsHIvz3wxBd2tAUcr/view?embedded=true" frameBorder={0} marginHeight={0} marginWidth={0}>Loading…</iframe>
    </div>
    </div>
  );
}

export default HomePage