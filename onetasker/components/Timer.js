import React, { useState, useEffect } from "react";

export default function Timer({ timerOn, setTimerOn, resetTimer }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (timerOn) {
      const timer = setTimeout(() => {
        if (seconds < 59) {
          setSeconds((seconds) => seconds + 1);
        } else {
          setMinutes((minutes) => minutes + 1);
          setSeconds(0);
          if (minutes < 9) {
            setTimerOn(false);
          }
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [seconds, timerOn]);

  useEffect(() => {
    setSeconds(0);
    setMinutes(0);
  }, [resetTimer]);

  return (
    <h1 className="text-7xl">
      {minutes}:{seconds}
    </h1>
  );
}
