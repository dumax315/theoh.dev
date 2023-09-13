// import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'

const BodyContent = (props) => {
  
  return (
    
    <div className="mt-4 mx-auto grid max-w-xl grid-cols-1 gap-16 lg:max-w-none lg:grid-cols-2 relative px-8 sm:px-8 lg:px-20">
      <div className="">
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <FontAwesomeIcon className="fa-xl" icon={faBriefcase} /> 

            <span className="ml-3">work & school</span>
          </h2>
          <ol className="mt-6 space-y-4">
                        <li className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img
                  alt=""
                  src="./gwuLogo.webp"
                  decoding="async"
                  data-nimg="future"
                  className="h-6 w-7"
                  loading="lazy"
                  style={{ color: "transparent" }}
                  width={35}
                  height={28}
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">School</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  George Washington University
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">student</dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="2023 until the Present"
                >
                  <time dateTime={"2023"}>2023</time> <span aria-hidden="true">—</span>{" "}
                  <time dateTime={"2027"}>present</time>
                </dd>
              </dl>
            </li>
            <li className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img
                  alt=""
                  src="./southseattle.png"
                  decoding="async"
                  data-nimg="future"
                  className="h-7 w-7"
                  loading="lazy"
                  style={{ color: "transparent" }}
                  width={32}
                  height={32}
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">School</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  South Seattle College
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">student</dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="2022 until the 2023"
                >
                  <time dateTime={"2022"}>2022</time> <span aria-hidden="true">—</span>{" "}
                  <time dateTime={"2023"}>2023</time>
                </dd>
              </dl>
            </li>
            <li className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img
                  alt=""
                  src="./idtechlogo.png"
                  decoding="async"
                  data-nimg="future"
                  className="h-7 w-7"
                  loading="lazy"
                  style={{ color: "transparent" }}
                  width={32}
                  height={32}
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  iDtech
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">counselor</dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="Summer 2022 and 2023"
                >
                  <time dateTime={"2022"}>2022</time> <span aria-hidden="true">—</span>{" "}
                  <time dateTime={"2023"}>present</time>
                </dd>
              </dl>
            </li>
            <li className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img
                  alt=""
                  src="theJ.png"
                  decoding="async"
                  data-nimg="future"
                  className="h-7 w-7"
                  loading="lazy"
                  style={{ color: "transparent" }}
                  width={28}
                  height={28}
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Strome Jewish Community Center
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  counselor
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="2019 until 2021"
                >
                  <time dateTime={"2019"}>2019</time> <span aria-hidden="true">—</span>{" "}
                  <time dateTime={"2021"}>2021</time>
                </dd>
              </dl>
            </li>
            <li className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img
                  alt=""
                  src="wshs.png"
                  decoding="async"
                  data-nimg="future"
                  className="h-7 w-7"
                  loading="lazy"
                  style={{ color: "transparent" }}
                  width={28}
                  height={28}
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  West Seattle High School
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  student
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="2019 until the Present"
                >
                  <time dateTime={"2019"}>2019</time> <span aria-hidden="true">—</span>{" "}
                  <time dateTime={"2022"}>present</time>
                </dd>
              </dl>
            </li>
            <li className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img
                  alt=""
                  src="scds.png"
                  decoding="async"
                  data-nimg="future"
                  className="h-7 w-7"
                  loading="lazy"
                  style={{ color: "transparent" }}
                  width={28}
                  height={28}
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">school</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Seattle Country Day School
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  student
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="2015 until 2019"
                >
                  <time dateTime={"2015"}>2015</time> <span aria-hidden="true">—</span>{" "}
                  <time dateTime={"2019"}>2019</time>
                </dd>
              </dl>
            </li>
          </ol>
          
        </div>

      </div>
      <div className="">
        
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 flex-col flex h-full">
          <iframe
            className="w-full grow"
            width="560"  src="https://www.youtube.com/embed/yvn188DbWao?si=zjRpAKtABLA7os3P" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

          <div className="mt-4 gap-x-2">
            <div className="float-right flex px-1 gap-4">
              <a href="https://devpost.com/software/wildtrek-arv5wc" className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40">
                <FontAwesomeIcon className="fa-xl" icon={faUpRightFromSquare} /> 
              </a>
              <a href="https://github.com/dumax315/WildTrek" className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40">
                <FontAwesomeIcon className="fa-xl" icon={faGithub} /> 
              </a>
            </div>
            <div >{/* description*/}
              WildTrek is a pwa that motivates you to get outside, explore the wilderness, and learn more about nature. It allows users to upload pictures and if you are 13+, you can share them with people around you.


            </div>

          </div>
        </div>
        
      </div>

      <div className="">
        
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <img
            src="/buildonaryBackground.jpg"
            alt="picture of buildonary.live"
          />
          <div className="mt-4 gap-x-2">
            <div className="float-right flex px-1 gap-4">
              <a href="https://buildonary.live" className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40">
                <FontAwesomeIcon className="fa-xl" icon={faUpRightFromSquare} /> 
              </a>
              <a href="https://github.com/dumax315/Buildonary.live" className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40">
                <FontAwesomeIcon className="fa-xl" icon={faGithub} /> 
              </a>
            </div>
            <div >{/* description*/}
              Buildonary.live is voxel-based pictionary game on the web. The game plays like Skribbl.io but with a 3D twist. It is built with HTML/Css/JS, node.js, and socket.io.
            </div>

          </div>
        </div>
        
      </div>

      <div className="">
        
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <img
            src="/ttembed.webp"
            alt="picture of Tiktok auto embed"
          />
          <div className="mt-4  gap-x-2">
            <div className="float-right flex px-1 gap-4">
              <a href="https://top.gg/bot/845019408928735252" className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40">
                <FontAwesomeIcon className="fa-xl" icon={faUpRightFromSquare} /> 
              </a>
              <a href="https://github.com/dumax315/Tiktok-Auto-Embed" className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40">
                <FontAwesomeIcon className="fa-xl" icon={faGithub} /> 
              </a>
            </div>
            <div >{/* description*/}
              The TikTok Auto Embed bot will automatically embed the tiktoks links you send. It is in 3500 servers and has helped users over 300k times. It is built with python and discord.py.
            </div>

          </div>
        </div>
        
      </div>

            <div className="">
        
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <img
            src="/solarTaxicab.webp"
            alt="picture of this website"
          />
          <div className="mt-4 gap-x-2">
            <div className="float-right flex px-1 gap-4">
            
              <a href="https://solar-taxicab.theohal.repl.co/" className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40">
                <FontAwesomeIcon className="fa-xl" icon={faUpRightFromSquare} /> 
              </a>
              <a href="https://replit.com/@TheoHal/Solar-Taxicab?v=1" className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40">
                <FontAwesomeIcon className="fa-xl" icon={faGithub} /> 
              </a>
            </div>
            <div >
              Solar Taxicab, the game where you fairy passengers from planet to planet, avoid and shoot aliens, and try and make a huge amount of money. This game won $1000 in replit&apos;s game jam.
            </div>

          </div>
        </div>
        
      </div>
      <div className="">
        
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <img
            src="/nftbanner.png"
            alt="picture of the nft grafatti wall banner"
          />
          <div className="mt-4 gap-x-2">
            <div className="float-right flex px-1 gap-4">
            
              <a href="https://new-minter-tutorial.theohal.repl.co/" className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40">
                <FontAwesomeIcon className="fa-xl" icon={faUpRightFromSquare} /> 
              </a>
              <a href="https://dorahacks.io/buidl/2633" className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40">
                <FontAwesomeIcon className="fa-xl" icon={faGithub} /> 
              </a>
            </div>
            <div >{/* description*/}
              My Graffiti Walls are non-static NFTs that can be graffitied (a limited number of times). This project won $1667 and was runner up for most creative in Hello NFT World: OpenSea x Replit Hackathon.
            </div>

          </div>
        </div>
        
      </div>      
      <div className="">
        
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <img
            src="/next.webp"
            alt="picture of this website"
          />
          <div className="mt-4 gap-x-2">
            <div className="float-right flex px-1 gap-4">
            
              <a href="./" className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40">
                <FontAwesomeIcon className="fa-xl" icon={faUpRightFromSquare} /> 
              </a>
              <a href="https://github.com/dumax315/theoh.dev" className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40">
                <FontAwesomeIcon className="fa-xl" icon={faGithub} /> 
              </a>
            </div>
            <div >{/* description*/}
              this website was made with next.js, react, and tailwind
            </div>

          </div>
        </div>
        
      </div>

      
    </div>
  )
};

export default BodyContent
