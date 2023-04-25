import React, { useState } from 'react';
import RandomPokemonList from './components/RandomPokemonList';
import SearchBar from './components/SearchBar';
import TypeFilter from './components/TypeFilter';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const numberOfPokemons = 6; 

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleTypeFilter = (type) => {
    setTypeFilter(type);
  };

  return (
    <div className="App">
      <h1>Poke App</h1>
      <p>Find your pokemon here and set them as your favorite</p>
        <SearchBar onSearch={handleSearch} />
        <TypeFilter onTypeFilter={handleTypeFilter} />
        <RandomPokemonList numberOfPokemons={numberOfPokemons} searchTerm={searchTerm} typeFilter={typeFilter} />
    </div>
  );
};

export default App;
