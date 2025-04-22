import './globals.css'
import React, { ReactNode } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Next.js',
  description: '',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="
          grid grid-rows-[32px_1fr_32px] 
          items-center justify-items-center 
          min-h-screen gap-16 pt-8 pb-8 
          font-sans">
            
            <header className="
              flex flex-row row-start-1 
              items-center outline">
              <Navbar />
            </header>

            <main>{children}</main>

            <footer className="
              flex flex-row row-start-3
              items-center outline">
              <Footer />
            </footer>
        </div>        
      </body>
    </html>
  )
}