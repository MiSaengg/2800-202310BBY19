"use client";

// Importing necessary modules and components
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Main function component
export default function AddPenName() {
  // Use the Next.js authentication hook to get user session
  const { data: session } = useSession();

  // Use Next.js useRouter hook for navigation
  const router = useRouter();

  // Declare state variable for handling pen name errors
  const [penNameError, setPenNameError] = useState("");

  // Handler function for pen name submission
  const handlePenNameSubmit = async (event) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get pen name from form and remove white spaces
    const refinedPenName = event.target.penName.value.replace(/\s/g, "");

    // Create data object to send in the request
    const data = {
      email: session.user.email,
      penName: refinedPenName,
    };

    // Convert data object to JSON
    const JSONdata = JSON.stringify(data);

    // Define API endpoint
    const endpoint = `api/users/${session.user.email}`;

    // Define fetch options
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    // Make fetch request and wait for the response
    const response = await fetch(endpoint, options);

    // Parse the response to JSON
    const { result, error } = await response.json();

    // If there is no error, navigate to the threads page
    if (!error) {
      router.push("/threads");
    } else {
      // If there is an error, set pen name error
      setPenNameError("This penName is already Taken !");
    }
  };

  // Return JSX for rendering
  // The rest of the code inside return is for rendering the form 
  // and the error message if there is one
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
