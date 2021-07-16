import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios').default;

//for body.req to backend
const reqUserObject = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    surName: '',
    mobile: '',
    location: '',
    birthday: '',
    gender: 'Male',
    profession: '',
}

export const Registration = () => {
    const [ registerObj, setRegisterObj ] = useState(reqUserObject);

    //event func
    const handleChange = e => {
        const { name, value } = e.target;
        setRegisterObj({...registerObj, [name] : value});
        
    }

    //onSubmit
    const handleSubmit = async e => {
        e.preventDefault()
        if(registerObj.password !== registerObj.confirmPassword) alert('Unmatch password and confirm password');
        else {
            //API call to backend register
            const res = await axios.post('http://localhost:4000/register', { user: registerObj });
            const status = res.data;
            if(status.registrationSuccess){
                alert('Registration Success');
                //clear form
                setRegisterObj(reqUserObject);
            }
            else alert('Registration Failed\nEmail already registered');
            
        }
    }



    //main render
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
                            <li><button className='loginbtn' style={{ width: 'auto' }}>Login</button></li>
                        </ul>
                    </nav>
                </div>

                <form id='login-form' className='login-page' onSubmit={ e => handleSubmit(e)} action="" >
                    <div className="form-box">
                        <div className="registerBox">
                            <div className='button-box'>
                                <div id='btn'></div>
                                <Link to='/login' style={{ textDecoration: 'none', color: 'black' }} >
                                    <button type='button' className='toggle-btn'>Log In</button>
                                </Link>

                                <Link to='/registration' style={{ textDecoration: 'none', color: 'black' }}>
                                    <button type='button' className='toggle-btn'>Register</button>
                                </Link>
                            </div>

                            <div id='register' data-toggle="buttons">
                                <input type='text' name="firstName" value={registerObj.firstName} className='input-field' placeholder='First Name' onChange={ e => handleChange(e)} required />
                                <input type='text' name="surName" value={registerObj.surName} className='input-field' placeholder='Last Name ' onChange={ e => handleChange(e)} required />
                                <input type='tel' name="mobile" value={registerObj.mobile} className='input-field' placeholder='Phone Number (eg: 010-123xxxx)' pattern="[0-9]{3}-[0-9]{7}" onChange={ e => handleChange(e)} required />
                                <input type='text' name="location" value={registerObj.location} className='input-field' placeholder='Location (eg: Kuala Lumpur, Malaysia)' onChange={ e => handleChange(e)} required />
                                <input type='email' name="email" value={registerObj.email} className='input-field' placeholder='Email Address' onChange={ e => handleChange(e)} required />
                                <input type='password' name="password" value={registerObj.password} className='input-field' placeholder='Enter Password' onChange={ e => handleChange(e)} required />
                                <input type='password' name="confirmPassword" value={registerObj.confirmPassword} className='input-field' placeholder='Confirm Password' onChange={ e => handleChange(e)} required />
                                <select className="input-field" name="profession" value={registerObj.profession} onChange={ e => handleChange(e)} required>
                                    <option value="">Select Education Course:</option>
                                    <option value="Business">Business</option>
                                    <option value="Built Environment">Built Environment</option>
                                    <option value="Communication & Creative">Communication & Creative</option>
                                    <option value="Computing Creative Media">Computing Creative Media</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Hospitality, Tourism & Culinary Arts">Hospitality, Tourism & Culinary Arts</option>
                                    <option value="Health Science">Health Science</option>
                                    <option value="Law">Law</option>
                                    <option value="Professional Accountancy">Professional Accountancy</option>
                                    <option value="Social Science">Social Science</option>
                                    <option value="Language">Language</option>
                                    <option value="Others">Others...</option>
                                </select>

                                <label htmlFor="birthday" className="mt-2">Date of Birth</label>
                                <input type="date" name="birthday" value={registerObj.birthday} className="input-field" id="birthday" placeholder="Date of Birth" onChange={ e => handleChange(e)} />
                                <select name="gender" id="gender" value={registerObj.gender} onChange={ e => handleChange(e)} >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                                <br></br>
                                <div className="d-flex mt-3 mb-3 align-items-center">
                                    <input type='checkbox' className='me-2' required />
                                    <span>I agree to the terms and conditions</span>
                                </div>
                                <button type='submit' className='submit-btn'>Register</button>
                            </div>

                        </div>
                    </div>


                </form>
            </div>
        </div>
    )
}