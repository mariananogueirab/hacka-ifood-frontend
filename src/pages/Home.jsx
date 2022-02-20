import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import '../styles/home.css';

function Home() {
  return (
    <div className="div-home">
      <Login />
      <Register />
    </div>
  );
}

export default Home;
