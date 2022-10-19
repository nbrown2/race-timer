import { useState, useEffect } from 'react';
import Contestant from './Contestant.jsx';
import { contestantStyles } from '../styles';
import { contestantData } from '../assets/data';

function Race(props) {
  const [contestants, setContestants] = useState(contestantData);

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
      {props.currentTime}
      {allContestants.map((contestant) => (
        <Contestant
          key={contestant.id}
          name={contestant.name}
          xpos={contestant.xpos}
        />
      ))}
    </div>
  );
}

export default Race;
