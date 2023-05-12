// This is client component so we can use react hooks such as useState or useEffect
// To add interactivity function.
'use client'

import { useEffect, useState } from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HartIconFilled } from '@heroicons/react/24/solid'

const Thread = ({ thread }) => {
  const [likes, setLikes] = useState(thread?.likes)
  const [liked, setLiked] = useState(null)
  useEffect(() => {
    if (liked === null) return

    const endpoint = liked
      ? `/api/threads/${thread.id}/like`
      : `/api/threads/${thread.id}/unlike`

    fetch(endpoint, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(({ thread }) => {
        setLikes(thread?.likes)
      })
  }, [liked, thread.id])

  const handleClick = () => setLiked(liked => !liked)

  return (
    <li className='my-3 rounded bg-stone-200 p-4 text-stone-500'>
      <div className='flex justify-between'>
        <p>{thread.body}</p>
        <div className='flex items-center gap-2'>
          <button onClick={handleClick}>
            {liked ? (
              <HartIconFilled className='w-7 h-7 text-red-500' />
            ) : (
              <HeartIcon className='w-7 h-7 text-red-500' />
            )}
          </button>
          <span className='text-sm'>{likes}</span>
        </div>
      </div>
    </li>
  )
}

export default Thread