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
    <>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <button onClick={startInterval}>{counter}</button>
    </>
  );
}
