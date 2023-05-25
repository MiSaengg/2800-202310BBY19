"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div className="flex flex-col justify-center items-center">
          {session?.user?.image ? (
            <div className="relative h-12 w-12">
              <Image
                src={session.user.image}
                alt={session.user.name}
                className="inline-block rounded-full"
                fill
              />
            </div>
          ) : (
            <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
              <svg
                className="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          )}
          <div>
            <button
              className="text-sm font-medium tracking-wider uppercase text-stone-500"
              onClick={() => {
                signOut({ redirect: true, callbackUrl: "/" });
                localStorage.removeItem("userID");
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <button
      className="text-sm font-medium tracking-wider uppercase text-stone-500 text-center"
      onClick={() => signIn()}
    >
      Sign In
    </button>
  );
};

export default SignInButton;
