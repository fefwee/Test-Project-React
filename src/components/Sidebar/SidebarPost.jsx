import React from "react";
import imgPost from '../Dialogs/DialogUsers/user.png'

export const SidebarPost = (props) =>{
    return (
        <div>
            <h1><img src={imgPost} alt="" style={{width:'50px'}}/>{props.friends}</h1>
        </div>
    )
}