import React,{useState,useEffect} from "react";
import "./Stopwatch.css"
const Stopwatch = () => {
    const [time,setTime]=useState(300)
    const [isActive,setIsActive]=useState(false);

    useEffect(()=>{
        let interval;
        if(isActive){
            interval=setInterval(()=>{
                setTime((time)=>{
                    if(time>0){
                        return time-1;
                    }
                    else{
                        setIsActive(false);
                        return 0;
                    }
                });
            },1000);
        }
        return ()=> clearInterval(interval);
    },[isActive]);

    const handleStart=()=>{
        setIsActive(true);
    }

    const handlePauseResume=()=>{
        setIsActive((prev)=>!prev);
    }

    const handleStop=()=>{
        setIsActive(false);
        setTime(0);
    }

    const formatTime=()=>{
        const hours=Math.floor(time/3600).toString().padStart(2,'0');
        const minutes=Math.floor((time%3600)/60).toString().padStart(2,'0');
        const seconds=(time%60).toString().padStart(2,'0');
        return `${hours}:${minutes}:${seconds}`;
    }


  return (
    <div className="timer">
        <h1>Stopwatch</h1>
        <p >{formatTime(time)}</p>
        <div className="buttons">
        <button className="button1" onClick={handleStart}>Start</button>
        <button className="button1" onClick={handlePauseResume}>
            {isActive? 'Pause' : 'Resume'}
            </button>
        <button className="button1" onClick={handleStop}>Stop</button>
        <button className="button1" onClick={()=>setTime(300)}>Reset</button>
        </div>
    </div>
  );
}

export default Stopwatch
