"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddPenName() {
  const { data: session } = useSession();
  const router = useRouter();
  const [penNameError, setPenNameError] = useState("");

  // Pen Name Submit Function
  const handlePenNameSubmit = async (event) => {
    event.preventDefault();

    const refinedPenName = event.target.penName.value.replace(/\s/g, "");
    const data = {
      email: session.user.email,
      penName: refinedPenName,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = `api/users/${session.user.email}`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const { result, error } = await response.json();

    if (!error) {
      router.push("/threads");
    } else {
      setPenNameError("This penName is already Taken !");
    }
  };

  return (
    <main className="flex min-h-full overflow-hidden pt-16 sm:py-28">
      <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
        <div className="relative mt-12 sm:mt-16">
          <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">
            Enter Your Pen Name !
          </h1>
        </div>
        <div className="flex-auto bg-white py-10 px-4 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-24">
          <div className="flex justify-center">
            <form onSubmit={handlePenNameSubmit}>
              <label className="block">
                <input
                  type="text"
                  name="penName"
                  className="mt-1 px-4 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Your Pen Name"
                  required
                />
              </label>
              <button
                type="submit"
                className="px-12 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm mt-6"
              >
                Save Changes
              </button>
            </form>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <span style={{ color: "red" }}>{penNameError}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
