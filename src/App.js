import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Registration } from './components/registration/Registration';
import { Home } from './components/home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Registration/>
        </Route>

        <Route path='/home' exact>
          <Home/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
