import { Post } from "./Post/Post";
import style from './MyPost.module.css'
import { useDispatch, useSelector } from "react-redux";
import { addPost} from "../../redux/Features/profilePage/profileSlice";
import { useState } from "react";


export const MyPost = () =>{

    const dispatch = useDispatch()

    const [post,setPost] = useState('')

    const onSubmit = () =>{
        dispatch(addPost(post))
    }
  
    const messagePost = useSelector(state => state.profilePage.profilePage)
    const message = messagePost.map(m=><Post message = {m.message}/>)

    return(
        <div>
            <input type="text" 
            value={post}
            onChange={e=>setPost(e.target.value)}
            />
            <button onClick={() => onSubmit()}>Click</button>
            <ul>
                {message}
            </ul>
        </div>
    )
}
    