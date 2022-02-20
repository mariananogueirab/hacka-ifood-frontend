/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IFoodProvider from './context/IFoodProvider';
import RecipeDetails from './pages/RecipeDetails';
import Recipes from './pages/Recipes';
import Login from './components/Login';

function App() {
  return (
    <IFoodProvider>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/recipes/:id" component={RecipeDetails} />
        <Route exact path="/recipes" component={Recipes} />
      </Switch>
    </IFoodProvider>
  );
}

export default App;
