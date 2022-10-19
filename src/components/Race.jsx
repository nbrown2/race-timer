import Contestant from './Contestant.jsx';
import { contestantStyles } from '../styles';
import { contestants } from '../assets/data';

function Race() {
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
