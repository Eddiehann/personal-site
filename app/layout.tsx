import './globals.css'
import React, { ReactNode } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/next"


export const metadata = {
  title: 'Eddie Han',
  description: '',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="flex items-center justify-center py-6 font-sans">
          <div className="
            grid grid-rows-[auto_1fr_auto] w-full min-h-[calc(100vh-4rem)]
            bg-gray-950 rounded-2xl gap-8 px-12 
            font-semibold text-gray-300 text-base/7 sm:text-[17px]/8">
              
              <header className="
                row-start-1 items-center transition ease-in-out fade-down">
                <Navbar />
              </header>

              <main className="
                row-start-2 max-w-screen-sm w-full mx-auto 
                transition ease-in-out fade-up text-gray-400">
                  {children}
                  <Analytics />
              </main>

              <footer className="
                max-w-screen-sm w-full mx-auto justify-start row-start-3
                transition ease-in-out fade-up">
                <section className="font-light text-gray-400">
                  Find me through:
                </section>
                <Footer />
              </footer>
          </div>  
        </div>      
      </body>
    </html>
  )
}