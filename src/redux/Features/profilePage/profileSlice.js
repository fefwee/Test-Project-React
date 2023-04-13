import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profilePage: []
}


export const profileSlice = createSlice({
    name:'profileSlice',
    initialState,
    reducers:{
        addPost: (state,action) => {
            const post = {
                id:1,
                message:action.payload
            }
            state.profilePage.push(post)
        }
    }

})


export const {setFirstValue,addPost} = profileSlice.actions;
export default profileSlice.reducer

