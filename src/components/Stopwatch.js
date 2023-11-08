import React,{useState,useEffect} from "react";

const Stopwatch = () => {
    const [time,setTime]=useState(30000)
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


  return (
    <div>
        <h1>Stopwatch</h1>
        <p>{time}</p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePauseResume}>Pause/Resume</button>
        <button onClick={handleStop}>Stop</button>
      
    </div>
  );
}

export default Stopwatch
