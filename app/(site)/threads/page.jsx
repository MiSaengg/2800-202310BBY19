"use client";

import React, { useEffect, useState } from "react";
import StoryCard from "./../../components/card/StoryCard";
import Link from "next/link";

export default function Page() {
  const [mainThreadMapping, setMainThreadMapping] = useState([]);
  // const [searchParam, setSearchParam] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(""); 
  const [selectedTag, setSelectedTag] = useState("");

    
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
  
  return (
    <div>
      <div>
      <form onSubmit={handleSearchSubmit}>
          <input 
          type ="text" 
          name="searchParam" 
          placeholder="Search by Title"                                              
          />  
          <select value={selectedGenre} onChange={handleGenreChange}>
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
          <select value={selectedTag} onChange={handleTagChange}>
          <option value="">All Tags</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      
          <button type ="submit">Search</button>
        </form>
      </div>
      {mainThreadMapping.map((item, index) => (
        <Link href={`/threads/${item.id}`} key={index}>
          <div className="card m-2 curor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
            <img className="object-fill" src="/image01.jpg" alt="nature" />
            <span className="absolute top-4 right-2 text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right">
              {item.tag}
            </span>
            
            <div className="m-2">
              <h2 className="text-lg">{item.title}</h2>
              <h3 className="text-md mb-1">{item.genre}</h3>
              <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
                {item.pilot}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
  
  // const displayTurtles = turtles.map((turtle, index) =>
  // <div key={turtle.name + index}>
  //     <h1>{turtle.name} ({turtle.nickName})</h1>
  //     <p>Weapon of choice: {turtle.weapon}</p>
  //     <img src={turtle.imgUrl} alt={`${turtle.name}`} width="200"/>
  //     <hr/>
  // </div>

  // return (
  //   <section>
  //       <div>
  //         {mainThread.map(item => (
  //           <StoryCard threadId={params.threadId} title={title} pilot={pilot} genre={genre} tag={tag} />
  //         ))}
  //       </div>
  //   </section>
  // )

