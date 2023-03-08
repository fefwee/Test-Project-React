import React from "react";
import { MainImg } from "../MainImg/MainImg";
import { MyPost } from "../MyPost/MyPost";
import style from './Main.module.css'

export const Profile = () =>{
     return (
        <div className={style.main}>
            <MainImg/>
            <MyPost/>
        </div>
     )
}