import React from 'react'
import Link from "next/link";

export default function Home() {

  const TextLayout = `
    font-semibold text-gray-300
    transition duration-200 ease-in-out 
    hover:text-gray-100`;

  return (
    <div className="grid gap-6 py-4 items-start">
      <div className="flex flex-row text-4xl pt-4 pb-2 font-semibold text-gray-100">
          <div className="transition transform duration-200 ease-in-out text-wave">
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
        <div className = "block rounded-lg animate-pulse pl-1 ml-2 bg-gray-500 w-auto h-10"></div>
      </div>

      <div className="text-[17px]/8 font-normal">
        Hey! I'm Eddie, a second-year computer science student at UBC.
      </div>

      <div className="text-[17px]/8 font-normal ">
        I'm drawn to projects that blend logic with design — whether it's building interactive user interfaces or prototyping game ideas. 
        I enjoy exploring how code can serve as a medium for artistic expression. You can find 
        my <a href="/project" className={TextLayout}>full projects list</a> here.
      </div>
  
      <div className="text-[17px]/8 font-normal">
        Professionally, I have worked on UI prototyping and experimented with AI-powered tools in industry settings. You can learn more about
        those <a href="/experience" className={TextLayout}>experiences</a> here.
      </div>

      <div className="text-[17px]/8 font-normal">
        Outside of programming, I spend my time drawing, baking, or gaming. Some of my artwork can be found 
        in the <a href="/gallery" className={TextLayout}>Gallery</a>.
      </div>
    </div>
  )
}