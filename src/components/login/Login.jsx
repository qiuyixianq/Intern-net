import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const logined = true;
export const Login = () => {
    if (!logined) {
        return (
            <div>
                <div>
                    <center>
                        <h3>Login</h3>
                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username" />

                        <br />
                        <label htmlFor="pass">Password: </label>
                        <input type="password" id="pass" />

                        <br />
                        <Link to='/registration' >Back to Registration</Link>
                    </center>
                </div>
            </div>
        )
    } else {
        return (
            <Redirect to='/home' />
        )
    }
}