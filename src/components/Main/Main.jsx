import React from "react";
import { MyPost } from "../MyPost/MyPost";
import style from './Main.module.css'

export const Main = () =>{
     return (
        <div className={style.main}>
            <MyPost/>
        </div>
     )
}