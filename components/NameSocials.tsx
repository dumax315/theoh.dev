import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube, faDiscord,faGithub,faDev, faSpotify} from '@fortawesome/free-brands-svg-icons'


const NavBar = (props) => {

  return (
    <div className="max-w-3xl mx-auto px-6 mt-8">
      <div className="w-3/4">
        <h1 className="dark:text-neutral-300 text-neutral-800 text-7xl font-mono">
          theoh
        </h1>
        <p className="mt-4">
          seattle based full stack developer and tech educator
        </p>
      </div>
      <div className="mt-4 w-full ">
        <span className="w-[160px] inline-block mb-4">
          <a href="https://www.instagram.com/theo.halpern/" className=" whitespace-nowrap transition-all duration-700 border-black dark:border-white border-2 p-2 rounded-md max-w-[41px] hover:max-w-[300px] overflow-hidden w-auto inline-block">
            <FontAwesomeIcon className="fa-xl" icon={faInstagram} /> 
            <span className="ml-2 ">instagram</span>
          </a>
        </span>
        <span className="w-[160px] inline-block mb-4">
        <a href="https://www.youtube.com/channel/UC9IrR8HZxBGzyWau_dG_DRg" className=" whitespace-nowrap transition-all duration-700 border-black dark:border-white border-2 p-2 rounded-md max-w-[46px] hover:max-w-[300px] overflow-hidden w-auto inline-block ">
          <FontAwesomeIcon className="fa-xl" icon={faYoutube} /> 
          <span className="ml-2 ">youtube</span>
        </a>
        </span>
        <span className="w-[160px] inline-block mb-4">
          <a href="https://discord.com/users/322193320199716865" className=" whitespace-nowrap transition-all duration-700 border-black dark:border-white  border-2 p-2 rounded-md max-w-[50px] hover:max-w-[300px] overflow-hidden w-auto inline-block text-center">
            <FontAwesomeIcon className="fa-xl" icon={faDiscord} /> 
            <span className="ml-2">discord</span>
          </a>
        </span>
        <span className="w-[160px] inline-block mb-4">
          <a href="https://github.com/dumax315" className=" whitespace-nowrap transition-all duration-700 border-black dark:border-white border-2 p-2 rounded-md max-w-[43px] hover:max-w-[300px] overflow-hidden w-auto inline-block text-center">
            <FontAwesomeIcon className="fa-xl" icon={faGithub} /> 
            <span className="ml-2">github</span>
          </a>
        </span>
        <span className="w-[160px] inline-block mb-4">
          <a href="https://devpost.com/dumax315" className=" whitespace-nowrap transition-all duration-700 border-black dark:border-white border-2 p-2 rounded-md max-w-[41px] hover:max-w-[300px] overflow-hidden w-auto inline-block text-center">
            <FontAwesomeIcon className="fa-xl" icon={faDev} /> 
            <span className="ml-2">Devpost</span>
          </a>
        </span>
        <span className="w-[160px] inline-block mb-4">
          <a href="https://open.spotify.com/user/cd90euuh48ettmhg5eaaqud74?si=ea08ac30b9a4402d" className=" whitespace-nowrap transition-all duration-700 border-black dark:border-white border-2 p-2 rounded-md max-w-[43px] hover:max-w-[300px] overflow-hidden w-auto inline-block text-center">
            <FontAwesomeIcon className="fa-xl" icon={faSpotify} /> 
            <span className="ml-2">Spotify</span>
          </a>
        </span>
      </div>
    </div>
  )
};

export default NavBar