import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    searchString: ""
}

const searchBarSlice = createSlice({
    name: 'searchQuery',
    initialState,
    reducers: {
        updateSearch: (state,action) => {
            const { query } = action.payload;
            state.searchString = query;
        }
    }
});

export const { updateSearch } = searchBarSlice.actions;
export default searchBarSlice.reducer;