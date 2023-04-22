import React from "react";
import style from './MainImg.module.css'
import log from '../Header/logo_header.png'


export const MainImg:React.FC = () =>{

    return(
       <div className={style.back_img}>
        <img src={log} alt="" />
       </div>
    )
}