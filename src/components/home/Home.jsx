import React, { useEffect, useState } from 'react';
import { Company } from './company/Company';
import { SearchBar } from './searchBar/SearchBar';
import { gsap } from 'gsap';



export const Home = () => {
    const [windowX, setWindowX] = useState(window.innerWidth);

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

    const renderPocketProfile = () => {
        //desktop
        if (windowX >= 992) {
            return (
                <div className="col-4 pocketProfile">
                    <div>
                        <h5>Name:</h5>
                    </div>
                </div>
            )
        }
        //mobile; hide
        else return <React.Fragment />
    }


    return (
        <div className="mainContent">
            <div className="mainBar container-fluid">
                <header className="d-flex flex-wrap justify-content-between border-bottom py-2 mb-3 ">
                    <span className="d-flex align-items-center  text-dark text-decoration-none">
                        <span className="fs-2 appName">Intern-net</span>
                    </span>

                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <button className="nav-link">Profile</button>
                        </li>
                        <li className="nav-item"><button className="nav-link">Log Out</button></li>
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
    )
}