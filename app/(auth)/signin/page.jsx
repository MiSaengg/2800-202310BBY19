"use client";

import { getCsrfToken, getProviders } from "next-auth/react";
import GoogleLoginButton from "app/components/auth/GoogleSignInButton";
import Image from "next/image";
// SignIn Page
const SignInPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-round">
        <Image
          style={{ borderRadius: "20px", width: "200px", height: "200px" }}
          src={"/SAM_Logo_Final.png"}
          width={400}
          height={400}
          alt="SAM LOGO"
        />
      </div>
      <div className="mx-auto my-10 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        Start your story
      </div>
      <GoogleLoginButton />
    </div>
  );
};

export default SignInPage;
