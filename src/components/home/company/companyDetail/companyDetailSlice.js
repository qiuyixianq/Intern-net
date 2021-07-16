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
        },

        clearSelectedCompany: (state) => {
            return initialState;
        }
    }
});

export const { setSelectedCompany, setShowDetail, clearSelectedCompany } = companyDetailSlice.actions;
export default companyDetailSlice.reducer;