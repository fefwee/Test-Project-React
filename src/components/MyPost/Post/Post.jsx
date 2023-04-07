import React from "react";
import { useSelector } from "react-redux";
import style from './Post.module.css'


export const Post = ({message}) =>{

  

    return(
        <div>
            <li>{message}</li>
        </div>
    )
}