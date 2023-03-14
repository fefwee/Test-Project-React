import React from "react";
import iconUser from '../DialogUsers/user.png'

export const  DialogUsers = (props) =>{

    return(
        <div>
            <p><img src={iconUser} alt=""  style={{width:'50px',verticalAlign:'middle'}}/>{props.name} </p>
        </div>
    )
}