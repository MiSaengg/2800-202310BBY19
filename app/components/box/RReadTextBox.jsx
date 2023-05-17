import React from "react";
import Image from "next/image";

const RReadTextBox = ({ body, image }) => {
  return (
    <div className="w-full px-0 flex flex-col justify-between">
      <div className="flex flex-col mt-2">
        <div className="flex justify-start mb-0 ml-3">
            <div>            
              <Image
                src={image}
                width={30}
                height={30}
                alt="ProfilePhoto"            
                className="object-cover
                mt-14 rounded-lg mr-5"
              />
            </div>
          
          <div
            className="px-4 text-black border border-grey-500 bg-gray-100 rounded-bl-xl rounded-tl-xl w-96 min-h-fit"
            style={{ paddingRight: "2px" }}
          >
            {body}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RReadTextBox;
