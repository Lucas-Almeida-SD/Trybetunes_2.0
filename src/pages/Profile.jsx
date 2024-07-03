import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../components/Loading';

import { getUser } from '../services/userAPI';
import routes from '../utils/routes';

function Profile() {
  const [user, setUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUserApi = async () => {
      setIsLoading(true);
      const response = await getUser();
      setUser(response);
      setIsLoading(false);
    };

    getUserApi();
  }, []);

  return (
    <div data-testid="page-profile">
      {isLoading && <Loading />}
      {user && (
        <div>
          <div>
            <img data-testid="profile-image" src={ user.image } alt={ user.name } />
            <Link to={ routes.profileEdit }>Editar perfil</Link>
          </div>
          <div>
            <span>Nome</span>
            <span>{user.name}</span>
          </div>
          <div>
            <span>Email</span>
            <span>{user.email}</span>
          </div>
          <div>
            <span>Descrição</span>
            <p>{user.description}</p>
          </div>
        </div>
      )}

    </div>
  );
}

export default Profile;
