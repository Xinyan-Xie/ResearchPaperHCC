import React, { useState } from 'react';
import '../styles/ButtonGroup.module.css'; // Make sure the path to your CSS file is correct

const ButtonGroup = () => {
  const [selectedGenotype, setSelectedGenotype] = useState('KIT');
  const [selectedTreatment, setSelectedTreatment] = useState('Control');
  const [selectedTime, setSelectedTime] = useState('D4');

  const genotypes = ['KIT', 'HO1', 'HO2', 'HC2', 'HC5'];
  const treatments = ['Control', 'HDNT'];
  const times = ['D4', 'D7', 'D10'];

  const handleGenotypeClick = (genotype) => {
    setSelectedGenotype(selectedGenotype === genotype ? null : genotype);
  };

  const handleTreatmentClick = (treatment) => {
    setSelectedTreatment(selectedTreatment === treatment ? null : treatment);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(selectedTime === time ? null : time);
  };

  return (
    <div className="button-group">
      <div className="category">
        <div className="label">Genotype</div>
        {genotypes.map((genotype) => (
          <button
            key={genotype}
            className={selectedGenotype === genotype ? 'button selected' : 'button'}
            onClick={() => setSelectedGenotype(genotype)}
          >
            {selectedGenotype === genotype ? '✓ ' : ''}{genotype}
          </button>
        ))}
      </div>
      <div className="category">
        <div className="label">Treatment</div>
        {treatments.map((treatment) => (
          <button
            key={treatment}
            className={selectedTreatment === treatment ? 'button selected' : 'button'}
            onClick={() => setSelectedTreatment(treatment)}
          >
            {selectedTreatment === treatment ? '✓ ' : ''}{treatment}
          </button>
        ))}
      </div>
      <div className="category">
        <div className="label">Time</div>
        {times.map((time) => (
          <button
            key={time}
            className={selectedTime === time ? 'button selected' : 'button'}
            onClick={() => setSelectedTime(time)}
          >
            {selectedTime === time ? '✓ ' : ''}{time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonGroup;
