import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCompany } from './companySlice';
import ReactPaginate from 'react-paginate';
const axios = require('axios').default;


export const Company = () => {
    const { searchString, isAdvanceSearch, advanceSearchObject } = useSelector(state => state.searchQuery);
    const dispatch = useDispatch();
    //useRef
    const companyRef = useRef(null);
    //Company & pagination variable
    const companyList = useSelector(state => state.companies);
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const currentPageUsers = pageNumber * usersPerPage;
    let pageCount = 1;

    //event func
    const onPageChange = ({ selected }) => {
        setPageNumber(selected);
        companyRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    //API call
    useEffect(() => {
        //normal search func
        async function normalFetch() {
            //note: params in axios config is actually 'query' in request header
            const res = await axios.get('http://localhost:4000/company', { params: { isAdvanceSearch, searchString } });
            const companies = res.data; //array of companies
            dispatch(loadCompany({ companies }));
        }

        //advance search func
        async function advanceFetch() {
            const res = await axios.get('http://localhost:4000/company', { params: { isAdvanceSearch, advanceSearchObject } });
            const companies = res.data;
            dispatch(loadCompany({ companies }));
        }

        isAdvanceSearch? advanceFetch() : normalFetch();
        setPageNumber(0);

    }, [searchString, dispatch, isAdvanceSearch, advanceSearchObject]);

    //Render Comapnies into Cards
    const renderCompany = () => {
        if (companyList.length !== 0) {
            pageCount = Math.ceil(companyList.length / usersPerPage);
            return (
                <div>
                    {companyList.slice(currentPageUsers, currentPageUsers + usersPerPage).map((company, index) => (
                        <div key={index} className="card mb-4" >
                            <div className="card-header fw-bold">
                                <img className="me-3 companyLogo" src={company.logo} alt="company logo" height="55" />
                                {company.companyName}
                            </div>

                            <div className="card-body">
                                <h6>Industry: <span className="fw-normal">{company.companyIndustry}</span></h6>
                                <h6>Jobs <span className="badge bg-success" >{company.companyJob.length}</span></h6>
                            </div>
                        </div>
                    ))}

                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        pageCount={pageCount}
                        onPageChange={onPageChange}
                        containerClassName={'companyPageBox'}
                        previousLinkClassName={'previousPageBtn'}
                        nextLinkClassName={'nextPageBtn'}
                        disabledClassName={'disablePageBtn'}
                        activeClassName={'activePageBtn'}
                    />

                </div>
            )
        }
        else {
            if ((searchString !== '' && !isAdvanceSearch) || (advanceSearchObject !== null && isAdvanceSearch))
                return <div>No Company Found 😐 </div>
            else return <div>Loading ...</div>
        }
    }


    //main render
    return (
        <div>
            <hr></hr>
            <h5 className="mt-5 mb-3" ref={companyRef}>Company</h5>
            <div className="mb-5">
                {renderCompany()}

            </div>
        </div>
    )
}