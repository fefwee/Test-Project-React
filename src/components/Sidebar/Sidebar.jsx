import React from "react";
import { SidebarPost } from "./SidebarPost";
import style from './Sidebar.module.css'


export const Sidebar = (props) =>{

    const friendsPost = props.friends.map(f => <SidebarPost friends = {f.name}/>)

    return (
        <div>
            <h1>Friends</h1>
            <div className={style.friends}>{friendsPost}</div>


        </div>
    )
}