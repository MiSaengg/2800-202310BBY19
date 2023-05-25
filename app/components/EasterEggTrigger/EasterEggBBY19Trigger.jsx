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
        src={"/nineteenbby.gif"}
        width={500}
        height={500}
        alt={"TEAM PHOTO"}
      />
      <p>
        <ul>
          <li>
            <b>Team Lead</b>: Jasper Oh
          </li>
          <li>
            <b>Full Stack</b>: Juan Chung
          </li>
          <li>
            <b>Full Stack</b>: Noel Kim
          </li>
          <li>
            <b>Full Stack</b>: David Cho
          </li>
          <li>
            <b>Graphic Designer</b>: Alisha Seo
          </li>
          <li>
            <b>Best Client</b>: Maryam Khezrzadeh
          </li>
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
