import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Loading from '../components/Loading';

import { createUser, getUser } from '../services/userAPI';
import routes from '../utils/routes';
import songIcon from '../assets/images/song_icon.png';

import '../styles/Login.scss';

function Login() {
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const enableBtn = () => userName.length >= Number('3');

  const handleChange = ({ target }) => {
    setUserName(target.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    await createUser({ name: userName });
    setIsLoading(false);
    navigate(routes.search);
  };

  useEffect(() => {
    const getUserRequest = async () => {
      try {
        setIsLoading(true);
        const response = await getUser();
        if (response.name) navigate(routes.search);
      } catch (err) {
        console.log('Erro');
      } finally {
        setIsLoading(false);
      }
    };

    getUserRequest();

    return () => setIsLoading(false);
  }, [navigate]);

  return (
    <div data-testid="page-login" id="login-page" className="page">
      {isLoading && <Loading /> }

      <section id="login-section">
        <header id="login-header">
          <div id="page-icon-container">
            <img id="page-icon" src={ songIcon } alt="Ícone da Aplicação" />
          </div>
          <h2 id="login-title">Entrar no Trybetunes</h2>
        </header>
        <form action="" id="login-form">
          <label htmlFor="input-name">
            <span>Nome de usuário</span>
            <input
              data-testid="login-name-input"
              type="text"
              name="name"
              id="input-name"
              value={ userName }
              onChange={ handleChange }
            />
          </label>
          <button
            data-testid="login-submit-button"
            disabled={ !enableBtn() }
            type="submit"
            onClick={ handleClick }
          >
            Entrar
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
