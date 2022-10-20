import { useState, useEffect } from "react";
import Contestant from "./Contestant.jsx";
import { contestantStyles } from "../styles";
import { contestantData } from "../assets/data";

function Race(props) {
  const [contestants, setContestants] = useState(contestantData);


  const handleStop = () => {
    props.stopTimer();
  };

  // This will stop the timer from going below 0 seconds
  if (props.currentTime < 1) {
    handleStop();
  }

  // this function is called on reset button to set the contestants back to 0 xpos
  const reset = () => {
    let newContestantPos = contestants.map((contestant) => {
      return {
        ...contestant,
        xpos: 0,
      };
    });
    setContestants(newContestantPos);
  };

  useEffect(() => {
    let newContestantPos = contestants.map((contestant) => {
      return {
        ...contestant,
        xpos: contestant.xpos + Math.floor(Math.random() * 10),
      };
    });
    setContestants(newContestantPos);
  }, [props.currentTime]);

  return (
    <div style={contestantStyles.contestantList}>
      {contestants.map((contestant) => (
        <Contestant
          key={contestant.id}
          name={contestant.name}
          xpos={contestant.xpos}
        />
      ))}
      <button onClick={handleStop}>Stop the Timer!</button>

      {/* this button triggers the reset function */}
      <button onClick={reset}>Reset!</button>
    </div>
  );
}
export default Race;
