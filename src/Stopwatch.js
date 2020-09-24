import React, { useState } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [thisInterval, setThisInterval] = useState(null);
  const [active, setActive] = useState(false);

  function getCenti() {
    return `00${seconds % 1000}`.slice(-3, -1);
  }

  function getSecond() {
    return `0${parseInt(seconds / 1000, 10) % 60}`.slice(-2);
  }

  function getMinute() {
    return `0${parseInt(seconds / 1000 / 60, 10) % 60}`.slice(-2);
  }

  function start() {
    if (!active && thisInterval === null) {
      const interval = setInterval(() => {
        setSeconds((prev) => prev + 10);
      }, 10);
      setThisInterval(interval);
      setActive(true);
    }
  }

  function stop() {
    if (active) {
      clearInterval(thisInterval);
      setInterval(null);
      setActive(false);
    }
  }

  function reset() {
    setSeconds(0);
  }

  function resume() {
    if (!active && thisInterval !== null) {
      const interval = setInterval(() => {
        setSeconds((prev) => prev + 10);
      }, 10);
      setThisInterval(interval);
      setActive(true);
    }
  }

  return (
    <div className="stopwatch">
      <p>
        {getMinute()}:{getSecond()}:{getCenti()}
      </p>

      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>
      <button onClick={resume}>resume</button>
    </div>
  );
}

export default Stopwatch;
