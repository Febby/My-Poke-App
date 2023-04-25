import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = ({ onSearch, onReset }) => {
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    setError(null); // Clear the error when user starts typing
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchValue);
    } else {
      setError('Please enter a valid search term.');
    }
  };

  const handleReset = () => {
    setSearchValue('');
    setError(null);
    onReset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Search for a Pokemon"
        value={searchValue}
        onChange={handleInputChange}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <button type="submit">Search</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: grid;
  flex-direction: row;
  align-items: center;
  margin:1rem;
`;

const StyledInput = styled.input`
padding: 0.7rem;
    margin: 1rem;
    `

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin:1rem;
  margin-top: 5px;
`;

export default SearchBar;
