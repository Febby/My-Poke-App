import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    setTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" value={term} onChange={handleChange} placeholder="Search Pokemon" />
    </div>
  );
};

export default SearchBar;
