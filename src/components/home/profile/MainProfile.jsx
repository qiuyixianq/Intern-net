import React from 'react';
import Sidebar from "./components/Sidebar";
import { Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import ProfileInfo from "./pages/ProfileInfo";
import Education from "./pages/Education";
import Security from "./pages/Security";
import Saved from "./pages/Saved";
import Support from "./pages/Support";
import Experience from "./pages/Experience";
import { NavBar } from '../navbar/NavBar';
import { Footer } from '../footer/Footer';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const MainProfile = () => {
    const { token } = useSelector(state => state.authentication);

    if (!token) return  <Redirect to='/login' />

    return (
        // <Router>
        <div className="hj">
            <div className="hjContent">
                <div className="mainContent">
                    <div className="d-flex align-items-center">
                        <Sidebar />
                        <NavBar />
                    </div>
                    {/* <Profile/> */}
                </div>

                <Switch>
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/profile/overview" exact component={Profile} />
                    <Route path="/profile/overview/profileinfo" exact component={ProfileInfo} />
                    <Route path="/profile/overview/experience" exact component={Experience} />
                    <Route path="/profile/overview/education" exact component={Education} />
                    <Route path="/profile/security" exact component={Security} />
                    <Route path="/profile/saved" exact component={Saved} />
                    <Route path="/profile/support" exact component={Support} />
                </Switch>

                <div style={{ position: 'absolute', bottom: '0', width: '100%' }}>
                    <Footer />
                </div>
            </div>

        </div>
        // </Router>
    );
}