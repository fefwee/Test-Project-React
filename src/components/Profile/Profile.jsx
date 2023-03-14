import React from "react";
import { MainImg } from "../MainImg/MainImg";
import { MyPost } from "../MyPost/MyPost";
import style from './Main.module.css'

export const Profile = (props) =>{
     return (
        <div className={style.main}>
            <MainImg/>
            <MyPost post = {props.state.posts}/>
        </div>
     )
}