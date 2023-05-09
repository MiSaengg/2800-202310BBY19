import React from 'react';

const mainTreadBox = ({ userid, threadid, genre, penName, mainCharacter }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-xs border border-black p-4 rounded-md">
      <label className="block">
        <span className="text-gray-700">
          옛날옛날에 건희라는 돌쇠가 살았습니다. 그리고 소희라는 궁녀가 있었는데, 둘이 눈에 맞아 결혼해 행복하게 살았답니다.
        </span>
      </label>
    </div>
  </div>
  
  );
};

export default mainTreadBox;