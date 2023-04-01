import { Post } from "./Post/Post";
import style from './MyPost.module.css'
import { addPostActionCreator,newPostTextActionCreator } from "../../reducer/profileReducer";
import { useDispatch } from "react-redux";
import { setFirstValue } from "../../redux/Features/profilePage/profileSlice";


export const MyPost = (props) =>{

    const dispatch = useDispatch()



   const newPostText = (e) =>{
    let newPostText = e.target.value;
    dispatch(setFirstValue(newPostText))
   }

    return(
        <div>
            <input type="text" 
            onChange = {newPostText}
            />
            <button>Click</button>
            <Post/>
        </div>
    )
}
    