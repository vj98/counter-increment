import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const [intervalId, setIntervalId] = useState(0);
  const [show, setShow] = useState(false);

  const incrementCounter = (val) => {
    setShow(val);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }

    const newIntervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    setIntervalId(newIntervalId);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span>{count}</span>
      <div>
        {!show && <button onClick={() => incrementCounter(true)}>Start</button>}
        {show && <button onClick={() => incrementCounter(false)}>Pause</button>}
        <button
          onClick={() => {
            incrementCounter(false);
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
