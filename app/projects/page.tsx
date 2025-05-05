'use client'

import React from 'react'
import { useState } from 'react';

const projects = [
  {
    date: 'May 2025',
    title: 'Personal Site',
    skill: 'TypeScript, Next.js',
    desc: 'Full-stack Personal Portfolio',
    detail: [
      "- Full-stack portfolio written in TypeScript using Next.js framework and deployed with Vercel",
      "- Styled interactive components with Tailwind CSS, including custom animations",
      "- Implemented responsive layouts to ensure smooth user experience across all screen sizes"
    ],
  },
  {
    date: 'June 2024',
    title: 'AI Chat Bot',
    skill: 'HTML, CSS',
    desc: 'Full-stack Chatbot Powered by GPT-4',
    detail: [
      "- Full-stack web application hosting GPT-4's conversational and image analysis features via Azure OpenAI Service",
      "- Structured the UI with HTML and CSS for a clean minimalistic look",
      "- Fine-tuned prompts of the AI model for optimized output formatting"
    ],
  },
  {
    date: 'April 2024',
    title: 'Medieval City Builder',
    skill: 'Java, JUnit',
    desc: 'City Builder Game',
    detail: [
      "- City builder game developed in Java using JFrame and OOP",
      "- Created a intuitive GUI using JFrame and JPanel with an interactive menu tab accessible through mouse inputs",
      "- Implemented log outputs and game save functionality using Json",
      "- Tested game functionality through the use of JUnit"
    ],
  },
  {
    date: 'June 2022',
    title: 'Gift Rush',
    skill: 'Python, Pygame',
    desc: 'Roguelike Puzzle Game',
    detail: [
      "- Roguelike puzzle game developed in Python using Pygame",
      "- Implemented a character with four movement directions, controllable using keyboard inputs",
      "- Created timed obstacles and interactive pickups"
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