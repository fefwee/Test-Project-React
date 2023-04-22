import { Header } from './components/Header/Header';
import style from './App.module.css'
import { Aside } from './components/Aside/Aside';
import { Routing } from './Routing/Routing';


export const App:React.FC = () => {
    
    return(
        <div className={style.wrapper}>
        <header>
            <Header/>
        </header>
        <aside >
            <Aside/>
        </aside>
        <div className={style.wrapper__content}>
            <Routing/>
         </div>
        </div>
         
    )
}
