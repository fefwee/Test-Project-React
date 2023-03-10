import React from "react";
import { Post } from "./Post/Post";
import style from './MyPost.module.css'

export const MyPost = (props) =>{


    const postData = props.posts.map(p => <Post message = {p.message}/>)
    return(
        <div>
            {postData}
        </div>
    )
}
