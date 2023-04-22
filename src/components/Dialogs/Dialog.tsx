import React from "react";
import style from './Dialog.module.css'
import { DialogMessages } from "./DialogMessage/DialogMessages";
import { DialogUsers } from "./DialogUsers/DialogUsers";

export const Dialog:React.FC = () =>{



    return (
        <>
        <div className={style.dialog_users}>
            <div className={style.users}>
            <DialogUsers/>
           </div>
           <div >
           <DialogMessages/>
           </div> 
        </div>

        </>
    )
}