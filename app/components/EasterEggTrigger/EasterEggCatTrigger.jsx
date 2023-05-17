import React from 'react';
import Image from 'next/image';

export default function EasterEggCatTrigger() {
  return (
    <div className="w-full center">
      <Image src="/catjamled.gif" width={500} height={500} alt=":catjam:" />
      <Image src="/catjamled.gif" width={500} height={500} alt=":catjam:" />
      <Image src="/catjamled.gif" width={500} height={500} alt=":catjam:" />
      <Image src="/catjamled.gif" width={500} height={500} alt=":catjam:" />
    </div>
  );
}
