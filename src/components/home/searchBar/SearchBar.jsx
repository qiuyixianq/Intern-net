import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsAdvanceSearch, updateSearch, updateAdvanceSearch } from './searchBarSlice';
import { gsap } from 'gsap';

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
    const [openAdvanceInput, setOpenAdvanceInput] = useState(true);

    //search form anim
    useEffect(() => {
        const t = gsap.timeline({ defaults: { ease: 'power1.out' } });
        t.fromTo('.form-floating', { opacity: 0, y: "-30%" }, { opacity: 1, y: "0%", duration: 0.5, stagger: 0.15 });

        //cleanup func
        return () => t.kill();
    }, [isAdvanceSearch, openAdvanceInput]);

    //functions
    //onclick =>
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

    //render utility
    const renderSearchBar = () => {

        //Normal Search
        if (!isAdvanceSearch) {
            return (
                <div className="form-floating">
                    <input type="text" placeholder="Search Company" id="normalSearch" className="form-control" onChange={(e) => handleSearchUpdate(e)} />
                    <label htmlFor="normalSearch">Search Company</label>
                </div>
            )
        }
        //Advance Search
        else {
            return (
                <div>
                    {openAdvanceInput ? (
                        <div>
                            <div className="form-floating mb-2 ">
                                <input type="text" id="companyName" placeholder="Company Name" className="form-control" ref={nameRef} />
                                <label htmlFor="companyName">Company Name</label>
                            </div>

                            <div className="form-floating mb-2 ">
                                <input type="text" id="companyIndustry" placeholder="Industry" className="form-control" ref={industryRef} />
                                <label htmlFor="companyIndustry">Industry</label>
                            </div>

                            <div className="form-floating mb-2 ">
                                <input type="text" id="companyLocation" placeholder="Location" className="form-control" ref={locationRef} />
                                <label htmlFor="companyLocation">Location</label>
                            </div>

                            <div className="form-floating mb-2 ">
                                <input type="text" id="companyJobTitle" placeholder="Job Title" className="form-control" ref={jobTitleRef} />
                                <label htmlFor="companyJobTitle">Job Title</label>
                            </div>

                            <a className="btn btn-info  " role="button" href="#companyHeader" onClick={() => advanceSearch()}>Filter</a>
                                <a className="btn btn-outline-warning ms-2 text-dark  " role="button" href="#companyHeader" onClick={() => clearBoxes()}>Reset</a>
                        </div>
                    ) :
                        <React.Fragment></React.Fragment>}
                </div>
            )
        }
    }

    //main render
    return (
        <div className='searchBarJSX'>
            <div className="d-flex align-items-center " >
                <div className="btn-group " role="group">
                    <input type="radio" className="btn-check" name='btnradio' id='normalSearch' autoComplete='off' checked={!isAdvanceSearch} onChange={() => {}} onClick={() => setAdvanceSearch(false)} />
                    <label className="btn btn-outline-primary normalSearchBtn" htmlFor="normalSearch">Normal</label>

                    <input type="radio" className="btn-check" name="btnradio" id='advanceSearch' autoComplete='off' checked={isAdvanceSearch} onChange={() => {}} onClick={() => setAdvanceSearch(true)} />
                    <label className="btn btn-outline-primary advanceSearchBtn" htmlFor="advanceSearch">Advance</label>
                </div>

                {isAdvanceSearch ?
                    (
                        <span className="mb-2 p-1" role='button' onClick={() => toggleAdvanceInput()}>
                            {openAdvanceInput ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                </svg>

                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg>
                            )}
                        </span>
                    ) :
                    <React.Fragment></React.Fragment>
                }
            </div>
            <br />
            {renderSearchBar()}
            <hr />
        </div>
    );


}