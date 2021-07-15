import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Registration } from './components/authentication/Registration';
import { Home } from './components/home/Home';
import { Login } from './components/authentication/Login';
import { LandingPage } from './components/landingPage/LandingPage';
import { Profile } from './components/home/profile/Profile';

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

          <Route path='/profile' exact >
            <Profile />
          </Route>

        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
