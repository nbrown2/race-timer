import { useState, useEffect } from 'react';
import Contestant from './Contestant.jsx';
import { contestantStyles } from '../styles';
import { contestantData } from '../assets/data';

function Race(props) {
  const [allContestants, setAllContestants] = useState(contestantData);

  useEffect(() => {
    let newContestantPos = allContestants.map((contestant) => {
      return { ...contestant, xpos: contestant.xpos + 10 };
    });
    setAllContestants(newContestantPos);
  }, [props.currentTime]);

  return (
    <div style={contestantStyles.contestantList}>
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
