// Importing required dependencies and components
import "../globals.css"; // Global styles for the app
import Link from "next/link"; // Component for enabling client-side transitions between routes in Next.js
import Provider from "../provider"; // The Provider component is likely a context provider for sharing state throughout the app
import { ChevronLeftIcon } from "@heroicons/react/24/outline"; // Icon component for the back arrow

// AuthLayout component
export default function AuthLayout({ children }) {
  return (
    // Provider for sharing state or functionality across the app
    <Provider>
      <main className="flex min-h-full overflow-hidden pt-16 sm:py-28">
        <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
          // Link to go back to the home page
          <Link
            href="/"
            className="flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors"
          >
            <ChevronLeftIcon className="w-5" /> {/* Back arrow icon */}
            <span className="uppercase font-medium">Home</span>
          </Link>

          // Header section
          <div className="relative mt-12 sm:mt-16">
            <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">
              Sign in to your account
            </h1>
          </div>

          // Container for children components, likely the forms and buttons for auth
          <div className="-mx-4 mt-6 flex-auto bg-white py-5 px-4 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-24">
            {children}
          </div>
        </div>
      </main>
    </Provider>
  );
}
