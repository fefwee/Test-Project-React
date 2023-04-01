import React from "react";
import messageIcon from '../DialogUsers/user.png'

export const  DialogMessages = (props) =>{

    return(
        <div>
                <p><img src={messageIcon} alt="" style={{width:'50px',verticalAlign:'middle'}}/>Messages</p>
        </div>
    )
}