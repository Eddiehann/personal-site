import Image from "next/image";

const FooterLayout = `
        flex items-center 
        gap-2 hover:underline hover:underline-offset-4
        h-10 px-4 w-auto
        font-bold text-sm`;

const Footer = () => {
  return (
      <footer className="flex gap-4 items-center">
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
            GitHub
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
            Source Code
          </a>
        </footer>
  );
};

export default Footer;