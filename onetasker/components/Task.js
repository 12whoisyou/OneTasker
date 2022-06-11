import React, { useState, useEffect } from "react";

//! Can take empty
//! Too long task can still be sumbmittet
//! X button not working

export default function Home({ id, task, deleteTask }) {
  return (
    <div
      key={id}
      className="w-full my-5 bg-amber-200 p-3 flex 
         responsive-text shadow"
    >
      {task}

      <button
        className="ml-auto my-auto pl-5"
        onClick={() => {
          deleteTask(id);
        }}
      >
        x
      </button>
    </div>
  );
}
