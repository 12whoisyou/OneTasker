import React, { useState, useEffect } from "react";
import Timer from "../components/Timer.js";

export default function TimerPage() {
  const [timerOn, setTimerOn] = useState(true);
  const [currentTask, setCurrentTask] = useState("");
  const [resetTimer, doResetTimer] = useState(false);

  useEffect(() => {
    const firstTask = JSON.parse(localStorage.getItem("Tasks"))[0];
    setCurrentTask(firstTask);
  }, []);

  const doneTask = () => {
    let Tasks = JSON.parse(localStorage.getItem("Tasks"));
    Tasks.shift();
    localStorage.setItem("Tasks", JSON.stringify(Tasks));

    setCurrentTask(JSON.parse(localStorage.getItem("Tasks"))[0]);
    doResetTimer((resetTimer) => !resetTimer);
    setTimerOn(true);
  };

  const skipTask = () => {
    let Tasks = JSON.parse(localStorage.getItem("Tasks"));
    Tasks.push(Tasks.shift());
    localStorage.setItem("Tasks", JSON.stringify(Tasks));

    setCurrentTask(JSON.parse(localStorage.getItem("Tasks"))[0]);
    doResetTimer((resetTimer) => !resetTimer);
    setTimerOn(true);
  };

  return (
    <div className="flex flex-col gap-5">
      <div
        className="px-auto py-3 text-center bg-[#FFE479]
        shadow"
      >
        <Timer
          timerOn={timerOn}
          setTimerOn={setTimerOn}
          resetTimer={resetTimer}
        />
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
      </div>
    </div>
  );
}
