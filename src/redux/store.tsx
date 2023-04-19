import {configureStore} from '@reduxjs/toolkit'
import profileSlice from './Features/profilePage/profileSlice';
import dialogPageSlice from './Features/dialogPage/dialogPageSlice';
import sideBar  from './Features/sideBar/sideBarSlice';
import userSlice from './Features/Users/userSlice';



const store = configureStore({
    reducer:{
        profilePage:profileSlice,
        dialogPage:dialogPageSlice,
        sidebar:sideBar,
        users:userSlice
    },
    devTools:true
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
    