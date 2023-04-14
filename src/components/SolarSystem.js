import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';
// import PropTypes from 'prop-types';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title
          headline="Planetas"
        />
        { planets.map((eachPlanet) => (
          <PlanetCard
            key={ eachPlanet.name }
            planetName={ eachPlanet.name }
            planetImage={ eachPlanet.image }
          />
        )) }
      </div>
    );
  }
}

export default SolarSystem;
