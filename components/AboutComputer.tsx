import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube, faDiscord,faGithub,faDev, faSpotify} from '@fortawesome/free-brands-svg-icons'


const AboutComputer = (props) => {

  return (
    <div className="max-w-3xl mx-auto px-6 mt-8">
      <div className="w-3/4">
        <h1 className="dark:text-neutral-300 text-neutral-800 text-7xl font-mono">
          computer club
        </h1>
        <p className="mt-4 mb-4">
          every tuesday in Ms. Philp&apos;s room #260

          <br />
          fill form out here or in a different page <a className="underline text-blue-500" href="https://forms.gle/YcUyvqu8ozkiCXar5">here</a>
        </p>
      </div>

    </div>
  )
};

export default AboutComputer