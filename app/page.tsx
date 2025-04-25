import React from 'react'
export default function Home() {

  const TextLayout=`text-[17px]/8 font-normal`;

  const LinkLayout=`
    font-semibold text-gray-300
    transition duration-200 ease-in-out 
    hover:text-gray-100`;

  return (
    <div className="grid gap-6 py-4 items-start fade-up">
      <div className="flex text-4xl pt-4 pb-2 font-semibold text-gray-100">
          <div className="transition transform duration-200 text-wave">
            <span>E</span>
            <span>d</span>
            <span>d</span>
            <span>i</span>
            <span>e</span>
            <span> </span>
            <span>H</span>
            <span>a</span>
            <span>n</span>
          </div>
        <div className = "block rounded-lg animate-pulse pl-1 ml-2 bg-gray-500 h-10"></div>
      </div>

      <section className="text-[17px]/8 font-normal">
        Hey! I&apos;m Eddie, a second-year computer science student at UBC.
      </section>

      <section className={TextLayout}>
        I&apos;m drawn to projects that blend logic with design — whether it&apos;s building interactive user interfaces or prototyping game ideas. 
        I enjoy exploring how code can serve as a medium for artistic expression. You can find 
        my <a href="/project" className={LinkLayout}>full projects list</a> here.
      </section>
  
      <section className={TextLayout}>
        Professionally, I have worked on UI prototyping and experimented with AI-powered tools in industry settings. You can learn more about
        those <a href="/experience" className={LinkLayout}>experiences</a> here.
      </section>

      <section className={TextLayout}>
        Outside of programming, I spend my time drawing, baking, or gaming. Some of my artwork can be found 
        in the <a href="/gallery" className={LinkLayout}>Gallery</a>.
      </section>
    </div>
  )
}