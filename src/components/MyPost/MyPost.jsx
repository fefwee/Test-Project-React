import React, { createRef, useState } from "react";
import { Post } from "./Post/Post";
import style from './MyPost.module.css'

export const MyPost = (props) =>{

    const postData = props.post.map(p => <Post message = {p.message}/>)

    const newPostElement = createRef();
    const addPost = () =>{
        let text = newPostElement.current.value;
        props.addPost(text)

    }
   

   

    return(
        <div>
            <input type="text" 
            ref={newPostElement} 
            />
            <button onClick={addPost}>Click</button>
            {postData}
        </div>
    )
}
