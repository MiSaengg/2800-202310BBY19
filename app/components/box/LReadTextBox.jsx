import React from "react";
import Image from "next/image";

const LReadTextBox = ({ body, image }) => {
  return (
    <div className="w-full px-0 flex flex-col justify-between">
      <div className="flex flex-col mt-2">
        <div className="flex justify-start mb-0 mr-2 flex-row-reverse">
          <div>
            <Image
              src={image}
              width={30}
              height={30}
              alt="ProfilePhoto"            
              className="object-cover mt-14 rounded-lg ml-5"
            />
          </div>
          <div
            className="px-4 text-black border border-grey-500 bg-gray-100 rounded-tr-xl rounded-br-xl w-96 min-h-fit"
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