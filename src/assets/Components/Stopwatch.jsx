import React, { useState, useRef } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(true);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(true);
    setTime(0);
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="stopwatch">
      <h2>Timer</h2>
      <div className="time">
        {formatTime(time)}
      </div>
      <div className="buttons">
        {!isActive && isPaused && <button onClick={handleStart} className="start-btn">Start</button>}
        {isActive && !isPaused && <button onClick={handlePause} className="pause-btn">Pause</button>}
        {!isActive && !isPaused && <button onClick={handleStart} className="start-btn">Resume</button>}
        <button onClick={handleReset} className="reset-btn">Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
