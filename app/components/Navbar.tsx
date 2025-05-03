'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const pathname = usePathname();

  const navBarLayout = `
    flex items-center
    h-10 w-auto`;

  const textLayout = `
    flex items-center h-10 
    transition duration-200 ease-in-out
    hover:text-gray-100 hover:-translate-y-1`;

  const isActive = (path: string) => 
    pathname === path ? "underline underline-offset-5 text-gray-300" : "no-underline";

  return ( 
    <nav className="flex justify-between w-full h-10">
      <Link
        href="/"
        className={`${navBarLayout} ${isActive("/")}`}>
        <svg height="18" width="18" viewBox="0 0 16 16" className={`${textLayout} ${`color:currentcolor`}`}>
          <path d="M12.5 6.56062L8.00001 2.06062L3.50001 6.56062V13.5L6.00001 13.5V11C6.00001 9.89539 6.89544 
          8.99996 8.00001 8.99996C9.10458 8.99996 10 9.89539 10 11V13.5L12.5 13.5V6.56062ZM13.78 5.71933L8.70711 
          0.646409C8.31659 0.255886 7.68342 0.255883 7.2929 0.646409L2.21987 5.71944C2.21974 5.71957 2.21961 
          5.7197 2.21949 5.71982L0.469676 7.46963L-0.0606537 7.99996L1.00001 9.06062L1.53034 8.53029L2.00001 
          8.06062V14.25V15H2.75001L6.00001 15H7.50001H8.50001H10L13.25 15H14V14.25V8.06062L14.4697 8.53029L15 
          9.06062L16.0607 7.99996L15.5303 7.46963L13.7806 5.71993C13.7804 5.71973 13.7802 5.71953 13.78 
          5.71933ZM8.50001 11V13.5H7.50001V11C7.50001 10.7238 7.72386 10.5 8.00001 10.5C8.27615 10.5 8.50001 
          10.7238 8.50001 11Z" fill="currentColor"></path>
        </svg>
      </Link>
      
      <div className = "flex gap-6">  
        <Link
          href="/projects"
          className={`${navBarLayout} ${isActive("/projects")}`}>
          <div className={textLayout}>
            Projects
          </div>
        </Link>

        <Link
          href="/experiences"
          className={`${navBarLayout} ${isActive("/experiences")}`}>
          <div className={textLayout}>
            Experiences
          </div>
        </Link>

        <Link
          href="/gallery"
          className={`${navBarLayout} ${isActive("/gallery")}`}>
          <div className={textLayout}>
            Gallery
          </div>
        </Link>

        <a
          className={`${navBarLayout} ${`hidden sm:block`}`}
          href="https://github.com/eddiehann"
          target="_blank"
          rel="noopener noreferrer"
          >
          <svg height="18" width="18" viewBox="0 0 16 16" className={`${textLayout} ${`color:currentcolor`}`}>
            <path d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 
            15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 
            2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 
            12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 
            6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 
            4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 
            3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 
            7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 
            14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 
            12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z" fill="currentColor"></path>
          </svg>
        </a>

        <a
          className={`${navBarLayout} ${`hidden sm:block`}`}
          href="https://www.linkedin.com/in/eddiehann/"
          target="_blank"
          rel="noopener noreferrer"
          >
          <svg height="18" width="18" viewBox="0 0 16 16" className={`${textLayout} ${`color:currentcolor`}`}>
            <path d="M2 0C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 
            0.895431 15.1046 0 14 0H2ZM5 6.75V13H3V6.75H5ZM5 4.50008C5 5.05554 4.61409 5.5 3.99408 5.5H3.98249C3.38582 
            5.5 3 5.05554 3 4.50008C3 3.93213 3.39765 3.5 4.00584 3.5C4.61409 3.5 4.98845 3.93213 5 4.50008ZM8.5 
            13H6.5C6.5 13 6.53178 7.43224 6.50007 6.75H8.5V7.78371C8.5 7.78371 9 6.75 10.5 6.75C12 6.75 13 7.59782 13 
            9.83107V13H11V10.1103C11 10.1103 11 8.46616 9.7361 8.46616C8.4722 8.46616 8.5 9.93972 8.5 9.93972V13Z" 
            fill="currentColor"></path>
          </svg>
        </a>
      </div>  
    </nav>
  );
};

export default Navbar;