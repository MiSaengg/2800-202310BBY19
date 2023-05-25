"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({});
  const [penName, setPenName] = useState("");
  const [email, setEmail] = useState("");
  const [likeThreads, setlikeThreads] = useState([]);
  const [mainThreads, setMainThreads] = useState([]);
  const [numOwnedThread, setNumOwnedThread] = useState(0);
  const [numLikedThread, setNumLikedThread] = useState(0);

  // UseEffect for fetching user data
  useEffect(() => {
    const userId = localStorage.getItem("userID");
    const endpoint = `/api/user/${userId}`;

    fetch(endpoint, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ user }) => {
        setUser(user);
        setPenName(user.penName);
        setEmail(user.email);
        const data = user.likeThreads;
        const value = Object.values(data);
        setNumLikedThread(value.length);
        setlikeThreads(value);
      });
  }, []);

  // UseEffect for fetching main thread data
  useEffect(() => {
    const userId = localStorage.getItem("userID");
    const endpoint = `/api/profile?userId=${userId}`;

    fetch(endpoint, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ mainThreads }) => {
        setNumOwnedThread(Object.keys(mainThreads).length);
        setMainThreads(mainThreads);
      });
  }, []);

  return (
    <div>
      <div className="p-10 mt-20">
        <div className="grid grid-cols-1">
          <div className="relative">
            <div className="w-40 h-40 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-20 flex items-center justify-center text-indigo-500">
              <Image
                src={user.image}
                alt="user profile photo"
                width={150}
                height={100}
                className="rounded-full border-solid"
              />
            </div>

            <div className="mt-28 text-center pb-12">
              <h1 className="text-4xl font-mono text-gray-700">{penName}</h1>
              <p className="font-mono text-gray-600 mt-3">{email}</p>
            </div>

            <div className="grid grid-cols-2 text-center">
              <div>
                <p className="font-bold text-gray-700 text-xl">
                  {numLikedThread}
                </p>
                <p className="text-gray-400 font-mono">Likes</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">
                  {numOwnedThread}
                </p>
                <p className="text-gray-400 font-mono">Owned</p>
              </div>
            </div>

            <div className="mt-10 pb-5">
              <h1 className="text-xl font-mono text-gray-700">Likes Stories</h1>
              <hr className="mt-1"></hr>
            </div>

            <div className="flex overflow-x-scroll gap-2 w-full">
              {likeThreads.map((a, i) => (
                <Link
                  href={`/threads/${a.id}`}
                  className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
                  key={i}
                >
                  <h5 className="mb-1 text-xs font-bold font-mono tracking-tight text-gray-700">
                    {a.title}
                  </h5>
                  <p className="mb-1 text-xs font-mono text-gray-700">
                    {a.genre}
                  </p>
                  <p className="mb-1 text-xs font-mono text-gray-700">
                    {a.tag}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-10 pb-5">
              <h1 className="text-xl font-mono text-gray-700">Owned Stories</h1>
              <hr className="mt-1"></hr>
            </div>

            <div className="flex overflow-x-scroll gap-2 w-full">
              {mainThreads.map((b, i) => (
                <Link
                  href={`/threads/${b.id}`}
                  className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
                  key={i}
                >
                  <h5 className="mb-1 text-xs font-bold font-mono tracking-tight text-gray-700">
                    {b.title}
                  </h5>
                  <p className="mb-1 text-xs font-mono text-gray-700">
                    {b.genre}
                  </p>
                  <p className="mb-1 text-xs font-mono text-gray-700">
                    {b.tag}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
