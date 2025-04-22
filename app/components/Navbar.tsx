import Link from "next/link";

const NavBarLayout = `
        rounded-full flex items-center justify-center 
        dark:hover:bg-gray-800 hover:border-transparent
        h-10 px-4 w-auto
        font-bold text-sm`;

const Navbar = () => {
  return (  
    <header className="flex gap-4 items-center">
      <Link
        href="/"
        className={NavBarLayout}
      >
        Home
      </Link>
      <Link
        href="./technical-experience"
        className={NavBarLayout}
      >
        Technical Experiences
      </Link>
      <Link
        href="/projects"
        className={NavBarLayout}
      >
        Projects
      </Link>
    </header>
  );
};

export default Navbar;