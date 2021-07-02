import React, { useEffect, useState } from 'react';
import { Company } from './company/Company';
import { SearchBar } from './searchBar/SearchBar';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { clearUser } from '../authentication/tokenSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Footer } from './Footer/Footer';

export const Home = () => {
    const { token } = useSelector(state => state.authentication);
    const [windowX, setWindowX] = useState(window.innerWidth);
    const dispatch = useDispatch();

    //mainBar anim
    useEffect(() => {
        const t = gsap.timeline({ defaults: { ease: 'power1' } });
        t.fromTo('.mainBar', { opacity: 0 }, { opacity: 1, duration: 1 });

        return () => t.kill();
    }, []);

    //rerender on resize
    useEffect(() => {
        const handleResize = () => setWindowX(window.innerWidth);
        window.addEventListener('resize', handleResize);

        //cleanup
        return () => window.removeEventListener('resize', handleResize);
    });

    //event func
    const handleLogout = () => {
        dispatch(clearUser());
        sessionStorage.clear();
    }

    //pocket profile
    const renderPocketProfile = () => {
        //desktop
        if (windowX >= 992) {
            return (
                <div className="col-4 pocketProfile">
                    <h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg>
                        <span> Yee Xiang</span>
                    </h6>

                    <h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                        </svg>
                        <span> qiuyixianq@gmail.com</span>
                    </h6>

                    <h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <span> Selangor</span>
                    </h6>

                    <h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-briefcase" viewBox="0 0 16 16">
                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                        </svg>
                        <span> Software Engineer, Fullstack Engineer</span>
                    </h6>
                </div>
            )
        }
        //mobile; hide
        else return <React.Fragment />
    }


    //main render
    // no login token
    if (!token) return (
        <Redirect to='/login' />
    )
    //logged in
    else {
        return (
            <React.Fragment>
                <div className="mainContent">
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
                    <div className="container-fluid mt-4">
                        <div className="row justify-content-between">
                            <div className="col col-lg-7">
                                <SearchBar />
                            </div>
                            {renderPocketProfile()}
                        </div>
                    </div>
                    <Company />
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}