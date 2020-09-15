import React from 'react';
import { Route, Switch } from 'react-router-dom'
import StartPage from './Containers/StartPage'
import BodyPage from './Containers/BodyPage'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ StartPage }/>
        <Route exact path='/body' component ={ BodyPage }/>
      </Switch>
    </div>
  );
}

export default App;
