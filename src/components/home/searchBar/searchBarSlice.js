import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    searchString: "",
    isAdvanceSearch: false,
    advanceSearch: {
        companyName: '',
        companyIndustry: '',
        companyLocation: '',
        companyJobTitle: ''
    }
}

const searchBarSlice = createSlice({
    name: 'searchQuery',
    initialState,
    reducers: {
        updateSearch: (state,action) => {
            state.searchString = action.payload.query;
            console.log('current searchString:',state.searchString);
        },

        toggleIsAdvanceSearch: (state,action) => {
            state.isAdvanceSearch = !state.isAdvanceSearch;
            console.log('current searchType:', state.isAdvanceSearch);
        },

        updateAdvanceSearch: (state,action) => {
            state.advanceSearch = action.payload;
        },
    }
});

export const { updateSearch, toggleIsAdvanceSearch, updateAdvanceSearch } = searchBarSlice.actions;
export default searchBarSlice.reducer;