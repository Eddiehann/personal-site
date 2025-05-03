import React from 'react'
import Image from "next/image";

const experiences = () => {

  const sectionLayout=`
    grid gap-1 px-3
    border-l-2 border-gray-600
    transition ease-in-out duration-300`;

  return (
    <div className="grid gap-8 py-2 font-normal">

      <section className="font-semibold text-gray-100 text-2xl sm:text-3xl sm:py-2">
        Technical Experiences
      </section>

      <section className={sectionLayout}>
        <div className="font-normal text-sm">May 2024 - June 2024</div>
        <div className="font-semibold text-gray-300">ISD Department Intern</div>
        <div className="font-normal text-sm">Microsoft | Shanghai, China</div>

        <div className="py-2 text-gray-300">Applied prompt engineering to assess customer purchase intentions and identify product issues.
          Improved query output formatting to 80% accuracy using few-shot prompting.
          Designed a UI workflow and interactive dashboard in Figma,
          adopted by Microsoft&apos;s front-end team for Volvo China&apos;s sales use.</div> 

        <a
          className="flex gap-2 transition duration-200 ease-in-out 
            hover:translate-x-1 hover:text-gray-300"
          href="https://www.figma.com/proto/2hzGKfukwy5SZp2kDdTdWS/VOC-V1?node-id=2217-255&t=D5NnkOWiN40e3ySe-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/external.svg"
            alt="external icon"
            width={16}
            height={16}
          />
          <div className="">
            Interactive Dashboard
          </div>
        </a>

        {/* <div className="hidden sm:block">
          <Image
            src="/VOC.png"
            alt="VOC Dashboard"
            width={720}
            height={512}
          />
        </div> */}
      </section>

    </div> 
  )
}

export default experiences