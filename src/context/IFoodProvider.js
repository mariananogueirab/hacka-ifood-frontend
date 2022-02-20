/* eslint-disable react/jsx-filename-extension */
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import IFoodContext from './IFoodContext';

function IFoodProvider({ children }) {
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const ContextValue = useMemo(
    () => ({
      email, setEmail, address, setAddress,
    }),
    [
      email, setEmail, address, setAddress,
    ],
  );

  return (
    <IFoodContext.Provider value={ContextValue}>
      {children}
    </IFoodContext.Provider>
  );
}

IFoodProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IFoodProvider;
