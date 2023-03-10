import React from "react";
import style from './Dialog.module.css'
import { DialogMessages } from "./DialogMessage/DialogMessages";
import { DialogUsers } from "./DialogUsers/DialogUsers";

export const Dialog = (props) =>{
 

   
    const messageData = props.name.map(message => <DialogMessages messages = {message.messages}/>)
    const usersData = props.users.map(user => <DialogUsers name = {user.name}/> )



    return (

        <div className={style.dialog_users}>
            <div className={style.users}>
             {usersData}

           </div>
           <div>
            {messageData}
           </div>

           
        </div>
    )
}