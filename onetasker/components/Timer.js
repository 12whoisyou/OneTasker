import React, { useState, useEffect } from "react";

let secondsUpdated = 0;
let minutesUpdated = 0;
let timeout = null;

export default function Timer({ timerOn, setTimerOn }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  secondsUpdated = seconds;
  minutesUpdated = minutes;

  const startInterval = () => {
    const timeout = setInterval(() => {
      setSeconds((seconds) => seconds + 1);

      if (secondsUpdated === 59) {
        setSeconds(0);
        setMinutes((minutes) => minutes + 1);
        if (minutesUpdated === 1) {
          setTimerOn(false);
          clearInterval(timeout);
        }
      }
    }, 1000);

    return () => clearInterval(timeout);
  };

  useEffect(startInterval, []);

  return (
    <h1 className="text-7xl">
      {minutes}:{seconds}
    </h1>
  );
}
