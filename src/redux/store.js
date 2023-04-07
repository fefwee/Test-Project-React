import {configureStore} from '@reduxjs/toolkit'
import profileSlice from './Features/profilePage/profileSlice';
import dialogPageSlice from './Features/dialogPage/dialogPageSlice';
import sideBar  from './Features/sideBar/sideBarSlice';



export const store = configureStore({
    reducer:{
        profilePage:profileSlice,
        dialogPage:dialogPageSlice,
        sidebar:sideBar
    }
});
    
    window.store = store;