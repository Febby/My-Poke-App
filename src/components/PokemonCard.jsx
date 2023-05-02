import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const PokemonCard = ({ pokemon }) => {
  const [isFavorite, setIsFavorite] = useState(localStorage.getItem(pokemon.name) !== null);

  const toggleFavorite = () => {
    if (isFavorite) {
      localStorage.removeItem(pokemon.name);
      setIsFavorite(false);
    } else {
      localStorage.setItem(pokemon.name, JSON.stringify(pokemon));
      setIsFavorite(true);
    }
  };

  return (
    <StyledPokemonCard>
      <PokemonName>{pokemon.name}</PokemonName>
      {pokemon.sprites && pokemon.sprites.front_default ? (
        <PokemonImg src={pokemon.sprites.front_default} alt={pokemon.name} />
      ) : (
        <p>No image available</p>
      )}
      <p>Type: {pokemon.types && pokemon.types[0] ? pokemon.types[0].type.name : 'Unknown'}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <button onClick={toggleFavorite}>{isFavorite ? '★' : '☆'}</button>
    </StyledPokemonCard>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledPokemonCard = styled.div`
  display: grid;
  padding: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  border-radius: 10px;
  text-align: center;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  grid-template-rows: auto 1fr auto;
  animation: ${fadeIn} 0.5s ease-in-out;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-3px);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 6px 10px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const PokemonName = styled.h3`
  text-transform: capitalize;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const PokemonImg = styled.img`
background: #413d3d;
border-radius: 50%;
transition: all 0.1s ease-in;
&:hover {
  filter: drop-shadow(0 0 2em #b1b3b3aa);
}
`


export default PokemonCard;
