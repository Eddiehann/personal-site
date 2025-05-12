'use client'

import React from 'react'
import { useState } from 'react';

const projects = [
  {
    date: 'May 2025',
    title: 'Personal Portfolio',
    skill: 'TypeScript, Next.js',
    desc: 'Front-End Personal Portfolio',
    detail: [
      "- Dynamic portfolio written in TypeScript using Next.js framework and deployed with Vercel",
      "- Implemented responsive layouts to ensure smooth user experience across all screen sizes",
      "- Styled interactive UI components with Tailwind CSS, incorporating custom animations"
    ],
  },
  {
    date: 'June 2024',
    title: 'AI Assistant Web App',
    skill: 'HTML, CSS',
    desc: 'Full-stack Chatbot Powered by GPT-4',
    detail: [
      "- Full-stack web application hosting GPT-4's conversational and image analysis features via Azure OpenAI Service",
      "- Optimized AI prompts for improved output accuracy and formatting",
      "- Developed a minimalistic UI with HTML and CSS, ensuring a clean, user-friendly design"
    ],
  },
  {
    date: 'April 2024',
    title: 'Medieval Sandbox Builder',
    skill: 'Java',
    desc: 'Sandbox-style Building Game',
    detail: [
      "- Sandbox-style building game developed in Java with a mouse-controlled GUI",
      "- Implemented JSON-based save/load functionality and logging for debugging",
      "- Performed testing with JUnit to validate core game interactions"
    ],
  },
  {
    date: 'June 2022',
    title: 'Gift Rush',
    skill: 'Python, Pygame',
    desc: 'Roguelike Puzzle Game',
    detail: [
      "- Roguelike puzzle game developed in Python using Pygame",
      "- Developed four-directional character movement mechanics controlled via keyboard inputs",
      "- Implemented dynamic obstacles and collectible items"
    ],
  },
];

const sectionLayout=`
  grid gap-1 px-3
  border-l-2 border-gray-600 hover:border-gray-400
  transition ease-in-out duration-300
  hover:translate-x-2 hover:-translate-y-1`;

export default function ProjectList() {

  const [dropDown, setDropDown] = useState(-1); {/* -1 is closed */}

  return (
    <div className="grid gap-8 py-2 font-normal">

      <section className="font-semibold text-gray-100 text-2xl sm:text-3xl sm:py-2">
        Projects
      </section>

      {projects.map((project, i) => (
        <section 
          key={i} 
          className={sectionLayout} 
          onClick={() => setDropDown(dropDown === i ? -1 : i)}> {/* set to -1 if already open */}

          <div className="font-normal text-sm">{project.date}</div>
          <div>
            <span className="font-semibold text-gray-300">{project.title}</span>
            <span className="font-normal"> | {project.skill}</span>
          </div>
          <div className="font-normal text-sm">{project.desc}</div>

          { dropDown === i && (
            <div className="font-normal text-gray-300 text-sm pt-2 transition ease-in-out fade-up">
              {project.detail.map((point, j) => (
                <section key={j} className="py-1">{point}</section>
            ))}
            </div>
          )}
        </section>
      ))}
    </div> 
  )
}