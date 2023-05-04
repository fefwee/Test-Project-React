import { useAppDispatch } from "../hook/hook"
import { follow,unfollow } from "../../redux/Features/Users/userSlice"


interface photosUser {
    small:null
    large:null
}
interface UserItemProps {
    name:string
    id:number
    uniqueUrlName:null
    photos?: photosUser
    status:null
    followed:boolean

}
export const UserItem: React.FC<UserItemProps> =
    ({ id, name, uniqueUrlName,followed }) => {


        const dispatch = useAppDispatch();

        const followUser = () => {
            dispatch(follow(id))
        }
        const unfollowUser = () => {
            dispatch(unfollow(id))
        }   

        return (
            <div style={{
                margin: '10px', display: 'flex', justifyContent: 'space-between'
                , borderRadius: '10px', border: '1px solid gray', padding: '10px', width: '90%'
            }}>
                { <div>
                    {<div>{followed ? <button  onClick={followUser} >follow</button>
                        : <button onClick={unfollowUser} >unfollow</button>}</div>}
                </div> }
                <div>
                    <h1>{name}</h1>
                    <p>{uniqueUrlName}</p>
                    <p>{followed}</p>
                    <p>{id}</p>

                </div>

            </div>
        )
    }