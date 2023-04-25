import React from 'react';
import styled from 'styled-components';

const TypeFilter = ({ onTypeFilter }) => {
  const types = [
    '',
    'fire',
    'water',
    'grass',
    'electric',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dragon',
    'dark',
    'steel',
    'fairy',
  ];

  const handleChange = (e) => {
    onTypeFilter(e.target.value);
  };

  return (
    <div>
      <StyledSelect onChange={handleChange}>
        {types.map((type, index) => (
          <option key={index} value={type}>
            {type || 'Filter by Type'}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
};

const StyledSelect = styled.select`
padding: 0.7rem;
margin: 1rem;
`;
export default TypeFilter;
