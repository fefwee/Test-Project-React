import React from "react";
import style from './Aside.module.css'
import {Link } from "react-router-dom";

export const Aside = () =>{
     return (
        <div className={style.aside}>
            <nav>
                <ul>
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/dialog">Dialog</Link></li>
                    <li><Link to="/content">Content</Link></li>
                    <li><Link to="/news">News</Link></li>
                </ul>
            </nav>
        </div>
     )
}