import React from 'react'
import Image from "next/image";

const gallery = () => {
  return (
    <div className="grid gap-4 py-2 font-normal">

      <section className="font-semibold text-gray-100 text-2xl sm:text-3xl sm:py-2">
        Gallery
      </section>
      
      <div className="grid gap-4">
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative aspect-square overflow-hidden">
            <Image
                src="/art/eagle.gif"
                alt="image"
                fill
                unoptimized
                className="object-cover image-pixel"
              />
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image
                src="/art/mockup.png"
                alt="image"
                fill
                unoptimized
                className="object-cover image-pixel"
              />
          </div>
        </section>
        
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative aspect-square overflow-hidden">
            <Image
                src="/art/landscape.png"
                alt="image"
                fill
                unoptimized
                className="object-cover image-pixel"
              />
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image
                src="/art/village.png"
                alt="image"
                fill
                unoptimized
                className="object-cover image-pixel"
              />
          </div>
        </section>
        
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative aspect-square overflow-hidden">
            <Image
                src="/art/steven.png"
                alt="image"
                fill
                unoptimized
                className="object-cover image-pixel"
              />
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image
                src="/art/tree.png"
                alt="image"
                fill
                unoptimized
                className="object-cover image-pixel"
              />
          </div>
        </section>
        
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative aspect-square overflow-hidden">
            <Image
                src="/art/PAD.png"
                alt="image"
                fill
                unoptimized
                className="object-cover image-pixel"
              />
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image
                src="/art/krono.png"
                alt="image"
                fill
                unoptimized
                className="object-cover image-pixel"
              />
          </div>
        </section>
    </div>
    </div> 
  )
}

export default gallery