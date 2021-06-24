import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedCompany: {},
    showDetail: false
}

const companyDetailSlice = createSlice({
    name: 'companyDetail',
    initialState,
    reducers: {
        setSelectedCompany: (state,action) => {
            state.selectedCompany = action.payload;
        },

        setShowDetail: (state,action) => {
            state.showDetail = action.payload;
        }
    }
});

export const { setSelectedCompany, setShowDetail } = companyDetailSlice.actions;
export default companyDetailSlice.reducer;