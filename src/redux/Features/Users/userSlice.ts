import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit"


interface photosUser {
    small: null
    large: null
}
interface usersArr {
    name: string
    id: number
    uniqueUrlName: null
    photos?: photosUser
    status: null
    followed: boolean
}

interface usersState {
    users: usersArr[]
    error: null | string
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isLoader:boolean
}


const initialState: usersState = {
    users: [],
    error: null,
    pageSize:1,
    totalUsersCount:10,
    currentPage:1,
    isLoader:true
}


export const fetchGetUsers = createAsyncThunk<usersArr[], undefined, { rejectValue: string }>(
    'users/fetchGetUsers',
    async function (_, { rejectWithValue }) {
        const response = await fetch(`https://social-network.samuraijs.com/api/1.0/users?count = 10`)

        if (!response.ok) {
            return rejectWithValue('server down')
        }

        const data = await response.json()


        return data.items

    }
)





export const userSlice = createSlice({
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
        },
    },
   
    extraReducers: (builder) => {
        builder.
            addCase(fetchGetUsers.pending, (state) => {
                state.error = null
                state.isLoader = true
            })
            .addCase(fetchGetUsers.fulfilled, (state, action) => {
                state.isLoader = false
                state.users = action.payload
            })
    
         
    }


}

)

export const { follow, unfollow } = userSlice.actions
export default userSlice.reducer


