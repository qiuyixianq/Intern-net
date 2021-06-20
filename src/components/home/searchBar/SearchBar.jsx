import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsAdvanceSearch, updateSearch } from './searchBarSlice';

export const SearchBar = () => {
    const dispatch = useDispatch();
    const { isAdvanceSearch } = useSelector(state => state.searchQuery);
    const handleSearchUpdate = event => dispatch(updateSearch({ query: event.target.value }));
    const handleToggleAdvSearch = () => {
        dispatch(updateSearch({ query: '' }));
        dispatch(toggleIsAdvanceSearch());
    }
    
    const renderSearchBar = () => {
        if (!isAdvanceSearch) {
            return (<input type="text" placeholder="Search Company" onChange={(e) => handleSearchUpdate(e)} />)
        }
        else {
            return (
                <div>
                    input for advance search input
                </div>
            )
        }
    }

    return (
        <div>
            {renderSearchBar()}
            <button onClick={() => handleToggleAdvSearch()}>{isAdvanceSearch ? 'Normal Search' : 'Advance Search'}</button>
        </div>
    );


}