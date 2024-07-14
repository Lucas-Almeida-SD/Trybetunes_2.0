import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import routes from '../utils/routes';
import songIcon from '../assets/images/song_icon.png';
import userIcon from '../assets/images/user.png';

import '../styles/Header.scss';

function Header() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUserName = async () => {
      setIsLoading(true);
      const response = await getUser();
      setUser(response);
      setIsLoading(false);
    };

    getUserName();
  }, []);

  return (
    <header data-testid="header-component" id="page-header">
      <div id="page-info">
        <div id="page-logo-container">
          <div id="page-icon-container">
            <img src={ songIcon } alt="Ícone da Aplicação" />
          </div>
          <h1 id="page-title">Trybetunes</h1>
        </div>
        <div id="user-conatiner">
          {user && !isLoading ? (
            <>
              <div id="user-image-container">
                <img src={ user.image || userIcon } alt="Imagem do usuário" />
              </div>
              <span data-testid="header-user-name" id="user-name">{user.name}</span>
            </>
          ) : <Loading />}
        </div>
      </div>

      <nav id="page-nav">
        <NavLink
          data-testid="link-to-search"
          to={ routes.search }
        >
          Search
        </NavLink>
        <NavLink
          data-testid="link-to-favorites"
          to={ routes.favorites }
        >
          Favorites
        </NavLink>
        <NavLink
          data-testid="link-to-profile"
          to={ routes.profile }
        >
          Profile
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
