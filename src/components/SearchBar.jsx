import React, { useState } from 'react';
import Toast from './Toast';
import styled from 'styled-components';

const SearchBar = ({ onSearch, onReset }) => {
  const [searchValue, setSearchValue] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    setToastMessage(null); // Clear the error when user starts typing
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchValue);
    } else {
      setToastMessage('Please enter a valid search term!');
    }
  };

  const handleCloseToast = () => {
    setToastMessage(null);
  };

  const handleReset = () => {
    setSearchValue('');
    setToastMessage(null);
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
      <Button type="submit" search>Search</Button>
      <Button type="button" onClick={handleReset}>
        Reset
      </Button>
      {toastMessage && <Toast message={toastMessage} duration={3000} onClose={handleCloseToast} />}
    </StyledForm>
  );
};
const StyledForm = styled.form`
display: flex;
flex-wrap: wrap;
box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15), inset 1px 0 2px rgba(0, 0, 0, 0.15);
border-radius: 0.5rem;
margin: 1rem 0;

@media (max-width: 600px) {
  flex-direction: column;
  align-items: center;
}
`;

const StyledInput = styled.input`
padding: 0.7rem;
`;

const Button = styled.button`
background-color: ${({ search }) =>
  search ? 'hsla(40, 72%, 50%, 1)' : 'hsla(347, 49%, 46%, 1)'};
${({ search }) => (search ? 'hsla(40, 72%, 60%, 1)' : 'hsla(0, 0%, 0%, 0.4)')};
white-space: nowrap;
border-radius: 0.5rem;
color: hsla(150, 14%, 97%, 1);
cursor: pointer;
outline: none;
font-size: 1rem;
text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
letter-spacing: 0.1rem;
user-select: none;
padding: 0.5rem;
margin: 0.1rem;
transition: all 0.1s ease-in;

::-moz-focus-inner {
  border: 0;
}

&:hover {
  background-color: ${({ search }) =>
    search ? 'hsla(40, 72%, 60%, 1)' : 'hsla(347, 49%, 51%, 1)'};
  ${({ search }) => search && `transform: translateY(-3px)`}
}

&:active {
  background-color: ${({ search }) =>
    search ? 'hsla(40, 72%, 35%, 1)' : 'hsla(347, 49%, 26%, 1)'};
}

@media (max-width: 600px) {
  width: 100%;
  margin: 0.5rem 0;
}
`;

const ErrorMessage = styled.p`
display: block;
color: red;
font-size: 0.9rem;
display: flex;
flex-direction: row;
align-items: center;
margin: 1rem;
margin-top: 5px;
`;

export default SearchBar;

