import Image from "next/image";
import { useEffect, useState } from "react";

export default function VotesCompleteButton({ mainThreadId, branchThreadId }) {
  const [vote, setVote] = useState(0);
  const [voted, setVoted] = useState(false);
  const [thread, setThread] = useState("");
  const [mainThread, setMainThread] = useState(null);

  useEffect(() => {
    const endpoint = `/api/threads/${mainThreadId}`;

    fetch(endpoint, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ mainThread }) => {
        setMainThread(mainThread);
        const phaseStage = mainThread.phaseStage;
        const branchThread = Object.values(phaseStage).find(
          (thread) => thread.id === branchThreadId
        );
        setThread(branchThread);
      })
      .catch((error) => {
        console.error("Error fetching threads:", error);
      });
  }, []);

  const voteBranchThread = () => {
    const endpoint = `/api/threads/branchThread`;
    const method = "PATCH";
    const body = {
      branchthreadId: branchThreadId,
      vote: true,
    };

    return fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  const unVoteBranchThread = () => {
    const endpoint = `/api/threads/branchThread`;
    const method = "PATCH";
    const body = {
      branchthreadId: branchThreadId,
      vote: false,
    };

    return fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  const votesSubmit = () => {
    const voteAction = voted ? unVoteBranchThread : voteBranchThread;

    voteAction()
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setVote(data.votes);
          setVoted(!voted);
        }
        if (mainThread) {
          const updatedBranchThread = Object.values(mainThread.phaseStage).find(
            (thread) => thread.id === branchThreadId
          );
          setThread(updatedBranchThread);
        }
      })
      .catch((error) => {
        console.error("Error updating vote:", error);
      });
  };

  return (
    <>
      <button
        onClick={votesSubmit}
        className="button float-right fixed bottom-28 right-2.5 z-50"
      >
        {voted ? (
          <Image
            width={10}
            height={10}
            src="/voted.png"
            alt="heart"
            className="w-12 h-12 mr-2"
          />
        ) : (
          <Image
            width={10}
            height={10}
            src="/vote.png"
            alt="heart"
            className="w-12 h-12 mr-2"
          />
        )}
        <span>{vote}</span>
      </button>
    </>
  );
}