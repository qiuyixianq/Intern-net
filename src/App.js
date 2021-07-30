import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Registration } from './components/authentication/Registration';
import { Home } from './components/home/Home';
import { Login } from './components/authentication/Login';
import { LandingPage } from './components/landingPage/LandingPage';
import { MainProfile } from './components/home/profile/MainProfile';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/' exact>
            <LandingPage />
          </Route>
        </Switch>

        <Switch>
          <Route path='/registration' exact>
            <Registration />
          </Route>

          <Route path='/login' exact>
            <Login />
          </Route>

          <Route path='/home' exact>
            <Home />
          </Route>

          <Route path='/profile' >
            <MainProfile />
          </Route>

        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
