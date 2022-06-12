import React, { useState, useEffect } from "react";
import Task from "../components/Task.js";

//! Can take empty
//! Too long task can still be sumbmittet
//! X button not working

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const submitTask = () => {
    const prevTasks = tasks;
    setTasks((tasks) => [input, ...tasks]);
    setInput("");
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task, index) => index != id);
    setTasks(updatedTasks);
  };

  const saveTasks = () => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  };

  useEffect(saveTasks, [tasks]);
  return (
    <div className="flex flex-col gap-5">
      <button
        className="w-40 mx-auto bg-[#FF79C9] 
        drop-shadow-[7px_7px_0_rgba(0,0,0,0.25)]
        text-2xl"
        onClick={() => {
          window.location.href = "/timer";
        }}
      >
        start
      </button>
      <div
        className="mx-auto flex gap-5 
        shadow
        text-xl"
      >
        <input
          className="w-80"
          placeholder="Add Task"
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode == 13) {
              submitTask();
            }
          }}
        />
        <button
          className="w-20 mx-auto bg-[#FF79C9] 
        text-2xl"
          onClick={submitTask}
        >
          +
        </button>
      </div>

      <ol className="w-100 text-3xl">
        {tasks.map((task, id) => (
          <Task id={id} task={task} deleteTask={deleteTask} key={id} />
        ))}
      </ol>
    </div>
  );
}
