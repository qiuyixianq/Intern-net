import React, { useRef, useState } from 'react';
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
    //for open close advance search input
    const [openAdvanceInput, setOpenAdvanceInput] = useState(false);

    //functions
    const toggleAdvanceInput = () => setOpenAdvanceInput(!openAdvanceInput);
    const handleSearchUpdate = event => dispatch(updateSearch({ query: event.target.value }));

    const setAdvanceSearch = (type) => {
        dispatch(updateSearch({ query: '' }));
        dispatch(toggleIsAdvanceSearch({ isAdvance: type }));
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

    const clearBoxes = () => {
        nameRef.current.value = '';
        industryRef.current.value = '';
        locationRef.current.value = '';
        jobTitleRef.current.value = '';
        dispatch(updateAdvanceSearch({}));
    }

    const renderSearchBar = () => {
        if (!isAdvanceSearch) {
            return (
                <div class="form-floating mb-3">
                    <input type="text" placeholder="Search Company" id="floatingInput" class="form-control" onChange={(e) => handleSearchUpdate(e)} />
                    <label htmlFor="floatingInput">Search Company</label>
                </div>
            )
        }
        else {
            return (
                <div>

                    {openAdvanceInput ? (
                        <div>
                            <div class="form-floating mb-2">
                                <input type="text" id="companyName" placeholder="Company Name" class="form-control" ref={nameRef} />
                                <label htmlFor="companyName">Company Name</label>
                            </div>

                            <div class="form-floating mb-2">
                                <input type="text" id="companyIndustry" placeholder="Industry" class="form-control" ref={industryRef} />
                                <label htmlFor="companyIndustry">Industry</label>
                            </div>

                            <div class="form-floating mb-2">
                                <input type="text" id="companyLocation" placeholder="Location" class="form-control" ref={locationRef} />
                                <label htmlFor="companyLocation">Location</label>
                            </div>

                            <div class="form-floating mb-2">
                                <input type="text" id="companyJobTitle" placeholder="Job Title" class="form-control" ref={jobTitleRef} />
                                <label htmlFor="companyJobTitle">Job Title</label>
                            </div>

                            <button className="btn btn-info " onClick={() => advanceSearch()}>Filter</button>
                            <button className="btn btn-outline-warning ms-3 text-dark" onClick={() => clearBoxes()}>Reset</button>
                        </div>
                    ) : <React.Fragment></React.Fragment>}
                </div>
            )
        }
    }

    return (
        <div>
            <div className="searchTypeGroup btn-group ">
                <button onClick={() => setAdvanceSearch(false)} className={` btn btn-primary ${isAdvanceSearch ? '' : 'active'}`}>Normal</button>
                <button onClick={() => setAdvanceSearch(true)} className={` btn btn-primary ${isAdvanceSearch ? 'active' : ''}`}>Advance</button>
            </div>
            {isAdvanceSearch ? (
                    <button className="toggleAdvance p-1 btn btn-light mb-3" onClick={() => toggleAdvanceInput()}>
                        {openAdvanceInput ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                            </svg>

                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        )}
                    </button>
                ): <React.Fragment></React.Fragment>}
            <br />
            {renderSearchBar()}
        </div>
    );


}