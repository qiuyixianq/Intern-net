import React from 'react';
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import ProfileInfo from "./pages/ProfileInfo";
import Education from "./pages/Education";
import Security from "./pages/Security";
import Saved from "./pages/Saved";
import Support from "./pages/Support";
import Experience from "./pages/Experience";


export const MainProfile = () => {
    return (
        // <Router>
        <React.Fragment>
            <Sidebar />
            {/* <Profile /> */}
            <Switch>
                <Route path="/overview" exact component={Profile} />
                <Route path="/overview/profileinfo" exact component={ProfileInfo} />
                <Route path="/overview/experience" exact component={Experience} />
                <Route path="/overview/education" exact component={Education} />
                <Route path="/security" exact component={Security} />
                <Route path="/saved" exact component={Saved} />
                <Route path="/support" exact component={Support} />
            </Switch>
        </React.Fragment>
        // </Router>
    );
}