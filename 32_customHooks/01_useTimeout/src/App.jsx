import { useState } from 'react';
import useTimeout from '../src/customHooks/useTimeout';
import './App.css'; // Import the CSS file

const App = () => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useTimeout(() => {
    if (isActive) {
      setCount((currentCount) => currentCount + 1);
    }
  }, 1000);

  const startTimer = () => setIsActive(true);
  const stopTimer = () => setIsActive(false);
  const resetTimer = () => {
    setCount(0);
    setIsActive(false);
  };

  return (
    <div className='app-container'>
      <div className='counter'>
        Function gets called {count} times (every 1 second)
      </div>
      <div className='buttons'>
        <button className='button' onClick={startTimer}>
          Start
        </button>
        <button className='button' onClick={stopTimer}>
          Stop
        </button>
        <button className='button reset' onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
