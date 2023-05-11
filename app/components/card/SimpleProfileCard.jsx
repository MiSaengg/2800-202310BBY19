import Image from 'next/image';
import React from 'react';

const ProfileCardInfo = ({userid ,threadid, genre,  penName , mainCharacter ,}) => {
return (
<div className="rounded-3xl overflow-hidden shadow-xl max-w-[120px] my-3 bg-white mx-auto flex flex-col items-center"
// max-w 너비 직접 컨트롤가능. 
style={{ transform: 'scale(0.9)' }}x
>
<Image src="https://dummyimage.com/600x400/000/fff"  
    width={400}
    height={300}
  className="w-full"/>
<div className="text-center px-3 pb-6 pt-2">
<h3 className="text-black text-sm font-bold font-sans">Noel KIM</h3>
</div>
<div className="flex justify-center pb-3 text-black">


</div>
</div>
);
};

export default ProfileCardInfo;

