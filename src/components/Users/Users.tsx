import React from "react";
import { useEffect } from 'react'
import { fetchGetUsers } from "../../redux/Features/Users/userSlice"
import { useAppDispatch } from "../hook/hook"
import style from './Users.module.css'
import { UserItem } from "./UsersItem";
import { useAppSelector } from "../hook/hook";



export const Users: React.FC = () => {

    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(fetchGetUsers());
    }, [dispatch])
    const users = useAppSelector((state) => state.users.users)
    
    
    return (
        <div>
            
            {users.map(u => 
            <UserItem
                id={u.id}
                name={u.name}
                uniqueUrlName={u.uniqueUrlName}
                status={u.status}
                followed={u.followed}
                photos={u.photos}
            />)
            }
        </div>
    )
}