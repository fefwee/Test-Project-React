import React from "react";
import imgPost from '../Dialogs/ChatMessages/user.png'

interface SidePostText {
    name:string
}

export const SidebarPost:React.FC<SidePostText> = ({name}) =>{

    return (
        <div style={{marginTop:'20px'}}>
            <p><img src={imgPost} alt="" style={{width:'50px',verticalAlign:'middle'}}/>{name}</p>
        </div>
    )
}