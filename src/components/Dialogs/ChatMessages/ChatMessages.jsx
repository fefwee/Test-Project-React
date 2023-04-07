import style from './ChatMessages.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTextMessage } from '../../../redux/Features/dialogPage/dialogPageSlice';
import { ChatItemMessage } from './ChatItemMessage';

export const ChatMessages = () => {

    const dispatch = useDispatch()

   const [message,setMessage] = useState('')

   const addNewTextMessage = () => {
    dispatch(addTextMessage(message))
   }

   const text = useSelector(state => state.dialogPage.dialogPage)
   const itemText = text.map(item => <ChatItemMessage text = {item.message}/>)

    return (
        <div> 
            <input type="text" placeholder="Введите сообщение.." 
            value={message}
            className={style.input}
            onChange={e=>setMessage(e.target.value)}
            />
            <button className={style.button} onClick={addNewTextMessage}>Отправить</button>
            <div>{itemText}</div>
        </div>
    )
}
