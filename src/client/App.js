import React, {useState, useEffect} from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Main from "./screens/Homepage";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import AuthContextProvider from './contexts/AuthContext';

export default function App (){
  const pathnames= ['/pending','/approved','/rejected']
  const [pathname, setPathname] = useState(false);

  useEffect(()=>{
    (pathnames.includes(window.location.pathname))? setPathname(true) : setPathname(false)
  })
    
  return(
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>                 
          <Route
            exact
            path="/login" 
            render={props => (
              <Login {...props} />
            )}
          />
          <Route
            exact
            path="/signup" 
            render={props => (
              <Signup {...props} />
)}
          />
          <Route       
            path="/"
            render={props => (
              <Main {...props} />            
          )}
          />     
        </Switch>
      </AuthContextProvider>
    </BrowserRouter> 
  )
} 