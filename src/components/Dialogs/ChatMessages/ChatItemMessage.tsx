import IconChat from '../ChatMessages/user.png'


interface ChatItem {
    text:string
}



export const ChatItemMessage:React.FunctionComponent<ChatItem> = ({text}) =>{
    
    return(
        <div>
           <p><img src={IconChat} style={{width:'50px',verticalAlign:'middle'}}/>{text}</p> 
        </div>
    )
}