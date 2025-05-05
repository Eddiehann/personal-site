'use client'

import React from 'react'
import Image from "next/image";
import { useState } from 'react';

const images = [
  {src: '/art/landscape.png', alignment: ''},
  {src: '/art/mockup.png', alignment: ''},
  {src: '/art/steven.png', alignment: ''},
  {src: '/art/eagle.gif', alignment: ''},
  {src: '/art/PAD.png', alignment: ''},
  {src: '/art/tree.png', alignment: ''},
  {src: '/art/village.png', alignment: 'object-top'},
  {src: '/art/terraria.png', alignment: ''},
]


export default function Gallery() {

  const [selectedImg, setSelectedImg] = useState(-1); {/* -1 is none */}

  return (
    <div className="grid gap-4 py-2 font-normal">

      <section className="font-semibold text-gray-100 text-2xl sm:text-3xl sm:py-2">
        Gallery
      </section>
      
      <div className="grid gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {images.map((image, i) => (

            <section 
              key={i} 
              className="relative aspect-square overflow-hidden"
              onClick={() => setSelectedImg(i)}>
              
              <Image
                  src={image.src}
                  alt="image"
                  fill
                  unoptimized
                  className={`${"object-cover image-pixel"} ${image.alignment}`}
                />
            </section>
          ))}
        </div>
      </div>

      {/* fullscreen overlay */}
      {selectedImg !== -1 && (
        <div
          className="fixed inset-0 z-10 bg-black/80 flex items-center justify-center"
          onClick={() => setSelectedImg(-1)}> {/* set to -1 if already selected */}
          <div className="relative sm:w-[70vw] sm:h-[70vh] w-full h-full ">
            <Image
              src={images[selectedImg].src}
              alt="full screen image"
              fill
              unoptimized
              className="object-contain"
            />
          </div>
        </div> 
      )}
    </div> 
  )
}