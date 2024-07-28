type Props = {
  type: string;
  name: string;
  role: string;
  startDate: string;
  endDate: string;
  imageSrc: string;
};
const WorkOrSchoolItem = ({ type, name, role, startDate, endDate, imageSrc }: Props) => {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <img
          alt=""
          src={imageSrc}
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
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {name}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role}</dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startDate} until ${endDate}`}
        >
          <time dateTime={startDate}>{startDate}</time> <span aria-hidden="true">—</span>{" "}
          <time dateTime={startDate}>{endDate}</time>
        </dd>
      </dl>
    </li>
  );
};

export default WorkOrSchoolItem;
