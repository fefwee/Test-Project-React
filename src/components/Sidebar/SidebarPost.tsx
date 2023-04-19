import React from "react";
import imgPost from '../Dialogs/ChatMessages/user.png'

interface SidePostText {
    users:string
}

export const SidebarPost:React.FunctionComponent<SidePostText> = ({users}) =>{
    return (
        <div>
            <p><img src={imgPost} alt="" style={{width:'50px'}}/>{users}</p>
        </div>
    )
}