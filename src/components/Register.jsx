/* eslint-disable no-alert */
/* eslint-disable function-paren-newline */
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import Input from './Input';
import api from '../api';
import IFoodContext from '../context/IFoodContext';
import '../styles/register-login.css';

function Register() {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
  });

  const { setEmail, setAddress } = useContext(IFoodContext);

  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await api.post('/user', register);
      const response = await api.post('/login', { email: register.email, password: register.password });

      localStorage.setItem('authorization', response.data.token);
      setEmail(register.email);
      setAddress(register.address);
      history.push('/user/restrictions');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="div-register">
      <h1>Faça seu cadastro</h1>
      <form onSubmit={handleRegister} className="form">
        <Input
          label="Nome Completo"
          className="input"
          type="text"
          testid="username-input"
          value={register.name}
          onChange={({ target }) => {
            setRegister({ ...register, name: target.value });
          }}
        />
        <Input
          label="E-mail"
          className="input"
          type="email"
          testid="email-input"
          value={register.email}
          onChange={({ target }) => {
            setRegister({ ...register, email: target.value });
          }}
        />
        <Input
          label="Password"
          className="input"
          type="password"
          testid="password-input"
          value={register.password}
          onChange={({ target }) => {
            setRegister({ ...register, password: target.value });
          }}
        />
        <Input
          label="Endereço"
          className="input"
          type="text"
          testid="address-input"
          value={register.address}
          onChange={({ target }) => {
            setRegister({ ...register, address: target.value });
          }}
        />
        <Button
          className="button-login-register"
          testid="register-submit-btn"
          label="Entrar"
        />
      </form>
    </div>
  );
}

export default Register;
