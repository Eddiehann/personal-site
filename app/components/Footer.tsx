import Image from "next/image";

const Footer = () => {

  const FooterLayout = `
        flex items-center
        gap-2 h-10 px-4 w-auto`;
  
  return (
      <footer className="flex items-center">
          <a
            className={FooterLayout}
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
            <div className="
              transition duration-200 ease-in-out 
              hover:translate-x-1 hover:text-gray-300">
              GitHub
            </div>
          </a>
          <a
            className={FooterLayout}
            href="https://github.com/Eddiehann/personal-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/code-wrap.svg"
              alt="code wrap icon"
              width={16}
              height={16}
            />
            <div className="
              transition duration-200 ease-in-out 
              hover:translate-x-1 hover:text-gray-300">
              Source Code
            </div>
          </a>
        </footer>
  );
};

export default Footer;