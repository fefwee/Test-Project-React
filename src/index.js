import React from "react";
import ReactDOM  from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

const posts = [ 
  {id:1,message:'one'},
  {id:2,message:'second'},
  {id:3,message:'three'},
  {id:4,message:'four'},
  {id:5,message:'five'},
]

ReactDOM.render(
    <BrowserRouter>
     <App posts = {posts} />
     </BrowserRouter>
   ,
    document.getElementById('root')
);