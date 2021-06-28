import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { updateToken, updateUser } from './tokenSlice';
const axios = require('axios').default;

export const Login = () => {
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.authentication);
    //use Ref
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    //event func
    const handleLogin = async() => {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        if(!username || !password) alert('Please enter login info');
        else{
            //backend check for account
            const user = { username, password };
            try{
                const res = await axios.post('http://localhost:4000/login', { requestToken: 'login', user})
                //invalid 
                if(!res.data) alert('Invalid username or password');

                //valid
                else {
                    dispatch(updateToken(true));
                    dispatch(updateUser(res.data));
                }
            }
            catch(err) { console.log(err)};
        }
    }

    if (!token) {
        return (
            <div>
                <div>
                    <center>
                        <h3>Login</h3>
                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username" ref={usernameRef} />

                        <br />
                        <label htmlFor="pass">Password: </label>
                        <input type="password" id="pass" ref={passwordRef} />

                        <br />
                        <button onClick={() => handleLogin()}>Login</button>

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