import React from "react";
import Image from "next/image";
export default function EasterEggBBY19Trigger() {
  return (
    <div>
      <p className="text-base text-center font-mono text-black-700">
        BBY-19's Developer Team
      </p>
      <div className="fireworks">
        <Image src="/fireworks.gif" width={500} height={500} alt="fireworks" />
      </div>
      <Image
        src={"/bbynineteen.gif"}
        width={500}
        height={500}
        alt={"TEAM PHOTO"}
      />
      <p>
        <ul>
          <li>Team Lead: Jasper Oh</li>
          <li>QA Lead: Juan Chung</li>
          <li>Frontend: Noel Kim</li>
          <li>Backend: David Cho</li>
          <li>Design Lead: Alisha Seo</li>
        </ul>
      </p>

      <style jsx>{`
        .center.relative {
          position: relative;
        }

        .fireworks {
          position: absolute;
          top: 20%;
        }
      `}</style>
    </div>
  );
}
