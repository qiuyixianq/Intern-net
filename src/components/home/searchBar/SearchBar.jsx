import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearch } from './searchBarSlice';


export const SearchBar = () => {
    const dispatch = useDispatch();
    const qString = useSelector(state => state.searchQuery.searchString);

    const handleSearchUpdate = (event) => {
        //dispatch the search string here
        dispatch(updateSearch({query: event.target.value}));
    }

    return (
        <div>
            <input type="text" placeholder="Search" onChange={(e) => handleSearchUpdate(e)} />
            <h3>Your Search</h3>
            <p>{qString === '' ? 'Empty' : qString}</p>
        </div>
    );

    
}