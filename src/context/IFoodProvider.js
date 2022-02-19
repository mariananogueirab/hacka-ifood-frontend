/* eslint-disable react/jsx-filename-extension */
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import IFoodContext from './IFoodContext';

function IFoodProvider({ children }) {
  const [username, setUsername] = useState('');

  const contextValue = useMemo(
    () => ({
      username, setUsername,
    }),
    [
      username, setUsername,
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
