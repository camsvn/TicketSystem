import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Main from "./screens/App";
import Login from "./screens/Login";
import Signup from "./screens/Signup";


export default function App (){
  return(
    <BrowserRouter>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </BrowserRouter>    
  )
} 