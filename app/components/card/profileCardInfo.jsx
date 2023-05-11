import Image from 'next/image';
import React from 'react';

const ProfileCardInfo = ({threadId, genre,  penName, mainCharacter}) => {

const id = threadId;

return (

<div className="rounded-3xl overflow-hidden shadow-xl max-w-xs bg-white mx-auto flex flex-col items-center h-40"
style={{ width:"35%", position: 'relative' }}
>
<Image src="/sf2.png" alt="genre"  
    width={100}
    height={200}
  className="w-full"/>
<div className="flex justify-center -mt-8">
<Image src="https://dummyimage.com/300x300/000/fff" alt="user profile photo" width={50} height={100} className="rounded-full border-solid border-white border-2 " />
</div>
  <div className="text-center px-2 pb-2 pt-2">
    <h3 className="text-black text-sm font-bold font-sans">{penName}</h3>
  </div>
  <div className="flex flex-col justify-center pb-2 text-black" style={{position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bold'}}>
    <div className="text-center mb-0.1" style={{fontSize: '0.9em'}}>
      <span className="font-bold">{genre}</span>
    </div>
    
    <div className="text-center" style={{fontSize: '0.9em'}}>
      <span className="font-bold">{mainCharacter}</span>
      <span className="font-bold1" style={{fontSize: '0.8em'}}> characters</span>
    </div>
  </div>
</div>
);
};

export default ProfileCardInfo;

