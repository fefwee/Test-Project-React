import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    dialogPage:[]
}

export const dialogPage = createSlice({
    name:'dialogPage',
    initialState,
    reducers:{
        addTextMessage: (state,action) => {
          const message = {
            id:1,
            message:action.payload
          }
            state.dialogPage.push(message)
        }
    }
    
})


 export const {addTextMessage}  = dialogPage.actions
 export default dialogPage.reducer
