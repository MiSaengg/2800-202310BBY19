import React from "react";
import Image from "next/image";

const LReadTextBox = ({ body, image }) => {
  return (
    <div className="w-full px-0 flex flex-col justify-between">
      <div className="flex flex-col mt-2">
        <div className="flex justify-start mb-0 ml-3 mr-3 flex-row-reverse">
          <Image
            src={image}
            width={500}
            height={500}
            alt="ProfilePhoto"
            objectFit="contain"
            className="object-cover h-20 w-20 mt-14 rounded-lg ml-10"
          />
          <div
            className="py-3 px-4 text-black border border-gray-500 bg-white rounded-bl-3xl rounded-tl-3xl rounded-tr-xl"
            style={{ paddingRight: "2px" }}
          >
            {body}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LReadTextBox;
