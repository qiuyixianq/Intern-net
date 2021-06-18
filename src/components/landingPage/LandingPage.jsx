import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
    return (
        <div>
            <h3>This is landing page</h3>

            <ul>
                <li>
                    <Link to='registration'>Sign up</Link>
                </li>
                <li>
                    <Link to='login'>Login</Link>
                </li>
            </ul>

        </div>
    )
}