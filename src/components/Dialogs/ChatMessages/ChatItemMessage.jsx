import IconChat from '../ChatMessages/user.png'


export const ChatItemMessage = ({text}) =>{

    return(
        <div>
           <p><img src={IconChat} style={{width:'50px',verticalAlign:'middle'}}/>{text}</p> 
        </div>
    )
}