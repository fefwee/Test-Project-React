import { Header } from './components/Header/Header';
import style from './App.module.css'
import { Aside } from './components/Aside/Aside';
import { Routing } from './Routing/Routing';


export const App = (props) => {
    
    return(
        <div className={style.wrapper}>
        <header>
            <Header/>
        </header>
        <aside >
            <Aside friends = {props.state}/>
        </aside>
        <div className={style.wrapper__content}>
            <Routing  posts = {props.state}
             dispatch= {props. dispatch}
            />
         </div>
        </div>
         
    )
}
