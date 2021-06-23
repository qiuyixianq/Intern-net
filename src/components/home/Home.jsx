import React from 'react';
import { Company } from './company/Company';
import { SearchBar } from './searchBar/SearchBar';

export const Home = () => {
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