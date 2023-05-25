import React from "react";
import Image from "next/image";

const RReadTextBox = ({ body, image, phase }) => {
  return (
    <div className="ml-10 rounded-l-lg bg-white shadow-xl">
      <div className="flex flex-cols-2 border-b-2 leading-relaxed border-neutral-100 px-6 py-2">
        <div>
          <Image
            src={image}
            width={30}
            height={30}
            alt="ProfilePhoto"
            className="object-cover rounded-lg mr-10"
          />
        </div>
        Phase {phase}
      </div>
      <div className="p-6">
        <p className="mb-4 text-base text-neutral-600">{body}</p>
      </div>
    </div>
  );
};

export default RReadTextBox;
