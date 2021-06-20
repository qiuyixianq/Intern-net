import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    searchString: "",
    isAdvanceSearch: false,
    advanceSearchObject: {
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
            state.isAdvanceSearch = action.payload.isAdvance;
            console.log('current searchType:', state.isAdvanceSearch);
        },

        updateAdvanceSearch: (state,action) => {
            state.advanceSearchObject = action.payload;
        },
    }
});

export const { updateSearch, toggleIsAdvanceSearch, updateAdvanceSearch } = searchBarSlice.actions;
export default searchBarSlice.reducer;