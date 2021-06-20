import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCompany } from './companySlice';
const axios = require('axios').default;


export const Company = () => {
    const { searchString, isAdvanceSearch } = useSelector(state => state.searchQuery);
    const companyList = useSelector(state => state.companies);
    const dispatch = useDispatch();

    //fetch data by normal search
    useEffect(() => {
        console.log('fetching data');

        if(!isAdvanceSearch){
            async function normalFetch() {
                //note: params in axios config is actually 'query' in request header
                const res = await axios.get('http://localhost:4000/company', { params: { isAdvanceSearch, searchString } });
                const companies = res.data; //array of companies
                dispatch(loadCompany({ companies }));
            }
            normalFetch();
        }
    }, [searchString, dispatch, isAdvanceSearch]);

    const renderCompany = () => {
        if (companyList.length !== 0) {
            return (
                <div>
                    {companyList.map((company, index) => <p key={index}>{company.companyName}</p>)}
                </div>
            )
        }
        else {
            if (searchString !== '') return <div>Company Not Found 😐</div>
            else return <div>Loading ...</div>
        }
    }

    return (
        <div>
            <h5>Company:</h5>
            {renderCompany()}
        </div>
    )
}