"use client";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function MemberLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    // If the session status is not 'loading', perform checks
    if (status !== "loading") {
      // If there is a session (user is authenticated), save the userId in localStorage and fetch user data
      if (session) {
        localStorage.setItem("userID", session.user.id);        
        const endpoint = `/api/user/${session.user.id}`
        fetch(endpoint , {
          method: "GET"
        })
        .then((res) => res.json())
        .then(({user}) => {
          // If the user has not set a penName, redirect them to the newUser page
          if(!user.penName || user.penName === ""){
            router.push("/newUser")
          }
        })
      } else {
        // If there's no session (user is not authenticated), redirect them to the homepage
        router.push("/");
      }
    }
  }, [session]);

  // If there is a session, return the children elements
  if (session) {
    return <div> {children} </div>;
  }
}
