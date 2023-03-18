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

   const newPostText = () =>{
    let text = newPostElement.current.value;
    props.updatePostText(text)
   }

   

    return(
        <div>
            <input type="text" 
            value={props.newPostText}
            ref={newPostElement} 
            onChange = {newPostText}
            />
            <button onClick={addPost} >Click</button>
            {postData}
        </div>
    )
}
