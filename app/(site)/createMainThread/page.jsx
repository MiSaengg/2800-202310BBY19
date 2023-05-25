"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Button from "./../../components/button/Button";

export default function SubmitMainThread() {
  const router = useRouter();
  const [userId, setUserId] = useState(null);
  const [pilot, setPilot] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dots, setDots] = useState("");
  const formRef = useRef();
  const [body, setBody] = useState("");
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

  //AI Generate function
  const handleAIGenerate = async (event) => {
    event.preventDefault();
    bodyRef.current = "";
    setBody("");
    setIsLoading(true);
    setShowButtons(false);

    const title = formRef.current.title.value;
    const genre = formRef.current.genre.value;
    const numberOfCharacters = formRef.current.numberOfCharacters.value;

    const endpoint = "https://api.openai.com/v1/completions";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-002",
        prompt: `Given title: ${title} , genre: ${genre} , and number of main characters: ${numberOfCharacters} , write a paragraph of only three sentences to start the story.`,
        temperature: 0.5,
        max_tokens: 100,
      }),
    };

    const response = await fetch(endpoint, options);

    const { choices, error } = await response.json();

    const body = choices[0].text;

    if (!error) {
      let index = 0;
      const typingTimer = setInterval(() => {
        bodyRef.current = bodyRef.current + body.charAt(index);
        setBody(bodyRef.current);
        index++;

        if (index >= body.length) {
          clearInterval(typingTimer);
          setPilot(body);
          setShowButtons(true);
        }
      }, 10);
    } else {
      setShowButtons(true);
    }
    setIsLoading(false);
  };

  //Thread Submit function
  const handleMainThreadSubmit = async (event) => {
    event.preventDefault();
    let submitConfirm = confirm("Are you ready to submit?");

    if (submitConfirm) {
      const data = {
        title: event.target.title.value,
        genre: [event.target.genre.value],
        pilot: event.target.pilot.value,
        content: {},
        contentBody: event.target.pilot.value,
        phaseStage: {},
        contentBody: event.target.pilot.value,
        mainCharacter: event.target.numberOfCharacters.value,
        tag: "Incomplete",
        likes: 0,
        phase: 1,
        userId: userId,
      };

      const JSONdata = JSON.stringify(data);

      const endpoint = "api/threads/mainThread";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };

      const response = await fetch(endpoint, options);

      const { thread, error } = await response.json();

      if (!error) {
        router.push(`/threads/${thread.id}`);
      }
    } else {
      return;
    }
  };

  return (
    <section>
      <div className="flex px-4 py-4">
        <form
          ref={formRef}
          onSubmit={handleMainThreadSubmit}
          className="w-full"
        >
          <div className="">
            <div className="max-w-50 px-3 mb-3">
              <label className="pl-1 block uppercase tracking-wide text-gray-700 text-xs font-mono mb-2">
                Title
                <span style={{ position: "relative", bottom: "5px" }}>*</span>
              </label>
              <input
                name="title"
                className="py-3 px-4 mb-2 appearance-none block w-full bg-gray-50 text-gray-700 border rounded leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Title of your story (1 - 100 letters)"
                pattern=".{1,100}"
                required
              />
            </div>
          </div>

          <div className="flex flex-row items-end mb-6">
            <div className="px-3 flex flex-col">
              <label className="pl-1 mb-2 block uppercase tracking-wide text-gray-700 font-mono text-xs">
                Genre
                <span style={{ position: "relative", bottom: "5px" }}>*</span>
              </label>

              <div className="relative">
                <select
                  name="genre"
                  className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  required
                >
                  <option value="">Select</option>
                  <option>thriller</option>
                  <option>fantasy</option>
                  <option>history</option>
                  <option>horror</option>
                  <option>crime</option>
                  <option>romance</option>
                  <option>psychology</option>
                  <option>sports</option>
                  <option>travel</option>
                  <option>comedy</option>
                  <option>science-fiction</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-1/3 px-3">
              <label className="pl-1 mb-2 block uppercase text-gray-700 font-mono text-xs">
                Number of Characters
                <span style={{ position: "relative", bottom: "5px" }}>*</span>
              </label>
              <input
                name="numberOfCharacters"
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="number"
                min="1"
                max="10"
                placeholder="10"
                required
              />
            </div>
          </div>

          <div className="w-full px-3">
            <label className="pl-1 mb-2 block uppercase tracking-wide text-xs font-mono text-gray-700">
              Main Story
              <span style={{ position: "relative", bottom: "5px" }}>*</span>
            </label>

            <textarea
              name="pilot"
              id="message"
              rows="9"
              className="mb-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your thoughts here..."
              required
              value={isLoading ? `Generating text${dots}` : body}
              onChange={(e) => setBody(e.target.value)}
              readOnly={isLoading}
            ></textarea>
          </div>
          <div className="flex flex-row justify-between">
            <div className="px-3">
              {showButtons && (
                <Button text="AI Generate" onClick={handleAIGenerate} />
              )}{" "}
            </div>
            <div className="px-3">
              {showButtons && <Button text="Upload" />}{" "}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
