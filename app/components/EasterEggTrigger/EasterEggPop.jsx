import React, { useState, useEffect } from "react";

const EasterEggPop = ({ children }) => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    let timer;
    if (showImage) {
      timer = setTimeout(() => {
        setShowImage(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [showImage]);

  const handleNoelClick = (e) => {
    e.preventDefault();
    setShowImage(true);
  };

  return (
    <>
      {showImage && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center z-50">
          <img
            src="/sammember.png"
            alt="Image"
            className="max-w-full max-h-full"
          />
        </div>
      )}
      <span onClick={handleNoelClick} className="text-4xl">
        {children}
      </span>
    </>
  );
};

export default EasterEggPop;
