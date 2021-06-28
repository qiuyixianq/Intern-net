import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { updateToken, updateUser } from './tokenSlice';
const cryptoJs = require('crypto-js');
const axios = require('axios').default;

export const Login = () => {

    const obj = {
        username: 'admin123',
        password: 'admin123'
    };

    //get session
    useEffect(() => {
        const login = async (user) => {
            try {
                const res = await axios.post('http://localhost:4000/login', { requestToken: 'login', user })
                //invalid 
                if (!res.data) alert('Invalid username or password');

                //valid
                else {
                    dispatch(updateToken(true));
                    dispatch(updateUser(res.data));
                }
            }
            catch (err) { console.log(err) };
        }

        const sessionToken = sessionStorage.getItem('token');
        //session available
        if (sessionToken) {
            const user = JSON.parse(sessionToken);
            login(user);
        }


    }, []);


    const objEnc = cryptoJs.AES.encrypt(JSON.stringify(obj), 'secretRecipe').toString();
    console.log('Encrypted: ', objEnc);

    const bytes = cryptoJs.AES.decrypt(objEnc, 'secretRecipe');
    const objDec = JSON.parse(bytes.toString(cryptoJs.enc.Utf8));
    console.log('Decrypted: ', objDec);


    const dispatch = useDispatch();
    const { token } = useSelector(state => state.authentication);
    //use Ref
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    //event func
    const handleLogin = async () => {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        if (!username || !password) alert('Please enter login info');
        else {
            //backend check for account
            const user = { username, password };
            try {
                const res = await axios.post('http://localhost:4000/login', { requestToken: 'login', user })
                //invalid 
                if (!res.data) alert('Invalid username or password');

                //valid
                else {
                    const loginInfo = {
                        username: res.data.username,
                        password: res.data.password
                    }
                    sessionStorage.setItem('token', JSON.stringify(loginInfo));
                    dispatch(updateToken(true));
                    dispatch(updateUser(res.data));
                }
            }
            catch (err) { console.log(err) };
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