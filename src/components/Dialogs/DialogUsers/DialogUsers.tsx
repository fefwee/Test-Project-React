import React from "react";
import iconUser from '../ChatMessages/user.png'

export const  DialogUsers:React.FC = () =>{

    return(
        <div>
            <p><img src={iconUser} alt=""  style={{width:'50px',verticalAlign:'middle'}}/>Users </p>
        </div>
    )
}