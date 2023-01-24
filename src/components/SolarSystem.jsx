import React from 'react';
import Title from './Title';
import ArrayPlanetas from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {ArrayPlanetas.map((planeta) => (
          <PlanetCard
            planetName={ planeta.name }
            planetImage={ planeta.image }
            key={ planeta.name }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
