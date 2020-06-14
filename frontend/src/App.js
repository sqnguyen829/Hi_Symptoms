import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import StartPage from './Containers/StartPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ StartPage }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
