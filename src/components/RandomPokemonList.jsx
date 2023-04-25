import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { useFetch } from '../hooks/useFetch';
import styled from 'styled-components';

const RandomPokemonList = ({ numberOfPokemons, searchTerm, typeFilter }) => {
  const { data, isLoading, error } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const [detailedPokemons, setDetailedPokemons] = useState([]);

  useEffect(() => {
    const fetchDetailedPokemons = async () => {
      if (!data) return;
      const promises = data.results.map((pokemon) => fetch(pokemon.url).then((res) => res.json()));
      const results = await Promise.all(promises);
      setDetailedPokemons(results);
    };

    fetchDetailedPokemons();
  }, [data]);

  const randomPokemons = () => {
    const shuffledPokemons = detailedPokemons.sort(() => 0.5 - Math.random());
    return shuffledPokemons.slice(0, numberOfPokemons);
  };

  const filteredPokemons = () => {
    if (!searchTerm && !typeFilter) return randomPokemons();

    return detailedPokemons.filter((pokemon) => {
      const nameMatch = searchTerm ? pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) : true;
      if (!nameMatch) return false;

      if (typeFilter) {
        return pokemon.types.some((type) => type.type.name === typeFilter);
      }

      return true;
    });
  };

  return (
    <StyledCardsContainer>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {filteredPokemons().map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </StyledCardsContainer>
  );
};

const StyledCardsContainer = styled.div`
display: grid; 
grid-template-columns: 1fr 1fr 1fr; 
grid-template-rows: 1fr 1fr; 
gap: 10% 10%; 
`;

export default RandomPokemonList;
