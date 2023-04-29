import { createSlice,PayloadAction } from "@reduxjs/toolkit";


type messageProfile = {
    message:string
}
type messageStateProfile = {
    profilePage:messageProfile[]
}
const initialState:messageStateProfile = {
    profilePage: []
}


export const profileSlice = createSlice({
    name:'profileSlice',
    initialState,
    reducers:{
        addPost: (state,action:PayloadAction<string>,id?:string) => {
            const post = {
                id:Date.now(),
                message:action.payload
            }
            state.profilePage.push(post)
        }
    }

})


export const {addPost} = profileSlice.actions;
export default profileSlice.reducer

