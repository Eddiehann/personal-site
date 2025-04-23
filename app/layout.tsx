import './globals.css'
import React, { ReactNode } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Eddie Han',
  description: '',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex items-center justify-center py-6 font-sans">
          <div className="
            grid grid-rows-[auto_1fr_auto] w-full min-h-[calc(100vh-4rem)]
            bg-gray-950 rounded-2xl gap-8 px-12 
            font-semibold text-gray-300 text-base">
              
              <header className="
                row-start-1 flex flex-row items-center">
                <Navbar />
              </header>

              <main className="
                max-w-screen-sm flex w-full mx-auto justify-center items-start row-start-2 text-gray-400">
                  {children}
              </main>

              <footer className="
                max-w-screen-sm w-full mx-auto justify-start row-start-3">
                <div className="text-lg/8 font-light text-gray-400">
                  Find me through:
                </div>
                <Footer />
              </footer>
          </div>  
        </div>      
      </body>
    </html>
  )
}