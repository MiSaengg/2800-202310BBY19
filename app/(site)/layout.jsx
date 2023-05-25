"use client";
import { redirect, useRouter } from "next/navigation";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function MemberLayout({ children }) {
  const { data: session, status } = useSession();
  const { push } = useRouter();

  // UseEffect for fetching user data
  useEffect(() => {
    if (status !== "loading") {
      if (session) {
        localStorage.setItem("userID", session.user.id);
        const endpoint = `/api/user/${session.user.id}`;
        fetch(endpoint, {
          method: "GET",
        })
          .then((res) => res.json())
          .then(({ user }) => {
            if (!user.penName || user.penName === "") {
              push("/newUser");
            }
          });
      } else {
        redirect("/");
      }
    }
  }, [session]);

  if (session) {
    return <div> {children} </div>;
  }
}
