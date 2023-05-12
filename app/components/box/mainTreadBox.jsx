import React from "react";

const MainThreadBox = ({ body }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xs border border-black p-4 rounded-md">
        <label className="block">
          <span className="text-gray-700">{body}</span>
        </label>
      </div>
    </div>
  );
};

export default MainThreadBox;
