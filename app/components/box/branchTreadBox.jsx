import React from 'react';

const branchTreadBox = ({ userid, threadid, genre, penName, mainCharacter }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xs border border-black p-4 rounded-md relative">
        <label className="block">
          <span className="text-gray-700">
            그러던 어느날 둘 사이에서 아이가 태어났는데, 눈이 여섯개에 팔이 15개인 아이가 태어났습니다.마을사람들은 그들을 경멸하기시작했습니다.
          </span>
        </label>
        <div className="absolute bottom-2 left-2">
          <select className="border rounded-md bg-white p-1">
            <option value="delete">Merge</option>
            <option value="delete">Merge</option>
            <option value="accepted">Delete</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default branchTreadBox;
