import React, { useState, useEffect } from "react";

//! Can take empty
//! Too long task can still be sumbmittet
//! X button not working

export default function Home({ task, deleteTask, moveTask }) {
  return (
    <div
      className="w-full my-5 bg-amber-200 p-3 flex 
         responsive-text shadow"
    >
      <div className="w-full">{task}</div>
      <button
        className="ml-auto my-auto pl-5"
        onClick={() => {
          moveTask(task, true);
        }}
      >
        ↑
      </button>
      <button
        className="ml-auto my-auto pl-5"
        onClick={() => {
          moveTask(task, false);
        }}
      >
        ↓
      </button>
      <button
        className="ml-auto my-auto pl-5"
        onClick={() => {
          deleteTask(task);
        }}
      >
        x
      </button>{" "}
    </div>
  );
}
