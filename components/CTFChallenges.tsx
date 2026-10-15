const downloadClass =
  "inline-block rounded-lg border border-zinc-400 px-4 py-2 text-sm font-semibold transition hover:bg-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 dark:border-zinc-600 dark:hover:bg-zinc-800";

export default function CTFChallenges() {
  return (
    <section id="ctf" aria-labelledby="ctf-heading" className="min-w-0 lg:col-span-2">
      <h2 id="ctf-heading" className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">CTF Challenges</h2>
      <p className="mt-3 mb-6">Two security challenges I wrote for WRECKCTF 2025. Download the handouts and try them yourself.</p>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <article className="flex min-w-0 flex-col rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Web · GraphQL</p>
          <h3 className="mt-2 text-lg font-bold">Awesome Graphql Blog</h3>
          <p className="mt-3">I hear the admins have a secret relationship. What might they be hiding in their private blog posts?</p>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">Includes source code and Docker setup instructions. Run the intentionally vulnerable blog locally with dummy data.</p>
          <a className={`${downloadClass} mt-6 self-start`} href="https://github.com/dumax315/theoh.dev/releases/download/wreckctf-2025-handouts/my-first-graphql.tar.gz">Download web challenge (.tar.gz)</a>
          <details className="mt-4 text-sm">
            <summary className="cursor-pointer font-semibold">Run locally with Docker</summary>
            <p className="mt-3">Extract the download, open a terminal in the extracted folder, then run:</p>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-zinc-200 p-3 text-xs dark:bg-zinc-800"><code>{`docker build -t theo-graphql-blog ./server
docker run --rm --name theo-graphql-blog --memory=256m --cpus=0.5 --pids-limit=128 -p 127.0.0.1:4000:4000 theo-graphql-blog`}</code></pre>
            <p className="mt-3">Open <a className="underline" href="http://localhost:4000">localhost:4000</a>. Stop with Ctrl+C; restarting the container resets the challenge. Keep it on localhost.</p>
          </details>
        </article>
        <article className="flex min-w-0 flex-col rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Reverse engineering · STM32</p>
          <h3 className="mt-2 text-lg font-bold">homemadepasskey</h3>
          <p className="mt-3">XYZ corp won’t tell employees their own passwords. Instead, IT hands out homemade USB “passkeys” that type their credentials. Unfortunately, the firmware leaked.</p>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">Inspect the ARM firmware in a reverse-engineering tool such as Ghidra. No hardware or running service required.</p>
          <a className={`${downloadClass} mt-6 self-start`} href="https://github.com/dumax315/theoh.dev/releases/download/wreckctf-2025-handouts/lookmomimapasskey.elf">Download firmware (.elf)</a>
        </article>
      </div>
    </section>
  );
}
