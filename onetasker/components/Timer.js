import React, { useState, useEffect } from "react";

export default function Timer({ timerOn, setTimerOn, resetTimer }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [savedTime, setSavedTime] = useState(10);

  useEffect(() => {
    if (localStorage.getItem("Timer") !== null) {
      setSavedTime(parseInt(localStorage.getItem("Timer")));
      //console.log(localStorage.getItem("Timer"), "Saved Time?");
    }
  }, []);

  useEffect(() => {
    if (timerOn) {
      const timer = setTimeout(() => {
        if (seconds < 59) {
          setSeconds((seconds) => seconds + 1);
        } else {
          setMinutes((minutes) => minutes + 1);
          setSeconds(0);
          if (minutes > savedTime - 2) {
            setTimerOn(false);
            const timeTotal = localStorage.getItem("Time");
            if (timeTotal !== null) {
              localStorage.setItem("Time", parseInt(timeTotal) + 10);
            } else {
              localStorage.setItem("Time", 10);
            }
          }
        }
      }, 10);

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
