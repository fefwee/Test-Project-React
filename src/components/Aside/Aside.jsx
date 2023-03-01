import React from "react";
import style from './Aside.module.css'

export const Aside = () =>{
     return (
        <div className={style.aside}>
            <nav>
                <ul>
                    <li>Messages</li>
                    <li>Music</li>
                    <li>Content</li>
                    <li>News</li>
                </ul>
            </nav>
        </div>
     )
}