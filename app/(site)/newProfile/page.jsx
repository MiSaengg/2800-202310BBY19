import React from "react";
import Image from 'next/image';

// penName, emailAddress
// like > title, genre, status

const page = () => {
  return (
    <div>
      <div className="p-10 mt-20">
        <div className="grid grid-cols-1">

          <div className="relative">
            <div className="w-40 h-40 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-20 flex items-center justify-center text-indigo-500">
          </div>

          <div className="mt-28 text-center pb-12">
            <h1 className="text-4xl font-mono text-gray-700">Pen Name</h1>
            <p className="font-mono text-gray-600 mt-3">Email Address</p>
          </div>

          <div className="grid grid-cols-3 text-center">
                <div>
                <p className="font-bold text-gray-700 text-xl">22</p>
                <p className="text-gray-400 font-mono">Owned</p>
                </div>
                <div>
                <p className="font-bold text-gray-700 text-xl">10</p>
                <p className="text-gray-400 font-mono">Likes</p>
                </div>
                <div>
                <p className="font-bold text-gray-700 text-xl">89</p>
                <p className="text-gray-400 font-mono">Collaborated</p>
                </div>
          </div>

          <div className="mt-10 pb-5">
              <h1 className="text-xl font-mono text-gray-700">Owned Thread</h1>
              <hr className="mt-1"></hr>
          </div>

            <div className="flex overflow-x-scroll gap-2 w-full">

              <a href="#" className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                  <h5 className="mb-1 text-xs font-bold font-mono tracking-tight text-gray-700">This is Noel's love story</h5>
                  <p className="mb-1 text-xs font-mono text-gray-700">Sci-Fi</p>
                  <p className="mb-1 text-xs font-mono text-gray-700">Complete</p>
              </a>

              <a href="#" className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                  <h5 className="mb-1 text-xs font-bold font-mono tracking-tight text-gray-700">This is Noel's love story</h5>
                  <p className="mb-1 text-xs font-mono text-gray-700">Sci-Fi</p>
                  <p className="mb-1 text-xs font-mono text-gray-700">Complete</p>
              </a>

              <a href="#" className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                  <h5 className="mb-1 text-xs font-bold font-mono tracking-tight text-gray-700">This is Noel's love story</h5>
                  <p className="mb-1 text-xs font-mono text-gray-700">Sci-Fi</p>
                  <p className="mb-1 text-xs font-mono text-gray-700">Complete</p>
              </a>

              <a href="#" className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                  <h5 className="mb-1 text-xs font-bold font-mono tracking-tight text-gray-700">This is Noel's love story</h5>
                  <p className="mb-1 text-xs font-mono text-gray-700">Sci-Fi</p>
                  <p className="mb-1 text-xs font-mono text-gray-700">Complete</p>
              </a>

              <a href="#" className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                  <h5 className="mb-1 text-xs font-bold font-mono tracking-tight text-gray-700">This is Noel's love story</h5>
                  <p className="mb-1 text-xs font-mono text-gray-700">Sci-Fi</p>
                  <p className="mb-1 text-xs font-mono text-gray-700">Complete</p>
              </a>

              <a href="#" className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                  <h5 className="mb-1 text-xs font-bold font-mono tracking-tight text-gray-700">This is Noel's love story</h5>
                  <p className="mb-1 text-xs font-mono text-gray-700">Sci-Fi</p>
                  <p className="mb-1 text-xs font-mono text-gray-700">Complete</p>
              </a>

          </div>

          <div className="grid grid-cols-2 mt-10 pb-5">
              <h1 className="text-xl font-mono text-gray-700">Likes Thread</h1>
              {/* <button className="text-white py-1 px-2 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Complete
              </button> */}
              <div class="inline-flex">
              <button class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-mono py-1 px-4 rounded-l">
                Complete
              </button>
              <button class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-mono py-1 px-4 rounded-r">
                Incomplete
              </button>
          </div>
              <hr className="mt-1"></hr>
          </div>

          <div className="flex overflow-x-scroll gap-2 w-full">

            <a href="#" className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <h5 className="mb-1 text-xs font-bold font-mono tracking-tight text-gray-700">This is Noel's love story</h5>
                <p className="mb-1 text-xs font-mono text-gray-700">Sci-Fi</p>
                <p className="mb-1 text-xs font-mono text-gray-700">Complete</p>
            </a>

            <a href="#" className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <h5 className="mb-1 text-xs font-bold font-mono tracking-tight text-gray-700">This is Noel's love story</h5>
                <p className="mb-1 text-xs font-mono text-gray-700">Sci-Fi</p>
                <p className="mb-1 text-xs font-mono text-gray-700">Complete</p>
            </a>

            <a href="#" className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <h5 className="mb-1 text-xs font-bold font-mono tracking-tight text-gray-700">This is Noel's love story</h5>
                <p className="mb-1 text-xs font-mono text-gray-700">Sci-Fi</p>
                <p className="mb-1 text-xs font-mono text-gray-700">Complete</p>
            </a>

            <a href="#" className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <h5 className="mb-1 text-xs font-bold font-mono tracking-tight text-gray-700">This is Noel's love story</h5>
                <p className="mb-1 text-xs font-mono text-gray-700">Sci-Fi</p>
                <p className="mb-1 text-xs font-mono text-gray-700">Complete</p>
            </a>

            <a href="#" className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <h5 className="mb-1 text-xs font-bold font-mono tracking-tight text-gray-700">This is Noel's love story</h5>
                <p className="mb-1 text-xs font-mono text-gray-700">Sci-Fi</p>
                <p className="mb-1 text-xs font-mono text-gray-700">Complete</p>
            </a>

            <a href="#" className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <h5 className="mb-1 text-xs font-bold font-mono tracking-tight text-gray-700">This is Noel's love story</h5>
                <p className="mb-1 text-xs font-mono text-gray-700">Sci-Fi</p>
                <p className="mb-1 text-xs font-mono text-gray-700">Complete</p>
            </a>

            </div>




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
