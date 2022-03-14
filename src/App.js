import React, { useState, useEffect } from 'react';
import './App.css'
const App = () => {
  const [seconds, setSeconds] = useState(60);
  const [isOn, setIsOn] = useState(false);

  function toggle() {
    setIsOn(!isOn);
  }

  function reset() {
    setSeconds(60);
    setIsOn(false);
  }

  useEffect(() => {
    let interval;
    if (isOn) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOn, seconds]);

  return (
    <div className='App'>
      <div className='display'>
        {seconds}s
      </div>
      <div  >
        <button  onClick={toggle} >
          {isOn ? 'Pause' : 'Start'} 
        </button>
        <button  onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;