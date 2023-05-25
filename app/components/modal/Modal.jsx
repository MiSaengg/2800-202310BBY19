"use client";
import { useState, useEffect, useRef } from "react";
import Button from "./../button/Button";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Modal = ({ branchThread, mainThreadId, phaseStage }) => {
  const [showModal, setShowModal] = useState(false);
  const [showInnerModal, setShowInnerModal] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState("");
  const [genre, setGenre] = useState("");
  const [body, setBody] = useState("");
  const [dots, setDots] = useState("");
  const bodyRef = useRef("");
  const [showButtons, setShowButtons] = useState(true);

  //Use Effect to get the user ID
  useEffect(() => {
    const userID = localStorage.getItem("userID");
    setUserId(userID);
  }, [userId]);

  //Use Effect for the loading dots
  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setDots((dots) => (dots.length < 4 ? dots + "." : ""));
      }, 300);

      return () => clearInterval(timer);
    }
  }, [isLoading]);

  //Use Effect to get the main thread content
  useEffect(() => {
    const endpoint = `/api/threads/${mainThreadId.threadId}`;
    fetch(endpoint, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ mainThread }) => {
        const content = mainThread.contentBody;
        const genre = mainThread.genre;
        setContent(content);
        setGenre(genre);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  }, [mainThreadId]);

  //Event handler for the AI Generate button
  const handleAIGenerate = async (event) => {
    event.preventDefault();

    bodyRef.current = "";
    setIsLoading(true);
    setShowButtons(false);

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
        prompt: `Given the summary: ${contentBody}, and ${storyGenre} continue the story by writing a paragraph of only three sentences.`,
        temperature: 1.0,
        max_tokens: 100,
      }),
    };

    const response = await fetch(endpoint, options);

    const { choices, error } = await response.json();

    const body = choices[0].text;

    if (!error) {
      branchThread.content = body;
      let index = 0;
      const typingTimer = setInterval(() => {
        bodyRef.current = bodyRef.current + body.charAt(index);
        setBody(bodyRef.current);
        index++;

        if (index >= body.length) {
          clearInterval(typingTimer);
          setShowButtons(true);
        }
      }, 10);
    } else {
      setShowButtons(true);
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

  //Event handler for the submit button
  const submitBranchThread = async (e) => {
    e.preventDefault();
    const branchThreadSumbitConfirm = confirm("Are you ready to submit?");

    if (branchThreadSumbitConfirm) {
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

      const { threadFromDB, error } = await response.json();

      if (!error) {
        location.reload();
        setShowModal(false);
      } else {
        location.reload();
        return;
      }
    } else {
      return;
    }
  };

  //Event handler for voice generated content
  const submitVoice = (e) => {
    e.preventDefault();

    const data = {
      body: e.target.voiceGeneratedContent.value,
    };

    setBody(data.body);
    closeInnerModal();
  };

  //Event handler for the show inner modal
  const InnerModal = ({ setShowInnerModal }) => {
    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition,
      isMicrophoneAvailable,
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }

    if (!isMicrophoneAvailable) {
      return <span>Microphone access is needed to begin.</span>;
    }

    return (
      <div className="fixed -top-32 left-0 w-full h-full flex items-center justify-center bg-gray bg-opacity-40 z-40">
        <div className="flex flex-col border-solid border-2 items-center bg-white px-10 pt-3 pb-5">
          <button
            onClick={closeInnerModal}
            type="button"
            className="text-sm p-1.5 mb-5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg"
            data-modal-hide="defaultModal"
          >
            {" "}
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only"></span>
          </button>
          <div className="mb-5">microphone: {listening ? "on" : "off"}</div>
          <div className="flex flex-row mb-5 justify-evenly">
            <Button
              type="button"
              text="Start"
              onClick={() =>
                SpeechRecognition.startListening({
                  continuous: true,
                  language: "en-CA",
                })
              }
            ></Button>
            <Button
              type="button"
              text="Stop"
              onClick={SpeechRecognition.stopListening}
            ></Button>
            <Button
              type="button"
              text="Reset"
              onClick={resetTranscript}
            ></Button>
          </div>
          <form className="mx-3" onSubmit={submitVoice}>
            <label
              htmlFor="text-input"
              className="block mb-3 text-md font-mono text-gray-900"
            >
              <textarea
                name="voiceGeneratedContent"
                id="text-input"
                rows="10"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                defaultValue={transcript}
              ></textarea>
            </label>
            <div className="flex justify-center py-2">
              <Button type="submit" text="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
  };
  // Event handler for the show inner modal
  const openInnerModal = (e) => {
    e.preventDefault();
    setShowInnerModal(true);
  };
  // Event handler for the close inner modal
  const closeInnerModal = (e) => {
    setShowInnerModal(false);
  };

  return (
    <>
      <div
        style={{
          height: "150px",
          textAlign: "center",
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        }}
      >
        {/* Plus Sign to add a branch thread */}
        {Object.values(branchThread).some((e) => e.userId === userId) ||
        phaseStage >= 3 ? null : (
          <button
            onClick={openModalEvent}
            type="button"
            className="text-gray-500 border border-gray-300 hover:bg-gray-300 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-sm p-2.5 text-center inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              width="25px"
              height="25px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"
              />
            </svg>
          </button>
        )}
      </div>
      {showModal ? (
        <div
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 p-4 overflow-x-hidden overflow-y-auto max-h-full z-30"
        >
          <div className="relative max-w-full max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-start justify-between p-5 mb-8 border-b rounded-t">
                <h3 className="text-lg font-mono text-gray-900">
                  Continue the Story
                </h3>
                <button
                  onClick={closeModalEvent}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                  data-modal-hide="defaultModal"
                >
                  {" "}
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <form className="mx-5" onSubmit={submitBranchThread}>
                <label
                  htmlFor="text-input"
                  className="block mb-3 text-md font-mono text-gray-900"
                >
                  <textarea
                    name="branchContext"
                    id="text-input"
                    rows="15"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={isLoading ? `Generating text${dots}` : body}
                    onChange={(e) => setBody(e.target.value)}
                    readOnly={isLoading}
                  ></textarea>
                </label>

                <div className="flex flex-row justify-start py-3 border-b border-gray-200 rounded-b">
                  <div className="mr-4">
                    {showButtons && (
                      <Button text="AI Generate" onClick={handleAIGenerate} />
                    )}
                  </div>
                  <div className="mb-2">
                    {showButtons && (
                      <Button
                        type="button"
                        text="Voice-to-Text"
                        onClick={() => setShowInnerModal(true)}
                      />
                    )}
                  </div>
                </div>

                <div className="flex justify-end py-5">
                  {showButtons && <Button type="submit" text="Upload" />}
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}

      {showInnerModal && <InnerModal setShowInnerModal={setShowInnerModal} />}
    </>
  );
};

export default Modal;
