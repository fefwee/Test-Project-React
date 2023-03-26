import React, { createRef, useState } from "react";
import { Post } from "./Post/Post";
import style from './MyPost.module.css'
import { addPostActionCreator,newPostTextActionCreator } from "../State/State";

export const MyPost = (props) =>{

    const postData = props.post.map(p => <Post message = {p.message}/>)

    const newPostElement = createRef();
    const addPost = () =>{
        props.dispatch(addPostActionCreator())

    }

   const newPostText = () =>{
    let newPostText = newPostElement.current.value;
    props.dispatch(newPostTextActionCreator(newPostText))
   }

    return(
        <div>
            <input type="texAt" 
            value={props.newPostText}
            ref={newPostElement} 
            onChange = {newPostText}
            />
            <button onClick={addPost} >Click</button>
            {postData}
        </div>
    )
}
