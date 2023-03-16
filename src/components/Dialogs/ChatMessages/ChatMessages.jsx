import React from "react";
import style from './ChatMessages.module.css'

export const ChatMessages = () =>{
    return (
        <div>
            <input type="text" placeholder="Введите сообщение.."  className={style.input}  />
            <button className={style.button}>Отправить</button>
        </div>
    )
}