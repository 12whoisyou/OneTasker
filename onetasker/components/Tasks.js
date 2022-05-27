import React, { useState } from "react";

//! Can take empty
//! Too long don't
export default function Tasks() {
  const fake_list = ["blabla", "What is max charecter?", "Hello World"];

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col gap-5">
      <div className="mx-auto flex gap-5">
        <input
          className="w-80"
          placeholder="Add Task"
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className="w-20 mx-auto bg-[#FF79C9] 
        drop-shadow-[7px_7px_0_rgba(0,0,0,0.25)]
        text-2xl"
          onClick={() => {
            const prevTasks = tasks;
            setTasks((tasks) => [input, ...tasks]);
          }}
        >
          +
        </button>
      </div>

      <ol className="w-100 mx-auto text-3xl">
        {tasks.map((task, id) => (
          <li key={id} className="my-5 bg-white rounded-xl p-3 flex">
            {task}
            <div className="ml-auto pl-5">x</div>
          </li>
        ))}
      </ol>
    </div>
  );
}
