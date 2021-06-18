import React from 'react';
import { Company } from '../company/Company';

export const Home = () => {
    return (
        <div>
            <h3>Home</h3>
            <input type="text" placeholder="Search Bar" />
            <Company />
        </div>
    )
}