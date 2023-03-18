import React from "react";
import ReactDOM  from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { addPost, updatePostText } from "./components/State/State";

export const renderEntireThree = (state) =>{
    ReactDOM.render(
        <BrowserRouter>
         <App state = {state} addPost = {addPost} updatePostText = {updatePostText} />
         </BrowserRouter>,
        document.getElementById('root')
    );
}
