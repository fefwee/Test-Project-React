import React from "react";
import {useEffect} from 'react'
import { SidebarPost } from "./SidebarPost";
import { useAppDispatch, useAppSelector } from "../hook/hook";
import { fetchSideBarUsers } from "../../redux/Features/sideBar/sideBarSlice";


export const Sidebar:React.FC = () =>{

    const dispatch = useAppDispatch();

    useEffect(()=>{
    dispatch(fetchSideBarUsers())
    },
    [dispatch]
    )

    
 


    const users = useAppSelector(state => state.sidebar.sideBarUsers)

    const user = users.map(u=><SidebarPost name = {u.name}/>)
   
    return (
        <div>
            <p>Friends</p>
            <div>{user}</div>
        </div>
    )
}