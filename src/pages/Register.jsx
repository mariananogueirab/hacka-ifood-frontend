/* eslint-disable no-alert */
/* eslint-disable function-paren-newline */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import api from '../api';
// import IFoodContext from '../context/IFoodContext';
import '../styles/register-login.css';

function Register() {
  const [register, setRegister] = useState({
    fullname: '',
    email: '',
    password: '',
    address: '',
  });

  const { setEmail } = useContext(IFoodContext);

  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await api.post('/user', register);
      const response = await api.post('/login',
        { email: register.email, password: register.password });
      localStorage.setItem('authorization', response.data.token);
      setRegister(response.data);
      setEmail(register.email);
      history.push('/user/restrictions');
    } catch (error) {
      alert(error);
    }
  };

  const handleClick = () => {
    history.push('/recipes');
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
          value={register.fullname}
          onChange={({ target }) => {
            setRegister({ ...register, fullname: target.value });
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
          onClick={handleClick}
        />
      </form>
    </div>
  );
}

export default Register;
