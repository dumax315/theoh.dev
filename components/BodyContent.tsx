import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import ProjectItem from "./elements/ProjectItem";
import WorkOrSchoolItem from "./elements/WorkOrSchoolItem";

const BodyContent = (props) => {
  return (
    <div className="mt-4 mx-auto grid max-w-xl grid-cols-1 lg:grid-cols-2 gap-16 lg:max-w-none relative px-8 sm:px-8 lg:px-20">
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
              name={"Meta"}
              role={"Meta University Engineering Intern"}
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

      <ProjectItem
        imageSrc={"./indoorMaps.webp"}
        imageAlt={"a photo of the interacted building map from indoor maps"}
        viewLiveHref={"https://indoormaps.theoh.dev/"}
        viewSourceHref={"https://github.com/Theo-s-Meta-Capstone/IndoorMaps"}
        title={"Indoor Maps"}
        description={`My Capstone project at my Meta U internship. Design shareble and searchable maps of any building. Worked solo for 5 weeks to build a webapp that uses
          Postgres + Prisma + TypeGraphQL + Apollo Server + Express + JWT cookies + ts-Relay + Leaflet + Geoman + Vite React + Jest / 100% TS and ES6.`}
      />
      <ProjectItem
        imageSrc={"./gts.png"}
        imageAlt={"a photo of a group tab saver new tab"}
        viewLiveHref={
          "https://chromewebstore.google.com/detail/aoficjpojclhhkpfgmeeenmknpnbagak?hl=en&authuser=0"
        }
        viewSourceHref={"https://github.com/i-r-o-n/GroupTabSaver"}
        title={"Group Tab Saver"}
        description={`An extermely handy chrome new tab that allows users to save entire
              tab groups that update live with use. The days of keeping all of
              your tabs open all the time is over.`}
      />
      <ProjectItem
        imageSrc={"https://detectorinjector.study/logoAnimationForever.gif"}
        imageAlt={"the animated Detector Injector logo"}
        viewLiveHref={"https://devpost.com/software/detectorinjector"}
        viewSourceHref={"https://github.com/akhilvanka/detectorInjector"}
        title={"Detector Injector"}
        description={`Gone are the days of faulty AI detection software, with
              DetectorInjector teachers gain the tool to combat rising AI usage.
              This tool embeds hidden prompt injections in assignemts so when
              students copy into LLMs the result will be poisoned. Won 3rd place
              at Georgetown HoyaHacks 2024.`}
      />
      <ProjectItem
        ytIframeSrc={
          "https://www.youtube.com/embed/yvn188DbWao?si=zjRpAKtABLA7os3P"
        }
        imageAlt={"YouTube video player"}
        viewLiveHref={"https://devpost.com/software/wildtrek-arv5wc"}
        viewSourceHref={"https://github.com/dumax315/WildTrek"}
        title={"WildTrek"}
        description={`WildTrek is a pwa that motivates you to get outside, explore the
              wilderness, and learn more about nature. It allows users to upload
              pictures and if you are 13+, you can share them with people around
              you.`}
      />
      <ProjectItem
        imageSrc={"/buildonaryBackground.jpg"}
        imageAlt={"picture of buildonary.live"}
        viewLiveHref={"https://buildonary.theoh.dev/"}
        viewSourceHref={"https://github.com/dumax315/Buildonary.live"}
        title={"Detector Injector"}
        description={`Buildonary.live is voxel-based pictionary game on the web. The
              game plays like Skribbl.io but with a 3D twist. It is built with
              HTML/Css/JS, node.js, and socket.io.`}
      />
      <ProjectItem
        imageSrc={"/ttembed.webp"}
        imageAlt={"picture of Tiktok auto embed"}
        viewLiveHref={"https://top.gg/bot/845019408928735252"}
        viewSourceHref={"https://github.com/dumax315/Buildonary.live"}
        description={`The TikTok Auto Embed bot will automatically embed the tiktoks
              links you send. It is in 3500 servers and has helped users over
              300k times. It is built with python and discord.py.`}
      />
      <ProjectItem
        imageSrc={"/solarTaxicab.webp"}
        imageAlt={"picture of Solar Taxicab"}
        viewLiveHref={"https://solartaxicab.theoh.dev/"}
        viewSourceHref={"https://replit.com/@TheoHal/Solar-Taxicab?v=1"}
        description={`Solar Taxicab, the game where you fairy passengers from planet to
              planet, avoid and shoot aliens, and try and make a huge amount of
              money. This game won $1000 in replit's game jam.`}
      />
      <ProjectItem
        imageSrc={"/nftbanner.png"}
        imageAlt={"picture of the nft grafatti wall banner"}
        viewLiveHref={"https://new-minter-tutorial.theohal.repl.co/"}
        viewSourceHref={"https://dorahacks.io/buidl/2633"}
        description={`My Graffiti Walls are non-static NFTs that can be graffitied (a
              limited number of times). This project won $1667 and was runner up
              for most creative in Hello NFT World: OpenSea x Replit Hackathon.`}
      />
      <ProjectItem
        imageSrc={"/next.webp"}
        imageAlt={"picture of this website"}
        viewLiveHref={"./"}
        viewSourceHref={"https://github.com/dumax315/theoh.dev"}
        description={`this website was made with next.js, react, and tailwind`}
      />
    </div>
  );
};

export default BodyContent;
