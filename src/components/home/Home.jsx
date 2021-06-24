import React, { useEffect } from 'react';
import { Company } from './company/Company';
import { SearchBar } from './searchBar/SearchBar';
import { gsap } from 'gsap';



export const Home = () => {

    useEffect(() => {
        const t = gsap.timeline({defaults: {ease: 'power1'}});
    
        t.fromTo('.mainBar', { opacity: 0 }, { opacity: 1, duration: 1});
    
        return () => t.kill();
    },[]);

    
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
            <SearchBar />
            <Company />
        </div>
    )
}