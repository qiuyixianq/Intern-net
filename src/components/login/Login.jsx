import React from 'react';
import { Redirect } from 'react-router-dom';

const logined = true;
export const Login = () => {
    if(!logined){
        return (
            <div>
                <h3>This is login page</h3>
                <h6>Some login form</h6>
            </div>
        )
    }else{
        return (
            <Redirect to='/home' />
        )
    }
}