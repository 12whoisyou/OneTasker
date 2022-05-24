import React, { useState, useEffect } from "react";

let myCounter = 0;
let timeout = null;
export default function Timer() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    return () => clearInterval(timeout);
  }, []);

  myCounter = counter;
  const startInterval = () => {
    timeout = setInterval(() => {
      setCounter((counter) => counter + 1);
      // counter always return 0 but myCounter the updated value
      console.log("counter: ", myCounter);
      if (myCounter === 10) clearInterval(timeout);
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-5">
      <div
        className="w-32 h-16 pt-5 mx-auto text-center bg-[#FFE479]
        drop-shadow-[7px_7px_0_rgba(0,0,0,0.25)]"
      >
        <h1 className="">{counter}</h1>
      </div>

      <button
        className="w-32 mx-auto bg-[#FF79C9] 
        drop-shadow-[7px_7px_0_rgba(0,0,0,0.25)]"
        onClick={startInterval}
      >
        start
      </button>
    </div>
  );
}
