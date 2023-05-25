import Image from "next/image";
import { useEffect, useState } from "react";

export default function VotesCompleteButton({
  mainThreadId,
  branchThreadId,
  votedBranchThread,
  currentUserId,
  numVotes,
}) {
  const [votes, setVotes] = useState(numVotes);
  const [voted, setVoted] = useState(
    votedBranchThread.includes(branchThreadId)
  );

  //Use Effect for fetching votes data
  useEffect(() => {
    const endpoint = `/api/threads/${mainThreadId}`;
    fetch(endpoint, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ mainThread }) => {
        const mainThreadPhaseStage = mainThread.phaseStage;
        const targetBranchThread = mainThreadPhaseStage[branchThreadId];
        const votesData = targetBranchThread["votes"];
        setVotes(votesData);
      });
  }, [voted]);

  // Vote and Unvote Functions
  const votesSubmit = () => {
    setVoted((voted) => !voted);
    if (voted === false) {
      const endpoint = `/api/threads/mainThread/vote?mainThreadId=${mainThreadId}&branchThreadId=${branchThreadId}&userId=${currentUserId}`;
      fetch(endpoint, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(({ votedMainThread }) => {
          const votedMainThreadPhaseStage = votedMainThread.phaseStage;
          const targetBranchThread = votedMainThreadPhaseStage[branchThreadId];
          const voteData = targetBranchThread["votes"];
          setVotes(voteData);
          location.reload();
        });
    } else {
      const endpoint = `/api/threads/mainThread/unvote?mainThreadId=${mainThreadId}&branchThreadId=${branchThreadId}&userId=${currentUserId}`;
      fetch(endpoint, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(({ unvotedMainThread }) => {
          const unvotedMainThreadPhaseStage = unvotedMainThread.phaseStage;
          const targetBranchThread =
            unvotedMainThreadPhaseStage[branchThreadId];
          const unvoteData = targetBranchThread["votes"];
          setVotes(unvoteData);
          location.reload();
        });
    }
  };

  return (
    <>
      <button
        onClick={votesSubmit}
        className="button float-right fixed bottom-40 right-5 z-50"
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
        <span>{votes}</span>
      </button>
    </>
  );
}
