import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  imageSrc?: string;
  ytIframeSrc?: string;
  imageAlt: string;
  viewLiveHref: string;
  viewSourceHref: string;
  title?: string;
  description: string;
};

const ProjectItem = ({
  imageSrc,
  ytIframeSrc,
  imageAlt,
  viewLiveHref,
  viewSourceHref,
  title,
  description,
}: Props) => {
  return (
    <div className="">
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 flex-col flex h-full">
        {imageSrc ? (
          <img src={imageSrc} alt={imageAlt} className="bg-stone-100" />
        ) : null}
        {ytIframeSrc ? (
          <iframe
            className="w-full grow"
            width="560"
            src={ytIframeSrc}
            title={imageAlt}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : null}

        <div className="mt-4 gap-x-2">
          <div className="float-right flex px-1 gap-4">
            <a
              href={viewLiveHref}
              className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40"
            >
              <FontAwesomeIcon className="fa-xl" icon={faUpRightFromSquare} />
            </a>
            <a
              href={viewSourceHref}
              className="rounded-lg border border-zinc-100 p-2 items-center flex dark:border-zinc-700/40"
            >
              <FontAwesomeIcon className="fa-xl" icon={faGithub} />
            </a>
          </div>
          <div>
            {/* description*/}
            {title ? <div className="text-lg	font-bold">{title}</div> : null}
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
