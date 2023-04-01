import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newPostText: ''
}


export const profileSlice = createSlice({
    name:'profileSlice',
    initialState,
    reducers:{
        setFirstValue:(state,action)=>{
            state.newPostText = action.payload
        }
    }

})


export const {setFirstValue} = profileSlice.actions;
export default profileSlice.reducer

