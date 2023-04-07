import React from "react";
import imgPost from '../Dialogs/DialogUsers/user.png'

export const SidebarPost = ({users}) =>{
    return (
        <div>
            <p><img src={imgPost} alt="" style={{width:'50px'}}/>{users}</p>
        </div>
    )
}