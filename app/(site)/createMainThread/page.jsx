'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import Button from './../../components/button/Button'


export default function SubmitMainThread() {
  const router = useRouter();
  const [userId, setUserId] = useState(null)

  useEffect(()=> {
    const userID = localStorage.getItem("userID") 
    setUserId(userID)
  })
  
  const handleMainThreadSubmit = async (event) => {
    event.preventDefault();
    
    const data = {
      title : event.target.title.value,
      genre : [event.target.genre.value],
      mainCharacter : event.target.mainCharacter.value,
      pilot : event.target.pilot.value,
      content : {},
      phaseStage :{},
      tag: "Incomplete",
      likes : 0,
      phase : 1,
      userId : userId
    }

    const JSONdata = JSON.stringify(data);

    const endpoint = "api/threads/mainThread"

    const options = {
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSONdata,
    };

    const response = await fetch(endpoint, options);

    const {thread, error} = await response.json();
    
    if(!error){
      router.push(`/threads/${thread.id}`)
    }
  }

  return (
    <section>
      <div className='flex px-4 py-4'>
        <form onSubmit={handleMainThreadSubmit} className="w-full">

          <div className="">
            <div className="max-w-50 px-3 mb-6">
              <label className="pl-1 block uppercase tracking-wide text-gray-700 text-xs font-mono mb-2">
                Title
              </label>
              <input name="title" className="py-3 px-4 mb-2 appearance-none block w-full bg-gray-50 text-gray-700 border border-red-500 rounded leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Title of your story"/>
              <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>        
          </div>

          <div className="flex mb-6">    
            <div className="max-w-50 px-3">
              <label className="pl-1 mb-2 block uppercase tracking-wide text-gray-700 text-xs font-mono">
                Genre
              </label>

              <div className="relative">
                <select name="genre" className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>thriller</option>
                  <option>fantasy</option>
                  <option>history</option>
                  <option>horror</option>
                  <option>crime</option>
                  <option>romance</option>
                  <option>psychology</option>
                  <option>sports</option>
                  <option>travel</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
          </div>

          <div className="max-w-50 px-3">
              <label className="pl-1 mb-2 block uppercase text-gray-700 text-xs font-mono">
                Number of Characters
              </label>
              <input name="numberOfCharacters" className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" min="1" max="10" placeholder="10"/>
            </div>
          </div>
          
          <div className="w-full px-3">
            <label className="pl-1 mb-2 block uppercase tracking-wide text-xs font-mono text-gray-700">
              Main Thread
            </label>
            <textarea name="pilot" id="message" rows="15" className="mb-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
          </div>
          
          <div className="absolute right-3 px-3">
            < Button text="Upload" />
          </div>

        </form>
      </div>      
    </section>
  )
}