import React from "react";
import style from './Users.module.css'
import { UserItem } from "./UsersItem";
import { useAppSelector } from "../hook/hook";



export const Users = () => {

    const users = useAppSelector((state) => state.users.users)
    const userPost = users.map(u => <UserItem 
        id={u.id}
        name={u.name}
        status={u.status}
        followed = {u.followed}
    />)
    return (
        <div>
            {userPost}
        </div>
    )
}