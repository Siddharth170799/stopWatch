// import React, { useRef, useState } from "react";

// const Practice = () => {
//     const [hours,setHours] = useState({a:0,b:0})
//   const [seconds, setSeconds] = useState(0);
//   const timerRef = useRef(null);

//   const startTimer = () => {
//     timerRef.current = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);
//   };
//   console.log(seconds);

//   const resetTimer = () => {
//     clearInterval(timerRef.current);
//     setSeconds(0);
//   };

//   const pauseTimer = ()=>{
//     clearTimeout(timerRef.current)
    
//   }
//   return (
//     <>
//       <div>{hours.a}{hours.b}:{seconds}</div>
//       <button onClick={startTimer}>Start</button>{" "}
//       <button onClick={resetTimer}>Reset</button>
//       <button onClick={pauseTimer}>Pause </button>
//     </>
//   );
// };

// export default Practice;
import React, { useEffect, useRef, useState } from "react";
 // Import the CSS file

const Practice = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(53);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null; // Reset timer reference
    setSeconds(0);
  };

  const pauseTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null; // Stop the timer
  };

  useEffect(()=>{
if(seconds > 59){
    setSeconds(0)
    setMinutes((prev)=> prev+1)
}
  },[seconds])

  return (
    <div className="timer-container">
      <div className="timer-display">
       {seconds < 60 ? `0${minutes}` : minutes   }: {seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div className="button-group">
        <button className="btn start" onClick={startTimer}>Start</button>
        <button className="btn pause" onClick={pauseTimer}>Pause</button>
        <button className="btn reset" onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Practice;
