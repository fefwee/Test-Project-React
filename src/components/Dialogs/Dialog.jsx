import React from "react";
import style from './Dialog.module.css'
import { DialogMessages } from "./DialogMessages";
import { DialogUsers } from "./DialogUsers";

export const Dialog = () =>{
    return (
        <div className={style.dialog_users}>
            <div className={style.users}>
                <div>
                 <DialogUsers id = '1' name = 'Ivan'/>
                 <DialogUsers name = 'Ivan'/>
                 <DialogUsers name = 'Ivan'/>
                 <DialogUsers name = 'Ivan'/>
                </div>
            </div>
            <div className={style.dialogs}>
            <DialogMessages messages = 'one messages'/>
            <DialogMessages messages = 'one messages'/>
            <DialogMessages messages = 'one messages'/>
            <DialogMessages messages = 'one messages'/>
            </div>
        </div>
    )
}