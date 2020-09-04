import React from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Main from "./screens/App";
import Login from "./screens/Login";
import Signup from "./screens/Signup";


export default function App (){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>    
  )
} 