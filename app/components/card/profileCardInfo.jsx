"use client";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";

const ProfileCardInfo = ({ genre, userId, mainCharacter, title, phase }) => {
  const [user, setUser] = useState({});

  // On component mount, fetch the user's data based on the provided userId
  useEffect(() => {
    const endpoint = `/api/user/${userId}`;

    fetch(endpoint, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ user }) => {
        setUser(user); // Set the fetched user's data to state
      });
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="relative mb-5 flex flex-col overflow-hidden shadow-xl bg-white items-center h-40 w-screen">
          {/* Book cover image based on the genre */}
          <Image
            src={`/bookCover/${genre[0]}.png`}
            fill={true}
            sizes="100vw"
            alt="bookCover"
            className="w-full"
          />

          {/* Overlay for the book cover image to create an opacity effect */}
          <div
            className="flex flex-col justify-center pb-2 bg-black opacity-60 h-40 z-10 w-screen"
            style={{ position: "absolute" }}
          ></div>

          {/* Book title, genre, main character, and phase details */}
          <div
            className="flex flex-col justify-center pb-2 text-white h-40 z-20"
            style={{ position: "absolute", color: "white", fontWeight: "bold" }}
          >
            <div className="text-center mb-1">
              <span className="font-bold underline text-2xl">{title}</span>
            </div>

            <div className="text-center mb-1">
              <span className="font-bold text-sm">{genre[0]} / </span>
              <span className="font-bold text-sm">{mainCharacter}</span>
              <span className="font-bold"> characters</span>
            </div>
            
            <div>
              <span className="font-bold text-sm">Phase {phase}</span>
            </div>
          </div>
        </div>

        {/* User's profile picture */}
        <div className="flex justify-center">
          <Image
            src={user.image}
            alt="user profile photo"
            width={50}
            height={100}
            className="rounded-full border-solid border-white border-2 "
          />
        </div>
        
        {/* User's pen name */}
        <div className="text-center">
          <h3 className="text-black text-sm font-bold">{user.penName}</h3>
        </div>
      </div>
    </>
  );
};

export default ProfileCardInfo;
