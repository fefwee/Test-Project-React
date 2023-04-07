import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {name:'Anna'},
        {name:'Ivan'},
        {name:'Row'},
        {name:'Sele'},
      ],
}


export const sideBar = createSlice({
    name:'sidebar',
    initialState,
    reducers:{

    }
})

export default sideBar.reducer