import Image from "next/image"
import { useState } from "react"

export default function LikesCompleteButton({mainThread, mainThreadId , loginUserId}) {
  // Initialize 'like' state with the current thread's likes and 'liked' state with a boolean
  // indicating whether the logged-in user has liked this thread.
  const [like, setLike] = useState(mainThread?.likes);
  const [liked, setLiked] = useState(mainThread?.userLikes.includes(loginUserId));
  
  const likesSubmit = () => {
    // If the user has already liked this thread, send a PATCH request to unlike it.
    if(liked === true){      
      const endpoint = `/api/threads/${mainThreadId}/unlike?userId=${loginUserId}`
      
      fetch(endpoint, {
        method : 'PATCH',
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(({mainThread}) => {
        // Update 'like' state with the new number of likes.
        setLike(mainThread?.likes)        
      })
      // Toggle 'liked' state.
      setLiked(liked => !liked)
    }else{
      // If the user hasn't liked this thread yet, send a PATCH request to like it.
      const endpoint = `/api/threads/${mainThreadId}/like?userId=${loginUserId}`      
      fetch(endpoint, {
        method : 'PATCH',
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(({mainThread}) => {
        // Update 'like' state with the new number of likes.
        setLike(mainThread?.likes)        
      })
      // Toggle 'liked' state.
      setLiked(liked => !liked)
    }
  }

  return (
    // Display a button with a heart icon that changes depending on whether the user has liked this thread.
    // The button's onClick handler calls the 'likesSubmit' function defined above.
    <button onClick={likesSubmit} className="button float-right fixed bottom-28 right-2.5 z-50">
      {liked ? (
        <Image width={12} height={12} src="/fullHeart.svg" alt="heart" className="w-12 h-12 mr-2" />
      ) : (
        <Image width={12} height={12} src="/heart.svg" alt="heart" className="w-12 h-12 mr-2" />
      )}
      {/* Display the current number of likes. */}
      <span>{like}</span>
    </button>
  )
}
