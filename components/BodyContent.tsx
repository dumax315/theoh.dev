// import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'

const BodyContent = (props) => {
  
  return (
    
    <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 relative px-8 sm:px-8 lg:px-20">
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
                  south seattle college
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">student</dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="2022 until the Present"
                >
                  <time dateTime={"2019"}>2022</time> <span aria-hidden="true">—</span>{" "}
                  <time dateTime={"2022"}>present</time>
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
                  aria-label="Summer 2022"
                >
                  <time dateTime={"2019"}>2022</time> <span aria-hidden="true">—</span>{" "}
                  <time dateTime={"2022"}>summer</time>
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
                  strome jewish community center
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
                  west seattle high school
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
                  seattle country day school
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
      <div className="space-y-10 lg:pl-16 xl:pl-24">
        
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <img
            src="/buildonaryBackground.jpg"
            alt="picture of buildonary.live"
          />
          <div className="mt-4 flex gap-x-2">
            <div >{/* description*/}
              Buildonary.live is voxel-based pictionary game on the web. The game plays like Skribbl.io but with a 3D twist.
            </div>
            <a href="https://buildonary.live" className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40">
              <FontAwesomeIcon className="fa-xl" icon={faUpRightFromSquare} /> 
            </a>
            <a href="https://github.com/dumax315/Buildonary.live" className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40">
              <FontAwesomeIcon className="fa-xl" icon={faGithub} /> 
            </a>
          </div>
        </div>
        
      </div>
      
    </div>
  )
};

export default BodyContent
