import React from 'react';
import { useSelector } from 'react-redux';
const axios = require('axios').default;

export const Company = () => {
    const queryString = useSelector(state => state.searchQuery.searchString);

    const getCompanies = () => {
        return queryString === '' ? (
            <p>all companies</p>
        ) : (
            <p>{`Companies with ${queryString}`}</p>
        )
    }

    return (
        <div>
            <h5>Company</h5>
            <div>
                {getCompanies()}
            </div>
        </div>
    )
}