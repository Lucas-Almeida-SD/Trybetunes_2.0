import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

import routes from '../utils/routes';

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
    navigate(routes.search);
  };

  if (isLoading) {
    return (<Loading />);
  }

  return (
    <div data-testid="page-login">
      <h1>Login</h1>
      <form action="">
        <input
          data-testid="login-name-input"
          type="text"
          name="name"
          id="input-name"
          value={ userName }
          onChange={ handleChange }
        />
        <button
          data-testid="login-submit-button"
          disabled={ !enableBtn() }
          type="submit"
          onClick={ handleClick }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
