import { useState, useEffect } from 'react';
import Contestant from './Contestant.jsx';
import { contestantStyles } from '../styles';
import { contestantData } from '../assets/data';

function Race(props) {
  const [contestants, setContestants] = useState(contestantData);
  useEffect(() => {
    let newContestantPos = contestants.map((contestant) => {
      return { ...contestant, xpos: contestant.xpos + 10 };
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
    </div>
  );
}

export default Race;
