"use client"
// import { getMainThreadById } from "@/lib/prisma/mainThreads";
import React, {useEffect, useState} from 'react';
import { ArcherContainer, ArcherElement } from "react-archer";
import MainThread from './mainThread';
import Modal from '@/app/components/modal/Modal';
import SimpleProfileCardInfo from '@/app/components/card/SimpleProfileCard';
import ProfileCardInfo from '@/app/components/card/profileCardInfo';
import Image from 'next/image';

// async function getMainThreadByIds(threadId){
//   const { thread } = await getMainThreadById(threadId)
//   if(!thread){
//     throw new Error('failed to fetch data')
//   }
//   return thread
// }

export default function Page({ params }) {    
    
  const [branchThread , setBranchThread] = useState([]);
  const [pilot, setPilot] = useState("");
  const [title, setTitle] = useState("");
  const [phase, setPhase] = useState("");
  

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

  // const getUserIdByBranchThreadUserId = (id) =>{
  //   const endpoint = `/api/users/${id}`

  //   fetch(endpoint, {
  //     method:"GET"
  //   }).then(
  //     res => res.json()
  //   ).then(
  //     ({user}) => {
  //       console.log(user)
  //     }
  //   )
  // }


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
        setPhase(mainThread.phase)
      })
  }, [])

  return (
    <>
       <h3 style={{ textAlign: "center" }}>{title}</h3>
    <div style={{display: "flex", flexDirection:"column", justifyContent: "center", width: "100%" , textAlign:"center" ,alignItems:"center",padding:"4px"}}>                  
    <ArcherContainer strokeColor="black">     
          
            <ArcherElement
              id="root"
              relations={arrayThing}
              > 
                <div style={{display:"flex",flexDirection:"row", width:"100%"}}>
                  <div style={{border: "grey solid 2px", borderRadius: "10px", padding: "5px" , width:"60%"}}>{pilot}</div>
                  <ProfileCardInfo threadId={123} genre={"genreeeeeee"} penName={"pennnn"} mainCharacter={"3"}/>
                </div>
                {/* <MainThread threadId={params.threadId} pilot={pilot}/> */}
                                          
            </ArcherElement>
          {/*  */}
            <div style={{backgroundColor : "black" , color:"white",marginTop :4, position: "relative", zIndex: 10}}>
              <h2>phase{phase}</h2>
            </div>
            <Modal mainThreadId={params}/>    
  
          <div style={{display: "flex", height: "150px" ,justifyContent: "space-evenly", textAlign:"center"}}>              
              {branchThread.map((a,i) => (                                    
                <ArcherElement
                id={"element" + i}
                >
                  <div>
                      <SimpleProfileCardInfo userId={a.userId}/>
                    </div>                  
                  </ArcherElement>              
              ))}                                                           
              </div>                
        </ArcherContainer>
      </div>
    </>
  )
}