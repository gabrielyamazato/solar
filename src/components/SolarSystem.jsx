import React from 'react';
import ArrayPlanetas from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div>
        <h2 className="solar-system-title">Planetas</h2>
        <div className="solar-system">
          {ArrayPlanetas.map((planeta) => (
            <PlanetCard
              planetName={ planeta.name }
              planetImage={ planeta.image }
              key={ planeta.name }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
