import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {apiSlice} from './slices/apiSlice'
import authSliceReducer from './slices/authSlice';
import darkSliceReducer from './slices/darkSlice';

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        dark: darkSliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;