"use client"
// import { getMainThreadById } from "@/lib/prisma/mainThreads";
import React, {useEffect, useState} from 'react';
import { ArcherContainer, ArcherElement } from "react-archer";
import MainThread from './mainThread';
import Modal from '@/app/components/modal/Modal';

// async function getMainThreadByIds(threadId){
//   const { thread } = await getMainThreadById(threadId)
//   if(!thread){
//     throw new Error('failed to fetch data')
//   }
//   return thread
// }

export default function Page({ params }) {    

  const [textAreaNo, setTextAreaNo] = useState(0);
  // const [uploadNo , setUploadNo] = useState(0);
  // const [arrowNo, setArrowNo] = useState(0);
  const [pilot, setPilot] = useState("");
  const [title, setTitle] = useState("");
  // const [hidden, setHidden] = useState("hidden")

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

  const createBranchThreadWithModal = (e) => {
    e.preventDefault();

    // showing the modal in this function.
    // setHidden("")


    
    
    setTextAreaNo(textAreaNo+1)
  }



  useEffect(() => {
    const endpoint = `/api/threads/${params.threadId}`
      
    fetch(endpoint, {
      method: 'GET'      
    })
      .then(res => res.json())
      .then(({ mainThread }) => {
        setPilot(mainThread.pilot)
        setTitle(mainThread.title)
      })
  }, [])

  return (
      <>
       <div style={{display: "flex", flexDirection:"column", justifyContent: "space-evenly", width: "50%" , textAlign:"center" ,alignItems:"center"}}>                  
       <h3>{title}</h3>
        <ArcherContainer strokeColor="red">        
              <ArcherElement
                id="root"
                relations={arrayThing}
                > 
                <div>
                  <MainThread threadId={params.threadId} pilot={pilot}/>
                </div>                                 
              </ArcherElement>
            
            
              <Modal/>              
            
            <div style={{display: "flex", justifyContent: "space-evenly", textAlign:"center"}}>
              {[...Array(textAreaNo)].map((a, i) => (
                <ArcherElement
                id={"element" + i}
                >
                  {/* This Componenent should be replace to branchComponent */}
                  <div>element2</div>
                </ArcherElement>              
              ))}                            
              </div>                
        </ArcherContainer>
      </div>
    </>
  )
}