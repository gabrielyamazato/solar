import React from 'react';
import Title from './Title';
import MissionsData from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div>
        <div className="mission-title">
          <Title headline="Missões" />
        </div>
        <div className="missions">
          {MissionsData.map((missoes) => (
            <MissionCard
              name={ missoes.name }
              year={ missoes.year }
              country={ missoes.country }
              destination={ missoes.destination }
              key={ missoes.name }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
