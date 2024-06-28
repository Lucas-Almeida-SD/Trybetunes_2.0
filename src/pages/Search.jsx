import React, { useState } from 'react';

function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [isEnableBtn, setIsEnableBtn] = useState(false);

  const handleChange = ({ target }) => {
    setSearchInput(target.value);
    setIsEnableBtn(target.value.length >= 2);
  };

  return (
    <div data-testid="page-search">
      <h1>Search</h1>
      <form action="">
        <input
          data-testid="search-artist-input"
          type="text"
          value={ searchInput }
          onChange={ handleChange }
        />
        <button
          data-testid="search-artist-button"
          type="submit"
          disabled={ !isEnableBtn }
        >
          Pesquisar
        </button>
      </form>
    </div>
  );
}

export default Search;
