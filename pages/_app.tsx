import "../styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { createContext, useState } from "react";
config.autoAddCss = false;

export const DarkModeContext = createContext<{
  isDarkMode: Boolean;
  setIsDarkMode: (newValue: boolean) => void;
} | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const HandleSetDarkMode = (newValue: boolean) => setIsDarkMode(newValue);

  return (
    <DarkModeContext.Provider
      value={{ isDarkMode, setIsDarkMode: HandleSetDarkMode }}
    >
      <Component {...pageProps} />
    </DarkModeContext.Provider>
  );
}

export default MyApp;
