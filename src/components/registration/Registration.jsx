import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export const Registration = () => {
    return (
        <div>
            <h3>This is registration page</h3>
            <Redirect to='/home'/>
        </div>
    )
}