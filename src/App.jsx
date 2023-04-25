import React, { useState } from 'react';
import styled from 'styled-components';
import RandomPokemonList from './components/RandomPokemonList';
import SearchBar from './components/SearchBar';
import TypeFilter from './components/TypeFilter';

const App = () => {
  const [typeFilter, setTypeFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const numberOfPokemons = 10;

  const handleTypeFilter = (type) => {
    setTypeFilter(type);
  };

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
    setTypeFilter('');
  };
  const handleReset = () => {
    setSearchTerm('');
    setTypeFilter('');
  };

  return (
    <StyledApp>
      <h1>Poke App</h1>
      <p>Find your pokemon here and set them as your favorite</p>
      <SearchBar onSearch={handleSearch} onReset={handleReset} />
      <TypeFilter onTypeFilter={handleTypeFilter} />
      <RandomPokemonList numberOfPokemons={numberOfPokemons} searchTerm={searchTerm} typeFilter={typeFilter} />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
`;

export default App;
