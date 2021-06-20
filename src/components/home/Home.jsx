import React from 'react';
import { Company } from './company/Company';
import { SearchBar } from './searchBar/SearchBar';

export const Home = () => {
    return (
        <div>
            <h3>Home</h3>
            <SearchBar />
            <Company/>
        </div>
    )
}