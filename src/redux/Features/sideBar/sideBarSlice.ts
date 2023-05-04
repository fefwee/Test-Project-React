import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


interface users{
    name: string
 
}

 interface UsersSideBar {
    sideBarUsers:users[]
}
const initialState:UsersSideBar = {
    sideBarUsers: [],
}


export const fetchSideBarUsers = createAsyncThunk <users[],undefined,{rejectValue:string}>(
    'sidebar/fetchSideBarUsers',
    async function (_,{rejectWithValue}) {
        const response = await fetch('https://social-network.samuraijs.com/api/1.0/users')

        if(!response.ok){
            rejectWithValue('error')
        }
        const data = await response.json()

        return data.items
        
    }
)

export const sideBar = createSlice({
    name:'sidebar',
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder.
        addCase(fetchSideBarUsers.fulfilled, (state,action)=>{
            state.sideBarUsers = action.payload
        })
        
    }
})

export default sideBar.reducer