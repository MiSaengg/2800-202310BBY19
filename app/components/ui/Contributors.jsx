import Image from "next/image"

export default function Contributors({mainUserImage ,contributorsImg}) {  
  return (
      
      <div className="flex flex-col border-black-500 w-full p-1 rounded-lg m-1">      
        <div className="text-sm">Contributors</div>
        <div className="flex flex-row justify-between">
        <div className="rounded-full border-2 border-yellow-500">
          <Image className="rounded-full" src={mainUserImage} alt="ownerImage" width={25} height={25}/>
        </div>
        {contributorsImg.map((k,i) => (        
          <div className="rounded-full" key={i}>
            <Image className="rounded-full" src={k.image} alt="ownerImage" width={25} height={25} key={i}/>
          </div>
        ))}
        </div>
      </div>
    
  )
}
