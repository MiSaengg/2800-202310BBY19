import Image from 'next/image';
import {useState, useEffect } from 'react';


const SimpleProfileCardInfo = ({userId}) => {
    const [userImg , setUserImg] = useState("");
    const [penName, setPenName] = useState("");
    

    useEffect(()=> {
    const endpoint = `/api/users/${userId}`

    fetch(endpoint, {
      method:"GET"
    }).then(
      res => res.json()
    ).then(
      ({user}) => {
        setUserImg(user.image)
        setPenName(user.penName)
      }
    )
    })
  
return (
<div className="rounded-3xl overflow-hidden shadow-xl max-w-[120px] my-3 bg-white mx-auto flex flex-col items-center"                  
                    style={{ transform: 'scale(0.9)' }}>
  <Image src={userImg}  
      width={400}
      height={300}
    className="w-full"/>
  <div className="text-center px-3 pb-6 pt-2">
    <h3 className="text-black text-sm font-bold font-sans">{penName}</h3>
  </div>  
  <div className="flex justify-center pb-3 text-black">


  </div>
</div>
);
};

export default SimpleProfileCardInfo;

