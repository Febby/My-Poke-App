import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import styled from 'styled-components';

const PokemonList = ({ searchTerm, typeFilter }) => {
  // Fetch pokemons using the custom useFetch hook
  const { data, isLoading, error } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=100');
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if (data) {
      setPokemons(data.results);
    }
  }, [data]);

  // Filter pokemons by search term and type
  const filteredPokemons = pokemons.filter((pokemon) => {
    const nameMatch = searchTerm ? pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) : true;
    if (!nameMatch) return false;

    // if (typeFilter) {
    //   const { data } = useFetch(pokemon.url);
    //   return data && data.types.some((type) => type.type.name === typeFilter);
    // }

    return true;
  });

  // Render the pokemons
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {filteredPokemons.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};


const PokemonCard = ({ pokemon }) => {
  const { data, isLoading } = useFetch(pokemon.url);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <StyledPokemonCard>
      <h3>{data.name}</h3>
      <img src={data.sprites.front_default} alt={data.name} />
      <p>Type: {data.types[0].type.name}</p>
      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>
    </StyledPokemonCard>
  );
};

const StyledPokemonCard = styled.div`
  // Styling here (TBU)
`;

export default PokemonList;
