import React, { useState, useEffect } from "react";

let secondsUpdated = 0;
let minutesUpdated = 0;
let timeout = null;

export default function Timer({ timerOn, setTimerOn }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const firstTask = JSON.parse(localStorage.getItem("Tasks"))[0];
    setCurrentTask(firstTask);
    console.log(firstTask, JSON.parse(localStorage.getItem("Tasks")));
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
        if (minutesUpdated == 1) {
          setTimerOn(false);
          clearInterval(timeout);
        }
      }
    }, 1000);
  };

  const doneTask = () => {
    let Tasks = JSON.parse(localStorage.getItem("Tasks"));
    Tasks.shift();
    localStorage.setItem("Tasks", JSON.stringify(Tasks));

    setCurrentTask(JSON.parse(localStorage.getItem("Tasks"))[0]);
    setSeconds(0);
    setMinutes(0);
  };

  const skipTask = () => {
    let Tasks = JSON.parse(localStorage.getItem("Tasks"));
    Tasks.push(Tasks.shift());
    localStorage.setItem("Tasks", JSON.stringify(Tasks));

    setCurrentTask(JSON.parse(localStorage.getItem("Tasks"))[0]);
    setSeconds(0);
    setMinutes(0);
  };

  return (
    <div className="flex flex-col gap-5">
      <div
        className="px-auto py-3 text-center bg-[#FFE479]
        shadow"
      >
        <h1 className="text-7xl">
          {minutes}:{seconds}
        </h1>
        <h1 className="text-4xl mt-5">{currentTask}</h1>
      </div>

      <div className="flex gap-5">
        <button
          className="flex-auto bg-[#FF79C9] 
          shadow text-2xl"
          onClick={skipTask}
          hidden={timerOn}
        >
          Skip Task
        </button>
        <button
          className="flex-auto bg-[#FF79C9] 
          shadow text-2xl"
          onClick={doneTask}
        >
          Done Task
        </button>
        <button onClick={startInterval}>startInter</button>
      </div>
    </div>
  );
}
