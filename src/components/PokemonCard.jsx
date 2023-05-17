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
      <PokemonFavBtn onClick={toggleFavorite}>{isFavorite ? '★' : '☆'}</PokemonFavBtn>
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
display: flex;
position: relative;
flex-direction: column;
height: 400px;
width: 350px;
min-width: 25rem;
padding: 1.5rem;
border-radius: 16px;
background: #17141d;
box-shadow: -1rem 0 3rem #000;
flex-wrap: nowrap;
  animation: ${fadeIn} 0.5s ease-in-out;
  transition: all 0.2s ease-in;
  

  &:hover {
    transform: translateY(-30px);
    z-index:1;
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

const PokemonFavBtn = styled.button`
color: #fff;
    background: transparent;
    width: 50px;
    font-size: 1em;
    margin: 0 auto;
    padding: 0.25em 1em;
    border: 2px solid #fff;
    cursor: pointer;
    border-radius: 3px;
`

const PokemonImg = styled.img`
background: #413d3d;
border-radius: 50%;
width: 120px;
height: 120px;
border-radius: 50%;
margin: 0 auto;
transition: all 0.1s ease-in;
&:hover {
  filter: drop-shadow(0 0 2em #b1b3b3aa);
}
`


export default PokemonCard;
