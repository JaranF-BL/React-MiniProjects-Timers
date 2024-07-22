import { useState, useEffect } from "react";
import TimeDisplay from './TimeDisplay';
import Button from './Button';

function Timer() {
  const initialTimer = 12;
  const [isRunning, setRunning] = useState(false);
  const [timerInSeconds, setTimerInSeconds] = useState(initialTimer);
  useEffect(() => {
    if (!isRunning) {
        return;
    }
    console.log("The interval timer setup of useEffect ran");
    const interval = setInterval(
        () =>
          setTimerInSeconds((value) => {
                if (value <= 1) {
                    console.log("setRunning to false");
                    setRunning(false);
                } 
                const newValue = value - 1;
                return newValue;
            }),
        1000
    );
    return () => { clearInterval(interval); };
}, [isRunning]);  // When 'isRunning' changes (it's an observable dependency) the 
  return (
    <section className={`timer${isRunning ? " timer-ticking" : ""}${timerInSeconds === 0 ? " timer-ringing" : ""}`}>

      <ul className="parts">
         <TimeDisplay countdownT={timerInSeconds}/>
      </ul>
      {/* <!-- .toggle 2. Button --> */}
      <Button label={isRunning ? "Pause" : "Play"} icon={isRunning ? "pause" : "play"} onClickHandler={() => setRunning((value) => { return !value; })}/>
      {/* <!-- /.toggle 2. Button --> */}
    </section>
  );
}

export default Timer;
