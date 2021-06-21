import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsAdvanceSearch, updateSearch, updateAdvanceSearch } from './searchBarSlice';

export const SearchBar = () => {
    //for slices
    const dispatch = useDispatch();
    const { isAdvanceSearch } = useSelector(state => state.searchQuery);
    //ref hook
    const nameRef = useRef(null);
    const industryRef = useRef(null);
    const locationRef = useRef(null);
    const jobTitleRef = useRef(null);

    //functions
    const handleSearchUpdate = event => dispatch(updateSearch({ query: event.target.value }));

    const setAdvanceSearch = (type) => {
        dispatch(updateSearch({ query: '' }));
        dispatch(toggleIsAdvanceSearch({isAdvance: type}));
    }

    const advanceSearch = () => {
        const searchObject = { 
            companyName: nameRef.current.value, 
            companyIndustry: industryRef.current.value,
            companyLocation: locationRef.current.value,
            companyJobTitle: jobTitleRef.current.value
        };
        dispatch(updateAdvanceSearch(searchObject));
    }

    const renderSearchBar = () => {
        if (!isAdvanceSearch) {
            return (<input type="text" placeholder="Search Company" onChange={(e) => handleSearchUpdate(e)} />)
        }
        else {
            return (
                <div>
                    <label htmlFor="companyName">Company Name: </label>
                    <input type="text" id="companyName" ref={nameRef} /><br />

                    <label htmlFor="companyIndustry">Industry: </label>
                    <input type="text" id="companyIndustry" ref={industryRef} /><br />

                    <label htmlFor="companyLocation">Location: </label>
                    <input type="text" id="companyLocation" ref={locationRef} /><br />

                    <label htmlFor="companyJobTitle">Job Title: </label>
                    <input type="text" id="companyJobTitle" ref={jobTitleRef} /><br />

                    <button onClick={() => advanceSearch()}>Search</button>
                </div>
            )
        }
    }

    return (
        <div>
            <button onClick={() => setAdvanceSearch(false)}>Normal</button>
            <button onClick={() => setAdvanceSearch(true)}>Advance</button>
            <br />
            {renderSearchBar()}
        </div>
    );


}