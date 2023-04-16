import { useDispatch } from "react-redux"
import { follow,unfollow } from "../../redux/Features/Users/userSlice"

export const UserItem = ({id,name,status,followed}) => {

    const dispatch = useDispatch()

    const followUser = ()=>{
        dispatch(follow(id))
    }
    const unfollowUser = () => {
        dispatch(unfollow(id))
    } 
 


    return (
        <div>
            <h1>{id} {name} {status}</h1>
            {followed ? <button onClick={followUser}>follow</button>:<button onClick={unfollowUser}>unfollow</button>}
        </div>
    )
}