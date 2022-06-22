import React from "react";

export default function Home() {
  const save = (e) => {
    localStorage.setItem("Timer", e.target.value);
  };

  return (
    <div className="">
      <h1>Time per task </h1> <input onChange={(e) => save(e)} type="number" />
    </div>
  );
}
