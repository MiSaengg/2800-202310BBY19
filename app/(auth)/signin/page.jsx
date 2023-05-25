"use client";

// Importing required dependencies and components
import { getCsrfToken, getProviders } from "next-auth/react"; // For authentication
import GoogleLoginButton from "app/components/auth/GoogleSignInButton"; // Google Sign-In button component
import Image from "next/image"; // To import the Image component from next.js for efficient image serving

// SignInPage component
const SignInPage = () => {
  return (
    // A simple div container for the Sign In page
    <div>
      // A div for displaying the logo image 
      <div className="flex flex-col items-center justify-round">
        // Image component for the logo with styling and alt text
        <Image
          style={{ borderRadius: "20px", width: "200px", height: "200px" }}
          src={"/SAM_Logo_Final.png"}
          width={400}
          height={400}
          alt="SAM LOGO"
        />
      </div>
      
      // A div for the caption 'Start your story' 
      <div className="mx-auto my-10 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        Start your story
      </div>
      
      // The GoogleLoginButton component is used to enable users to sign-in with their Google accounts
      <GoogleLoginButton />
    </div>
  );
};

// Exporting the SignInPage component so it can be used in other parts of the app
export default SignIn
