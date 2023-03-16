import React from "react";
import style from './Post.module.css'


export const Post = (props) =>{
    

    return(
        <div>
           <p>{props.message}</p>
        </div>
    )
}