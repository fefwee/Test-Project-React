import { state, subscribe} from "./components/State/State";
import React from "react";
import ReactDOM  from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { addMessage, addPost, changeTextMessages, updatePostText } from "./components/State/State";

const renderEntireThree = () =>{
    ReactDOM.render(
        <BrowserRouter>
         <App state = {state} addPost = {addPost} 
                              updatePostText = {updatePostText} 
                              changeTextMessages = {changeTextMessages}
                              addMessage = {addMessage}
                              />
         </BrowserRouter>,
        document.getElementById('root')
    );
}


renderEntireThree(state)

subscribe(renderEntireThree)

