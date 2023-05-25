"use client";
import Image from "next/image";
import React from "react";

const ProfilePage = ({ userId, userName, penName, userImg, userEmail }) => {
  return (
    <div
      className="rounded-3xl overflow-hidden shadow-xl max-w-xs bg-white mx-auto flex flex-col items-center h-50 mt-10"
      style={{ width: "60%", position: "relative" }}
    >
      <Image
        src="/horror.png"
        width={100}
        height={200}
        alt="bookCover"
        className="w-full"
      />
      <div className="flex justify-center -mt-8">
        <Image
          src={userImg}
          alt="user profile photo"
          width={50}
          height={100}
          className="rounded-full border-solid border-white border-2 "
        />
      </div>
      <div className="text-center px-2 pb-2 pt-2">
        <h3 className="text-black text-sm font-bold font-sans">{userName}</h3>
        <span className="font-bold">{userEmail}</span>
      </div>
      <div
        className="flex flex-col justify-center pb-2 text-black"
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontWeight: "bold",
        }}
      >
        <div className="text-center mb-0.1" style={{ fontSize: "0.9em" }}>
          <span className="font-bold">{penName}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
