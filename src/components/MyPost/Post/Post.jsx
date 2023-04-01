import React from "react";
import { useSelector } from "react-redux";
import style from './Post.module.css'


export const Post = (props) =>{
    const newText = useSelector((state)=> state.profilePage.newPostText)

    return(
        <div>
           <p>{newText}</p>
        </div>
    )
}