import React, { useState, useEffect, useRef } from "react";

const Node = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If the progress bar is visible in the viewport, set isVisible to true
        setIsVisible(entry.isIntersecting);
      });
    });

    // Observe the progress bar element
    observer.observe(progressBarRef.current);

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // If the progress bar is visible, start the animation
    if (isVisible) {
      const timeout = setTimeout(() => {
        setProgress(75); // Set the progress to 45% after the delay
      }, 800);

      return () => clearTimeout(timeout); // Clear the timeout on unmount
    }
  }, [isVisible]);

  return (
    <div>
      <div
        className="w-full bg-gray-200 rounded-full dark:bg-gray-700"
        ref={progressBarRef} // Reference to the progress bar element
      >
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${progress}%`, transition: "width 1s ease-in-out" }} // CSS transition for smooth width change
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Node;
