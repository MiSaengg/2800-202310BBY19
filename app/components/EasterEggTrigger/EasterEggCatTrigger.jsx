import React from "react";
import Image from "next/image";

export default function EasterEggCatTrigger() {
  return (
    <div className="w-full center relative">
      <div className="nyan-cat1">
        <Image src="/nyancat.png" width={500} height={500} alt=":nyancat:" />
      </div>
      <div className="nyan-cat2">
        <Image src="/nyancat.png" width={500} height={500} alt=":nyancat:" />
      </div>
      <div className="nyan-cat3">
        <Image src="/nyancat.png" width={500} height={500} alt=":nyancat:" />
      </div>
      <div className="nyan-cat4">
        <Image src="/nyancat.png" width={500} height={500} alt=":nyancat:" />
      </div>
      <div className="nyan-cat5">
        <Image src="/nyancat.png" width={500} height={500} alt=":nyancat:" />
      </div>
      <div className="nyan-cat6">
        <Image src="/nyancat.png" width={500} height={500} alt=":nyancat:" />
      </div>
      <div className="nyan-cat7">
        <Image src="/nyancat.png" width={500} height={500} alt=":nyancat:" />
      </div>
      <Image src="/catjamled.gif" width={500} height={500} alt=":catjam:" />
      <Image src="/catjamled.gif" width={500} height={500} alt=":catjam:" />
      <Image src="/catjamled.gif" width={500} height={500} alt=":catjam:" />

      <style jsx>{`
        .center.relative {
          position: relative;
        }

        .nyan-cat1 {
          position: absolute;
          top: 10%;
          left: 0;
          animation: nyanAnimation 3s linear infinite;
        }

        .nyan-cat2 {
          position: absolute;
          top: 20%;
          left: 0;
          animation: nyanAnimation 2s linear infinite;
        }

        .nyan-cat2fast {
          position: absolute;
          top: 20%;
          left: 0;
          animation: nyanAnimation 3s linear infinite;
        }

        .nyan-cat3 {
          position: absolute;
          top: 30%;
          left: 0;
          animation: nyanAnimation 4s linear infinite;
        }

        .nyan-cat4 {
          position: absolute;
          top: 40%;
          left: 0;
          animation: nyanAnimation 3s linear infinite;
        }

        .nyan-cat5 {
          position: absolute;
          top: 50%;
          left: 0;
          animation: nyanAnimation 4.5s linear infinite;
        }

        .nyan-cat6 {
          position: absolute;
          top: 60%;
          left: 0;
          animation: nyanAnimation 2s linear infinite;
        }

        .nyan-cat7 {
          position: absolute;
          top: 70%;
          left: 0;
          animation: nyanAnimation 3.5s linear infinite;
        }

        @keyframes nyanAnimation {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100vw);
          }
        }
      `}</style>
    </div>
  );
}
