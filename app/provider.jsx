"use client";

import { SessionProvider } from "next-auth/react";

const Provider = ({ children }) => {
  return (
    <SessionProvider className="flex flex-col h-sreen overflow-hidden">
      {children}
    </SessionProvider>
  );
};

export default Provider;
