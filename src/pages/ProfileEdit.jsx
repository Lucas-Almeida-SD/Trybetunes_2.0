import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Loading from '../components/Loading';

import { getUser, updateUser } from '../services/userAPI';
import validateUser from '../utils/validateUser';
import routes from '../utils/routes';

function ProfileEdit() {
  const [user, setUser] = useState(undefined);
  const [imagePath, setImagePath] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isValidFields, setIsValidFields] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserApi = async () => {
      setIsLoading(true);
      const response = await getUser();
      setUser(response);
      setIsValidFields(validateUser(response));
      setIsLoading(false);
    };

    getUserApi();
  }, []);

  const previewImage = (element) => {
    const file = element.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      setImagePath(reader.result);
    });

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleChangeUser = ({ target }) => {
    const { name, value } = target;
    setUser((previous) => ({ ...previous, [name]: value }));

    if (name === 'image') {
      previewImage(target);
    }

    setIsValidFields(validateUser({ ...user, [name]: value }));
  };

  const handleClick = async () => {
    setIsLoading(true);
    await updateUser(user);

    navigate(routes.profile);
  };

  return (
    <div data-testid="page-profile-edit">
      {isLoading && <Loading />}
      {user && (
        <div>
          <form action="">
            <div>
              <img src={ imagePath } alt={ user.name } />
              <input
                data-testid="edit-input-image"
                type="file"
                accept="image/*"
                name="image"
                value={ user.image }
                onChange={ handleChangeUser }
              />
            </div>
            <div>
              <label htmlFor="user-name">
                <span>Nome</span>
                <input
                  data-testid="edit-input-name"
                  type="text"
                  id="user-name"
                  name="name"
                  value={ user.name }
                  onChange={ handleChangeUser }

                />
              </label>
              <label htmlFor="user-email">
                <span>Email</span>
                <input
                  data-testid="edit-input-email"
                  type="text"
                  id="user-email"
                  name="email"
                  value={ user.email }
                  onChange={ handleChangeUser }
                />
              </label>
              <label htmlFor="user-description">
                <span>Descrição</span>
                <input
                  data-testid="edit-input-description"
                  type="text"
                  id="user-description"
                  name="description"
                  value={ user.description }
                  onChange={ handleChangeUser }
                />
              </label>
            </div>
            <button
              data-testid="edit-button-save"
              type="button"
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
