
import React, { useEffect, useRef, useState } from "react";


const Practice = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
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
    timerRef.current = null; 
    setSeconds(0);
    setMinutes(0)
  };

  const pauseTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null; 
  };

  useEffect(()=>{
if(seconds > 59){
    setSeconds(0)
    setMinutes((prev)=> prev+1)
}

if(seconds == 0){
    resetTimer()
}
  },[seconds])

  const reverseTimer=()=>{

    if(seconds > 0){
        clearInterval(timerRef.current)
        timerRef.current = setInterval(()=>{
        
                setSeconds((prev)=> {
                    if(prev > 0){
                        return prev - 1
                    }
                })
          
        },1000)
    }else{
        clearInterval(timerRef.current)
    }
    
  }


 console.log(seconds)

  return (
    <div className="timer-container">
      <div className="timer-display">
       {minutes < 10 ? `0${minutes}` : minutes   } : {seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div className="button-group">
        <button className="btn start" onClick={startTimer}>Start</button>
        <button className="btn pause" onClick={pauseTimer}>Pause</button>
        <button className="btn reset" onClick={resetTimer}>Reset</button>
        <buton className="btn reverse" onClick={reverseTimer}>Reverse</buton>
      </div>
    </div>
  );
};

export default Practice;
