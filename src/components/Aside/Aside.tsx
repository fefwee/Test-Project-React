import React from "react";
import style from './Aside.module.css'
import {Link } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";

export const Aside:React.FC = () =>{
     return (
        <div className={style.aside}>
            <nav>
                <ul>
                    <li><Link to="/">Profile</Link></li>
                    <li><Link to="/dialog">Dialog</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <Sidebar/>
                </ul>
            </nav>
        </div>
     )
}