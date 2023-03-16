import React from "react";
import { SidebarPost } from "./SidebarPost";


export const Sidebar = (props) =>{

    const friendsPost = props.friends.map(f => <SidebarPost friends = {f.name}/>)

    return (
        <div>
            <h1>Friends</h1>
            <div style = {{display:"flex"}}>{friendsPost}</div>


        </div>
    )
}