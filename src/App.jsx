import './App.css';
import Timer from './components/Timer';
import Race from './components/Race';
import { useState, useEffect } from 'react';
import Background from './components/Background';

function App() {
  let initialTime = 60;
  const [currentTime, setCurrentTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(currentTime - 1);
    }, 250);
    return () => clearInterval(interval);
  });

  return (
    <>
      <Background>
        <Timer currentTime={currentTime} />
        <Race currentTime={currentTime} />
      </Background>
    </>
  );
}

export default App;
