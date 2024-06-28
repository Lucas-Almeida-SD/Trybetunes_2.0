import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import routes from '../utils/routes';

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

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <header data-testid="header-component">
      {user && <span data-testid="header-user-name">{user.name}</span>}
      <nav>
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
