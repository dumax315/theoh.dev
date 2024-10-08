import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useState } from "react";
import NavBar from "../components/NavBar";
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

        <div className="max-w-3xl mx-auto px-6 mt-8">
          <div className="">
            <h1 className="dark:text-neutral-300 text-neutral-800 text-7xl font-mono">
              musical autobiography
            </h1>
            <p className="mt-4">
              <p
                dir="ltr"
                style={{
                  lineHeight: "2.4",
                  marginTop: "0pt",
                  marginBottom: "0pt",
                }}
              >
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  Theo Halpern
                </span>
              </p>
              <p
                dir="ltr"
                style={{
                  lineHeight: "2.4",
                  marginTop: "0pt",
                  marginBottom: "0pt",
                }}
              >
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  Ms. Endicott
                </span>
              </p>
              <p
                dir="ltr"
                style={{
                  lineHeight: "2.4",
                  marginTop: "0pt",
                  marginBottom: "0pt",
                }}
              >
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  English 101
                </span>
              </p>
              <p
                dir="ltr"
                style={{
                  lineHeight: "2.4",
                  marginTop: "0pt",
                  marginBottom: "0pt",
                }}
              >
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  07 October 2022
                </span>
              </p>
              <p>
                <br />
              </p>
              <p
                dir="ltr"
                style={{
                  lineHeight: "2.4",
                  textAlign: "center",
                  marginTop: "30pt",
                  marginBottom: "0pt",
                }}
              >
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  Musical Autobiography
                </span>
              </p>
              <p
                dir="ltr"
                style={{
                  lineHeight: "2.4",
                  textIndent: "36pt",
                  marginTop: "0pt",
                  marginBottom: "0pt",
                }}
              >
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  Throughout my life there have been times when I have had
                  earworms that reflected my development and were intense enough
                  to be remembered.
                </span>
              </p>
              <p
                dir="ltr"
                style={{
                  lineHeight: "2.4",
                  textIndent: "36pt",
                  marginTop: "0pt",
                  marginBottom: "0pt",
                }}
              >
                <br />
              </p>
              <p
                dir="ltr"
                style={{
                  lineHeight: "2.4",
                  textIndent: "36pt",
                  marginTop: "0pt",
                  marginBottom: "0pt",
                }}
              >
                <iframe
                  className="float-left w-1/2 mr-4"
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/qmSnjH0i4NM"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                />
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  One of my earliest earworms was
                </span>
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  &nbsp;
                </span>
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  “Breaking Out”
                </span>
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  ,
                </span>
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  &nbsp;an original song created for the TV show&nbsp;
                </span>
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  Phineas and Ferb
                </span>
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  . At the time&nbsp;
                </span>
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  Phineas and Ferb
                </span>
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  &nbsp;was the biggest source of content I consumed and it had
                  a massive impact on my development and my understanding of the
                  world. Each&nbsp;
                </span>
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  Phineas and Ferb
                </span>
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  &nbsp;episode had an original song. They were corny parodies
                  of musical styles and were often sung with a character&apos;s
                  accent. This style of music is still extremely enticing to me
                  and I attribute that to my past love of this show. The music
                  is most similar to modern “meme” music as it attempts to be
                  humorous while emulating an existing style familiar to the
                  audience. My love of Weird Al and modern “meme” music is a
                  result of my consumption of the TV show.&nbsp;
                </span>
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  Phineas and Ferb
                </span>
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  &nbsp;also impacted on me what friend groups are supposed to
                  look like. When I plan fun activities with my friends I often
                  find myself choosing people that align with the archetypes of
                  the show and the activities often resemble the goofy and
                  creative ways the characters amused themselves. This earworm
                  reflects a piece of media that was foundational in my current
                  music taste and my concept of friendship.
                </span>
              </p>
              <p
                dir="ltr"
                style={{
                  lineHeight: "2.4",
                  textIndent: "36pt",
                  marginTop: "0pt",
                  marginBottom: "0pt",
                }}
              >
                <iframe
                  className="float-right w-1/2 ml-4"
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/RRh0QiXyZSk"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                />
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  At the beginning of the Covid-19 Pandmenic I spent a lot of
                  time analyzing and advocating for worker struggles in America,
                  at one point I had the earworm “Sixteen Tons”, this song about
                  a coal miner that was based on life in the mines of Muhlenberg
                  County, Kentucky is a classic working class anthem that
                  discusses the reality of being in perpetual debt while the
                  ultra wealthy make off like bandits that is still prevalent in
                  2022. The song reflects how involved with politics I was in
                  that year. I was a news junky and during the election year I
                  participated in community lobbying and promotion of social
                  causes. I also started to read a lot of political theory and
                  the song “Sixteen Tons” was premonted by some of the
                  contemporary theorists I began to listen to. This earworm
                  reflects the growth of my political identity at the time.
                </span>
              </p>
              <p
                dir="ltr"
                style={{
                  lineHeight: "2.4",
                  textIndent: "36pt",
                  marginTop: "0pt",
                  marginBottom: "0pt",
                }}
              >
                <iframe
                  className="float-left w-1/2 mr-4"
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/6dYWe1c3OyU"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                />
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  My current earworm is “I Will Survive” by Gloria Gaynor and it
                  contains a message that is vital to me right now. My life has
                  seemed far more stressed in the last week than in any memory.
                  Personally I’m trying to complete my early decision
                  application to Brown and my applications to UW and the UCs. In
                  my house the situation is also crazy, my brother was suspended
                  from his highschool and my parents were in a car crash
                  (everyone was ok). This earworm has helped me continue to try
                  and stay moving despite being under more stress than I ever
                  have.
                </span>
              </p>
              <p
                dir="ltr"
                style={{
                  lineHeight: "2.4",
                  textIndent: "36pt",
                  marginTop: "0pt",
                  marginBottom: "0pt",
                }}
              >
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  While I seem to always have a song playing in my head, only a
                  few have reached the addictiveness and repetition of the songs
                  mentioned above. These songs weren’t just earworms, they were
                  reflections of my life and development. These songs surpassed
                  a normal personal favorite, they were my anthems.
                </span>
              </p>
              <p
                dir="ltr"
                style={{
                  lineHeight: "2.4",
                  textIndent: "36pt",
                  textAlign: "center",
                  marginTop: "0pt",
                  marginBottom: "0pt",
                }}
              >
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  Works Cited
                </span>
              </p>
              <p
                dir="ltr"
                style={{
                  lineHeight: "2.4",
                  marginTop: "0pt",
                  marginBottom: "0pt",
                }}
              >
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  Phineas and Ferb. “Breaking Out”, Youtube,
                </span>
              </p>
              <p
                dir="ltr"
                style={{
                  lineHeight: "2.4",
                  textIndent: "36pt",
                  marginTop: "0pt",
                  marginBottom: "0pt",
                }}
              >
                <a
                  href="https://www.youtube.com/watch?v=qmSnjH0i4NM"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman"',
                      color: "#1155cc",
                      backgroundColor: "transparent",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontVariant: "normal",
                      textDecoration: "underline",
                      WebkitTextDecorationSkip: "none",
                      textDecorationSkipInk: "none",
                      verticalAlign: "baseline",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    www.youtube.com/watch?v=qmSnjH0i4NM
                  </span>
                </a>
              </p>
              <p
                dir="ltr"
                style={{
                  lineHeight: "2.4",
                  marginTop: "0pt",
                  marginBottom: "0pt",
                }}
              >
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  Ford, Tennessee Ernie &nbsp;“Sixteen Tons”, Universal Music
                  Group, Youtube,
                </span>
              </p>
              <p
                dir="ltr"
                style={{
                  lineHeight: "2.4",
                  textIndent: "36pt",
                  marginTop: "0pt",
                  marginBottom: "0pt",
                }}
              >
                <a
                  href="https://www.youtube.com/watch?v=3tXJokkWQjY"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman"',
                      color: "#1155cc",
                      backgroundColor: "transparent",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontVariant: "normal",
                      textDecoration: "underline",
                      WebkitTextDecorationSkip: "none",
                      textDecorationSkipInk: "none",
                      verticalAlign: "baseline",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    https://www.youtube.com/watch?v=3tXJokkWQjY
                  </span>
                </a>
              </p>
              <p
                dir="ltr"
                style={{
                  lineHeight: "2.4",
                  marginTop: "0pt",
                  marginBottom: "0pt",
                }}
              >
                <span
                  style={{
                    fontSize: "12pt",
                    fontFamily: '"Times New Roman"',

                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  Gaynor, Gloria &nbsp;“I Will Survive”, Love Tracks, UMG,
                  Youtube,
                </span>
              </p>
              <p
                dir="ltr"
                style={{
                  lineHeight: "2.4",
                  textIndent: "36pt",
                  marginTop: "0pt",
                  marginBottom: "0pt",
                }}
              >
                <a
                  href="https://www.youtube.com/watch?v=6dYWe1c3OyU"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman"',
                      color: "#1155cc",
                      backgroundColor: "transparent",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontVariant: "normal",
                      textDecoration: "underline",
                      WebkitTextDecorationSkip: "none",
                      textDecorationSkipInk: "none",
                      verticalAlign: "baseline",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    https://www.youtube.com/watch?v=6dYWe1c3OyU
                  </span>
                </a>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
