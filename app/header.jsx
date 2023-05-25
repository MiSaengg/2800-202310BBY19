"use client";

import { useState } from "react";
import LoginButton from "./components/auth/SignInButton";
import Image from "next/image";
import EasterEggPop from "./components/EasterEggTrigger/EasterEggPop";

const Header = () => {
  const headerColor = "stone-100";
  const [noelVisible, setNoelVisible] = useState(true);
  const handleNoelClick = () => {};
  return (
    <header className={`bg-${headerColor} py-1 px-2`}>
      <nav className="container flex items-center text-sm font-mono tracking-wider uppercase text-stone-500">
        <div className="flex items-center">
          <a href="/threads">
            <Image src="/samLogo3.png" alt="SAM logo" width={97} height={83} />
          </a>
          {noelVisible && (
            <EasterEggPop>
              <button
                className={`bg-${headerColor} ml-10 hover:bg-gray-300 py-1 px-2 rounded-md`}
                onClick={handleNoelClick}
              >
                ㅤ
              </button>
            </EasterEggPop>
          )}
        </div>
        <ul className="ml-auto">
          <li>
            <LoginButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
