import React from "react";
import logo from  './logo_header.png';
import style from './Header.module.css'


export const Header = () =>{

    return(
        <div className={style.header}>
        <img src={logo} alt="Логотип" className ={style.logoIcon} />
        </div>
        
    )
}