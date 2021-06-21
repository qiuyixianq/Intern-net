import React from 'react';
import { Company } from './company/Company';
import { SearchBar } from './searchBar/SearchBar';

export const Home = () => {
    return (
        <div>
            <div className="container-fluid">
                <header className="d-flex flex-wrap justify-content-between py-2 mb-3 border-bottom">
                    <span className="d-flex align-items-center text-dark text-decoration-none">
                        <span className="fs-4">Intern-net</span>
                    </span>

                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="/" className="nav-link">Log Out</a></li>
                    </ul>
                </header>
            </div>
            <SearchBar />
            <Company />
        </div>
    )
}