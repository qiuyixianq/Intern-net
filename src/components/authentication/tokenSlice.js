import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: false,
    user: {
        username: '',
        password: '',
        name: '',
        savedJob: []
    }
};

const tokenSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        updateToken: (state,action) => {
            state.token = action.payload;
        },
        updateUser: (state,action) => {
            state.user = action.payload;
        },
        clearUser: state => {
            state.token = initialState.token;
            state.user = initialState.user;
        }
    }
});

export const { updateToken, updateUser, clearUser } = tokenSlice.actions;
export default tokenSlice.reducer;