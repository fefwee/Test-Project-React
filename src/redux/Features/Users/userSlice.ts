import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface UserData {
    id: number
    name: string
    status: string
    followed: boolean
    location: {
        country: string
        city: string

    }

}

interface IInitialState {
    users:UserData
}



const initialState= {
    users: [
        { id: 1, name: 'one', status: 'status', followed: false, location: { coutry: 'russia', city: 'moscow' } },
        { id: 2, name: 'two', status: 'status', followed: true, location: { coutry: 'usa', city: 'moscow' } },
        { id: 3, name: 'three', status: 'status', followed: true, location: { coutry: 'canada', city: 'moscow' } },
        { id: 4, name: 'four', status: 'status', followed: false, location: { coutry: 'mexico', city: 'moscow' } },

    ]
}



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
        }
    },


}

)

export const { follow, unfollow } = userSlice.actions
export default userSlice.reducer