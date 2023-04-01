import {configureStore} from '@reduxjs/toolkit'
import profileSlice from './Features/profilePage/profileSlice';



export const store = configureStore({
    reducer:{
        profilePage:profileSlice
    }
});
    