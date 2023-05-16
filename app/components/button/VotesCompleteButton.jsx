import { data } from "autoprefixer";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function VotesCompleteButton({
  mainThreadId,
  branchThreadId,
}) {
  const [vote, setVote] = useState(0);
  const [voted, setVoted] = useState(false);
  const [thread, setThread] = useState("");

  useEffect(() => {
    const endpoint = `/api/threads/${mainThreadId}`;

    fetch(endpoint, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({mainThread}) => {
        const phaseStage = mainThread.phaseStage;
        const branchThread = Object.values(phaseStage).find(
          (thread) => thread.id === branchThreadId,
          setThread(branchThread)
        );
        console.log(branchThread);
      })
      .catch((error) => {
        console.error("Error fetching threads:", error);
      });
  }, []);

  const votesSubmit = () => {
    const endpoint = `/api/threads/${mainThreadId}`;
    const method = voted ? "PATCH" : "PATCH";
  
    fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ thread }) => {
        setVote(thread.votes);
        setVoted(!voted);
      })
      .then(() => {
        const updatedBranchThread = Object.values(thread.phaseStage).find(
          (thread) => thread.id === branchThreadId
        );
        setThread(updatedBranchThread);
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
