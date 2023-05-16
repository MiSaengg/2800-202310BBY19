"use client"
import { Inter } from "next/font/google";
import Typewriter from 'typewriter-effect';
const inter = Inter({ subsets: ["latin"] });
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession()
  const router = useRouter();

  if(!session) {
  return (
    <section>
      <div
      className="relative overflow-hidden bg-no-repeat bg-cover"
      style={{
        backgroundPosition: "50%",
        backgroundImage: "url('/typeWriter.jpg')",
        height: "500px"
      }}
    >      
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}
      >
        <div className="flex justify-center items-center h-full">
        <div className="absolute top-20 right-0 bottom-0 left-0 text-center text-white px-6 md:px-12">
            <span className="text-xl">Stories A Million</span>
          </div>
          <div className="absolute top-15 right-0 bottom-0 left-0 text-center text-white px-6 md:px-12">
            <h5 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
              Write your stories with 
              <Typewriter 
                options={{
                  strings: ['Collaborators' , 'AI support'],
                  autoStart: true,
                  loop:true,
                }}
              />
            </h5>            
          </div>
        </div>
      </div>
    </div>
    <svg class="animate-bounce w-6 h-6">
  
    </svg>
    </section>
    
  );}

  return (    
      router.push("/threads")    
  )
  
}
