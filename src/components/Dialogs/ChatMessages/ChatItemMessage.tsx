import IconChat from '../ChatMessages/user.png'

interface User {
    users:{
        id:number,
        name:string,
        status:string,
        followed:boolean,
        location:{
            country:string,
            city:string
        }
    }
}


export const ChatItemMessage = (users: User) =>{

    return(
        <div>
           <p><img src={IconChat} style={{width:'50px',verticalAlign:'middle'}}/>{text}</p> 
        </div>
    )
}