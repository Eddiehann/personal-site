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
        <div className="flex items-center justify-center py-8">
          <div className="
            grid grid-rows-[32px_1fr_32px]
            max-w-screen-md w-full min-h-[calc(100vh-4rem)] 
            bg-gray-950 rounded-2xl gap-4 p-8 
            divide-y-2 divide-gray-600
            font-bold text-gray-600 text-sm">
              
              <header className="
                row-start-1 flex flex-row items-center pb-[6px]">
                <Navbar />
              </header>

              <main className ="
                row-start-2 justify-self-start w-full text-gray-300">
                  {children}
              </main>

              <footer className="
                row-start-3 flex flex-row items-center svg">
                <Footer />
              </footer>
          </div>  
        </div>      
      </body>
    </html>
  )
}