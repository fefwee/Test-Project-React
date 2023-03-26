import React from "react";
import ReactDOM  from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./components/State/State";

const renderEntireThree = () =>{
    ReactDOM.render(
        <BrowserRouter>
         <App state = {store.getState()}  dispatch = {store.dispatch.bind(store)} 
                              />
         </BrowserRouter>,
        document.getElementById('root')
    );
}


renderEntireThree()
store.subscribe(renderEntireThree)

