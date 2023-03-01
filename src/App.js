import { Header } from './components/Header/Header';
import style from './App.module.css'
import { Aside } from './components/Aside/Aside';
import { Main } from './components/Main/Main';
import { Description } from './components/Description/Description';

export const App = () => {

    return(
        <div className={style.wrapper}>
        <header>
            <Header/>
        </header>
        <aside >
            <Aside/>
        </aside>
        <main >
            <Main/>
            <Description/>
         </main>
        </div>
         
    )
}
