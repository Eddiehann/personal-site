'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const pathname = usePathname();

  const NavBarLayout = `
    flex items-center border-b-2 
    h-10 px-4 w-auto`;

  const isActive = (path: string) => 
    pathname === path ? "border-gray-300 text-gray-300" : "border-transparent";

  return (  
    <header className="flex justify-between gap-4 w-full h-10">
      <div className = "flex gap-2">  
        <Link
          href="/"
          className={`${NavBarLayout} ${isActive("/")}`}
        >
          <div className="
            flex items-center h-10 
            transition duration-200 ease-in-out
            hover:text-gray-300 hover:-translate-y-1">
            Home
          </div>
        </Link>
        <Link
          href="/experiences"
          className={`${NavBarLayout} ${isActive("/experiences")}`}
        >
          <div className="
            flex items-center h-10 
            transition duration-200 ease-in-out
            hover:text-gray-300 hover:-translate-y-1">
            Experiences
          </div>
        </Link>
        <Link
          href="/projects"
          className={`${NavBarLayout} ${isActive("/projects")}`}
        >
          <div className="
            flex items-center h-10 
            transition duration-200 ease-in-out
            hover:text-gray-300 hover:-translate-y-1">
            Projects
          </div>
        </Link>
      </div>
      <Link
        href=""
        className={`${NavBarLayout} ${isActive("")}`}
      >
        Contact
      </Link>
    </header>
  );
};

export default Navbar;