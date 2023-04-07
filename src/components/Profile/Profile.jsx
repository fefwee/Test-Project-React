import React from "react";
import { useSelector } from "react-redux";
import { MainImg } from "../MainImg/MainImg";
import { MyPost } from "../MyPost/MyPost";
import style from './Main.module.css'
import { Post } from "../MyPost/Post/Post";

export const Profile = () =>{

   
     return (
        <div className={style.main}>
            <MainImg/>
            <MyPost/>
            <Post/>
        </div>
     )
}