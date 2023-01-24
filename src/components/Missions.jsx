import React from 'react';
import Title from './Title';
import MissionsData from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
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
    );
  }
}

export default Missions;
