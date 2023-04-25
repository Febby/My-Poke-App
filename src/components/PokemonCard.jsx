import React, { useState } from 'react';
import styled from 'styled-components';

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
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Type: {pokemon.types[0].type.name}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <button onClick={toggleFavorite}>{isFavorite ? '★' : '☆'}</button>
    </StyledPokemonCard>
  );
};

const StyledPokemonCard = styled.div`
display: inline-block;
width: calc(33% - 20px);
margin: 10px;
padding: 15px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
border-radius: 4px;
text-align: center;

@media (max-width: 768px) {
  width: calc(50% - 20px);
}

@media (max-width: 480px) {
  width: calc(100% - 20px);
}
`;

export default PokemonCard;
