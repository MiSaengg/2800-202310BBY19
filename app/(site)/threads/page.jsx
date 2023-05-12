"use client";

import React, { useEffect, useState } from "react";
import StoryCard from "./../../components/card/StoryCard";

export default function Page() {
  const [mainThreadMapping, setMainThreadMapping] = useState([]);

  useEffect(() => {
    const endpoint = `/api/threads/mainThread?random=true`;

    fetch(endpoint, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ randomMainThreads }) => {
        setMainThreadMapping(randomMainThreads);
      });
  }, []);

  //   const displayCards = setMainThreadMapping.map((item, index) =>
  //   <div className="card m-2 curor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
  //   <img className="object-fill" src="/image01.jpg" alt="nature" />
  //   <span className="absolute top-4 right-2 text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right">
  //     {item.title}
  //   </span>
  //   <div className="m-2">
  //     <h2 className="text-lg">asd</h2>
  //     <h3 className="text-md mb-1">asd | asd</h3>
  //     <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
  //       asd
  //     </p>
  //   </div>
  // </div>
  //   )

  return (
    <div>
      {mainThreadMapping.map((item, index) => (
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
      ))}
    </div>
  );

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
}
