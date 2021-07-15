import React from 'react';
import { Link } from 'react-router-dom';


export const Registration = () => {
    return (
        // <div>
        //     <center><h3>Registration Page</h3>
        //         <div>
        //             <label htmlFor="name">Full Name: </label>
        //             <input type="text" id="name" />

        //             <br />
        //             <label htmlFor="university">University: </label>
        //             <input type="text" id="university" />

        //             <br />
        //             <label htmlFor="username">Username: </label>
        //             <input type="text" id="username" />

        //             <br />
        //             <label htmlFor="pass">Password: </label>
        //             <input type="password" id="pass"/>
        //         </div>
        //         <h6>
        //             <Link to="/login" >Go to login</Link>
        //         </h6>
        //     </center>
        // </div>

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

                <form id='login-form' className='login-page' onSubmit={() => alert('sia')}>
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
                                <input type='text' className='input-field' placeholder='First Name' required />
                                <input type='text' className='input-field' placeholder='Last Name ' required />
                                <input type='tel' className='input-field' placeholder='Phone Number (eg: 010-123xxxx)' pattern="[0-9]{3}-[0-9]{7}" required />
                                <input type='text' className='input-field' placeholder='Location (eg: Kuala Lumpur, Malaysia)' required />
                                <input type='email' className='input-field' placeholder='Email Address' required />
                                <input type='password' className='input-field' placeholder='Enter Password' required />
                                <input type='password' className='input-field' placeholder='Confirm Password' required />
                                <select className="input-field" required>
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

                                <label htmlFor="birthday" className="mt-2">Date of Brith</label>
                                <input type="date" className="input-field" id="birthday" placeholder="Date of Birth" />
                                <select name="gender" id="gender">
                                    <option value="Male">Male</option>
                                    <option value="Female">FeMale</option>
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