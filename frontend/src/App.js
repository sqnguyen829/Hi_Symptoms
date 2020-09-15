import React from 'react';
import { Route, Switch } from 'react-router-dom'
import StartPage from './Containers/StartPage'
import BodyPage from './Containers/BodyPage'
import TestPage from './Containers/TestPage'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ StartPage }/>
        <Route exact path='/body' component ={ BodyPage }/>
        <Route exact path='/test' component ={ TestPage }/>
      </Switch>
    </div>
  );
}

export default App;
