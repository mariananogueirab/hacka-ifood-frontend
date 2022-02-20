/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import api from '../api';
// import IFoodContext from '../context/IFoodContext';
import '../styles/restrictions.css';

function Restrictions() {
  const [restrictions, setRestrictions] = useState([]);
  const restrictionsArr = ['Amendoim', 'Ovo', 'Leite', 'Camarão', 'Soja'];

  const history = useHistory();

  console.log(restrictions);

  const handleRestrictions = async (e) => {
    e.preventDefault();

    try {
      const response = await api.put('/user/restrictions', { restrictions }, {
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      });
      setRestrictions(response.data);
      history.push('/recipes');
    } catch (error) {
      alert(error);
    }
  };

  const handleClick = (label) => {
    setRestrictions((previousState) => [...previousState, label]);
  };

  return (
    <div className="form">
      <form onSubmit={handleRestrictions}>
        <h2>Queremos melhorar as nossas sugestões para você!</h2>
        <h4>Você tem alergia a algum desses elementos?</h4>
        <div className="checkbox">
          {restrictionsArr.map((restriction) => (
            <Button
              label={restriction}
              className="restriction-btn"
              testid="restriction-btn"
              type="button"
              onClick={() => handleClick(restriction)}
            />
          ))}

        </div>
        <div className="mais-restricoes-btn">
          <Button
            className="restricoes-btn"
            testid="btn-restricoes"
            label="Adicionar outras alergias"
          />
        </div>
        <div className="btn-div">
          <Button
            className="continue-btn"
            testid="btn-continue"
            label="Continuar"
          />
        </div>
      </form>
    </div>
  );
}

export default Restrictions;
