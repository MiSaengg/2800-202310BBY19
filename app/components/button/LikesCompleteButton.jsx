import Image from "next/image";
import { useState } from "react";

export default function LikesCompleteButton({
  mainThread,
  mainThreadId,
  loginUserId,
}) {
  const [like, setLike] = useState(mainThread?.likes);
  const [liked, setLiked] = useState(
    mainThread?.userLikes.includes(loginUserId)
  );

  // Like and Unlike Button Function
  const likesSubmit = () => {
    if (liked === true) {
      const endpoint = `/api/threads/${mainThreadId}/unlike?userId=${loginUserId}`;

      fetch(endpoint, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(({ mainThread }) => {
          setLike(mainThread?.likes);
        });
      setLiked((liked) => !liked);
    } else {
      const endpoint = `/api/threads/${mainThreadId}/like?userId=${loginUserId}`;
      fetch(endpoint, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(({ mainThread }) => {
          setLike(mainThread?.likes);
        });
      setLiked((liked) => !liked);
    }
  };

  return (
    <button
      onClick={likesSubmit}
      className="button float-right fixed bottom-28 right-2.5 z-50"
    >
      {liked ? (
        <Image
          width={12}
          height={12}
          src="/fullHeart.svg"
          alt="heart"
          className="w-12 h-12 mr-2"
        />
      ) : (
        <Image
          width={12}
          height={12}
          src="/heart.svg"
          alt="heart"
          className="w-12 h-12 mr-2"
        />
      )}
      <span>{like}</span>
    </button>
  );
}
