import { Post } from "./Post/Post";
import style from './MyPost.module.css'
import { addPostActionCreator,newPostTextActionCreator } from "../../reducer/profileReducer";
export const MyPost = (props) =>{

    const postData = props.post.map(p => <Post message = {p.message}/>)

    const addPost = () =>{
        props.dispatch(addPostActionCreator())

    }

   const newPostText = (e) =>{
    let newPostText = e.target.value;
    props.dispatch(newPostTextActionCreator(newPostText))
   }

    return(
        <div>
            <input type="texAt" 
            value={props.newPostText}
            onChange = {newPostText}
            />
            <button onClick={addPost} >Click</button>
            {postData}
        </div>
    )
}
    