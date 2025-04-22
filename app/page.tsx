import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-20 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <main className="grid gap-4 grid-rows-1 row-start-2 items-center">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            href="/"
            className="rounded-full flex items-center justify-center dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          >
            Home
          </Link>
          <Link
            href="/technical-experience"
            className="rounded-full flex items-center justify-center dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          >
            Technical Experiences
          </Link>
          <Link
            href="/projects"
            className="rounded-full flex items-center justify-center dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          >
            Projects
          </Link>
        </div>
      </main>
      
      
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/eddiehann"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/git.svg"
            alt="git icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Eddiehann/personal-site"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/code-wrap.svg"
            alt="code wrap icon"
            width={16}
            height={16}
          />
          Source Code
        </a>
      </footer>
    </div>
  );
}
