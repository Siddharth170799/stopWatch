import React, { useEffect, useRef, useState } from "react";

const Practice = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);
  const [displayStart, setDisplayStart] = useState(true);
  const [displayPause, setDisplayPause] = useState(false);
  const [displayReset, setDisplayReset] = useState(false);
  const [displayReverse, setDisplayReverse] = useState(false);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    setDisplayPause(true);
    setDisplayReset(true);
    setDisplayReverse(true);
    setDisplayStart(false);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setSeconds(0);
    setMinutes(0);
    setDisplayStart(true);
    setDisplayReset(false);
    setDisplayReverse(false);
    setDisplayPause(false);
  };

  const pauseTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setDisplayPause(false);
    setDisplayReset(true);
    setDisplayReverse(true);
    setDisplayStart(true);
  };

  useEffect(() => {
    if (seconds > 59) {
      setSeconds(0);
      setMinutes((prev) => prev + 1);
    }
    if (seconds == 0) {
      reverseTimer();
    }
  }, [seconds]);

  const reverseTimer = () => {
    if (displayReverse) {
      setDisplayStart(false);
    }
    if (minutes > 0) {
      if (seconds == 0) {
        setSeconds(59);
        setMinutes((minutes) => minutes - 1);
      } else {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
          setSeconds((seconds) => seconds - 1);
        }, 1000);
      }
    } else {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
        }
      }, 1000);
      if (seconds == 0) {
        clearInterval(timerRef.current);

        setDisplayPause(false);
        setDisplayReset(false);
        setDisplayReverse(false);
        setDisplayStart(true);
      }
    }
  };

  return (
    <div className="timer-container">
      <div className="timer-display">
        {minutes < 10 ? `0${minutes}` : minutes} :{" "}
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div className="button-group">
        {displayStart && (
          <button className="btn start" onClick={startTimer}>
            Start
          </button>
        )}
        {displayPause && (
          <button className="btn pause" onClick={pauseTimer}>
            Pause
          </button>
        )}
        {displayReset && (
          <button className="btn reset" onClick={resetTimer}>
            Reset
          </button>
        )}
        {displayReverse && (
          <button className="btn reverse" onClick={reverseTimer}>
            Reverse
          </button>
        )}
      </div>
    </div>
  );
};

export default Practice;
