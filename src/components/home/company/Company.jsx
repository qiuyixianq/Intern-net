import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCompany } from './companySlice';
const axios = require('axios').default;


export const Company = () => {
    const { searchString } = useSelector(state => state.searchQuery);
    const companyList = useSelector(state => state.companies);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('fetching data...')
        async function fetchCompanies() {
            //note: params in axios config is actually 'query' in request header
            const res = await axios.get('http://localhost:4000/company', { params: { searchString }});
            const companies = res.data; //array of companies
            dispatch(loadCompany({ companies }));
        }
        fetchCompanies();
    }, [searchString]);

    const renderCompany = () => {
        if (companyList.length !== 0) {
            return (
                <div>
                    {companyList.map((company,index) => <p key={index}>{company.companyName}</p>)}
                </div>
            )
        }
    }

    return (
        <div>
            <h5>Company:</h5>
            {renderCompany()}
        </div>
    )
}