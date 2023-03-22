import React from "react";

import {Routes,Route} from 'react-router-dom';
import {Profile } from "../components/Profile/Profile";
import {Dialog} from '../components/Dialogs/Dialog'
import {Content} from '../components/Content/Content'
import {News} from '../components/News/News'
import { addPost } from "../components/State/State";


export const Routing  = (props) =>{
    return (
        <>
        <Routes>
            <Route path='/' element = {<Profile state = {props.posts.profilePage} 
                                                addPost = {props.addPost} 
                                                newPostText = {props.posts.profilePage}
                                                updatePostText = {props.updatePostText}
                                                />}/>
           <Route path='/dialog' element = {<Dialog state = {props.posts.dialogPage} 
                                                    changeTextMessages = {props.changeTextMessages}
                                                    addMessage = {props.addMessage}
                                                    />}/>
            <Route path='/content' element = {<Content/>}/>
            <Route path='/news' element = {<News/>}/>
           </Routes>
        </>
    )
}