import Image from "next/image";
import { useEffect, useState } from "react";

export default function VotesCompleteButton({
  mainThreadId,
  branchThreadId,
  votedBranchThread,
  currentUserId,
  numVotes,
}) {
  // Set the initial state of votes and whether the user has voted or not.
  const [votes, setVotes] = useState(numVotes);
  const [voted, setVoted] = useState(
    votedBranchThread.includes(branchThreadId)
  );

  // Use an effect to fetch the updated votes count whenever the user votes or unvotes.
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
        setVotes(votesData); // Update the votes count in state.
      });
  }, [voted]);

  const votesSubmit = () => {
    setVoted((voted) => !voted); // Toggle the voted state.

    // If the user has not voted yet, make a PATCH request to vote.
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
          setVotes(voteData); // Update the votes count in state.
          location.reload(); // Reload the page to reflect changes.
        });

      // If the user has already voted, make a PATCH request to unvote.
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
          setVotes(unvoteData); // Update the votes count in state.
          location.reload(); // Reload the page to reflect changes.
        });
    }
  };

  return (
    // Display a button with a voting icon that changes depending on whether the user has voted or not.
    // The button's onClick handler calls the 'votesSubmit' function defined above.
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
        {/* Display the current number of votes. */}
        <span>{votes}</span>
      </button>
    </>
  );
}
