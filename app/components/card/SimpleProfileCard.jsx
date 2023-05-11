import Image from 'next/image';
import {useState, useEffect } from 'react';
import Button from '../button/Button';

const SimpleProfileCardInfo = ({userId , branchText , branchThreadIdParam , mainThreadIdParam}) => {
    const [userImg , setUserImg] = useState("");
    const [penName, setPenName] = useState("");
    const [showModal, setShowModal] = useState(false);
    

    const clickBranchCard = (e) => {
      e.preventDefault()

      setShowModal(true)
    }

    const closeModalEvent = (e) => {
      e.preventDefault()
  
      setShowModal(false)
  }

  const mergeBranchThreadToMainThread = async (e) => {
    e.preventDefault()

    const data = {
      mainThreadId : mainThreadIdParam,
      branchThreadId : branchThreadIdParam
    }
    
    console.log(data)

    const JSONdata = JSON.stringify(data);

    const endpoint = "/api/threads/mergeThread"

    const options = {
        method: 'POST',
        headers : {
          'Content-Type' : 'application/json',
        },
        body : JSONdata,
    };
  
    const response = await fetch(endpoint, options);


    const {updateMainThread, error} = await response.json();

  if(!error){
      setShowModal(false)
  }
    
    
  }

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
  <>
  <div className="rounded-3xl overflow-hidden shadow-xl max-w-[120px] my-3 bg-white mx-auto flex flex-col items-center"                  
                      style={{ transform: 'scale(0.9)' }} onClick={clickBranchCard}>
    <Image src={userImg}  
        width={400}
        height={300}
        alt='userImg'
      className="w-full"/>
    <div className="text-center px-3 pb-6 pt-2">
      <h3 className="text-black text-sm font-bold font-sans">{penName}</h3>
    </div>  
    <div className="flex justify-center pb-3 text-black">


    </div>
  </div>
  { showModal ? (
    <div tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto max-h-full">
        <div className="relative max-w-full max-h-full">            
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">                
                <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-mono text-gray-900 dark:text-white">
                        Title
                    </h3>
                    <button onClick={closeModalEvent} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
                </div>

                <div className="p-6 space-y-6">
                    <p className="text-base font-mono text-gray-700 dark:text-gray-400">
                    Branch Story</p>
                </div>
                <form onSubmit={mergeBranchThreadToMainThread}>
                  
                    <label htmlFor="text-input" className="block mb-3 text-md font-mono text-gray-900 dark:text-white">
                        <textarea name="branchContext" id="text-input" rows="15" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{branchText}</textarea>
                    </label>

                  <div className="flex items-stretch justify-between px-5 pt-1 pb-3 border-gray-200 rounded-b dark:border-gray-600">                   
                  {/* Vote Button and MergeButton */}
                    <Button type="submit" text="Merge"/>
                  </div>
                </form>
                
                
            </div>
        </div>
    </div>
     ) : null} 
</>
);
};

export default SimpleProfileCardInfo;

