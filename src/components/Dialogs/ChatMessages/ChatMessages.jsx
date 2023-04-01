import style from './ChatMessages.module.css'
import { changeTextMessageActionCreator,addMessageActionCreator } from '../../../reducer/dialogReducer';

export const ChatMessages = (props) =>{


   /*  const changeChatMessages = (e) =>{
        let text = e.target.value;
        console.log(e.target.value);
        props.dispatch(changeTextMessageActionCreator(text)) 
   
    }

    const createMessage = () =>{
        props.dispatch(addMessageActionCreator())
 */
    
    return (
        <div>
            <input type="text" placeholder="Введите сообщение.." 
            className={style.input}
            />
            <button className={style.button}>Отправить</button>
        </div>
    )
}
