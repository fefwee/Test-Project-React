import React from "react";
import { SidebarPost } from "./SidebarPost";
import { useAppSelector } from "../hook/hook";


export const Sidebar = () =>{

    const users = useAppSelector(state => state.sidebar.users)
    const user = users.map(u=><SidebarPost users = {u.name}/>)
   
    return (
        <div>
            <p>Friends</p>
            <div style = {{display:"flex"}}>{user}</div>


        </div>
    )
}