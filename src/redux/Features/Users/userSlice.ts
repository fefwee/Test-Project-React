import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"

/* { id: 1, logo:'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg', name: 'John', status: 'status', followed: false, location: { country: 'russia', city: 'moscow' } },
        { id: 2, logo:'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg', name: 'William', status: 'status', followed: true, location: { country: 'usa', city: 'moscow' } },
        { id: 3, logo:'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg', name: 'Jack', status: 'status', followed: true, location: { country: 'canada', city: 'moscow' } },
        { id: 4, logo:'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg', name: 'Solo', status: 'status', followed: false, location: { country: 'mexico', city: 'moscow' } },
 */
interface photosUser {
    small:null
    large:null
}
interface usersArr {
    name:string
    id:number
    uniqueUrlName:null
    photos?:photosUser
    status:null
    followed:boolean
}

interface usersState {
    users:usersArr[]
    loading:boolean
    error:null | string
}


const initialState:usersState = {
    users: [],
    loading:false,
    error:null
}


export const fetchGetUsers = createAsyncThunk<usersArr[],undefined,{rejectValue:string}>(
    'users/fetchGetUsers',
    async function (_,{rejectWithValue}) {
        const response  = await fetch('https://social-network.samuraijs.com/api/1.0/users')
       
        if(!response.ok){
            return rejectWithValue('server down')
        }
        
        const data = await response.json()
       

        return data
          
    }
)



export const userSlice= createSlice({
    name: 'users',
    initialState,
    reducers: {
         follow: (state, actions) => {
            state.users.map(u => {
                if (u.id === actions.payload) {
                    u.followed = false
                }
            })
        },
        unfollow: (state, actions) => {
            state.users.map(u => {
                if (u.id === actions.payload) {
                    u.followed = true
                }
            })
        } 
    },
    extraReducers:(builder) =>{
        builder.
        addCase(fetchGetUsers.pending,(state) =>{
            state.loading = true
            state.error = null
        })
        .addCase(fetchGetUsers.fulfilled,(state,action) => {
            state.loading = false
            state.users = action.payload
        })
    }


}

)

export const { follow, unfollow } = userSlice.actions 
export default userSlice.reducer


