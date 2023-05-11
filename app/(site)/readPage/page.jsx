import React from "react";
import ReadTextBox from "./ReadTextBox";

const ReadPage = () => {
  const textBoxData = [
    {
      userid: "User 1",
      threadid: "Thread 1",
      genre: "Genre 1",
      penName: "Pen Name 1",
      mainCharacter: "Main Character 1",
    },
    {
        userid: "User 2",
        threadid: "Thread 1",
        genre: "Genre 1",
        penName: "Pen Name 2",
        mainCharacter: "Main Character 1",
      },
      {
        userid: "User 3",
        threadid: "Thread 1",
        genre: "Genre 1",
        penName: "Pen Name 3",
        mainCharacter: "Main Character 1",
      },
      {
        userid: "User 4",
        threadid: "Thread 1",
        genre: "Genre 1",
        penName: "Pen Name 4",
        mainCharacter: "Main Character 1",
      },
      {
        userid: "User 5",
        threadid: "Thread 1",
        genre: "Genre 1",
        penName: "Pen Name 5",
        mainCharacter: "Main Character 1",
      },
  ];

  return (
    <div className="container mx-auto">
      {textboxData.map((userStory, index) => (
        <div
          key={index}
          className={`user-story-container user-story-${index} bg-white p-6 rounded-md shadow-md`}
        >
          <h2 className="text-xl font-bold mb-4">
            {userStory.penName}'s Story
          </h2>
          <ReadTextBox {...userStory} />
        </div>
      ))}
    </div>
  );
};

export default ReadPage;
