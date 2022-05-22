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
      console.log("counter: ", myCounter); // counter always return 0 but myCounter the updated value
      if (myCounter === 10) clearInterval(timeout);
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="w-32 h-16 pt-5 mx-auto text-center bg-amber-400 rounded">
      <h1 className="">
        {counter}
      </h1>
      </div>

      <button
        className="w-32 mx-auto bg-amber-400 rounded"
        onClick={startInterval}
      >
        start
      </button>
    </div>
  );
}
