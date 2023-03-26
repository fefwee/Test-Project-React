import React, { createRef } from "react";
import style from './ChatMessages.module.css'
import { addMessageActionCreator, changeTextMessageActionCreator} from "../../State/State";

export const ChatMessages = (props) =>{

    const textElement = createRef();

    const changeChatMessages = () =>{
        let text = textElement.current.value;
        props.dispatch(changeTextMessageActionCreator(text))
    }

    const createMessage = () =>{
        props.dispatch(addMessageActionCreator())

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