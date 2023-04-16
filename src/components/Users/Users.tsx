import React from "react";
import style from './Users.module.css'
import { useSelector } from "react-redux";
import { UserItem } from "./UsersItem";



export const Users = () => {

    const users = useSelector((state) => state.users.users)
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