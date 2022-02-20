/* eslint-disable no-alert */
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import Input from './Input';
import api from '../api';
import IFoodContext from '../context/IFoodContext';
import '../styles/register-login.css';

function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const { setEmail } = useContext(IFoodContext);

  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/login', login);

      localStorage.setItem('authorization', response.data.token);
      setEmail(response.data.email);
      history.push('/user/restrictions');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="div-login">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="form">
        <Input
          label="E-mail"
          className="input"
          type="email"
          testid="email-input"
          value={login.email}
          onChange={({ target }) => {
            setLogin({ ...login, email: target.value });
          }}
        />
        <Input
          label="Senha"
          className="input"
          type="password"
          testid="password-input"
          value={login.password}
          onChange={({ target }) => {
            setLogin({ ...login, password: target.value });
          }}
        />
        <Button
          className="button-login"
          testid="login-submit-btn"
          label="Entrar"
        />
        <Button
          className="button-register"
          testid="register-btn"
          label="Fazer Cadastro"
          onClick={() => history.push('/register')}
        />
      </form>
    </div>
  );
}

export default Login;
