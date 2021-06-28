import React from 'react';
import { Link } from 'react-router-dom';


export const Registration = () => {
    return (
        <div>
            <center><h3>Registration Page</h3>
                <div>
                    <label htmlFor="name">Full Name: </label>
                    <input type="text" id="name" />

                    <br />
                    <label htmlFor="university">University: </label>
                    <input type="text" id="university" />

                    <br />
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" />
                    
                    <br />
                    <label htmlFor="pass">Password: </label>
                    <input type="password" id="pass"/>
                </div>
                <h6>
                    <Link to="/login" >Go to login</Link>
                </h6>
            </center>
        </div>
    )
}