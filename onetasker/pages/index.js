import React, { useState, useEffect } from "react";
import Task from "../components/Task.js";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const submitTask = () => {
    //Is task valid?
    if (input.trim().length === 0 || tasks.some((task) => task == input)) {
      return;
    }

    setTasks((tasks) => [...tasks, input]);
    localStorage.setItem("Tasks", JSON.stringify([input, ...tasks]));
    setInput("");
  };

  const deleteTask = (thisTask) => {
    const updatedTasks = tasks.filter((task) => task != thisTask);
    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };
  const moveTask = (task, up = false) => {
    let updatedTasks = tasks.filter((task) => task != "This shit works?!!!!");
    console.log(updatedTasks);
    const fromIndex = updatedTasks.indexOf(task);
    const toIndex = fromIndex + (up ? -1 : 1);
    updatedTasks.splice(toIndex, 0, updatedTasks.splice(fromIndex, 1)[0]);
    console.log(updatedTasks, toIndex);
    setTasks((tasks) => updatedTasks);
  };

  useEffect(() => {
    if (localStorage.getItem("Tasks") !== null) {
      const loadedTasks = JSON.parse(localStorage.getItem("Tasks"));
      setTasks(loadedTasks);
      console.log("loaded");
    }
  }, []);

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
        {tasks.map((task) => (
          <Task
            task={task}
            deleteTask={deleteTask}
            moveTask={moveTask}
            key={task}
          />
        ))}
      </ol>
    </div>
  );
}
