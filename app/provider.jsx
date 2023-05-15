'use client'

import { SessionProvider } from 'next-auth/react'

const Provider = ({ children }) => {
  return <SessionProvider class="flex flex-col h-sreen overflow-hidden">{children}</SessionProvider>
}

export default Provider