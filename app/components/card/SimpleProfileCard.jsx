import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "../button/Button";
import VotesCompleteButton from "../button/VotesCompleteButton";

const SimpleProfileCardInfo = ({
  userId,
  branchText,
  branchThreadIdParam,
  mainThreadIdParam,
  ownerUserId,
  loginUserId,
}) => {
  const [userImg, setUserImg] = useState("");
  const [penName, setPenName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [votedBranchThread, setVotedBranchThread] = useState([]);
  const [numVotes, setNumVotes] = useState(0);
  const [currentUserId, setCurrentUserId] = useState(null);

  // Click Event for Branch Card
  const clickBranchCard = (e) => {
    e.preventDefault();
    const fetchMainThreadData = async () => {
      const endpoint = `/api/threads/${mainThreadIdParam}`;
      try {
        const response = await fetch(endpoint);
        const { mainThread } = await response.json();

        const mainThreadPhaseStage = mainThread.phaseStage;
        const targetBranchThread = mainThreadPhaseStage[branchThreadIdParam];
        setNumVotes(targetBranchThread["votes"]);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };
    fetchMainThreadData();

    setShowModal(true);
  };

  // Click Event for Close Modal
  const closeModalEvent = (e) => {
    e.preventDefault();

    const fetchUserData = async () => {
      const endpoint = `/api/users/${loginUserId}`;
      try {
        const response = await fetch(endpoint);
        const { user } = await response.json();
        setVotedBranchThread(user.voteBranchThreads);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };
    fetchUserData();

    setShowModal(false);
  };

  // Event for merging branch thread to main thread
  const mergeBranchThreadToMainThread = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm("Are you sure you want to merge?");

    if (confirmed) {
      const data = {
        mainThreadId: mainThreadIdParam,
        branchThreadId: branchThreadIdParam,
      };

      const JSONdata = JSON.stringify(data);

      const endpoint = "/api/threads/mergeThread";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };

      const response = await fetch(endpoint, options);

      const { updateMainThread, error } = await response.json();

      if (!error) {
        setShowModal(false);
        location.reload();
      }
    } else {
      return;
    }
  };

  // Event for deleting branch thread
  const deleteBranchThread = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      const endpoint = `/api/threads/branchThread?branchthreadId=${branchThreadIdParam}`;
      const options = {
        method: "DELETE",
      };

      try {
        const response = await fetch(endpoint, options);

        if (!response.ok) {
          throw new Error(
            `HTTP status: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();

        if (data.error) {
          console.error(`Error: ${data.error}`);
        } else {
          location.reload();
        }
      } catch (error) {
        console.error(`Fetch error: ${error}`);
      }
    } else {
      return;
    }
  };

  // Use Effect for fetching user data
  useEffect(() => {
    setCurrentUserId(loginUserId);
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

    // Fetch current user data
    const fetchCurrentUserData = async () => {
      const endpoint = `/api/users/${loginUserId}`;
      try {
        const response = await fetch(endpoint);
        const { user } = await response.json();

        setVotedBranchThread(user.voteBranchThreads);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    // Fetch main thread data
    const fetchMainThreadData = async () => {
      const endpoint = `/api/threads/${mainThreadIdParam}`;
      try {
        const response = await fetch(endpoint);
        const { mainThread } = await response.json();

        const mainThreadPhaseStage = mainThread.phaseStage;
        const targetBranchThread = mainThreadPhaseStage[branchThreadIdParam];
        setNumVotes(targetBranchThread["votes"]);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
    fetchCurrentUserData();
    fetchMainThreadData();
  }, [userId, mainThreadIdParam, branchThreadIdParam]);

  const cardWidth = 135;

  return (
    <>
      <div
        className="rounded-3xl overflow-hidden shadow-xl bg-white mx-auto flex flex-col items-center"
        style={{ width: `${cardWidth}px`, transform: "scale(0.9)" }}
        onClick={clickBranchCard}
      >
        <Image src={userImg} width={500} height={300} className="w-full" />
        <div className="text-center px-3 pb-6 pt-2">
          <h3 className="text-black text-sm font-bold font-sans">{penName}</h3>
          <h2 className="text-black text-xl font-bold font-sans">🙌</h2>
          <h3 className="text-black text-sm font-bold font-sans">{numVotes}</h3>
        </div>
        <div className="flex justify-center pb-3 text-black"></div>
      </div>
      {showModal ? (
        <div
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto max-h-full"
        >
          <div className="relative max-w-full max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-start justify-between p-5 border-b rounded-t">
                
                <VotesCompleteButton
                  mainThreadId={mainThreadIdParam}
                  branchThreadId={branchThreadIdParam}
                  votedBranchThread={votedBranchThread}
                  currentUserId={currentUserId}
                  numVotes={numVotes}
                />
                <button
                  onClick={closeModalEvent}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                  data-modal-hide="defaultModal"
                >
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

              <div className="p-6 space-y-6">
                <p className="text-base font-mono text-gray-700">
                  Branch Story
                </p>
              </div>
              <form onSubmit={mergeBranchThreadToMainThread}>
                <label
                  htmlFor="text-input"
                  className="block mb-3 text-md font-mono text-gray-900"
                >
                  <textarea
                    name="branchContext"
                    id="text-input"
                    rows="15"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    readOnly
                    value={branchText}
                  ></textarea>
                </label>
                <div className="flex items-stretch justify-between px-5 pt-1 pb-3 border-gray-200 rounded-b">
                  {currentUserId === userId || currentUserId === ownerUserId ? (
                    <Button
                      type="button"
                      text="Delete"
                      onClick={deleteBranchThread}
                    />
                  ) : null}
                  {currentUserId === ownerUserId ? (
                    <Button type="submit" text="Merge" />
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SimpleProfileCardInfo;
