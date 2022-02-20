/* eslint-disable react/jsx-filename-extension */
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import IFoodContext from './IFoodContext';

function IFoodProvider({ children }) {
  const [email, setEmail] = useState('');

  const contextValue = useMemo(
    () => ({
      email, setEmail,
    }),
    [
      email, setEmail,
    ],
  );

  return (
    <IFoodContext.Provider value={contextValue}>
      {children}
    </IFoodContext.Provider>
  );
}

IFoodProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IFoodProvider;
