import React, { createRef } from "react";
import style from './ChatMessages.module.css'

export const ChatMessages = (props) =>{

    const textElement = createRef();

    const changeChatMessages = () =>{
        const text = textElement.current.value;
        props.changeTextMessages(text)
    }

    const createMessage = () =>{
        let textMessage = textElement.current.value;
        props.addMessage(textMessage)

    }
    return (
        <div>
            <input type="text" placeholder="Введите сообщение.." 
            ref={textElement} 
            className={style.input}
            value = {props.messageUsers}
            onChange = {changeChatMessages}
            />
            <button className={style.button} onClick = {createMessage}>Отправить</button>
        </div>
    )
}