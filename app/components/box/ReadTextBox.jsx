import React from 'react';
import Image from 'next/image';

const ReadTextBox = ({ userid, threadid, genre, penName, mainCharacter }) => {
  return (
    <div className="w-full px-5 flex flex-col justify-between">
      <div className="flex flex-col mt-5">
        <div className="flex justify-end mb-4">
          <div
            className="mr-2 py-3 px-4 bg-white-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
          >
            first story wrote by user 1 first story wrote by user 1 first story wrote by user 1 first story wrote by user 1 first story wrote by user 1 first story wrote by user 1 first story wrote by user 1 first story wrote by user 1 first story wrote by user 1 first story wrote by user 1 first story wrote by user 1 first story wrote by user 1 first story wrote by user 1 first story wrote by user 1 first story wrote by user 1
          </div>
          <Image src="https://dummyimage.com/500x300/000/fff"
          width={500}
          height={300}
            className="object-cover h-8 w-8 rounded-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ReadTextBox;