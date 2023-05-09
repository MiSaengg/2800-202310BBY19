// Because we're using react thing in line 4.
"use client";
import { useSession } from "next-auth/react";
import Link from 'next/link';
import { HomeIcon, PlusCircleIcon, UserIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <footer className="z-10 bg-stone-300 py-4 text-center text-white">
        <div className="container flex items-center justify-between mx-10">
          <Link
            href="/"
            className="text-stone-500 hover:text-stone-800 transition-colors"
          >
            <HomeIcon className="w-10" />
            <span className="uppercase font-medium text-sm">Home</span>
          </Link>
          <Link
            href="/"
            className="text-stone-500 hover:text-stone-800 transition-colors"
          >
            <PlusCircleIcon className="w-10" />
            <span className="uppercase font-medium text-sm">START</span>
          </Link>
          <Link
            href="/"
            className="text-stone-500 hover:text-stone-800 transition-colors"
          >
            <UserIcon className="w-10" />
            <span className="uppercase font-medium text-sm">Profile</span>
          </Link>
        </div>
      </footer>
    );
  }

  return;
};

export default Footer;
