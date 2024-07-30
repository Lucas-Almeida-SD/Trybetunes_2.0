import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Proptypes from 'prop-types';

import Loading from '../components/Loading';

import { getUser, updateUser } from '../services/userAPI';
import validateUser from '../utils/validateUser';
import routes from '../utils/routes';
import userIcon from '../assets/images/user.png';

import '../styles/ProfileEdit.scss';

function ProfileEdit({ setIsUserUpdated }) {
  const [user, setUser] = useState(undefined);
  const [imagePath, setImagePath] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isValidFields, setIsValidFields] = useState(false);
  const navigate = useNavigate();

  const previewImage = (element) => {
    const file = element.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      setUser({ ...user, image: reader.result });
    });

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const getUserApi = async () => {
      setIsLoading(true);

      const response = await getUser();
      setUser({ ...response, image: response.image || userIcon });

      setIsValidFields(validateUser(response));

      setIsLoading(false);
    };

    getUserApi();
  }, []);

  useEffect(() => {
    if (user) setIsValidFields(validateUser(user));
  }, [user]);

  const handleChangeUser = ({ target }) => {
    const { name, value } = target;

    if (name === 'image') {
      setImagePath(target.value);
      previewImage(target);
    } else {
      setUser((previous) => ({ ...previous, [name]: value }));
    }
  };

  const handleClick = async () => {
    setIsLoading(true);
    await updateUser(user);
    setIsUserUpdated((previous) => !previous);

    navigate(routes.profile);
  };

  const editImageAfterClickOnImage = () => {
    const editImageInput = document.querySelector('#edit-image-input');
    console.log();
    editImageInput.click();
  };

  return (
    <div data-testid="page-profile-edit" className="page" id="profile-edit-page">
      {isLoading && <Loading />}
      {user && (
        <div id="profile-edit-page">
          <form action="" id="profile-edit-form">
            <div className="image-container info-container">
              <div className="image-background">
                <img
                  src={ user.image }
                  alt={ user.name }
                  className="image-container"
                  onClick={ editImageAfterClickOnImage }
                  role="presentation"
                />
              </div>
              <input
                data-testid="edit-input-image"
                type="file"
                accept="image/*"
                name="image"
                id="edit-image-input"
                value={ imagePath }
                onChange={ handleChangeUser }
                style={ { display: 'none' } }
              />
            </div>
            <div id="info-section">
              <label htmlFor="user-name" className="info-container">
                <span className="info-label">Nome</span>
                <input
                  data-testid="edit-input-name"
                  type="text"
                  id="user-name"
                  className="info"
                  name="name"
                  value={ user.name }
                  onChange={ handleChangeUser }

                />
              </label>
              <label htmlFor="user-email" className="info-container">
                <span className="info-label">Email</span>
                <input
                  data-testid="edit-input-email"
                  type="text"
                  id="user-email"
                  className="info"
                  name="email"
                  value={ user.email }
                  onChange={ handleChangeUser }
                />
              </label>
              <label htmlFor="user-description" className="info-container">
                <span className="info-label">Descrição</span>
                <textarea
                  data-testid="edit-input-description"
                  type="text"
                  id="user-description"
                  className="info"
                  name="description"
                  value={ user.description }
                  onChange={ handleChangeUser }
                />
              </label>
            </div>
            <button
              data-testid="edit-button-save"
              type="button"
              className="profile-edit-btn"
              onClick={ handleClick }
              disabled={ !isValidFields }
            >
              Editar perfil
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProfileEdit;

ProfileEdit.propTypes = {
  setIsUserUpdated: Proptypes.func.isRequired,
};
