import React from 'react'

const projects = () => {

  const sectionLayout=`
    grid gap-1 px-3
    border-l-2 border-gray-600 hover:border-gray-400
    transition ease-in-out duration-300
    hover:translate-x-2 hover:-translate-y-1`;

  return (
    <div className="grid gap-8 py-2 font-normal">

      <section className="font-semibold text-gray-100 text-2xl sm:text-3xl sm:py-2">
        Projects
      </section>

      <section className={sectionLayout}>
        <div className="font-normal text-sm">May 2025</div>
        <div>
          <span className="font-semibold text-gray-300">Personal Site</span>
          <span className="font-normal"> | TypeScript, Next.js</span>
        </div>
        <div className="font-normal text-sm">Full-stack Personal Portfolio</div>
      </section>

      <section className={sectionLayout}>
        <div className="font-normal text-sm">June 2024</div>
        <div>
          <span className="font-semibold text-gray-300">AI Chat Bot</span>
          <span className="font-normal"> | HTML, CSS</span>
        </div>
        <div className="font-normal text-sm">Full-stack Chatbot Powered by GPT-4</div>
      </section>

      <section className={sectionLayout}>
        <div className="font-normal text-sm">April 2024</div>
        <div>
          <span className="font-semibold text-gray-300">Medieval City Builder</span>
          <span className="font-normal"> | Java, JUnit</span>
        </div>
        <div className="font-normal text-sm">City Builder Game</div>
      </section>

      <section className={sectionLayout}>
        <div className="font-normal text-sm">June 2022</div>
        <div>
          <span className="font-semibold text-gray-300">Gift Rush</span>
          <span className="font-normal"> | Python, Pygame</span>
        </div>
        <div className="font-normal text-sm">Roguelike Puzzle Game</div>
      </section>
    </div> 
  )
}
export default projects