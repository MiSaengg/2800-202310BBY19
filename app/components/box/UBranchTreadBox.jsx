import React from "react";

const UbranchTreadBox = ({ body }) => {
  return (
    // min-h-screen
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xs border border-black p-4 rounded-md relative">
        <label className="block">
          <span className="text-gray-700">{body}</span>
        </label>
        <div className="absolute bottom-2 left-2">
          <select className="border rounded-md bg-white p-1">
            <option value="delete">Select</option>
            <option value="delete">Merge</option>
            <option value="accepted">Delete</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UbranchTreadBox;
