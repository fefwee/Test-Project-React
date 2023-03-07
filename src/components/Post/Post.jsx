import React from "react";
import style from './Post.module.css'


export const Post = (props) =>{

    return(
        <div>
            <h1>{props.message}</h1>
        </div>
    )
}