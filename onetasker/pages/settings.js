import React, { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState(10);

  const load = () => {
    const time = localStorage.getItem("Timer");
    if (time != null) {
      setTime(time);
    }
    console.log("Done");
  };

  const save = (e) => {
    localStorage.setItem("Timer", e.target.value);
  };
  useEffect(load, []);

  return (
    <div className="">
      <h1 className="responsive-text">Time per task </h1>{" "}
      <input onChange={(e) => save(e)} type="number" defaultvalue={time} />
    </div>
  );
}
