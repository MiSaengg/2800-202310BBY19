"use client";
import { useSession } from "next-auth/react";
import {
  HomeIcon,
  PlusCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function Footer() {
  const { data: session } = useSession();

  const [userId, setUserId] = useState(null);

  // UseEffect for fetching user data
  useEffect(() => {
    const userID = localStorage.getItem("userID");
    setUserId(userID);
  }, [userId]);

  if (session) {
    return (
      <footer className="z-10 bg-stone-100 py-4 text-center">
        <div className="flex items-center justify-between mx-10">
          <a
            href="/threads"
            className="text-stone-500 hover:text-stone-800 transition-colors"
          >
            <HomeIcon className="w-9" />
            <span className="uppercase font-mono text-xs">Home</span>
          </a>
          <a
            href="/createMainThread"
            className="text-stone-500 hover:text-stone-800 transition-colors"
          >
            <PlusCircleIcon className="w-9" />
            <span className="uppercase font-mono text-xs">Create</span>
          </a>
          <a
            href={`/profile`}
            className="text-stone-500 hover:text-stone-800 transition-colors"
          >
            <UserIcon className="w-9" />
            <span className="uppercase font-mono text-xs">Profile</span>
          </a>
        </div>
      </footer>
    );
  }

  return;
}
