import React from "react";

// classNameName="block
// border
// border-gray-400
// rounded-lg
// hover:shadow-md
// hover:border-opacity-0
// transform
// transition-all duration-200
// text-white-700
// text-sm
// text-center
// font-mono
// py-1
// px-3"

const page = () => {
  return (
    <div>
      <div className="p-10 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3">

          <div className="relative">

            <div className="w-40 h-40 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-20 flex items-center justify-center text-indigo-500">
            </div>

            <div className="grid grid-cols-3 text-center">
                <div>
                <p className="font-bold text-gray-700 text-xl">22</p>
                <p className="text-gray-400">Friends</p>
                </div>
                <div>
                <p className="font-bold text-gray-700 text-xl">10</p>
                <p className="text-gray-400">Photos</p>
                </div>
                <div>
                <p className="font-bold text-gray-700 text-xl">89</p>
                <p className="text-gray-400">Comments</p>
                </div>
            </div>
          

            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Connect
              </button>
              <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Message
              </button>
            </div>
          </div>

          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">
              Jessica Jones,{" "}
              <span className="font-light text-gray-500">27</span>
            </h1>
            <p className="font-light text-gray-600 mt-3">Bucharest, Romania</p>

            <p className="mt-8 text-gray-500">
              Solution Manager - Creative Tim Officer
            </p>
            <p className="mt-2 text-gray-500">University of Computer Science</p>
          </div>

          <div className="mt-12 flex flex-col justify-center">
            <p className="text-gray-600 text-center font-light lg:px-16">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p>
            <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
              Show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
