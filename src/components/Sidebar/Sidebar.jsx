import React from "react";
import { SidebarPost } from "./SidebarPost";
import { useSelector } from "react-redux";


export const Sidebar = () =>{

    const users = useSelector(state => state.sidebar.users)
    const user = users.map(u=><SidebarPost users = {u.name}/>)
   
    return (
        <div>
            <h1>Friends</h1>
            <div style = {{display:"flex"}}>{user}</div>


        </div>
    )
}