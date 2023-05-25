"use client";

import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EasterEggBBY19Trigger from "@/app/components/EasterEggTrigger/EasterEggBBY19Trigger";
import EasterEggCatTrigger from "@/app/components/EasterEggTrigger/EasterEggCatTrigger";

export default function Page() {
  const [mainThreadMapping, setMainThreadMapping] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [user, setUser] = useState(null);
  const [easterEggModal, setEasterEggModal] = useState(false);
  const [easterEggTrigger, setEasterEggTrigger] = useState("");

  //UseEffect for fetching user data
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

  // Search Function
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    //Easter Egg Implement Section
    if (event.target.searchParam.value === "*BBY19*") {
      setEasterEggModal(true);
      setEasterEggTrigger(event.target.searchParam.value);
    } else if (event.target.searchParam.value === ":catjam:") {
      setEasterEggModal(true);
      setEasterEggTrigger(event.target.searchParam.value);
    } else {
      const endpoint = `/api/threads/mainThread?search=${event.target.searchParam.value}&genre=${selectedGenre}&tag=${selectedTag}`;

      fetch(endpoint, {
        method: "GET",
      })
        .then((res) => res.json())
        .then(({ randomMainThreads }) => {
          setMainThreadMapping(randomMainThreads);
        });
    }
  };
  //Genre and Tag Change Functions
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };
  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  //Refresh Function
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

  //Close Modal Function
  const closeModalEvent = (event) => {
    setEasterEggModal(false);
  };

  return (
    <div>
      <div>
        <div>
          <form onSubmit={handleSearchSubmit}>
            <div className="relative mx-2 mt-2">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                name="searchParam"
                placeholder="Search by Title"
                className="block w-full font-mono p-4 pl-10 text-sm text-stone-500 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 absolute right-2.5 bottom-2.5 text-gray-900 bg-gray-200 font-mono rounded-lg text-sm"
              >
                Search
              </button>
            </div>
            <select
              value={selectedGenre}
              onChange={handleGenreChange}
              className="p-2.5 mx-2 font-mono border border-gray-300 bg-gray-50 text-gray-900 text-sm border border-gray-300 rounded-lg focus:outline-none"
            >
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
              <option value="comedy">Comedy</option>
              <option value="science-fiction">Science-Fiction</option>
            </select>
            <select
              value={selectedTag}
              onChange={handleTagChange}
              className="p-2.5 m-2 font-mono border border-gray-300 bg-gray-50 text-gray-900 text-sm border border-gray-300 rounded-lg focus:outline-none"
            >
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
                <Image
                  className="object-cover"
                  src={`/bookCover/${item.genre[0]}.png`}
                  alt="nature"
                  width={200}
                  height={50}
                />
                {item.tag === "Complete" ? (
                  <span className="absolute top-4 right-2 text-sm text-teal-800 font-mono bg-sky-300 inline rounded-full px-2 align-top float-right">
                    {item.tag}
                  </span>
                ) : (
                  <span className="absolute top-4 right-2 text-sm text-teal-800 font-mono bg-rose-300 inline rounded-full px-2 align-top float-right">
                    {item.tag}
                  </span>
                )}
                <div className="m-2">
                  <p className="text-lg" style={{ height: "55px" }}>
                    {item.title.length > 20
                      ? `${item.title.substring(0, 20)}...`
                      : `${item.title}`}
                  </p>
                  <h3 className="text-md" style={{ height: "55px" }}>
                    {item.genre.join(", ")}
                  </h3>
                  <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
                    {item.user.penName}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <button
          onClick={handleRefreshChange}
          className="button float-right fixed bottom-28 right-2.5 z-50 hover:opacity-25"
        >
          <img src="/refresh.svg" alt="refresh" className="w-12 h-12 mr-2" />
        </button>

        {/* EasterEGG Implementaion Section */}
        {easterEggModal ? (
          <div
            tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto max-h-full"
          >
            <div className="relative max-w-full max-h-full">
              <div className="relative bg-white rounded-lg shadow">
                <div className="flex items-start justify-between p-5 border-b rounded-t">
                  <h3 className="text-xl font-mono text-gray-900">
                    YOU FOUND OUR EASTER EGG!
                  </h3>
                  <button
                    onClick={closeModalEvent}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="defaultModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div>
                  {easterEggTrigger === "*BBY19*" ? (
                    <EasterEggBBY19Trigger />
                  ) : null}
                  {easterEggTrigger === ":catjam:" ? (
                    <EasterEggCatTrigger />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
