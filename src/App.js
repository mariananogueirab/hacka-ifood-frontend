/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IFoodProvider from './context/IFoodProvider';

function App() {
  return (
    <IFoodProvider>
      <Switch>
        <Route exact path="/" component={} />
      </Switch>
    </IFoodProvider>
  );
}

export default App;
