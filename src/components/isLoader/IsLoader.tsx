import { useAppSelector } from "../hook/hook";
import imgLoader from '../isLoader/loader.png'
import style from '../isLoader/sytle/IsLoader.module.css'



export const IsLoader: React.FC= () => {

    const IsLoader = useAppSelector(state => state.users.isLoader)

    return (
    
            <div className={style.isLoader}>
        {IsLoader === true ? <div><img src={imgLoader} alt="loader" /></div>:null}
            </div>
        
    )
}