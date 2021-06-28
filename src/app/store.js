import { configureStore } from '@reduxjs/toolkit';
import searchBarQueryReducer from '../components/home/searchBar/searchBarSlice';
import companiesReducer from '../components/home/company/companySlice';
import companyDetailReducer from '../components/home/company/companyDetail/companyDetailSlice';
import authenticationReducer from '../components/authentication/tokenSlice';

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    searchQuery: searchBarQueryReducer,
    companies: companiesReducer,
    companyDetail: companyDetailReducer,
  },
});
