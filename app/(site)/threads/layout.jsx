import React from 'react'

export default function ThreadsLayout({children}) {
  return (
    <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 m-1">
            {children}
        </div>
    </div>
  )
}