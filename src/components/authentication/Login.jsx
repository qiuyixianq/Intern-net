import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { updateToken, updateUser } from './tokenSlice';
const cryptoJs = require('crypto-js');
const axios = require('axios').default;

export const Login = () => {
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.authentication);
    //use Ref
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    //get session
    useEffect(() => {
        const login = async user => {
            try {
                const res = await axios.post('http://localhost:4000/login', { user });
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
            //decrypt
            const bytes = cryptoJs.AES.decrypt(sessionToken, 'secretRecipe');
            const user = JSON.parse(bytes.toString(cryptoJs.enc.Utf8));
            login(user);
        }
    }, [dispatch]);

    //event func
    const handleLogin = async () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (!email || !password) alert('Please enter login info');
        else {
            //backend check for account
            const user = { email, password };
            try {
                const res = await axios.post('http://localhost:4000/login', { user });
                //invalid 
                if (!res.data) {
                    alert('Invalid username or password');
                }

                //valid
                else {
                    const loginInfo = {
                        email: email,
                        password: password
                    }
                    const loginInfoEnc = cryptoJs.AES.encrypt(JSON.stringify(loginInfo), 'secretRecipe').toString();
                    sessionStorage.setItem('token', loginInfoEnc);
                    dispatch(updateToken(true));
                    dispatch(updateUser(res.data));
                }
            }
            catch (err) { console.log(err) };
        }
    }

    //main render
    if (!token) {
        return (
            <div className="ted">
                <div className="full-page">
                    <div className="navbar">
                        <div>
                            <a className="fontlogo" href='website.html'>Intern-net</a>
                        </div>
                        <nav>
                            <ul id='MenuItems'>
                                <li><a href='/'>Home</a></li>
                                <li><a href='/'>About Us</a></li>
                                <li><a href='/'>Services</a></li>
                                <li><a href='/'>Contact</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div id='login-form' className='login-page'>
                        <div className="form-box">
                            <div className="loginBox">
                                <div className='button-box'>
                                    <div id='btn'></div>

                                    <Link to='/login' style={{ textDecoration: 'none', color: 'black' }} >
                                        <button type='button' className='toggle-btn activex'>Log In</button>
                                    </Link>


                                    <Link to='/registration' style={{ textDecoration: 'none', color: 'black' }}>
                                        <button type='button' className='toggle-btn'>Sign Up</button>
                                    </Link>

                                </div>


                                <div id='login' className='input-group-login'>
                                    <input type='text' className='input-field' placeholder='Email Id' ref={emailRef} />
                                    <input type='password' className='input-field' placeholder='Enter Password' ref={passwordRef} />
                                    <div className="d-flex align-items-center mb-5">
                                        <input type='checkbox' className='check-box me-1' />
                                        <span>Remember Password</span>
                                    </div>
                                    <button onClick={() => handleLogin()} className='submit-btn'>Log in</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



        )
    } else {
        return (
            <Redirect to='/home' />
        )
    }
}