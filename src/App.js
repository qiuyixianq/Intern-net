import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Registration } from './components/registration/Registration';
import { Home } from './components/home/Home';
import { Login } from './components/login/Login';
import { LandingPage } from './components/landingPage/LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <LandingPage/>
        </Route>
      </Switch>

      <Switch>
        <Route path='/registration' exact>
          <Registration />
        </Route>

        <Route path='/home' exact>
          <Home />
        </Route>

        <Route path='/login' exact>
          <Login />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
