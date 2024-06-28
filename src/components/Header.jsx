import React, { useState, useEffect } from 'react';

import { getUser } from '../services/userAPI';
import Loading from './Loading';

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
    </header>
  );
}

export default Header;
