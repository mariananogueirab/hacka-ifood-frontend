/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './pages/Register';
import Restrictions from './pages/Restrictions';
import IFoodProvider from './context/IFoodProvider';
import RecipeDetails from './pages/RecipeDetails';
import Recipes from './pages/Recipes';

function App() {
  return (
    <IFoodProvider>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/recipes/:id" component={RecipeDetails} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/user" component={Register} />
        <Route path="/user/restrictions" component={Restrictions} />
      </Switch>
    </IFoodProvider>
  );
}

export default App;
