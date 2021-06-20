import { configureStore } from '@reduxjs/toolkit';
import searchBarQueryReducer from '../components/home/searchBar/searchBarSlice';

export const store = configureStore({
  reducer: {
    searchQuery: searchBarQueryReducer
  },
});
