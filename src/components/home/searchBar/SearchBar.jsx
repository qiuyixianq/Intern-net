import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSearch } from './searchBarSlice';



export const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearchUpdate = (event) => {
        //dispatch the search string here
        dispatch(updateSearch({query: event.target.value}));
    }

    return (
        <div>
            <input type="text" placeholder="Search" onChange={(e) => handleSearchUpdate(e)} />
        </div>
    );

    
}