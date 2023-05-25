"use client";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";

const ProfileCardInfo = ({ genre, userId, mainCharacter, title, phase }) => {
  const [user, setUser] = useState({});

  //Use Effect for fetching user data
  useEffect(() => {
    const endpoint = `/api/user/${userId}`;

    fetch(endpoint, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ user }) => {
        setUser(user);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="relative mb-5 flex flex-col overflow-hidden shadow-xl bg-white items-center h-40 w-screen">
          <Image
            src={`/bookCover/${genre[0]}.png`}
            fill={true}
            sizes="100vw"
            alt="bookCover"
            className="w-full"
          />

          {/* Added layer to make an opacity */}
          <div
            className="flex flex-col justify-center pb-2 bg-black opacity-60 h-40 z-10 w-screen"
            style={{ position: "absolute" }}
          ></div>
          <div
            className="flex flex-col justify-center pb-2 text-white h-40 z-20"
            style={{ position: "absolute", color: "white" }}
          >
            <div className="text-center mb-1">
              <span className="font-bold underline text-2xl">{title}</span>
            </div>

            <div className="flex flex-col text-center">
              <span className="text-sm">
                Original Genre:{" "}
                <span className="text-md font-bold">{genre[0]}</span>
              </span>
              {/* Added condition to show AI Recommended Genre if genre[1] exists */}
              {genre[1] && (
                <span className="text-sm">
                  AI Recommended Genre:{" "}
                  <span className="text-md font-bold">{genre[1]}</span>
                </span>
              )}{" "}
              <span className="text-sm">
                Number of Characters:{" "}
                <span className="text-md font-bold">{mainCharacter}</span>
              </span>
              <span className="text-sm">
                <span className="text-md font-bold">{phase}</span>
              </span>
            </div>
            <div></div>

            <div></div>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src={user.image}
            alt="user profile photo"
            width={50}
            height={100}
            className="rounded-full border-solid border-white border-2 "
          />
        </div>
        <div className="text-center">
          <h3 className="text-black text-sm font-bold">{user.penName}</h3>
        </div>
      </div>
    </>
  );
};

export default ProfileCardInfo;
