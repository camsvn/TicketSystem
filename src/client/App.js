import React, {useState, useEffect} from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Main from "./screens/Homepage";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

export default function App (){
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/api/users/authchecker')
    .then((res)=> {
      setUser(res.data)
      setIsAuthenticated(true)
    })
    .catch((err)=>{
      setUser(null)
      setIsAuthenticated(false)
    })
  }, [])

  const handleAuthentication = (isAuthenticated,data) =>{
    setUser(data);
    setIsAuthenticated(isAuthenticated);
  }
  
  return(
    <BrowserRouter>
      <Switch>        
        <Route
          exact
          path="/login" 
          render={props => (
            <Login
              {...props}               
              isAuthenticated={isAuthenticated}
              user={user}
              handleAuthentication={handleAuthentication}
            />
)}
        />
        <Route
          exact
          path="/signup" 
          render={props => (<Signup {...props} isAuthenticated={isAuthenticated} user={user} />)}
        />        
        <Route
          path="/"
          render={props => (
            <Main {...props} isAuthenticated={isAuthenticated} user={user} handleAuthentication={handleAuthentication} />            
          )}
        />     
      </Switch>
    </BrowserRouter>    
  )
} 