import style from './Post.module.css'

interface PostMessage {
    message:string
}
export const Post:React.FunctionComponent<PostMessage> = ({message}) =>{

  

    return(
            <li>{message}</li>
    )
}