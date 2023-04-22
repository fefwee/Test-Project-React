import { Post } from "./Post/Post";
import style from './MyPost.module.css'
import { useAppDispatch,useAppSelector } from "../hook/hook";
import { addPost} from "../../redux/Features/profilePage/profileSlice";
import { useState } from "react";


export const MyPost:React.FC= () =>{

    const dispatch = useAppDispatch()

    const [post,setPost] = useState('')

    const onSubmit = () =>{
        dispatch(addPost(post))
    }
  
    const messagePost = useAppSelector(state => state.profilePage.profilePage)
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
    