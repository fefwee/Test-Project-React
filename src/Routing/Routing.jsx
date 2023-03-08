import React from "react";

import {Routes,Route} from 'react-router-dom';
import {Profile } from "../components/Profile/Profile";
import {Dialog} from '../components/Dialogs/Dialog'
import {Content} from '../components/Content/Content'
import {News} from '../components/News/News'


export const Routing  = () =>{
    return (
        <>
        <Routes>
            <Route path='/' element = {<Profile/>}/>
           <Route path='/dialog' element = {<Dialog/>}/>
            <Route path='/content' element = {<Content/>}/>
            <Route path='/news' element = {<News/>}/>
           </Routes>
        </>
    )
}