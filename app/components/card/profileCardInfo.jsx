"use client"
import Image from 'next/image';
import React from 'react';
import {useEffect, useState} from 'react';

const ProfileCardInfo = ({ genre, userId, mainCharacter }) => {
  const [user , setUser] = useState({});
  
  
useEffect(()=> {
  const endpoint = `/api/user/${userId}`

  fetch(endpoint, {
    method:"GET"
  }).then(
    (res) => res.json()
  ).then(
    ({user}) => {
      setUser(user)            
    }
  )
  },[])

return (

<div className="rounded-3xl overflow-hidden shadow-xl max-w-xs bg-white mx-auto flex flex-col items-center h-40"
style={{ width:"35%", position: 'relative' }}
>
<Image src="/sf2.png"
    width={100}
    height={200}
    alt="bookCover"
  className="w-full"/>
<div className="flex justify-center -mt-8">
<Image src={user.image} alt="user profile photo" width={50} height={100} className="rounded-full border-solid border-white border-2 " />
</div>
  <div className="text-center px-2 pb-2 pt-2">
    <h3 className="text-black text-sm font-bold font-sans">{user.penName}</h3>
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

