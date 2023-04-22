import style from './Post.module.css'

interface PostMessage {
    message:string
}
export const Post:React.FC<PostMessage> = ({message}) =>{

  

    return(
            <li>{message}</li>
    )
}