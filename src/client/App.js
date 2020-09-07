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
  const [pathname, setPathname] = useState(false);
  console.log("At Root");

  const pathnames= ['/pending','/approved','/rejected']
  useEffect(()=>{
    (pathnames.includes(window.location.pathname))? setPathname(true) : setPathname(false)
  })

  // const handleAuthentication = (isAuthenticated,data) =>{
  //   setUser(data);
  //   setIsAuthenticated(isAuthenticated);
  // }

  // console.log("App Page", user)
    
  return(
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>                 
          <Route
            exact
            path="/login" 
            render={props => (
              <Login
                {...props}               
                // isAuthenticated={isAuthenticated}
                // user={user}
                // handleAuthentication={handleAuthentication}
              />
            )}
          />
          <Route
            exact
            path="/signup" 
            render={props => (
              <Signup
                {...props} 
                // isAuthenticated={isAuthenticated} 
                // user={user}
              />
)}
          />
          <Route       
            path="/"
            render={props => (
              <Main
                {...props} 
                // isAuthenticated={isAuthenticated} 
                // user={user} 
                // handleAuthentication={handleAuthentication} 
                pathname={pathname} 
              />            
          )}
          />     
        </Switch>
      </AuthContextProvider>
    </BrowserRouter> 
  )
} 