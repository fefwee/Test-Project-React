import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type message = {
  message:string
}

type messageState = {
  messagePage:message[]
}

const initialState:messageState = {
  messagePage:[]
}
export const dialogPage = createSlice({
    name:'dialogpage',
    initialState,
    reducers:{
        addTextMessage: (state,action:PayloadAction<string> ) => {
            state.messagePage.push({
              message:action.payload
            })
        }
    }
    
})


 export const {addTextMessage}  = dialogPage.actions
 export default dialogPage.reducer
