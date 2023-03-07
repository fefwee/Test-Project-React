import { Header } from './components/Header/Header';
import style from './App.module.css'
import { Aside } from './components/Aside/Aside';
import { Main } from './components/Main/Main';
import { Dialog } from './components/Dialogs/Dialog';
import {Routes,Route,Link} from 'react-router-dom'


export const App = () => {

    return(
        <div className={style.wrapper}>
        <header>
            <Header/>
        </header>
        <aside >
            <Aside/>
        </aside>
        <div className={style.wrapper__content}>
           <Routes>
            <Route path='/' element = {<Main/>}/>
            <Route path='/dialog' element = {<Dialog/>}/>
           </Routes>
         </div>
        </div>
         
    )
}
