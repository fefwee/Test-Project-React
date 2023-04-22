import IconChat from '../ChatMessages/user.png'


interface ChatItem {
    text:string
}



export const ChatItemMessage:React.FC<ChatItem> = ({text}) =>{
    
    return(
        <div>
           <p><img src={IconChat} style={{width:'50px',verticalAlign:'middle'}}/>{text}</p> 
        </div>
    )
}