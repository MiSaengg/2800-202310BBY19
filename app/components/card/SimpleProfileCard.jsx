import Image from 'next/image';
import { useState, useEffect } from 'react';

const SimpleProfileCardInfo = ({ userId }) => {
  const [userImg, setUserImg] = useState("");
  const [penName, setPenName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const endpoint = `/api/users/${userId}`;

      try {
        const response = await fetch(endpoint);
        const { user } = await response.json();

        setUserImg(user.image);
        setPenName(user.penName);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const cardWidth = 135;

  return (
    <div className="rounded-3xl overflow-hidden shadow-xl bg-white mx-auto flex flex-col items-center" style={{ width: `${cardWidth}px`, transform: 'scale(0.9)' }}>
      <Image src={userImg} width={500} height={300} className="w-full" />
      <div className="text-center px-3 pb-6 pt-2">
        <h3 className="text-black text-sm font-bold font-sans">{penName}</h3>
      </div>
      <div className="flex justify-center pb-3 text-black">
        {/* 추가적인 내용 */}
      </div>
    </div>
  );
};

export default SimpleProfileCardInfo;
