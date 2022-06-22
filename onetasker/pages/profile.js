import React, { useState, useEffect } from "react";

export default function Home() {
  const getTimes = () => {
    if (typeof window !== "undefined") {
      let time = localStorage.getItem("Time");
      if (time !== null) {
        time = parseInt(time);
        return [time * 60, time, time / 60];
      }
    }
    return [0, 0, 0];
  };

  const [times, setTimes] = useState([0, 0, 0]);
  useEffect(() => {
    setTimes(getTimes);
  }, []);

  return (
    <div className="">
      <h1>{times[0]} seconds</h1>
      <h1>{times[1]} minutes</h1>
      <h1>{times[2]} hours</h1>
    </div>
  );
}
