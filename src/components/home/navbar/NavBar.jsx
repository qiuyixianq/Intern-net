import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { clearUser } from '../../authentication/tokenSlice';

export const NavBar = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    //event func
    const handleLogout = () => {
        dispatch(clearUser());
        sessionStorage.clear();
    }



    return (
        <div className="mainBar container-fluid">
            <header className="d-flex flex-wrap justify-content-between border-bottom py-2 mb-3 ">
                <span className="d-flex align-items-center  text-dark text-decoration-none">
                    <Link to='/' className="text-decoration-none ">
                        <span className="fs-2 appName">Intern-net</span>
                    </Link>
                </span>

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className={`${location.pathname === '/home' ? 'navActive' : '' } nav-link`} to='/home' >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`${location.pathname === '/profile' ? 'navActive' : '' } nav-link ms-2`} to='/profile'  >Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/' onClick={() => handleLogout()} >
                            Logout
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    )
}