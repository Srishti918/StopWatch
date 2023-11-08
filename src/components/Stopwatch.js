import React,{useState,useEffect} from "react";

const Stopwatch = () => {
    const [time,setTime]=useState(30000)
    const [isActive,setActive]=useState(false);

    useEffect(()=>{
        let interval;
        if(isActive){
            interval=setInterval(()=>{
                setTime((time)=>{
                    if(time>0){
                        return time-1;
                    }
                    else{
                        setActive(false);
                        return 0;
                    }
                });
            },1000);
        }
        return ()=> clearInterval(interval);
    },[isActive]);


  return (
    <div>
        <h1>Stopwatch</h1>
        <p>{time}</p>
        <button>Start</button>
        <button>Pause/Resume</button>
        <button>Stop</button>
      
    </div>
  );
}

export default Stopwatch
