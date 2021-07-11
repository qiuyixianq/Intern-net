import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearUser } from '../../authentication/tokenSlice';

export const NavBar = () => {
    const dispatch = useDispatch();

    //event func
    const handleLogout = () => {
        dispatch(clearUser());
        sessionStorage.clear();
    }


    return (
        <div className="mainBar container-fluid">
            <header className="d-flex flex-wrap justify-content-between border-bottom py-2 mb-3 ">
                <span className="d-flex align-items-center  text-dark text-decoration-none">
                    <span className="fs-2 appName">Intern-net</span>
                </span>

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to='/profile' >Profile</Link>
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