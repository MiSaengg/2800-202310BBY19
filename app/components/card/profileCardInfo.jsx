import Image from 'next/image';
import React from 'react';

const ProfileCardInfo = ({userid ,threadid, genre,  penName , mainCharacter ,}) => {
return (
<div className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-white mx-auto flex flex-col items-center"
style={{ transform: 'scale(0.4)' }}x
>
<Image src="https://dummyimage.com/500x300/000/fff"  
    width={500}
    height={300}
  className="w-full"/>
<div className="flex justify-center -mt-8">
<img src="https://dummyimage.com/500x300/000/fff" style={{ width: '30%' }} className="rounded-full border-solid border-white border-2 -mt-3" />
</div>
<div className="text-center px-3 pb-6 pt-2">
<h3 className="text-black text-sm font-bold font-sans">{userid}</h3>
</div>
<div className="flex justify-center pb-3 text-black">
<div className="text-center mr-3 border-r pr-3">
<h2 className="font-bold">Genre</h2>
<span className="font-bold">{genre}</span>
</div>
<div className="text-center">
<h2 className="font-bold">Main character</h2>
<span className="font-bold">{mainCharacter} people</span>
</div>
</div>
</div>
);
};

export default ProfileCardInfo;

