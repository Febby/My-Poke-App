import React from 'react';

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
      <select onChange={handleChange}>
        {types.map((type, index) => (
          <option key={index} value={type}>
            {type || 'Filter by Type'}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeFilter;
