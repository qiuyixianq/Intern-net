import React from 'react';
import { Link } from 'react-router-dom';

const registered = false;
//<Redirect to='/home'/>
export const Registration = () => {
    return(
        <div>
            <h3>Registration Page</h3>

            <h6>
                <Link to="/login" >Go to login</Link>
            </h6>
        </div>
    )
}