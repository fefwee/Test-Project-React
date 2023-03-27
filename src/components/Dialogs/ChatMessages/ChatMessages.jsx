import style from './ChatMessages.module.css'
import { addMessageActionCreator, changeTextMessageActionCreator} from "../../State/State";

export const ChatMessages = (props) =>{


    const changeChatMessages = (e) =>{
        let text = e.target.value;
        console.log(e.target.value);
        props.dispatch(changeTextMessageActionCreator(text))
    }

    const createMessage = () =>{
        props.dispatch(addMessageActionCreator())

    }
    return (
        <div>
            <input type="text" placeholder="Введите сообщение.." 
            className={style.input}
            value = {props.messageUsers}
            onChange = {changeChatMessages}
            />
            <button className={style.button} onClick = {createMessage}>Отправить</button>
        </div>
    )
}