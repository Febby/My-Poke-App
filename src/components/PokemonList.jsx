import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import styled from 'styled-components';

const PokemonList = ({ numberOfPokemons, searchTerm, typeFilter }) => {
  const [displayedPokemons, setDisplayedPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemonData = async (url) => {
    const response = await fetch(url);
    const pokemonData = await response.json();
    return pokemonData;
  };

  const getRandomPokemons = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=898');
      const data = await response.json();
      let shuffledPokemons = data.results.sort(() => 0.5 - Math.random());
      if (typeFilter) {
        shuffledPokemons = shuffledPokemons.filter(async (pokemon) => {
          const pokemonData = await fetchPokemonData(pokemon.url);
          return pokemonData.types.some((type) => type.type.name === typeFilter);
        });
      }
      const randomPokemonPromises = shuffledPokemons.slice(0, numberOfPokemons).map((pokemon) => fetchPokemonData(pokemon.url));
      const randomPokemonData = await Promise.all(randomPokemonPromises);

      // Filter out pokemons with no image
      const pokemonsWithImages = randomPokemonData.filter((pokemon) => pokemon.sprites && pokemon.sprites.front_default);
      setDisplayedPokemons(pokemonsWithImages);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const searchPokemon = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        setError(message);
        setDisplayedPokemons([]);
        return;
      }

      const pokemonData = await response.json();
      if (typeFilter && !pokemonData.types.some((type) => type.type.name === typeFilter)) {
        setError(`No Pokemon found with name "${searchTerm}" and type "${typeFilter}".`);
        setDisplayedPokemons([]);
      } else {
        setDisplayedPokemons([pokemonData]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      searchPokemon();
    } else {
      getRandomPokemons();
    }
  }, [searchTerm, typeFilter]);

  return (
    <StyledCardsContainer>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {displayedPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </StyledCardsContainer>
  );
};

const StyledCardsContainer = styled.div`

  align-content:center;
  
  // Mobile devices (default)
  display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

  // Small tablets and large phones
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  // Large tablets and small laptops
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  // Large laptops and desktops
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;


export default PokemonList;
