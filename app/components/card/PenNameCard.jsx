import { useEffect, useState } from "react"

export default function PenNameCard({mainThreadOwnerId}) {
  const [userPenName , setUserPenName] = useState("");

  useEffect(() => {
    const endpoint = `/api/user/${mainThreadOwnerId}`

    fetch(endpoint,{
      method: "GET"
    }).then((res) => res.json())
    .then(({user}) => {
      setUserPenName(user.penName)
    })
  }, [userPenName])

  return (
    <>    
    {userPenName}
    </>
  )
}
