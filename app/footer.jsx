// Because we're using react thing in line 4.
'use client'
import { useSession } from 'next-auth/react'

const Footer = () => {
  const { data:session } = useSession()
  
  if(session){
    return (
      <footer className='z-10 bg-stone-300 py-4 text-center text-white'>
        <div className='container'>
          <p className='text-sm uppercase'>NextJS 13 Demo</p>
        </div>
      </footer>
    )
  }

  return;
}

export default Footer