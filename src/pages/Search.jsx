import React, { useState } from 'react';

import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbumList from '../components/AlbumList';
import Loading from '../components/Loading';

import '../styles/Search.scss';

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

    try {
      const response = await searchAlbumsAPI(searchInput);
      setAlbumList(response);
      setSearch(searchInput);
      setSearchInput('');
    } catch (err) {
      console.error('Oops...Algo deu errado. Tente novamente!');
    } finally {
      setIsEnableBtn(false);
      setIsLoading(false);
    }
  };

  return (
    <div data-testid="page-search" id="search-page" className="page">
      <form action="" id="search-page-form">
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
      <section id="album-list-section">
        {isLoading && <Loading /> }
        {albumList && (
          albumList.length
            ? <AlbumList albumList={ albumList } search={ search } />
            : <p id="no-album-message">Nenhum álbum foi encontrado</p>
        )}
      </section>
    </div>
  );
}

export default Search;
