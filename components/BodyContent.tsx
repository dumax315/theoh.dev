// import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import WorkOrSchoolItem from "./elements/workOrSchoolItem";

const BodyContent = (props) => {
  return (
    <div className="mt-4 mx-auto grid max-w-xl grid-cols-1 gap-16 lg:max-w-none lg:grid-cosls-2 relative px-8 sm:px-8 lg:px-20">
      <div className="">
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <FontAwesomeIcon className="fa-xl" icon={faBriefcase} />
            <span className="ml-3">work & school</span>
          </h2>
          <ol className="mt-6 space-y-4">
            <WorkOrSchoolItem
              imageSrc="https://signsalad.com/wp-content/uploads/2021/11/Screenshot-2021-11-03-at-12.14.11.png"
              type={"Work"}
              name={"Meta University Engineering Interns"}
              role={"Intern"}
              startDate={"2024"}
              endDate={"2024"}
            />
            <WorkOrSchoolItem
              imageSrc="https://brand.gatech.edu/sites/default/files/inline-images/GTVertical_RGB.png"
              type={"School"}
              name={"Georgia Institute of Technology"}
              role={"student"}
              startDate={"2024"}
              endDate={"Present"}
            />
            <WorkOrSchoolItem
              imageSrc="./gwuLogo.webp"
              type={"School"}
              name={"George Washington University"}
              role={"student"}
              startDate={"2023"}
              endDate={"2024"}
            />
            <WorkOrSchoolItem
              imageSrc="./southseattle.png"
              type={"School"}
              name={"South Seattle College"}
              role={"student"}
              startDate={"2022"}
              endDate={"2023"}
            />
            <WorkOrSchoolItem
              imageSrc="./idtechlogo.png"
              type={"Work"}
              name={"iD Tech Camps"}
              role={"Counselor"}
              startDate={"2022"}
              endDate={"2023"}
            />
            <WorkOrSchoolItem
              imageSrc="./theJ.png"
              type={"Work"}
              name={"Strome Jewish Community Center"}
              role={"Counselor"}
              startDate={"2019"}
              endDate={"2021"}
            />
            <WorkOrSchoolItem
              imageSrc="./wshs.png"
              type={"School"}
              name={"West Seattle High School"}
              role={"Student"}
              startDate={"2019"}
              endDate={"2023"}
            />
            <WorkOrSchoolItem
              imageSrc="./scds.png"
              type={"School"}
              name={"Seattle Country Day School"}
              role={"Student"}
              startDate={"2015"}
              endDate={"2019"}
            />
          </ol>
        </div>
      </div>

      <div className="">
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 flex-col flex h-full">
          <img
            src="/gts.png"
            alt="a photo of a group tab saver new tab"
            className="bg-stone-100"
          />

          <div className="mt-4 gap-x-2">
            <div className="float-right flex px-1 gap-4">
              <a
                href="https://chromewebstore.google.com/detail/aoficjpojclhhkpfgmeeenmknpnbagak?hl=en&authuser=0"
                className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40"
              >
                <FontAwesomeIcon className="fa-xl" icon={faUpRightFromSquare} />
              </a>
              <a
                href="https://github.com/i-r-o-n/GroupTabSaver"
                className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40"
              >
                <FontAwesomeIcon className="fa-xl" icon={faGithub} />
              </a>
            </div>
            <div>
              {/* description*/}
              <div className="text-lg	font-bold">Group Tab Saver</div>
              An extermely handy chrome new tab that allows users to save entire
              tab groups that update live with use. The days of keeping all of
              your tabs open all the time is over.
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 flex-col flex h-full">
          <img
            src="https://detectorinjector.study/logoAnimationForever.gif"
            alt="the animated Detector Injector logo"
            className="bg-stone-100"
          />

          <div className="mt-4 gap-x-2">
            <div className="float-right flex px-1 gap-4">
              <a
                href="https://devpost.com/software/detectorinjector"
                className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40"
              >
                <FontAwesomeIcon className="fa-xl" icon={faUpRightFromSquare} />
              </a>
              <a
                href="https://github.com/akhilvanka/detectorInjector"
                className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40"
              >
                <FontAwesomeIcon className="fa-xl" icon={faGithub} />
              </a>
            </div>
            <div>
              {/* description*/}
              <div className="text-lg	font-bold">Detector Injector</div>
              Gone are the days of faulty AI detection software, with
              DetectorInjector teachers gain the tool to combat rising AI usage.
              This tool embeds hidden prompt injections in assignemts so when
              students copy into LLMs the result will be poisoned. Won 3rd place
              at Georgetown HoyaHacks 2024.
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 flex-col flex h-full">
          <iframe
            className="w-full grow"
            width="560"
            src="https://www.youtube.com/embed/yvn188DbWao?si=zjRpAKtABLA7os3P"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <div className="mt-4 gap-x-2">
            <div className="float-right flex px-1 gap-4">
              <a
                href="https://devpost.com/software/wildtrek-arv5wc"
                className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40"
              >
                <FontAwesomeIcon className="fa-xl" icon={faUpRightFromSquare} />
              </a>
              <a
                href="https://github.com/dumax315/WildTrek"
                className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40"
              >
                <FontAwesomeIcon className="fa-xl" icon={faGithub} />
              </a>
            </div>
            <div>
              {/* description*/}
              WildTrek is a pwa that motivates you to get outside, explore the
              wilderness, and learn more about nature. It allows users to upload
              pictures and if you are 13+, you can share them with people around
              you.
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
              <a
                href="https://buildonarylive-theohal.replit.app/"
                className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40"
              >
                <FontAwesomeIcon className="fa-xl" icon={faUpRightFromSquare} />
              </a>
              <a
                href="https://github.com/dumax315/Buildonary.live"
                className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40"
              >
                <FontAwesomeIcon className="fa-xl" icon={faGithub} />
              </a>
            </div>
            <div>
              {/* description*/}
              Buildonary.live is voxel-based pictionary game on the web. The
              game plays like Skribbl.io but with a 3D twist. It is built with
              HTML/Css/JS, node.js, and socket.io.
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <img src="/ttembed.webp" alt="picture of Tiktok auto embed" />
          <div className="mt-4  gap-x-2">
            <div className="float-right flex px-1 gap-4">
              <a
                href="https://top.gg/bot/845019408928735252"
                className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40"
              >
                <FontAwesomeIcon className="fa-xl" icon={faUpRightFromSquare} />
              </a>
              <a
                href="https://github.com/dumax315/Tiktok-Auto-Embed"
                className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40"
              >
                <FontAwesomeIcon className="fa-xl" icon={faGithub} />
              </a>
            </div>
            <div>
              {/* description*/}
              The TikTok Auto Embed bot will automatically embed the tiktoks
              links you send. It is in 3500 servers and has helped users over
              300k times. It is built with python and discord.py.
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <img src="/solarTaxicab.webp" alt="picture of this website" />
          <div className="mt-4 gap-x-2">
            <div className="float-right flex px-1 gap-4">
              <a
                href="https://solar-taxicab-theohal.replit.app/"
                className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40"
              >
                <FontAwesomeIcon className="fa-xl" icon={faUpRightFromSquare} />
              </a>
              <a
                href="https://replit.com/@TheoHal/Solar-Taxicab?v=1"
                className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40"
              >
                <FontAwesomeIcon className="fa-xl" icon={faGithub} />
              </a>
            </div>
            <div>
              Solar Taxicab, the game where you fairy passengers from planet to
              planet, avoid and shoot aliens, and try and make a huge amount of
              money. This game won $1000 in replit&apos;s game jam.
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
              <a
                href="https://new-minter-tutorial.theohal.repl.co/"
                className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40"
              >
                <FontAwesomeIcon className="fa-xl" icon={faUpRightFromSquare} />
              </a>
              <a
                href="https://dorahacks.io/buidl/2633"
                className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40"
              >
                <FontAwesomeIcon className="fa-xl" icon={faGithub} />
              </a>
            </div>
            <div>
              {/* description*/}
              My Graffiti Walls are non-static NFTs that can be graffitied (a
              limited number of times). This project won $1667 and was runner up
              for most creative in Hello NFT World: OpenSea x Replit Hackathon.
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <img src="/next.webp" alt="picture of this website" />
          <div className="mt-4 gap-x-2">
            <div className="float-right flex px-1 gap-4">
              <a
                href="./"
                className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40"
              >
                <FontAwesomeIcon className="fa-xl" icon={faUpRightFromSquare} />
              </a>
              <a
                href="https://github.com/dumax315/theoh.dev"
                className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40"
              >
                <FontAwesomeIcon className="fa-xl" icon={faGithub} />
              </a>
            </div>
            <div>
              {/* description*/}
              this website was made with next.js, react, and tailwind
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
