import React, { useState } from 'react';
import styled, { keyframes }from 'styled-components';

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
      <PokemonImg src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Type: {pokemon.types[0].type.name}</p>
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
padding: 20px;
box-shadow: rgba(0, 0, 0, 0.8) 0px 4px 6px;
border-radius: 4px;
text-align: center;
animation: ${fadeIn} 0.5s ease-in-out;
`;

const PokemonName = styled.h3`
text-transform:capitalize;
`

const PokemonImg = styled.img`
background: #413d3d;
    border-radius: 50%;
    `


export default PokemonCard;
