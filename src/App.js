import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserProvider from './context/UserProvider';

function App() {
  return (
    <UserProvider>
      <Switch>
        {/* <Route exact path="/" component={} /> */}
      </Switch>
    </UserProvider>
  );
}

export default App;
