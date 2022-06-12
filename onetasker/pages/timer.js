import React, { useState, useEffect } from "react";

let secondsUpdated = 0;
let minutesUpdated = 0;
let timeout = null;
export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  //The timer start automaticlly, so we got to cancel it
  useEffect(() => {
    console.log(localStorage.getItem("Tasks"));
    return () => clearInterval(timeout);
  }, []);

  secondsUpdated = seconds;
  minutesUpdated = minutes;

  const startInterval = () => {
    timeout = setInterval(() => {
      setSeconds((seconds) => seconds + 1);

      // seconds always return 0 but secondsUpdated won't
      if (secondsUpdated === 59) {
        setSeconds(0);
        setMinutes((minutes) => minutes + 1);
        if (minutesUpdated == 9) {
          clearInterval(timeout);
        }
      }
    }, 1000);
  };

  const doneTask = () => {
    setSeconds(0);
    setMinutes(0);
  };

  return (
    <div className="flex flex-col gap-5">
      <div
        className="px-auto h-16 py-3 text-center bg-[#FFE479]
        shadow"
      >
        <h1 className="text-4xl">
          {minutes}:{seconds}
        </h1>
      </div>

      <div className="flex gap-5">
        <button
          className="flex-auto bg-[#FF79C9] 
          shadow text-2xl"
          onClick={() => {
            setTimerOn(!timerOn);
            if (!timerOn) startInterval();
            if (timerOn) clearInterval(timeout);
          }}
        >
          {timerOn ? "Stop" : "Start"}
        </button>
        <button
          className="flex-auto bg-[#FF79C9] 
          shadow text-2xl"
          onClick={doneTask}
        >
          Done Task
        </button>
      </div>
    </div>
  );
}
