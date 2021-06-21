import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCompany } from './companySlice';
const axios = require('axios').default;


export const Company = () => {
    const { searchString, isAdvanceSearch, advanceSearchObject } = useSelector(state => state.searchQuery);
    const companyList = useSelector(state => state.companies);
    const dispatch = useDispatch();

    useEffect(() => {
        //normal search
        if (!isAdvanceSearch) {
            async function normalFetch() {
                //note: params in axios config is actually 'query' in request header
                const res = await axios.get('http://localhost:4000/company', { params: { isAdvanceSearch, searchString } });
                const companies = res.data; //array of companies
                dispatch(loadCompany({ companies }));
            }
            normalFetch();
        }
        //advance search
        else {
            async function advanceFetch() {
                const res = await axios.get('http://localhost:4000/company', { params: { isAdvanceSearch, advanceSearchObject } });
                const companies = res.data;
                dispatch(loadCompany({ companies }));
            }
            advanceFetch();
        }
    }, [searchString, dispatch, isAdvanceSearch, advanceSearchObject]);

    const renderCompany = () => {
        if (companyList.length !== 0) {
            return (
                <div>
                    {companyList.map((company, index) => (
                        <div className="card mb-4" >
                            <div key={index} className="card-header fw-bold">
                                {company.companyName}
                            </div>

                            <div className="card-body">
                                <h6 className="card-text fw-normal">{company.companyIndustry}</h6>
                            </div>
                        </div>
                    ))}

                </div>
            )
        }
        else {
            console.log(advanceSearchObject);
            if ((searchString !== '' && !isAdvanceSearch) || (advanceSearchObject !== null && isAdvanceSearch))
                return <div>No Company Found 😐 </div>
            else return <div>Loading ...</div>
        }
    }

    return (
        <div>
            <h5 className="mt-5 mb-3">Company</h5>
            <div>
                {renderCompany()}
            </div>
        </div>
    )
}