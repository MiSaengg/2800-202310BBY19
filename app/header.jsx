'use client'

import Link from 'next/link'
import LoginButton from './components/auth/SignInButton'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='bg-stone-100 py-10'>
      <nav className='container flex items-center text-sm font-medium tracking-wider uppercase text-stone-500 bg-[#1b2a33]'>
      <Image src="/SAM_Logo_Final.png" alt='logo' width={97} height={93}/>
        {/* <ul className='ml-auto flex justify-center gap-8'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/users'>Books</Link>
          </li>
        </ul> */}
        <ul className='ml-auto'>
          <li>
            <LoginButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header