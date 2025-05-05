'use client'

import React from 'react'
import Image from "next/image";


export default function Hidden() {

  return (
    <div className="grid gap-8 py-2 font-normal">

      <section className="font-semibold text-gray-100 text-2xl sm:text-3xl sm:py-2">
        Hi baby!
      </section>
      
      <section className="relative w-70 h-70 overflow-hidden">
        <Image
          src="/hidden.gif"
          alt="image"
          fill
          className="object-cover"
        />
      </section> 
    </div>
  )
}