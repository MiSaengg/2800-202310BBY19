import React from "react";
import Image from "next/image";

const RReadTextBox = ({ body, image, phase }) => {
  return (
    // <div className="w-full px-0 flex flex-col justify-between">
    //   <div className="flex flex-col mt-2">
    //     <div className="flex justify-start mb-0 ml-3">
    //         <div>
    //           <Image
    //             src={image}
    //             width={30}
    //             height={30}
    //             alt="ProfilePhoto"
    //             className="object-cover
    //             mt-14 rounded-lg mr-5"
    //           />
    //         </div>

    //       <div
    //         className="px-4 text-black border border-grey-500 bg-gray-100 rounded-bl-xl rounded-tl-xl w-96 min-h-fit"
    //         style={{ paddingRight: "2px" }}
    //       >
    //         {body}
    //       </div>

    //     </div>
    //   </div>
    // </div>

    <div class="ml-10 rounded-l-lg bg-white shadow-xl">
      <div class="flex flex-cols-2 border-b-2 leading-relaxed border-neutral-100 px-6 py-2">
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
      <div class="p-6">
        <p class="mb-4 text-base text-neutral-600">{body}</p>
      </div>
    </div>
  );
};

export default RReadTextBox;
