import React from 'react'

export default function Home() {

  const linkLayout=`
    font-semibold text-gray-300
    transition duration-200 ease-in-out 
    hover:text-gray-100`;

  return (
    <div className="grid gap-6 py-2">
      <section className="flex font-semibold text-gray-100
                      text-3xl sm:text-4xl sm:py-2">
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
      </section>

      <div className="grid gap-6 fade-up font-normal">
        <section>
          Hey! I&apos;m Eddie, a second-year computer science student at UBC.
        </section>

        <section>
          I&apos;m drawn to projects that blend logic with design — whether it&apos;s building interactive user interfaces or prototyping game ideas. 
          I enjoy exploring how code can serve as a medium for artistic expression. You can find 
          my <a href="/project" className={linkLayout}>full projects list</a> here.
        </section>
    
        <section>
          Professionally, I have worked on UI prototyping and experimented with AI-powered tools in industry settings. You can learn more about
          those <a href="/experience" className={linkLayout}>experiences</a> here.
        </section>

        <section>
          Outside of programming, I spend my time drawing, baking, or gaming. Some of my artwork can be found 
          in the <a href="/gallery" className={linkLayout}>Gallery</a>.
        </section>
      </div> 
    </div>
  )
}