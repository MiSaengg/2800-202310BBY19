  "use client";

import React, { use, useEffect, useState } from "react";
import StoryCard from "./../../components/card/StoryCard";
import Link from "next/link";
import PenNameCard from "@/app/components/card/PenNameCard";
import Image from "next/image";
50

export default function Page() {
  const [mainThreadMapping, setMainThreadMapping] = useState([]);
  // const [searchParam, setSearchParam] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(""); 
  const [selectedTag, setSelectedTag] = useState("");
  const [user, setUser] = useState(null);

      
    //Get Method -> query? & Post Method
    
    useEffect(() => {
      
      const endpoint = `/api/threads/mainThread`;  

      fetch(endpoint, {
        method: "GET",
      })
      .then((res) => res.json())
      .then(({ randomMainThreads }) => {
        setMainThreadMapping(randomMainThreads);
      });
    }, []);
  
  
  
  const handleSearchSubmit = (event) => {    
    event.preventDefault();
    
    const endpoint = `/api/threads/mainThread?search=${event.target.searchParam.value}&genre=${selectedGenre}&tag=${selectedTag}`;  
    
    fetch(endpoint, {
      method: "GET",
    })
    .then((res) => res.json())
    .then(({ randomMainThreads }) => {
      setMainThreadMapping(randomMainThreads);
    });
  }
    const handleGenreChange = (event) => {
      setSelectedGenre(event.target.value);
  };
  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };
  
  const handleRefreshChange = (event) => {
    event.preventDefault();
    const endpoint = `/api/threads/mainThread`;
    fetch(endpoint, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ randomMainThreads }) => {
        setMainThreadMapping(randomMainThreads);
      });

  };

  return (
    <div>
      <div>
      <form onSubmit={handleSearchSubmit}>
      <div className="relative mx-2 mt-2">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type ="search" name="searchParam" placeholder="Search by Title" className="block w-full font-mono p-4 pl-10 text-sm text-stone-500 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"/>
        <button type="submit" className="px-4 py-2 absolute right-2.5 bottom-2.5 text-gray-900 bg-gray-200 font-mono rounded-lg text-sm">Search</button>
      </div>
          <select value={selectedGenre} onChange={handleGenreChange} className="p-2.5 mx-2 font-mono border border-gray-300 bg-gray-50 text-gray-900 text-sm border border-gray-300 rounded-lg focus:outline-none">
           <option value="">All Genres</option>
           <option value="thriller">Thriller</option>
            <option value="fantasy">Fantasy</option>
            <option value="history">History</option>
            <option value="horror">Horror</option>
            <option value="crime">Crime</option>
            <option value="romance">Romance</option>
            <option value="psychology">Psychology</option>
            <option value="sports">Sports</option>
            <option value="travel">Travel</option>
          </select>
          <select value={selectedTag} onChange={handleTagChange} className="p-2.5 m-2 font-mono border border-gray-300 bg-gray-50 text-gray-900 text-sm border border-gray-300 rounded-lg focus:outline-none">
            <option value="">All Tags</option>
            <option value="Complete">Complete</option>
            <option value="Incomplete">Incomplete</option>
        </select>
        </form>
      </div>
      <div className="grid gird-rows-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 mx-2 mt-1">
      {mainThreadMapping.map((item, index) => (
            <Link href={`/threads/${item.id}`} key={index}>

            <div className="sm:h-60 overflow-hidden curor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
              <Image className="object-cover" src="/image01.jpg" alt="nature" width={200} height={50} />
              <span className="absolute top-4 right-2 text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right">
                {item.tag}
              </span>
            
            <div className="m-2">
              <h2 className="text-lg">{item.title}</h2>
              <h3 className="text-md">{item.genre}</h3>
              <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
                <PenNameCard mainThreadOwnerId={item.userId}/>                
              </p>
            </div>

          </div>
          </Link>
      ))}
      </div>
    <button onClick={handleRefreshChange} className="button float-right fixed bottom-28 right-2.5 z-50 hover:opacity-25">
      <img src="/refresh.svg" alt="refresh" className="w-12 h-12 mr-2" />
    </button>
    </div>
  );
};  

