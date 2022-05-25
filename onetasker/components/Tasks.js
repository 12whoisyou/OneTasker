import React, { useState } from "react";

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
            console.log(tasks);
            setTasks([...tasks, input]);
          }}
        >
          +
        </button>
      </div>

      <ol className="w-100 mx-auto list-decimal text-3xl">
        {tasks.map((task) => (
          <li key={tasks.length}>task</li>
        ))}
      </ol>
    </div>
  );
}
