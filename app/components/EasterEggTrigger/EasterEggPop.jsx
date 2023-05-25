// import necessary hooks from React
import React, { useState, useEffect } from 'react';

// EasterEggPop is a functional component that takes children as a prop.
const EasterEggPop = ({ children }) => {
  // showImage state is used to control the display of an image.
  const [showImage, setShowImage] = useState(false);

  // useEffect hook is used for setting a timer to hide the image after a specific time.
  useEffect(() => {
    let timer;
    if (showImage) {
      timer = setTimeout(() => {
        setShowImage(false);
      }, 1000); 
    }
    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, [showImage]);

  // handleNoelClick function sets the showImage state to true.
  const handleNoelClick = (e) => {
    e.preventDefault();
    setShowImage(true);
  };

  return (
    <>
      // Show image if showImage state is true
      {showImage && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center z-50">
          <img src="/sammember.png" alt="Image" className="max-w-full max-h-full" />
        </div>
      )}
      // onClick event calls handleNoelClick function to display the image
      <span onClick={handleNoelClick} className='text-4xl'>
        {children}
      </span>
    </>
  );
};

export default EasterEggPop;
