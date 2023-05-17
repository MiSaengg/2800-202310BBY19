"use client";
import Image from "next/image";
import Button from "./../button/Button";
import { useState, useEffect } from "react";



const Modal = ({ branchThread, mainThreadId, phaseStage }) => {
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState(null);
  const [numOfBranchThread, setNumOfBranchThread] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState("");
  const [genre, setGenre] = useState("");
  const [body, setBody] = useState("");
  const [dots, setDots] = useState("");


  useEffect(() => {
    const userID = localStorage.getItem("userID");
    setUserId(userID);
  });

  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setDots((dots) => (dots.length < 4 ? dots + "." : ""));
      }, 300);

      return () => clearInterval(timer);
    }
  }, [isLoading]);

  const endpoint = `/api/threads/${mainThreadId.threadId}`

  useEffect(() => {
    fetch( endpoint, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ mainThread }) => {
        const content = mainThread.contentBody;
        const genre = mainThread.genre;
        setContent(content)
        setGenre(genre)

      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  });

  const handleAIGenerate = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    const contentBody = content;
    const storyGenre = genre;

    const endpoint = "https://api.openai.com/v1/completions";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-002",
        prompt: `Given the summary: ${contentBody}, and ${storyGenre} continue the story with only three sentences.`,
        temperature: 0.5,
        max_tokens: 100,
      }),
    };

    const response = await fetch(endpoint, options);

    console.log(response)

    const { choices, error } = await response.json();

    const body = choices[0].text;

    if (!error) {
      branchThread.content = body;
      setBody(body);
    }
    setIsLoading(false);
  };


  const openModalEvent = (e) => {
    e.preventDefault();

    setShowModal(true);
  };
  const closeModalEvent = (e) => {
    e.preventDefault();

    setShowModal(false);
  };

  const submitBranchThread = async (e) => {
    e.preventDefault();

    const data = {
      body: e.target.branchContext.value,
      userId: userId,
      mainThreadId: mainThreadId.threadId,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = "/api/threads/branchThread";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    console.log(response)

    const { thread, error } = await response.json();

    if (!error) {
      location.reload();
      setShowModal(false);
    }
  };

  return (
    <>
      <div
        style={{
          height: "150px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Object.values(branchThread).some((e) => e.userId === userId) ||
        phaseStage >= 3 ? null : (
          <button
            style={{ width: "40px", height: "40px" }}
            onClick={openModalEvent}
          >            
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>            
          </button>
        )}
      </div>
      {showModal ? (
        <div
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto max-h-full"
        >
          <div className="relative max-w-full max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-mono text-gray-900 dark:text-white">
                  Title
                </h3>
                <button
                  onClick={closeModalEvent}
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>

              <div className="p-6 space-y-6">
                <p className="text-base font-mono text-gray-700 dark:text-gray-400">
                  Continue the story
                </p>
              </div>

              <form className="mx-5" onSubmit={submitBranchThread}>
                <label
                  htmlFor="text-input"
                  className="block mb-3 text-md font-mono text-gray-900 dark:text-white"
                 
                >
                  <textarea
                    name="branchContext"
                    id="text-input"
                    rows="15"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={isLoading ? `Generating text${dots}` : body}
                    onChange={(e) => setBody(e.target.value)}
                  ></textarea>
                </label>

                <div className="flex items-stretch justify-between px-5 pt-1 pb-3 border-gray-200 rounded-b dark:border-gray-600"></div>
                <div className="absolute my-5 left-3 px-3">
                  <Button text="AI Generate" onClick={handleAIGenerate} />
                </div>
                <div className="flex justify-end border-t p-5">
                  <Button type="submit" text="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
