"use client"
import ProfilePage from "@/app/components/card/profilepage"
import {useState, useEffect } from "react";


const Page = () => {
  const [user, setUser] = useState({})

  useEffect(()=> {
    const userID = localStorage.getItem("userID");

    const endpoint = `/api/users/${userID}`

  fetch(endpoint, {
    method:"GET"
  }).then(
    res => res.json()
  ).then(
    ({user}) => {
      setUser(user)            
    }
  )
  },[]);

  return (
    <div>
      <ProfilePage userId={user.id} penName={user.penName} userImg={user.image} userName={user.name} userEmail={user.email}/>
    </div>
  )
}

export default Page