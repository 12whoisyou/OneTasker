import React, { useState, useEffect } from "react";

let myCounter = 0;
let timeout = null;
export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  //The timer start automaticlly, so we got to cancel it
  useEffect(() => {
    return () => clearInterval(timeout);
  }, []);

  myCounter = seconds;
  const startInterval = () => {
    timeout = setInterval(() => {
      setSeconds((seconds) => seconds + 1);

      // seconds always return 0 but myCounter the updated value
      if (myCounter === 59) {
        setSeconds(0);
        setMinutes((minutes) => minutes + 1);
      }
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-5">
      <div
        className="w-32 h-16 pt-5 mx-auto text-center bg-[#FFE479]
        drop-shadow-[7px_7px_0_rgba(0,0,0,0.25)]"
      >
        <h1 className="text-4xl">
          {minutes}:{seconds}
        </h1>
      </div>

      <button
        className="w-32 mx-auto bg-[#FF79C9] 
        drop-shadow-[7px_7px_0_rgba(0,0,0,0.25)]
        text-2xl"
        onClick={() => {
          setTimerOn(!timerOn);
          if (!timerOn) startInterval();
          if (timerOn) clearInterval(timeout);
        }}
      >
        {timerOn ? "Stop" : "Start"}
      </button>
    </div>
  );
}
