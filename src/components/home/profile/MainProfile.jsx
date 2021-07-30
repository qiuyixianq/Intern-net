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
import greet from './assets/images/greet.svg';

export const MainProfile = () => {
    return (
        // <Router>
        <div className="hj">
            <Sidebar />
            {/* <Profile /> */}
            <Switch>
                <Route path="/profile" exact>
                    <center>
                        <img src={greet} alt="greet" style={{ width: "50%", marginTop: "30px" }} />
                    </center>
                </Route>
                <Route path="/profile/overview" exact component={Profile} />
                <Route path="/profile/overview/profileinfo" exact component={ProfileInfo} />
                <Route path="/profile/overview/experience" exact component={Experience} />
                <Route path="/profile/overview/education" exact component={Education} />
                <Route path="/profile/security" exact component={Security} />
                <Route path="/profile/saved" exact component={Saved} />
                <Route path="/profile/support" exact component={Support} />
            </Switch>
        </div>
        // </Router>
    );
}