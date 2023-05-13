import React from "react";
import { useEffect } from 'react'
import { fetchGetUsers } from "../../redux/Features/Users/userSlice"
import { useAppDispatch } from "../hook/hook"
import style from './Users.module.css'
import { UserItem } from "./UsersItem";
import { useAppSelector } from "../hook/hook";
import { IsLoader } from "../isLoader/IsLoader";




export const Users: React.FC= () => {

    const users = useAppSelector((state) => state.users.users)
    const totalUsersCount = useAppSelector(state => state.users.totalUsersCount)
    const pageSize = useAppSelector(state => state.users.pageSize)
    const pageCount = Math.ceil( totalUsersCount / pageSize);
    const currentPage = useAppSelector(state=>state.users.currentPage)
    

    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(fetchGetUsers());
    }, [dispatch])


    

    const pages:number[] = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

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
            <div>
                {pages.map(p=>{
                    return <span className={currentPage === p ?style.currentPageItems:''}>{p}</span>
                })}
            </div>
            <div><IsLoader/></div>
            
        </div>
    )
}