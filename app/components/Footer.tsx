import Image from "next/image";

const Footer = () => {

  const FooterLayout = `
    flex items-center
    gap-2 h-10 pr-8 w-auto`;
  
  const TextLayout = `
    transition duration-200 ease-in-out 
    hover:translate-x-1 hover:text-gray-300`;
  
  return (
    <footer className="flex justify-between w-full items-center pb-20 text-gray-400">
      <div className="flex"> 
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
          <div className={TextLayout}>
            GitHub
          </div>
        </a>

        <a
          className={FooterLayout}
          href="https://www.linkedin.com/in/eddiehann/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/linkedin.svg"
            alt="linkedin icon"
            width={16}
            height={16}
          />
          <div className={TextLayout}>
            LinkedIn
          </div>
        </a>

        <a
          className={FooterLayout}
          href="mailto:7eddiehan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/email.svg"
            alt="email icon"
            width={16}
            height={16}
          />
          <div className={TextLayout}>
            Email
          </div>
        </a>
      </div>

      <div className="hidden sm:block">
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
          <div className={TextLayout}>
            Source
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;