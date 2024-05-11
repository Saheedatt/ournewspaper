import React, { useState, useEffect } from "react";

function Opinions() {
  const [lastUpdateTimestamp, setLastUpdateTimestamp] = useState(null);
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    const storedTimestamp = localStorage.getItem("lastUpdateTimestamp");
    const currentTime = new Date().getTime();
    const thirtyDaysInMilliseconds = 30 * 24 * 60 * 60 * 1000;

    if (storedTimestamp) {
      setLastUpdateTimestamp(parseInt(storedTimestamp, 10));
      const elapsedTime = currentTime - parseInt(storedTimestamp, 10);
      if (elapsedTime < thirtyDaysInMilliseconds) {
        setRemainingTime(thirtyDaysInMilliseconds - elapsedTime);
      } else {
        setRemainingTime(0);
      }
    } else {
      localStorage.setItem("lastUpdateTimestamp", currentTime);
      setLastUpdateTimestamp(currentTime);
      setRemainingTime(thirtyDaysInMilliseconds);
    }
  }, []);

  useEffect(() => {
    if (remainingTime > 0) {
      const timer = setInterval(() => {
        setRemainingTime((prevTime) => Math.max(0, prevTime - 1000));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [remainingTime]);

  return (
    <div className="container mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Talk your shit!</h1>
      {remainingTime > 0 ? (
        <p className="text-lg mb-4">
          This page is under construction. Please check back later for updates.
        </p>
      ) : (
        <p className="text-lg mb-4 font-bold pt-10">
          Developer failed to update website. Sigh...
        </p>
      )}
      {remainingTime > 0 && (
        <div className="text-xl pt-10 font-bold">
          <span className="mr-1 px-3 border-2 border-solid border-black">
            {Math.floor(remainingTime / (24 * 60 * 60 * 1000))}
          </span>{" "}
          days
          <span className="mx-1">:</span>
          <span className="mr-1 px-3 border-2 border-solid border-black">
            {Math.floor(
              (remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
            )}
          </span>{" "}
          hours
          <span className="mx-1">:</span>
          <span className="mr-1 px-3 border-2 border-solid border-black">
            {Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000))}
          </span>{" "}
          minutes
          <span className="mx-1">:</span>
          <span className="px-3 border-2 border-solid border-black">
            {Math.floor((remainingTime % (60 * 1000)) / 1000)}
          </span>{" "}
          seconds
        </div>
      )}
    </div>
  );
}

export default Opinions;
