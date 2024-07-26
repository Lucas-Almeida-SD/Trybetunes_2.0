import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../components/Loading';

import { getUser } from '../services/userAPI';
import routes from '../utils/routes';
import userIcon from '../assets/images/user.png';

import '../styles/Profile.scss';

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
    <div data-testid="page-profile" className="page" id="profile-page">
      {isLoading && <Loading />}
      {user && (
        <div id="user-info">
          <div className="info-container image-container">
            <div className="image-background">
              <img
                data-testid="profile-image"
                id="user-image"
                src={ user.image || userIcon }
                alt={ user.name }
              />
            </div>
            <Link
              to={ routes.profileEdit }
              className="profile-edit-btn"
            >
              Editar perfil
            </Link>
          </div>
          <div className="info-container">
            <span className="info-label">Nome:</span>
            <span className="info">{user.name}</span>
          </div>
          <div className="info-container">
            <span className="info-label">Email:</span>
            <span className="info">{user.email}</span>
          </div>
          <div className="info-container">
            <span className="info-label">Descrição:</span>
            <p className="info">{user.description}</p>
          </div>
        </div>
      )}

    </div>
  );
}

export default Profile;
