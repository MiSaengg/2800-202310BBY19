"use client"
// import { getMainThreadById } from "@/lib/prisma/mainThreads";
import React, {useEffect, useState} from 'react';
import { ArcherContainer, ArcherElement } from "react-archer";
import MainThread from './mainThread';
import Modal from '@/app/components/modal/Modal';
import BranchThreadBox from '@/app/components/box/branchTreadBox';
import ProfileCardInfo from '@/app/components/card/profileCardInfo';

// async function getMainThreadByIds(threadId){
//   const { thread } = await getMainThreadById(threadId)
//   if(!thread){
//     throw new Error('failed to fetch data')
//   }
//   return thread
// }

export default function Page({ params }) {    

  const [textAreaNo, setTextAreaNo] = useState(0);
  const [branchThread , setBranchThread] = useState([]);
  const [pilot, setPilot] = useState("");
  const [title, setTitle] = useState("");
  

  let arrayThing = [
    {
      targetId : "element0",                    
      sourceAnchor: "bottom",
      targetAnchor : "top",
      style: {strokeDasharray:'5,5'},
    },
    {
      targetId : "element1",                    
      sourceAnchor: "bottom",
      targetAnchor : "top",
      style: {strokeDasharray:'5,5'},
    },
    {
      targetId : "element2",                    
      sourceAnchor: "bottom",
      targetAnchor : "top",
      style: {strokeDasharray:'5,5'},
    },
  ];

  useEffect(() => {
    const endpoint = `/api/threads/${params.threadId}`
      
    fetch(endpoint, {
      method: 'GET'      
    })
      .then(res => res.json())
      .then(({ mainThread }) => {
        const data = mainThread.phaseStage
        var values = Object.values(data)          
        setBranchThread(values)                
        setPilot(mainThread.pilot)
        setTitle(mainThread.title)
        
      })
  }, [])

  return (
      <>
        <h3>{title}</h3>
        <div style={{display: "flex", flexDirection:"column", justifyContent: "space-evenly", width: "100%" , textAlign:"center" ,alignItems:"center",padding:"4px"}}>                  
        <ArcherContainer strokeColor="black">     
            
              <ArcherElement
                id="root"
                relations={arrayThing}
                > 
                  <div style={{display:"flex",flexDirection:"row", width:"100%"}}>
                    <div style={{border: "grey solid 2px", borderRadius: "10px", padding: "5px" , width:"60%"}}>{pilot}</div>
                    <ProfileCardInfo threadId={123} genre={"some"} penName={"some"} mainCharacter={"some"}/>
                  </div>
                  {/* <MainThread threadId={params.threadId} pilot={pilot}/> */}
                                            
              </ArcherElement>
              
              <Modal mainThreadId={params}/>    

            <div style={{display: "flex", height: "150px" ,justifyContent: "space-evenly", textAlign:"center"}}>              
                {branchThread.map((a,i) => (                                    
                  <ArcherElement
                  id={"element" + i}
                  >
                    <div className="flex items-center justify-center bg-gray-100">
                      <div className="w-full max-w-xs border border-black p-4 rounded-md relative">
                        <label className="block">
                          <span className="text-gray-700">
                            {a.body}
                          </span>
                        </label>
                        <div className="absolute bottom-2 left-2">
                          <select className="border rounded-md bg-white p-1">
                            <option value="delete">Merge</option>
                            <option value="delete">Merge</option>
                            <option value="accepted">Delete</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </ArcherElement>              
              ))}                                                           
              </div>                
        </ArcherContainer>
      </div>
    </>
  )
}