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
      <input
        type="text"
        placeholder="Search for a Pokemon"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
`;

export default SearchBar;
