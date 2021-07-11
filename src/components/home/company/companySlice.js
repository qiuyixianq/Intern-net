import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const companySlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        loadCompany: (state,action) => {
            state = action.payload.companies;
            return state;
        }
    }
});

export const { loadCompany } = companySlice.actions;
export default companySlice.reducer;