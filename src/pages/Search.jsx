import React, { useState } from 'react';

import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbumList from '../components/AlbumList';
import Loading from '../components/Loading';

function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');
  const [isEnableBtn, setIsEnableBtn] = useState(false);
  const [albumList, setAlbumList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = ({ target }) => {
    setSearchInput(target.value);
    setIsEnableBtn(target.value.length >= 2);
  };

  const handleClickSearchBtn = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await searchAlbumsAPI(searchInput);
    setAlbumList(response);
    setIsLoading(false);
    setSearch(searchInput);
    setSearchInput('');
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
          onClick={ handleClickSearchBtn }
        >
          Pesquisar
        </button>
      </form>
      <section>
        {isLoading && <Loading /> }
        {albumList && (
          albumList.length
            ? <AlbumList albumList={ albumList } search={ search } />
            : <p>Nenhum álbum foi encontrado</p>
        )}
      </section>
    </div>
  );
}

export default Search;
